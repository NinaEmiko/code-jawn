package com.code.jawn.email.service.service;

import com.code.jawn.email.service.context.EmailContext;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.mail.javamail.JavaMailSender;
import org.thymeleaf.spring6.SpringTemplateEngine;

@ExtendWith(MockitoExtension.class)
public class EmailServiceImplTest {
    @Mock
    private JavaMailSender javaMailSender;
    @Mock
    private SpringTemplateEngine templateEngine;
    @InjectMocks
    private EmailServiceImpl emailServiceImpl;
    @Mock
    private EmailContext emailContext;
    @Mock
    private MimeMessage mimeMessage;

    @BeforeEach
    void setUp() {
    }
    @Test
    void sendEmail_shouldSendEmailSuccessfully() throws MessagingException {

    }
}
