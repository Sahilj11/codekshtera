package com.smartnaukri.candidate.repo;

import java.util.UUID;

import com.smartnaukri.candidate.entity.Candidate;

import org.springframework.data.jpa.repository.JpaRepository;

/**
  * Candidate,UUID
 */
public interface CandidateRepo extends JpaRepository<Candidate,UUID>{
}
