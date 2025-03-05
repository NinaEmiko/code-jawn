package com.code.jawn.email.service.context;

import com.code.jawn.email.service.model.EmailRequest;

public class PasswordUpdatedEmailContext extends EmailContext{
    @Override
    public <T> void init(T context) {
        EmailRequest passwordUpdatedRequest = (EmailRequest) context;

        put("username", passwordUpdatedRequest.getUsername());
        setTemplateLocation("password-updated-email");
        setSubject("Code Jawn Password Updated");
        setTo(passwordUpdatedRequest.getTo());
    }
}
