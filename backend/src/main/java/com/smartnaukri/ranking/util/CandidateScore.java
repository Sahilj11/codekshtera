package com.smartnaukri.ranking.util;

import com.smartnaukri.candidate.entity.Candidate;

public class CandidateScore {
    private Candidate candidate;
    private double score;

    public CandidateScore(Candidate candidate, double score) {
        this.candidate = candidate;
        this.score = score;
    }

    public double getScore() {
        return score;
    }

    public Candidate getCandidate() {
        return candidate;
    }
}
