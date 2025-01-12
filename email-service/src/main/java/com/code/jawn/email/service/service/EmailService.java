package com.code.jawn.email.service.service;

import com.code.jawn.email.service.model.DeleteAccountRequest;
import com.code.jawn.email.service.model.RegisterAccountRequest;
import com.code.jawn.email.service.model.UpdateEmailRequest;
import com.code.jawn.email.service.model.UpdatePasswordRequest;
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

    public void sendRegisterAccountEmail(RegisterAccountRequest registerAccountRequest) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(registerAccountRequest.getTo());
        message.setSubject(EmailSubject.REGISTER_ACCOUNT_SUBJECT.getMessage());
        message.setText(EmailText.REGISTER_ACCOUNT_TEXT.getMessage(registerAccountRequest.getUsername()) + registerAccountRequest.getCode());
        message.setFrom(mailUsername);

        javaMailSender.send(message);
    }

    public void sendDeleteAccountEmail(DeleteAccountRequest deleteAccountRequest) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(deleteAccountRequest.getTo());
        message.setSubject(EmailSubject.DELETE_ACCOUNT_SUBJECT.getMessage());
        message.setText(EmailText.DELETE_ACCOUNT_TEXT.getMessage(deleteAccountRequest.getUsername()));
        message.setFrom(mailUsername);

        javaMailSender.send(message);
    }

    public void sendUpdatePasswordEmail(UpdatePasswordRequest updatePasswordRequest) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(updatePasswordRequest.getTo());
        message.setSubject(EmailSubject.UPDATE_PASSWORD_SUBJECT.getMessage());
        message.setText(EmailText.UPDATE_PASSWORD_TEXT.getMessage(updatePasswordRequest.getUsername()));
        message.setFrom(mailUsername);

        javaMailSender.send(message);
    }

    public void sendUpdateEmail(UpdateEmailRequest updateEmailRequest) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(updateEmailRequest.getTo());
        message.setSubject(EmailSubject.UPDATE_EMAIL_SUBJECT.getMessage());
        message.setText(EmailText.UPDATE_EMAIL_TEXT.getMessage(updateEmailRequest.getUsername()));
        message.setFrom(mailUsername);

        javaMailSender.send(message);
    }
}
