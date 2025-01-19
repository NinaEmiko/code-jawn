package com.code.jawn.email.service.context;

import com.code.jawn.email.service.model.EmailRequest;

public class UpdatePasswordEmailContext extends EmailContext{
    @Override
    public <T> void init(T context) {
        EmailRequest updatePasswordRequest = (EmailRequest) context;

        put("username", updatePasswordRequest.getUsername());
        setTemplateLocation("email-update-password");
        setSubject("Code Jawn Update Password");
        setTo(updatePasswordRequest.getTo());
    }
}
