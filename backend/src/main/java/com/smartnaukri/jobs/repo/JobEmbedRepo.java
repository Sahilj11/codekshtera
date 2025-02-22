package com.smartnaukri.jobs.repo;

import com.smartnaukri.jobs.entity.JobEmbedding;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

/** JobEmbedding */
public interface JobEmbedRepo extends JpaRepository<JobEmbedding, UUID> {
}
