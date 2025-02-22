package com.smartnaukri.jobs.repo;

import java.util.UUID;

import com.smartnaukri.jobs.entity.Job;

import org.springframework.data.jpa.repository.JpaRepository;

/** Job */
public interface JobRepo extends JpaRepository<Job, UUID> {

}
