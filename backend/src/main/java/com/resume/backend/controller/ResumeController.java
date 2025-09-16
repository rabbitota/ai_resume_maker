package com.resume.backend.controller;

import com.resume.backend.ResumeRequest;
import com.resume.backend.service.ResumeService;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/resume")
public class ResumeController {

    private ResumeService resumeService;

    //private DeepSeekChatAutoConfiguration deepSeekChatAutoConfiguration;

    public ResumeController(ResumeService resumeService) {
        this.resumeService = resumeService;
    }


    @PostMapping("/generate")
    public ResponseEntity<Map<String, Object>> getResumeData(
            @RequestBody ResumeRequest resumeRequest
    ) throws IOException {

        Map<String, Object> stringObjectMap = resumeService.generateResumeResponse(resumeRequest.userDescription());
        return new ResponseEntity<>(stringObjectMap, HttpStatus.OK);

    }

    @GetMapping("/test")
    public String test() {
        return "ResumeController is working!";
    }

    @GetMapping("/submit")
    public String FormSubmit() {

        return "Form Submitted Successfully!";
    }


}
