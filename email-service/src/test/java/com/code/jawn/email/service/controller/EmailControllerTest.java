package com.code.jawn.email.service.controller;

import com.code.jawn.email.service.model.DeleteAccountRequest;
import com.code.jawn.email.service.model.RegisterAccountRequest;
import com.code.jawn.email.service.model.UpdateEmailRequest;
import com.code.jawn.email.service.model.UpdatePasswordRequest;
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
        DeleteAccountRequest deleteAccountRequest = new DeleteAccountRequest("to", "username");
        doNothing().when(emailService).sendDeleteAccountEmail(any());
        emailController.sendDeleteAccountEmail(deleteAccountRequest);
        verify(emailService).sendDeleteAccountEmail(deleteAccountRequest);
    }
    @Test
    void send_delete_account_email_should_return_500_when_exception_is_thrown() {
        DeleteAccountRequest deleteAccountRequest = new DeleteAccountRequest("to", "username");
        doThrow(new RuntimeException("Email sending failed")).when(emailService)
                .sendDeleteAccountEmail(any());
        ResponseEntity<String> response = emailController.sendDeleteAccountEmail(deleteAccountRequest);
        assertTrue(Objects.requireNonNull(response.getBody()).contains("Error sending email: Email sending failed"));
    }
    @Test
    void send_register_account_email_should_make_call_to_email_service(){
        RegisterAccountRequest registerAccountRequest = new RegisterAccountRequest("to", "username", "code");
        doNothing().when(emailService).sendRegisterAccountEmail(any());
        emailController.sendRegisterAccountEmail(registerAccountRequest);
        verify(emailService).sendRegisterAccountEmail(registerAccountRequest);
    }
    @Test
    void send_register_account_email_should_return_500_when_exception_is_thrown() {
        RegisterAccountRequest registerAccountRequest = new RegisterAccountRequest("to", "username", "code");
        doThrow(new RuntimeException("Email sending failed")).when(emailService)
                .sendRegisterAccountEmail(any());
        ResponseEntity<String> response = emailController.sendRegisterAccountEmail(registerAccountRequest);
        assertTrue(Objects.requireNonNull(response.getBody()).contains("Error sending email: Email sending failed"));
    }
    @Test
    void send_update_password_email_should_make_call_to_email_service(){
        UpdatePasswordRequest updatePasswordRequest = new UpdatePasswordRequest("to", "username");
        doNothing().when(emailService).sendUpdatePasswordEmail(any());
        emailController.sendUpdatePasswordEmail(updatePasswordRequest);
        verify(emailService).sendUpdatePasswordEmail(updatePasswordRequest);
    }
    @Test
    void send_update_password_email_should_return_500_when_exception_is_thrown() {
        UpdatePasswordRequest updatePasswordRequest = new UpdatePasswordRequest("to", "username");
        doThrow(new RuntimeException("Email sending failed")).when(emailService)
                .sendUpdatePasswordEmail(any());
        ResponseEntity<String> response = emailController.sendUpdatePasswordEmail(updatePasswordRequest);
        assertTrue(Objects.requireNonNull(response.getBody()).contains("Error sending email: Email sending failed"));
    }
    @Test
    void send_update_email_should_make_call_to_email_service(){
        UpdateEmailRequest updateEmailRequest = new UpdateEmailRequest("to", "username");
        doNothing().when(emailService).sendUpdateEmail(any());
        emailController.sendUpdateEmail(updateEmailRequest);
        verify(emailService).sendUpdateEmail(updateEmailRequest);
    }
    @Test
    void send_update_email_should_return_500_when_exception_is_thrown() {
        UpdateEmailRequest updateEmailRequest = new UpdateEmailRequest("to", "username");
        doThrow(new RuntimeException("Email sending failed")).when(emailService)
                .sendUpdateEmail(any());
        ResponseEntity<String> response = emailController.sendUpdateEmail(updateEmailRequest);
        assertTrue(Objects.requireNonNull(response.getBody()).contains("Error sending email: Email sending failed"));
    }
}
