package com.smartnaukri.security.dto;

import java.util.List;

import org.springframework.security.core.GrantedAuthority;

public record UserDetailsDto(
        String username,String password,List<? extends GrantedAuthority> roles
        ) {
}
