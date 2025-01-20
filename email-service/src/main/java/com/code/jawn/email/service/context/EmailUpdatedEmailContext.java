package com.code.jawn.email.service.context;

import com.code.jawn.email.service.model.EmailRequest;

public class EmailUpdatedEmailContext extends EmailContext{
    @Override
    public <T> void init(T context) {
        EmailRequest emailUpdatedRequest = (EmailRequest) context;

        put("username", emailUpdatedRequest.getUsername());
        setTemplateLocation("email-updated-email");
        setSubject("Code Jawn Email Updated");
        setTo(emailUpdatedRequest.getTo());
    }
}
