package com.code.jawn.email.service.service;

import com.code.jawn.email.service.context.EmailContext;
import jakarta.mail.MessagingException;

public interface EmailService {
    void sendEmail(EmailContext emailContext) throws MessagingException;
}
