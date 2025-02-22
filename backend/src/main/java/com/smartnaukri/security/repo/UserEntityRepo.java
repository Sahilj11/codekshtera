package com.smartnaukri.security.repo;

import java.util.Optional;
import java.util.UUID;

import com.smartnaukri.security.entity.UserEntity;

import org.springframework.data.jpa.repository.JpaRepository;

/**
  * UserEntity
 */
public interface UserEntityRepo extends JpaRepository<UserEntity,UUID>{

    Optional<UserEntity> findByEmail(String email);
}
