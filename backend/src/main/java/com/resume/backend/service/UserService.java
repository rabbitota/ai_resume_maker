package com.resume.backend.service;

import com.resume.backend.entities.UserTable;
import com.resume.backend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    public UserRepo userRepo;

    public UserTable CreateUser(UserTable userTable) {
        return userRepo.save(userTable);
    }
}
