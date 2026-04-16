package org.leavebackend.controller;

import org.leavebackend.dto.LoginRequest;
import org.leavebackend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {
        if (authService.login(request.getId(), request.getPassword())) {
            return "SUCCESS";
        }
        return "FAIL";
    }
}