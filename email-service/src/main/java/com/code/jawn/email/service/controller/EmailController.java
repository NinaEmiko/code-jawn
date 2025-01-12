package com.code.jawn.email.service.controller;

import com.code.jawn.email.service.model.DeleteAccountRequest;
import com.code.jawn.email.service.model.RegisterAccountRequest;
import com.code.jawn.email.service.model.UpdateEmailRequest;
import com.code.jawn.email.service.model.UpdatePasswordRequest;
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
            @RequestBody @Valid RegisterAccountRequest registerAccountRequest) {
        try {
            emailService.sendRegisterAccountEmail(registerAccountRequest);
            return ResponseEntity.ok("Email sent successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error sending email: " + e.getMessage());
        }
    }

    @PostMapping("/delete-account")
    public ResponseEntity<String> sendDeleteAccountEmail(
            @RequestBody @Valid DeleteAccountRequest deleteAccountRequest) {
        try {
            emailService.sendDeleteAccountEmail(deleteAccountRequest);
            return ResponseEntity.ok("Email sent successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error sending email: " + e.getMessage());
        }
    }
    @PostMapping("/update-password")
    public ResponseEntity<String> sendUpdatePasswordEmail(
            @RequestBody @Valid UpdatePasswordRequest updatePasswordRequest) {
        try {
            emailService.sendUpdatePasswordEmail(updatePasswordRequest);
            return ResponseEntity.ok("Email sent successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error sending email: " + e.getMessage());
        }
    }
    @PostMapping("/update-email")
    public ResponseEntity<String> sendUpdateEmail(
            @RequestBody @Valid UpdateEmailRequest updateEmailRequest) {
        try {
            emailService.sendUpdateEmail(updateEmailRequest);
            return ResponseEntity.ok("Email sent successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error sending email: " + e.getMessage());
        }
    }
}
