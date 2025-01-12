package com.code.jawn.email.service.service;

import com.code.jawn.email.service.util.EmailSubject;
import com.code.jawn.email.service.util.EmailText;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    private final JavaMailSender javaMailSender;

    @Value("${spring.mail.username}")
    private String mailUsername;

    @Autowired
    public EmailService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void sendRegisterAccountEmail(String to, String username, String code) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(EmailSubject.REGISTER_ACCOUNT_SUBJECT.getMessage());
        message.setText(EmailText.REGISTER_ACCOUNT_TEXT.getMessage(username) + code);
        message.setFrom(mailUsername);

        javaMailSender.send(message);
    }

    public void sendDeleteAccountEmail(String to, String username) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(EmailSubject.DELETE_ACCOUNT_SUBJECT.getMessage());
        message.setText(EmailText.DELETE_ACCOUNT_TEXT.getMessage(username));
        message.setFrom(mailUsername);

        javaMailSender.send(message);
    }

    public void sendUpdatePasswordEmail(String to, String username) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(EmailSubject.UPDATE_PASSWORD_SUBJECT.getMessage());
        message.setText(EmailText.UPDATE_PASSWORD_TEXT.getMessage(username));
        message.setFrom(mailUsername);

        javaMailSender.send(message);
    }

    public void sendUpdateEmail(String to, String username) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(EmailSubject.UPDATE_EMAIL_SUBJECT.getMessage());
        message.setText(EmailText.UPDATE_EMAIL_TEXT.getMessage(username));
        message.setFrom(mailUsername);

        javaMailSender.send(message);
    }
}
