package com.code.jawn.email.service.service;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

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
    private String to;
    private String username;
    private String code;
    @BeforeEach
    void setUp() {
        to = "recipient@example.com";
        username = "username";
        code = "12345";
    }
    @Test
    void send_delete_account_email_should_send_mail_successfully() {
        emailService.sendDeleteAccountEmail(to, username);

        SimpleMailMessage expectedMessage = new SimpleMailMessage();
        expectedMessage.setTo(to);
        expectedMessage.setSubject(EmailSubject.DELETE_ACCOUNT_SUBJECT.getMessage());
        expectedMessage.setText(EmailText.DELETE_ACCOUNT_TEXT.getMessage(username));
        expectedMessage.setFrom(null);

        verify(javaMailSender, times(1)).send(expectedMessage);
    }
    @Test
    void send_delete_account_email_should_throw_exception() {
        doThrow(new RuntimeException("Failed to send email")).when(javaMailSender).send(any(SimpleMailMessage.class));

        RuntimeException exception = assertThrows(RuntimeException.class, () -> {
            emailService.sendDeleteAccountEmail(to, username);
        });

        assertEquals("Failed to send email", exception.getMessage());
    }
    @Test
    void send_register_account_email_should_send_mail_successfully() {
        emailService.sendRegisterAccountEmail(to, username, code);

        SimpleMailMessage expectedMessage = new SimpleMailMessage();
        expectedMessage.setTo(to);
        expectedMessage.setSubject(EmailSubject.REGISTER_ACCOUNT_SUBJECT.getMessage());
        expectedMessage.setText(EmailText.REGISTER_ACCOUNT_TEXT.getMessage(username) + code);
        expectedMessage.setFrom(null);

        verify(javaMailSender, times(1)).send(expectedMessage);
    }
    @Test
    void send_register_account_email_should_throw_exception() {
        doThrow(new RuntimeException("Failed to send email")).when(javaMailSender).send(any(SimpleMailMessage.class));

        RuntimeException exception = assertThrows(RuntimeException.class, () -> {
            emailService.sendRegisterAccountEmail(to, username, code);
        });

        assertEquals("Failed to send email", exception.getMessage());
    }
    @Test
    void send_update_email_should_send_mail_successfully() {
        emailService.sendUpdateEmail(to, username);

        SimpleMailMessage expectedMessage = new SimpleMailMessage();
        expectedMessage.setTo(to);
        expectedMessage.setSubject(EmailSubject.UPDATE_EMAIL_SUBJECT.getMessage());
        expectedMessage.setText(EmailText.UPDATE_EMAIL_TEXT.getMessage(username));
        expectedMessage.setFrom(null);

        verify(javaMailSender, times(1)).send(expectedMessage);
    }
    @Test
    void send_update_email_should_throw_exception() {
        doThrow(new RuntimeException("Failed to send email")).when(javaMailSender).send(any(SimpleMailMessage.class));

        RuntimeException exception = assertThrows(RuntimeException.class, () -> {
            emailService.sendUpdateEmail(to, username);
        });

        assertEquals("Failed to send email", exception.getMessage());
    }
    @Test
    void send_update_password_email_should_send_mail_successfully() {
        emailService.sendUpdatePasswordEmail(to, username);

        SimpleMailMessage expectedMessage = new SimpleMailMessage();
        expectedMessage.setTo(to);
        expectedMessage.setSubject(EmailSubject.UPDATE_PASSWORD_SUBJECT.getMessage());
        expectedMessage.setText(EmailText.UPDATE_PASSWORD_TEXT.getMessage(username));
        expectedMessage.setFrom(null);

        verify(javaMailSender, times(1)).send(expectedMessage);
    }
    @Test
    void send_update_password_email_should_throw_exception() {
        doThrow(new RuntimeException("Failed to send email")).when(javaMailSender).send(any(SimpleMailMessage.class));

        RuntimeException exception = assertThrows(RuntimeException.class, () -> {
            emailService.sendUpdatePasswordEmail(to, username);
        });

        assertEquals("Failed to send email", exception.getMessage());
    }
}
