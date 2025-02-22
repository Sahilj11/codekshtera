package com.smartnaukri.security.controller;

import com.smartnaukri.security.entity.UserEntity;
import com.smartnaukri.security.repo.UserEntityRepo;
import java.util.UUID;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class SecController {

    private final PasswordEncoder passwordEncoder;
    private final UserEntityRepo userRepo;

    @PostMapping(path = "/signup")
    public ResponseEntity<String> createUser(@RequestParam String type, String username,
            String password) {
        if (!( type.equals("candidate") || type.equals("recruiter") )) {
           return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        var encoded = passwordEncoder.encode(password);
        var user = new UserEntity();
        user.setId(UUID.randomUUID());
        user.setRole(type);
        user.setEmail(username);
        user.setPassword(encoded);
        userRepo.save(user);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
