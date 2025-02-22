package com.smartnaukri.candidate.controller;

import java.util.List;
import java.util.UUID;

import com.smartnaukri.candidate.dto.CandidateDto;
import com.smartnaukri.candidate.entity.Candidate;
import com.smartnaukri.candidate.repo.CandidateRepo;
import com.smartnaukri.utils.JsonUtil;

import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class CandidateController {

    private final CandidateRepo cRepo;
    private final OllamaChatModel chatModel;

    @GetMapping(path = "/candidate")
    public List<Candidate> getCandidate() {
        return cRepo.findAll();
    }

    @PostMapping(path = "/candidate")
    @Transactional
    public void save(@RequestBody CandidateDto cDto) {
        var response = chatModel
                .call(cDto.resume() + " Only return projects and experience and nothing else in json format");
        System.out.println(response);
        var candidate = new Candidate();

        candidate.setName(cDto.name());
        candidate.setEmail(cDto.email());
        candidate.setPhone(cDto.phone());
        candidate.setResume(response);
        candidate.setLocation(cDto.location());
        candidate.setSkills(
                JsonUtil.convertListToText(cDto.skills())); // Store as JSONB
        candidate.setEducation(cDto.education());
        candidate.setExpectedSalary(cDto.expectedSalary());
        candidate.setExperience(cDto.experience());
        cRepo.save(candidate);
    }

    @GetMapping(path = "/candidate/{id}")
    public Candidate saveCandidate(@PathVariable UUID id) {
        return cRepo.findById(id).get();
    }
}
