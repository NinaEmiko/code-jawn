package com.code.jawn.email.service.controller;

import com.code.jawn.email.service.context.EmailContext;
import com.code.jawn.email.service.model.*;
import com.code.jawn.email.service.service.EmailServiceImpl;
import jakarta.mail.MessagingException;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;

import java.util.Objects;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class EmailControllerTest {
    @InjectMocks
    EmailController emailController;
    @Mock
    EmailServiceImpl emailServiceImpl;
    @Test
    void sendAccountCreatedEmail_shouldMakeCallToEmailService() throws MessagingException {
        AccountCreatedRequest accountCreatedRequest = new AccountCreatedRequest("to", "from");
        doNothing().when(emailServiceImpl).sendEmail(any());
        emailController.sendAccountCreatedEmail(accountCreatedRequest);
        verify(emailServiceImpl).sendEmail(any(EmailContext.class));
    }
    @Test
    void sendAccountCreatedEmail_shouldReturn500WhenExceptionIsThrown() throws MessagingException {
        AccountCreatedRequest accountCreatedRequest = new AccountCreatedRequest("to", "from");
        doThrow(new RuntimeException("Email sending failed")).when(emailServiceImpl).sendEmail(any());
        ResponseEntity<String> response =  emailController.sendAccountCreatedEmail(accountCreatedRequest);
        assertEquals(response.getStatusCode().value(), 500);
    }
    @Test
    void sendAccountDeletedEmail_shouldMakeCallToEmailService() throws MessagingException {
        AccountDeletedRequest accountDeletedRequest = new AccountDeletedRequest("to", "from");
        doNothing().when(emailServiceImpl).sendEmail(any());
        emailController.sendDeleteAccountEmail(accountDeletedRequest);
        verify(emailServiceImpl).sendEmail(any(EmailContext.class));
    }
    @Test
    void sendAccountDeletedEmail_shouldReturn500WhenExceptionIsThrown() throws MessagingException {
        AccountDeletedRequest accountDeletedRequest = new AccountDeletedRequest("to", "from");
        doThrow(new RuntimeException("Email sending failed")).when(emailServiceImpl).sendEmail(any());
        ResponseEntity<String> response =  emailController.sendDeleteAccountEmail(accountDeletedRequest);
        assertEquals(response.getStatusCode().value(), 500);
    }
    @Test
    void sendEmailUpdatedEmail_shouldMakeCallToEmailService() throws MessagingException {
        EmailUpdatedRequest emailUpdatedRequest = new EmailUpdatedRequest("to", "from");
        doNothing().when(emailServiceImpl).sendEmail(any());
        emailController.sendEmailUpdatedEmail(emailUpdatedRequest);
        verify(emailServiceImpl).sendEmail(any(EmailContext.class));
    }
    @Test
    void sendEmailUpdatedEmail_shouldReturn500WhenExceptionIsThrown() throws MessagingException {
        EmailUpdatedRequest emailUpdatedRequest = new EmailUpdatedRequest("to", "from");
        doThrow(new RuntimeException("Email sending failed")).when(emailServiceImpl).sendEmail(any());
        ResponseEntity<String> response =  emailController.sendEmailUpdatedEmail(emailUpdatedRequest);
        assertEquals(response.getStatusCode().value(), 500);    }
    @Test
    void sendPasswordUpdatedEmail_shouldMakeCallToEmailService() throws MessagingException {
        PasswordUpdatedRequest passwordUpdatedRequest = new PasswordUpdatedRequest("to", "from");
        doNothing().when(emailServiceImpl).sendEmail(any());
        emailController.sendPasswordUpdatedEmail(passwordUpdatedRequest);
        verify(emailServiceImpl).sendEmail(any(EmailContext.class));
    }
    @Test
    void sendPasswordUpdatedEmail_shouldReturn500WhenExceptionIsThrown() throws MessagingException {
        PasswordUpdatedRequest passwordUpdatedRequest = new PasswordUpdatedRequest("to", "from");
        doThrow(new RuntimeException("Email sending failed")).when(emailServiceImpl).sendEmail(any());
        ResponseEntity<String> response =  emailController.sendPasswordUpdatedEmail(passwordUpdatedRequest);
        assertEquals(response.getStatusCode().value(), 500);
    }
    @Test
    void sendRegisterAccountEmail_shouldMakeCallToEmailService() throws MessagingException {
        RegisterAccountRequest registerAccountRequest = new RegisterAccountRequest("to", "from", "code");
        doNothing().when(emailServiceImpl).sendEmail(any());
        emailController.sendRegisterAccountEmail(registerAccountRequest);
        verify(emailServiceImpl).sendEmail(any(EmailContext.class));
    }
    @Test
    void sendRegisterAccountEmail_shouldReturn500WhenExceptionIsThrown() throws MessagingException {
        RegisterAccountRequest registerAccountRequest = new RegisterAccountRequest("to", "from", "code");
        doThrow(new RuntimeException("Email sending failed")).when(emailServiceImpl).sendEmail(any());
        ResponseEntity<String> response =  emailController.sendRegisterAccountEmail(registerAccountRequest);
        assertEquals(response.getStatusCode().value(), 500);
    }
    @Test
    void sendUpdateEmail_shouldMakeCallToEmailService() throws MessagingException {
        UpdateEmailRequest updateEmailRequest = new UpdateEmailRequest("to", "from", "code");
        doNothing().when(emailServiceImpl).sendEmail(any());
        emailController.sendUpdateEmail(updateEmailRequest);
        verify(emailServiceImpl).sendEmail(any(EmailContext.class));
    }
    @Test
    void sendUpdateEmail_shouldReturn500WhenExceptionIsThrown() throws MessagingException {
        UpdateEmailRequest updateEmailRequest = new UpdateEmailRequest("to", "from", "code");
        doThrow(new RuntimeException("Email sending failed")).when(emailServiceImpl).sendEmail(any());
        ResponseEntity<String> response =  emailController.sendUpdateEmail(updateEmailRequest);
        assertEquals(response.getStatusCode().value(), 500);
    }
}
