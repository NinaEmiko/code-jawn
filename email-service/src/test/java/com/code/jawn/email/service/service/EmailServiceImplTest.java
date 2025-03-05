package com.code.jawn.email.service.service;

import com.code.jawn.email.service.context.AccountCreatedEmailContext;
import com.code.jawn.email.service.context.EmailContext;
import com.code.jawn.email.service.model.AccountCreatedRequest;
import jakarta.mail.MessagingException;
import jakarta.mail.Session;
import jakarta.mail.internet.MimeMessage;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.platform.commons.util.ReflectionUtils;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.test.util.ReflectionTestUtils;
import org.thymeleaf.spring6.SpringTemplateEngine;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class EmailServiceImplTest {
    @Mock
    private JavaMailSender javaMailSender;
    @Mock
    private SpringTemplateEngine templateEngine;
    @InjectMocks
    private EmailServiceImpl emailServiceImpl;
    private EmailContext emailContext;
    private AccountCreatedRequest accountCreatedRequest;
    @Mock
    private MimeMessage mimeMessage;

    @BeforeEach
    void setUp() {
        accountCreatedRequest = new AccountCreatedRequest("to", "username");
        emailContext = new AccountCreatedEmailContext();
        emailContext.init(accountCreatedRequest);
        emailContext.setSubject("subject");
        mimeMessage = new MimeMessage((Session) null);
    }
    @Test
    void sendEmail_shouldSendEmailSuccessfully() throws MessagingException {
        ReflectionTestUtils.setField(emailServiceImpl, "mailUsername", "from");

        when(javaMailSender.createMimeMessage()).thenReturn(mimeMessage);
        when(templateEngine.process(anyString(), any())).thenReturn("");
        doNothing().when(javaMailSender).send(any(MimeMessage.class));

        emailServiceImpl.sendEmail(emailContext);

        verify(javaMailSender).send(mimeMessage);
    }
}
