package com.resume.backend.repository;

import com.resume.backend.entities.UserTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<UserTable, Long> {
}
