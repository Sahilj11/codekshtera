package com.smartnaukri.candidate.entity;

import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "candidate_embedding")
@Getter
@Setter
public class CandidateEmbedding {

    @Id
    @Column(insertable = false,updatable = false)
    @GeneratedValue
    private UUID id;

    @Column(columnDefinition = "vector(768)")
    private float[] embedding;

}
