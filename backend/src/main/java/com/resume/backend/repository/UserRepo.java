package com.resume.backend.repository;

import com.resume.backend.entities.UserTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<UserTable, Long> {

    Optional<UserTable> findByEmailAndPassword(String email, String password);
}
