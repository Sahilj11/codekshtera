package com.smartnaukri.ranking.service;

import java.util.List;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.document.Document;
import org.springframework.ai.ollama.OllamaEmbeddingModel;
import org.springframework.ai.vectorstore.SearchRequest;
import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmbeddingService {

    private final OllamaEmbeddingModel olEmbeddingModel;
    private final VectorStore vectorStore;

    public float[] embedText(String text) {
        return olEmbeddingModel.embed(text);
    }

    public void savingEmbed() {
        List<Document> documents = List.of(
                new Document("Spring AI rocks!! Spring AI rocks!! Spring AI rocks!! "
                        + "Spring AI rocks!! Spring AI"
                        + " rocks!!",
                        Map.of("meta1", "meta1")),
                new Document("The World is Big and Salvation Lurks Around the Corner"),
                new Document("You walk forward facing the past and you turn back "
                        + "toward the future.",
                        Map.of("meta2", "meta2")));
        vectorStore.add(documents);
    }

    public List<Document> findSimilar() {
        return vectorStore.similaritySearch(
                SearchRequest.builder().similarityThreshold(0.5).query("Spring Ai").topK(3).build());
    }
}
