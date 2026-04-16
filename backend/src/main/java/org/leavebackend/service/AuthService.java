package org.leavebackend.service;

import org.springframework.stereotype.Service;

@Service
public class AuthService {

    public boolean login(String id, String password) {
        return id.equals("admin") && password.equals("1234");
    }
}