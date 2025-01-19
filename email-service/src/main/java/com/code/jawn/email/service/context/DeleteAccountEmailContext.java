package com.code.jawn.email.service.context;

import com.code.jawn.email.service.model.EmailRequest;

public class DeleteAccountEmailContext extends EmailContext{
    @Override
    public <T> void init(T context) {
        EmailRequest deleteAccountRequest = (EmailRequest) context;

        put("username", deleteAccountRequest.getUsername());
        setTemplateLocation("email-delete-account");
        setSubject("Code Jawn Account Deletion");
        setTo(deleteAccountRequest.getTo());
    }
}
