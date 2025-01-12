package com.code.jawn.email.service.controller;

import com.code.jawn.email.service.service.EmailService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;

import java.util.Objects;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class EmailControllerTest {
    @InjectMocks
    EmailController emailController;
    @Mock
    EmailService emailService;
    @Test
    void send_email_should_make_call_to_email_service(){
        doNothing().when(emailService).sendEmail(anyString(), anyString(), anyString());
        emailController.sendEmail("to", "subject", "text");
        verify(emailService).sendEmail("to", "subject", "text");
    }
    @Test
    void send_email_should_return_500_when_exception_is_thrown() {
        doThrow(new RuntimeException("Email sending failed")).when(emailService)
                .sendEmail(anyString(), anyString(), anyString());
        ResponseEntity<String> response = emailController.sendEmail("to", "subject", "text");
        assertTrue(Objects.requireNonNull(response.getBody()).contains("Error sending email: Email sending failed"));
    }
}
