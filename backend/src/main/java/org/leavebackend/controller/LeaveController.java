package org.leavebackend.controller;

import org.leavebackend.model.LeaveRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LeaveController {

    @PostMapping("/leave")
    public LeaveRequest submitLeave(@RequestBody LeaveRequest request) {
        return request;
    }
}