package com.smartnaukri.ranking.service;

import com.smartnaukri.candidate.entity.Candidate;
import com.smartnaukri.jobs.entity.Job;
import com.smartnaukri.ranking.util.CandidateScore;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CandidateRankingService {

    private static final double JD_WEIGHT = 0.4;
    private static final double LOCATION_WEIGHT = 0.15;
    private static final double SKILL_WEIGHT = 0.2;
    private static final double SALARY_WEIGHT = 0.15;
    private static final double EDUCATION_WEIGHT = 0.15;
    private static final double EXPERIENCE_WEIGHT = 0.15;
    private final EmbeddingService embeddingService;

    public List<CandidateScore> rankCandidates(Job job,
            List<Candidate> candidates) {
        List<CandidateScore> scores = new ArrayList<>();

        for (Candidate candidate : candidates) {
            double jdScore = computeTextSimilarity(job.getDescription(), candidate.getResume());
            double skillsScore = computeTextSimilarity(job.getSkillsRequired(), candidate.getSkills());
            double locationScore = computeLocationScore(job.getLocation(), candidate.getLocation());
            double salaryScore = computeSalaryScore(job.getSalary(), candidate.getExpectedSalary());
            double educationScore = computeEducationScore(
                    job.getEducationRequirement(), candidate.getEducation());
            double experienceScore = computeExperienceScore(
                    job.getExperienceRequired(), candidate.getExperience());

            double finalScore = (jdScore * JD_WEIGHT) + (skillsScore * SKILL_WEIGHT) +
                    (locationScore * LOCATION_WEIGHT) +
                    (salaryScore * SALARY_WEIGHT) +
                    (educationScore * EDUCATION_WEIGHT) +
                    (experienceScore * EXPERIENCE_WEIGHT);

            scores.add(new CandidateScore(candidate, finalScore));
        }
        scores.sort(
                Comparator.comparingDouble(CandidateScore::getScore).reversed());
        return scores;
    }

    private double computeTextSimilarity(String jobDesc, String resume) {
        var jobEmbed = embeddingService.embedText(jobDesc);
        var resumeEmbed = embeddingService.embedText(resume);
        return cosineSimilarity(jobEmbed, resumeEmbed);
    }

    private double cosineSimilarity(float[] vectorA, float[] vectorB) {
        double dotProduct = 0.0;
        double normA = 0.0;
        double normB = 0.0;

        for (int i = 0; i < vectorA.length; i++) {
            dotProduct += vectorA[i] * vectorB[i];
            normA += vectorA[i] * vectorA[i];
            normB += vectorB[i] * vectorB[i];
        }

        return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
    }

    // TODO: Find how far a location is from the desired
    private double computeLocationScore(String jobLoc, String candidateLoc) {
        return jobLoc.equalsIgnoreCase(candidateLoc) ? 15 : 5;
    }

    private double computeSalaryScore(double jobSalary, double candidateSalary) {
        if (Math.abs(jobSalary - candidateSalary) <= jobSalary * 0.1)
            return 15;
        if (Math.abs(jobSalary - candidateSalary) <= jobSalary * 0.2)
            return 10;
        return 5;
    }

    private double computeEducationScore(String jobEdu, String candidateEdu) {
        return jobEdu.equalsIgnoreCase(candidateEdu) ? 15 : 7;
    }

    private double computeExperienceScore(int jobExp, int candidateExp) {
        if (candidateExp >= jobExp)
            return 15;
        if (candidateExp >= jobExp - 2)
            return 10;
        return 5;
    }

    // public double getDistanceFromOSM(String jobLocation,
    // String candidateLocation) {
    // String jobCoordinates = getCoordinates(jobLocation);
    // String candidateCoordinates = getCoordinates(candidateLocation);
    //
    // String url = "https://router.project-osrm.org/route/v1/driving/" +
    // jobCoordinates + ";" + candidateCoordinates +
    // "?overview=false";
    //
    // RestTemplate restTemplate = new RestTemplate();
    // String response = restTemplate.getForObject(url, String.class);
    //
    // JSONObject jsonResponse = new JSONObject(response);
    // double distanceInMeters =
    // jsonResponse.getJSONArray("routes").getJSONObject(0).getDouble(
    // "distance");
    //
    // return distanceInMeters / 1000.0; // Convert to km
    // }
    //
    // private String getCoordinates(String location) {
    // String url = "https://nominatim.openstreetmap.org/search?q=" + location
    // +
    // "&format=json";
    // RestTemplate restTemplate = new RestTemplate();
    // String response = restTemplate.getForObject(url, String.class);
    // JSONObject jsonResponse = new JSONArray(response).getJSONObject(0);
    // return jsonResponse.getString("lon") + "," +
    // jsonResponse.getString("lat");
    // }
}
