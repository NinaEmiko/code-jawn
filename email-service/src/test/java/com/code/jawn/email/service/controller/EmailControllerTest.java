package com.code.jawn.email.service.controller;

import com.code.jawn.email.service.context.EmailContext;
import com.code.jawn.email.service.model.DeleteAccountRequest;
import com.code.jawn.email.service.model.RegisterAccountRequest;
import com.code.jawn.email.service.model.UpdateEmailRequest;
import com.code.jawn.email.service.model.UpdatePasswordRequest;
import com.code.jawn.email.service.service.EmailService;
import jakarta.mail.MessagingException;
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
    void sendDeleteAccountEmail_shouldMakeCallToEmailService() throws MessagingException {
        DeleteAccountRequest deleteAccountRequest = new DeleteAccountRequest("to", "from");
        doNothing().when(emailService).sendEmail(any());
        emailController.sendDeleteAccountEmail(deleteAccountRequest);
        verify(emailService).sendEmail(any(EmailContext.class));
    }
    @Test
    void sendDeleteAccountEmail_shouldReturn500WhenExceptionIsThrown() throws MessagingException {
        DeleteAccountRequest deleteAccountRequest = new DeleteAccountRequest("to", "from");
        doThrow(new RuntimeException("Email sending failed")).when(emailService).sendEmail(any());
        ResponseEntity<String> response =  emailController.sendDeleteAccountEmail(deleteAccountRequest);
        assertTrue(Objects.requireNonNull(response.getBody()).contains("Error sending email: Email sending failed"));
    }
    @Test
    void sendRegisterAccountEmail_shouldMakeCallToEmailService() throws MessagingException {
        RegisterAccountRequest registerAccountRequest = new RegisterAccountRequest("to", "from", "code");
        doNothing().when(emailService).sendEmail(any());
        emailController.sendRegisterAccountEmail(registerAccountRequest);
        verify(emailService).sendEmail(any(EmailContext.class));
    }
    @Test
    void sendRegisterAccountEmail_shouldReturn500WhenExceptionIsThrown() throws MessagingException {
        RegisterAccountRequest registerAccountRequest = new RegisterAccountRequest("to", "from", "code");
        doThrow(new RuntimeException("Email sending failed")).when(emailService).sendEmail(any());
        ResponseEntity<String> response =  emailController.sendRegisterAccountEmail(registerAccountRequest);
        assertTrue(Objects.requireNonNull(response.getBody()).contains("Error sending email: Email sending failed"));
    }
    @Test
    void sendUpdateEmail_shouldMakeCallToEmailService() throws MessagingException {
        UpdateEmailRequest updateEmailRequest = new UpdateEmailRequest("to", "from");
        doNothing().when(emailService).sendEmail(any());
        emailController.sendUpdateEmail(updateEmailRequest);
        verify(emailService).sendEmail(any(EmailContext.class));
    }
    @Test
    void sendUpdateEmail_shouldReturn500WhenExceptionIsThrown() throws MessagingException {
        UpdateEmailRequest updateEmailRequest = new UpdateEmailRequest("to", "from");
        doThrow(new RuntimeException("Email sending failed")).when(emailService).sendEmail(any());
        ResponseEntity<String> response =  emailController.sendUpdateEmail(updateEmailRequest);
        assertTrue(Objects.requireNonNull(response.getBody()).contains("Error sending email: Email sending failed"));
    }
    @Test
    void sendUpdatePasswordEmail_shouldMakeCallToEmailService() throws MessagingException {
        UpdateEmailRequest updateEmailRequest = new UpdateEmailRequest("to", "from");
        doNothing().when(emailService).sendEmail(any());
        emailController.sendUpdateEmail(updateEmailRequest);
        verify(emailService).sendEmail(any(EmailContext.class));
    }
    @Test
    void sendUpdatePasswordEmail_shouldReturn500WhenExceptionIsThrown() throws MessagingException {
        UpdatePasswordRequest updatePasswordRequest = new UpdatePasswordRequest("to", "from");
        doThrow(new RuntimeException("Email sending failed")).when(emailService).sendEmail(any());
        ResponseEntity<String> response =  emailController.sendUpdatePasswordEmail(updatePasswordRequest);
        assertTrue(Objects.requireNonNull(response.getBody()).contains("Error sending email: Email sending failed"));
    }
}
