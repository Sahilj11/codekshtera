package com.smartnaukri.ranking.controller;

import java.util.List;

import com.smartnaukri.ranking.service.EmbeddingService;

import org.springframework.ai.document.Document;
import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class RankingController {

    private final EmbeddingService eService;
    private final OllamaChatModel chatModel;

    @GetMapping(path = "/embed")
    public float[] testEmbed() {
        return eService.embedText("This is a test");
    }

    @GetMapping(path = "/save")
    public void save() {
        eService.savingEmbed();
    }

    @GetMapping(path = "/find")
    public List<Document> find() {
        return eService.findSimilar();
    }

}
