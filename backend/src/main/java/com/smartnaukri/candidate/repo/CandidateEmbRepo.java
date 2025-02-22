package com.smartnaukri.candidate.repo;

import java.util.UUID;

import com.smartnaukri.candidate.entity.CandidateEmbedding;

import org.springframework.data.jpa.repository.JpaRepository;

/**
  * CandidateEmbedding
 */
public interface CandidateEmbRepo extends JpaRepository<CandidateEmbedding,UUID>{
}
