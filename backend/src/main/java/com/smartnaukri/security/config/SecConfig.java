package com.smartnaukri.security.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http)
            throws Exception {
        http.authorizeHttpRequests(req -> req.requestMatchers("/signup", "/signup/**")
                .permitAll()
                .requestMatchers("/**").permitAll());
                //.requestMatchers("/jobs","/jobs/**").hasAuthority("recruiter")
                //.requestMatchers("/candidate","/candidate/**").hasAuthority("candidate")
                //.anyRequest()
                //.authenticated());
        http.httpBasic();
        http.csrf(cs -> cs.disable());
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
