package com.code.jawn.email.service.context;

import com.code.jawn.email.service.model.UpdateEmailRequest;

public class UpdateEmailContext extends EmailContext {
    @Override
    public <T> void init(T context) {
        UpdateEmailRequest updateEmailRequest = (UpdateEmailRequest) context;

        put("username", updateEmailRequest.getUsername());
        put("code", updateEmailRequest.getCode());
        setTemplateLocation("update-email");
        setSubject("Code Jawn Update Email");
        setTo(updateEmailRequest.getTo());
    }
}
