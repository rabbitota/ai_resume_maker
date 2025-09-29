package com.resume.backend.controller;

import com.resume.backend.dto.LoginRequest;
import com.resume.backend.dto.Session;
import com.resume.backend.entities.UserTable;
import com.resume.backend.service.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
//@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    public UserService userService;
    private LoginRequest loginRequest;
    private UserTable userTable;
    private Session session1;

    @PostMapping("/createUser")
    public ResponseEntity<String> CreateUser(@RequestBody UserTable userTable, HttpSession session) {
        userService.CreateUser(userTable);
        userTable = userService.getUserByEmail(userTable.getEmail());
        session.setAttribute("userEmail", userTable.getEmail());
        session.setAttribute("userId", userTable.getId());
        session.setAttribute("userName", userTable.getName());
        return ResponseEntity.ok("Registration Successful");
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest, HttpSession session) {
        boolean isValid = userService.validateUser(loginRequest.getEmail(), loginRequest.getPassword());
        if (isValid) {
            String email = loginRequest.getEmail();
            userTable = userService.getUserByEmail(email);
            session.setAttribute("userEmail", userTable.getEmail());
            session.setAttribute("userId", userTable.getId());
            session.setAttribute("userName", userTable.getName());
            session.setAttribute("userEmail", loginRequest.getEmail());
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }

    @GetMapping("/me")
    public ResponseEntity<?> getSessionUser(HttpSession session) {
        String name = (String) session.getAttribute("userName");
        Long id = (Long) session.getAttribute("userId");
        String email = (String) session.getAttribute("userEmail");

        if (name != null) {
            return ResponseEntity.ok(
                    Map.of("id", id, "name", name, "email", email)
            );
        } else {
            return ResponseEntity.status(401).body("No active session");
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpSession session) {
        session.invalidate(); // destroy session
        return ResponseEntity.ok("Logged out successfully");
    }
}
