package com.smartnaukri.jobs.controller;

import com.smartnaukri.candidate.repo.CandidateRepo;
import com.smartnaukri.jobs.dto.JobDto;
import com.smartnaukri.jobs.entity.Job;
import com.smartnaukri.jobs.entity.JobEmbedding;
import com.smartnaukri.jobs.repo.JobEmbedRepo;
import com.smartnaukri.jobs.repo.JobRepo;
import com.smartnaukri.ranking.service.CandidateRankingService;
import com.smartnaukri.ranking.service.EmbeddingService;
import com.smartnaukri.ranking.util.CandidateScore;
import com.smartnaukri.utils.JsonUtil;
import java.util.List;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class JobController {

    private final CandidateRepo caRepo;
    private final CandidateRankingService cRankingService;
    private final EmbeddingService emService;
    private final JobRepo jRepo;
    private final JobEmbedRepo jobEmbedRepo;

    @GetMapping(path = "/jobs/{id}/rank-candidates")
    public List<CandidateScore> rankCandidate(@PathVariable UUID id) {
        System.out.println(id.toString());
        var job = jRepo.findById(id).get();
        System.out.println(job.getId());
        return cRankingService.rankCandidates(job, caRepo.findAll());
    }

    @GetMapping(path = "/jobs")
    public List<Job> getAllJobs() {
        return jRepo.findAll();
    }

    @GetMapping(path = "/jobs/{id}")
    public Job getJob(@PathVariable UUID id) {
        return jRepo.findById(id).get();
    }

    @PostMapping(path = "/jobs")
    public void saveJob(@RequestBody JobDto jobDto) {
        System.out.println(jobDto.description());
        if (jobDto.description() == null || jobDto.description().trim().isEmpty()) {
            throw new IllegalArgumentException(
                    "Job description cannot be null or empty");
        }

        Job newJob = new Job();
        newJob.setTitle(jobDto.title());
        newJob.setDescription(jobDto.description());
        newJob.setLocation(jobDto.location());
        newJob.setSalary(jobDto.salary());
        newJob.setEducationRequirement(jobDto.educationRequirement());
        newJob.setExperienceRequired(jobDto.experienceRequired());
        newJob.setSkillsRequired(
                JsonUtil.convertListToText(jobDto.skillsRequired()));

        jRepo.save(newJob);
        System.out.println(jobDto);
    }
}
