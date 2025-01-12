package com.code.jawn.email.service.controller;

import com.code.jawn.email.service.service.EmailService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/register-account")
    public ResponseEntity<String> sendRegisterAccountEmail(
            @RequestParam @Valid String to,
            @RequestParam @Valid String username,
            @RequestParam @Valid String code) {
        try {
            emailService.sendRegisterAccountEmail(to, username, code);
            return ResponseEntity.ok("Email sent successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error sending email: " + e.getMessage());
        }
    }

    @PostMapping("/delete-account")
    public ResponseEntity<String> sendDeleteAccountEmail(
            @RequestParam @Valid String to,
            @RequestParam @Valid String username) {
        try {
            emailService.sendDeleteAccountEmail(to, username);
            return ResponseEntity.ok("Email sent successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error sending email: " + e.getMessage());
        }
    }
    @PostMapping("/update-password")
    public ResponseEntity<String> sendUpdatePasswordEmail(
            @RequestParam @Valid String to,
            @RequestParam @Valid String username) {
        try {
            emailService.sendUpdatePasswordEmail(to, username);
            return ResponseEntity.ok("Email sent successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error sending email: " + e.getMessage());
        }
    }
    @PostMapping("/update-email")
    public ResponseEntity<String> sendUpdateEmail(
            @RequestParam @Valid String to,
            @RequestParam @Valid String username) {
        try {
            emailService.sendUpdateEmail(to, username);
            return ResponseEntity.ok("Email sent successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error sending email: " + e.getMessage());
        }
    }
}
