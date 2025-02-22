package com.smartnaukri.security.service;

import java.util.List;

import com.smartnaukri.security.dto.UserDetailsDto;
import com.smartnaukri.security.repo.UserEntityRepo;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomUserDetailService implements UserDetailsService{

    private final UserEntityRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        var userEntity = userRepo.findByEmail(username).get();
        var uDetail = new UserDetailsDto(username, userEntity.getPassword(),List.of(userEntity.getRole())
                        .stream()
                        .map(SimpleGrantedAuthority::new)
                        .toList());
        return new UserDetailsImpl(uDetail);
    }
    
}
