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
    void send_delete_account_email_should_make_call_to_email_service(){
        doNothing().when(emailService).sendDeleteAccountEmail(anyString(), anyString());
        emailController.sendDeleteAccountEmail("to", "username");
        verify(emailService).sendDeleteAccountEmail("to", "username");
    }
    @Test
    void send_delete_account_email_should_return_500_when_exception_is_thrown() {
        doThrow(new RuntimeException("Email sending failed")).when(emailService)
                .sendDeleteAccountEmail(anyString(), anyString());
        ResponseEntity<String> response = emailController.sendDeleteAccountEmail("to", "username");
        assertTrue(Objects.requireNonNull(response.getBody()).contains("Error sending email: Email sending failed"));
    }
    @Test
    void send_register_account_email_should_make_call_to_email_service(){
        doNothing().when(emailService).sendRegisterAccountEmail(anyString(), anyString(), anyString());
        emailController.sendRegisterAccountEmail("to", "username", "code");
        verify(emailService).sendRegisterAccountEmail("to", "username", "code");
    }
    @Test
    void send_register_account_email_should_return_500_when_exception_is_thrown() {
        doThrow(new RuntimeException("Email sending failed")).when(emailService)
                .sendRegisterAccountEmail(anyString(), anyString(), anyString());
        ResponseEntity<String> response = emailController.sendRegisterAccountEmail("to", "username", "code");
        assertTrue(Objects.requireNonNull(response.getBody()).contains("Error sending email: Email sending failed"));
    }
    @Test
    void send_update_password_email_should_make_call_to_email_service(){
        doNothing().when(emailService).sendUpdatePasswordEmail(anyString(), anyString());
        emailController.sendUpdatePasswordEmail("to", "username");
        verify(emailService).sendUpdatePasswordEmail("to", "username");
    }
    @Test
    void send_update_password_email_should_return_500_when_exception_is_thrown() {
        doThrow(new RuntimeException("Email sending failed")).when(emailService)
                .sendUpdatePasswordEmail(anyString(), anyString());
        ResponseEntity<String> response = emailController.sendUpdatePasswordEmail("to", "username");
        assertTrue(Objects.requireNonNull(response.getBody()).contains("Error sending email: Email sending failed"));
    }
    @Test
    void send_update_email_should_make_call_to_email_service(){
        doNothing().when(emailService).sendUpdateEmail(anyString(), anyString());
        emailController.sendUpdateEmail("to", "username");
        verify(emailService).sendUpdateEmail("to", "username");
    }
    @Test
    void send_update_email_should_return_500_when_exception_is_thrown() {
        doThrow(new RuntimeException("Email sending failed")).when(emailService)
                .sendUpdateEmail(anyString(), anyString());
        ResponseEntity<String> response = emailController.sendUpdateEmail("to", "username");
        assertTrue(Objects.requireNonNull(response.getBody()).contains("Error sending email: Email sending failed"));
    }
}
