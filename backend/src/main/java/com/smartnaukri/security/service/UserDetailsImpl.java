package com.smartnaukri.security.service;

import java.util.Collection;
import java.util.List;

import com.smartnaukri.security.dto.UserDetailsDto;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class UserDetailsImpl implements UserDetails{

    private final UserDetailsDto userDetails;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of("candidate","recruiter")
                        .stream()
                        .map(SimpleGrantedAuthority::new)
                        .toList();
    }

    @Override
    public String getPassword() {
       return userDetails.password(); 
    }

    @Override
    public String getUsername() {
        return userDetails.username();
    }

}
