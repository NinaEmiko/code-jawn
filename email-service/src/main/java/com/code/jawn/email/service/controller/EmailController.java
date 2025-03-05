package com.code.jawn.email.service.controller;

import com.code.jawn.email.service.context.*;
import com.code.jawn.email.service.model.*;
import com.code.jawn.email.service.service.EmailServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
@AllArgsConstructor
public class EmailController {
    private EmailServiceImpl emailServiceImpl;

    @PostMapping("/account-created")
    public ResponseEntity<String> sendAccountCreatedEmail(
            @RequestBody AccountCreatedRequest accountCreatedRequest) {
        EmailContext emailContext = new AccountCreatedEmailContext();
        emailContext.init(accountCreatedRequest);
        try {
            emailServiceImpl.sendEmail(emailContext);
            return ResponseEntity.ok("Email sent successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error sending account created email: " + e.getMessage());
        }
    }

    @PostMapping("/account-deleted")
    public ResponseEntity<String> sendDeleteAccountEmail(
            @RequestBody AccountDeletedRequest accountDeletedRequest) {
        EmailContext emailContext = new AccountDeletedEmailContext();
        emailContext.init(accountDeletedRequest);
        try {
            emailServiceImpl.sendEmail(emailContext);
            return ResponseEntity.ok("Email sent successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error sending account deleted email: " + e.getMessage());
        }
    }

    @PostMapping("/email-updated")
    public ResponseEntity<String> sendEmailUpdatedEmail(
            @RequestBody EmailUpdatedRequest emailUpdatedRequest) {
        EmailContext emailContext = new EmailUpdatedEmailContext();
        emailContext.init(emailUpdatedRequest);
        try {
            emailServiceImpl.sendEmail(emailContext);
            return ResponseEntity.ok("Email sent successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error sending email updated email: " + e.getMessage());
        }
    }

    @PostMapping("/password-updated")
    public ResponseEntity<String> sendPasswordUpdatedEmail(
            @RequestBody PasswordUpdatedRequest passwordUpdatedRequest) {
        EmailContext emailContext = new PasswordUpdatedEmailContext();
        emailContext.init(passwordUpdatedRequest);
        try {
            emailServiceImpl.sendEmail(emailContext);
            return ResponseEntity.ok("Email sent successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error sending password updated email: " + e.getMessage());
        }
    }

    @PostMapping("/register-account")
    public ResponseEntity<String> sendRegisterAccountEmail(
            @RequestBody RegisterAccountRequest registerAccountRequest) {
        EmailContext emailContext = new RegisterAccountEmailContext();
        emailContext.init(registerAccountRequest);
        try {
            emailServiceImpl.sendEmail(emailContext);
            return ResponseEntity.ok("Email sent successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error sending register account email: " + e.getMessage());
        }
    }

    @PostMapping("/update-email")
    public ResponseEntity<String> sendUpdateEmail(
            @RequestBody UpdateEmailRequest updateEmailRequest) {
        EmailContext emailContext = new UpdateEmailContext();
        emailContext.init(updateEmailRequest);
        try {
            emailServiceImpl.sendEmail(emailContext);
            return ResponseEntity.ok("Email sent successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error sending update email email: " + e.getMessage());
        }
    }
}
