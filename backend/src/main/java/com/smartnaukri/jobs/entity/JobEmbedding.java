package com.smartnaukri.jobs.entity;

import java.util.UUID;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "job_embedding")
public class JobEmbedding {

    @Id
    @Column(updatable = false,insertable = false)
    @GeneratedValue
    private UUID id;

    @OneToOne
    @JoinColumn(name = "job_id")
    private Job job;

    @Column(columnDefinition = "vector(768)")
    private float[] embedding;

}
