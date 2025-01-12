package com.code.jawn.email.service.service;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

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
    private String subject;
    private String text;
    @BeforeEach
    void setUp() {
        to = "recipient@example.com";
        subject = "Test Subject";
        text = "This is a test email";
    }
    @Test
    void send_email_should_send_mail_successfully() {
        emailService.sendEmail(to, subject, text);

        SimpleMailMessage expectedMessage = new SimpleMailMessage();
        expectedMessage.setTo(to);
        expectedMessage.setSubject(subject);
        expectedMessage.setText(text);
        expectedMessage.setFrom(null);

        verify(javaMailSender, times(1)).send(expectedMessage);
    }
    @Test
    void send_email_should_throw_exception() {
        doThrow(new RuntimeException("Failed to send email")).when(javaMailSender).send(any(SimpleMailMessage.class));

        RuntimeException exception = assertThrows(RuntimeException.class, () -> {
            emailService.sendEmail(to, subject, text);
        });

        assertEquals("Failed to send email", exception.getMessage());
    }
}
