package com.smartnaukri.jobs.dto;
 
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public record JobDto(
    String title,
    String location,
    Double salary,
    @JsonProperty("experience")
    Integer experienceRequired,
    @JsonProperty("education")
    String educationRequirement,
    @JsonProperty("skills")
    List<String> skillsRequired, 
    String description 
) {}

