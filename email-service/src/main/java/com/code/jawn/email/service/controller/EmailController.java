package com.code.jawn.email.service.controller;

import com.code.jawn.email.service.context.*;
import com.code.jawn.email.service.model.*;
import com.code.jawn.email.service.service.EmailService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
@AllArgsConstructor
public class EmailController {
    private EmailService emailService;

    @PostMapping("/register-account")
    public ResponseEntity<String> sendRegisterAccountEmail(
            @RequestBody RegisterAccountRequest registerAccountRequest) {
        EmailContext emailContext = new RegisterAccountEmailContext();
        emailContext.init(registerAccountRequest);
        try {
            emailService.sendEmail(emailContext);
            return ResponseEntity.ok("Email sent successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error sending email: " + e.getMessage());
        }
    }

    @PostMapping("/delete-account")
    public ResponseEntity<String> sendDeleteAccountEmail(
            @RequestBody DeleteAccountRequest deleteAccountRequest) {
        EmailContext emailContext = new DeleteAccountEmailContext();
        emailContext.init(deleteAccountRequest);
        try {
            emailService.sendEmail(emailContext);
            return ResponseEntity.ok("Email sent successfully!");
        } catch (Exception e) {
            return ResponseEntity.ok("Error sending email: " + e.getMessage());
        }
    }

    @PostMapping("/update-password")
    public ResponseEntity<String> sendUpdatePasswordEmail(
            @RequestBody UpdatePasswordRequest updatePasswordRequest) {
        EmailContext emailContext = new UpdatePasswordEmailContext();
        emailContext.init(updatePasswordRequest);
        try {
            emailService.sendEmail(emailContext);
            return ResponseEntity.ok("Email sent successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error sending email: " + e.getMessage());
        }
    }

    @PostMapping("/update-email")
    public ResponseEntity<String> sendUpdateEmail(
            @RequestBody UpdateEmailRequest updateEmailRequest) {
        EmailContext emailContext = new UpdateEmailContext();
        emailContext.init(updateEmailRequest);
        try {
            emailService.sendEmail(emailContext);
            return ResponseEntity.ok("Email sent successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error sending email: " + e.getMessage());
        }
    }
}
