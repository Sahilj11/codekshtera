package com.smartnaukri.candidate.dto;

import java.util.List;

public record CandidateDto(String name, String email, String phone, String location,
        String education, int experience, double expectedSalary,
        List<String> skills, 
        String resume 
) {
}
