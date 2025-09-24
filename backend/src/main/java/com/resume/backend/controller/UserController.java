package com.resume.backend.controller;

import com.resume.backend.entities.UserTable;
import com.resume.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    public UserService userService;

    @PostMapping("/createUser")
    public UserTable CreateUser(@RequestBody UserTable userTable) {
        return userService.CreateUser(userTable);
    }
}
