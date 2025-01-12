package com.code.jawn.email.service.service;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import com.code.jawn.email.service.model.DeleteAccountRequest;
import com.code.jawn.email.service.model.RegisterAccountRequest;
import com.code.jawn.email.service.model.UpdateEmailRequest;
import com.code.jawn.email.service.model.UpdatePasswordRequest;
import com.code.jawn.email.service.util.EmailSubject;
import com.code.jawn.email.service.util.EmailText;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.SimpleMailMessage;

@ExtendWith(MockitoExtension.class)
public class EmailServiceTest {
    @Mock
    private JavaMailSender javaMailSender;
    @InjectMocks
    private EmailService emailService;
    @BeforeEach
    void setUp() {

    }
    @Test
    void send_delete_account_email_should_send_mail_successfully() {
        DeleteAccountRequest deleteAccountRequest = new DeleteAccountRequest("to", "username");
        emailService.sendDeleteAccountEmail(deleteAccountRequest);

        SimpleMailMessage expectedMessage = new SimpleMailMessage();
        expectedMessage.setTo("to");
        expectedMessage.setSubject(EmailSubject.DELETE_ACCOUNT_SUBJECT.getMessage());
        expectedMessage.setText(EmailText.DELETE_ACCOUNT_TEXT.getMessage("username"));
        expectedMessage.setFrom(null);

        verify(javaMailSender, times(1)).send(expectedMessage);
    }
    @Test
    void send_delete_account_email_should_throw_exception() {
        DeleteAccountRequest deleteAccountRequest = new DeleteAccountRequest("to", "username");
        doThrow(new RuntimeException("Failed to send email")).when(javaMailSender).send(any(SimpleMailMessage.class));
        RuntimeException exception = assertThrows(RuntimeException.class, () -> {
            emailService.sendDeleteAccountEmail(deleteAccountRequest);
        });
        assertEquals("Failed to send email", exception.getMessage());
    }
    @Test
    void send_register_account_email_should_send_mail_successfully() {
        RegisterAccountRequest registerAccountRequest = new RegisterAccountRequest("to", "username", "code");
        emailService.sendRegisterAccountEmail(registerAccountRequest);

        SimpleMailMessage expectedMessage = new SimpleMailMessage();
        expectedMessage.setTo("to");
        expectedMessage.setSubject(EmailSubject.REGISTER_ACCOUNT_SUBJECT.getMessage());
        expectedMessage.setText(EmailText.REGISTER_ACCOUNT_TEXT.getMessage("username") + "code");
        expectedMessage.setFrom(null);

        verify(javaMailSender, times(1)).send(expectedMessage);
    }
    @Test
    void send_register_account_email_should_throw_exception() {
        RegisterAccountRequest registerAccountRequest = new RegisterAccountRequest("to", "username", "code");
        doThrow(new RuntimeException("Failed to send email")).when(javaMailSender).send(any(SimpleMailMessage.class));
        RuntimeException exception = assertThrows(RuntimeException.class, () -> {
            emailService.sendRegisterAccountEmail(registerAccountRequest);
        });
        assertEquals("Failed to send email", exception.getMessage());
    }
    @Test
    void send_update_email_should_send_mail_successfully() {
        UpdateEmailRequest updateEmailRequest = new UpdateEmailRequest("to", "username");
        emailService.sendUpdateEmail(updateEmailRequest);

        SimpleMailMessage expectedMessage = new SimpleMailMessage();
        expectedMessage.setTo("to");
        expectedMessage.setSubject(EmailSubject.UPDATE_EMAIL_SUBJECT.getMessage());
        expectedMessage.setText(EmailText.UPDATE_EMAIL_TEXT.getMessage("username"));
        expectedMessage.setFrom(null);

        verify(javaMailSender, times(1)).send(expectedMessage);
    }
    @Test
    void send_update_email_should_throw_exception() {
        UpdateEmailRequest updateEmailRequest = new UpdateEmailRequest("to", "username");
        doThrow(new RuntimeException("Failed to send email")).when(javaMailSender).send(any(SimpleMailMessage.class));
        RuntimeException exception = assertThrows(RuntimeException.class, () -> {
            emailService.sendUpdateEmail(updateEmailRequest);
        });
        assertEquals("Failed to send email", exception.getMessage());
    }
    @Test
    void send_update_password_email_should_send_mail_successfully() {
        UpdatePasswordRequest updatePasswordRequest = new UpdatePasswordRequest("to", "username");
        emailService.sendUpdatePasswordEmail(updatePasswordRequest);

        SimpleMailMessage expectedMessage = new SimpleMailMessage();
        expectedMessage.setTo("to");
        expectedMessage.setSubject(EmailSubject.UPDATE_PASSWORD_SUBJECT.getMessage());
        expectedMessage.setText(EmailText.UPDATE_PASSWORD_TEXT.getMessage("username"));
        expectedMessage.setFrom(null);

        verify(javaMailSender, times(1)).send(expectedMessage);
    }
    @Test
    void send_update_password_email_should_throw_exception() {
        UpdatePasswordRequest updatePasswordRequest = new UpdatePasswordRequest("to", "username");
        doThrow(new RuntimeException("Failed to send email")).when(javaMailSender).send(any(SimpleMailMessage.class));
        RuntimeException exception = assertThrows(RuntimeException.class, () -> {
            emailService.sendUpdatePasswordEmail(updatePasswordRequest);
        });
        assertEquals("Failed to send email", exception.getMessage());
    }
}
