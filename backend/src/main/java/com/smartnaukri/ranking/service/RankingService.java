package com.smartnaukri.ranking.service;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.document.Document;
import org.springframework.ai.vectorstore.SearchRequest;
import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RankingService {

    private final VectorStore vectorStore;

    public List<Document> search(String query, double threshold, int topK) {
        return vectorStore.similaritySearch(SearchRequest.builder()
                .similarityThreshold(threshold)
                .query(query)
                .topK(topK)
                .build());
    }
    public List<Document> search(String query, double threshold) {
        return vectorStore.similaritySearch(SearchRequest.builder()
                .similarityThreshold(threshold)
                .query(query)
                .topK(10)
                .build());
    }

}
