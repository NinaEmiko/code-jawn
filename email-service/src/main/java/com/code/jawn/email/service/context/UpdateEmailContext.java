package com.code.jawn.email.service.context;

import com.code.jawn.email.service.model.EmailRequest;

public class UpdateEmailContext extends EmailContext{
    @Override
    public <T> void init(T context) {
        EmailRequest updateEmailRequest = (EmailRequest) context;

        put("username", updateEmailRequest.getUsername());
        setTemplateLocation("email-update-email");
        setSubject("Code Jawn Update Email");
        setTo(updateEmailRequest.getTo());
    }
}
