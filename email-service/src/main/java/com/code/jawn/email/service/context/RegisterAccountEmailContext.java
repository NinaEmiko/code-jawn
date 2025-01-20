package com.code.jawn.email.service.context;

import com.code.jawn.email.service.model.RegisterAccountRequest;

public class RegisterAccountEmailContext extends EmailContext {
    @Override
    public <T> void init(T context) {
        RegisterAccountRequest registerAccountRequest = (RegisterAccountRequest) context;

        put("username", registerAccountRequest.getUsername());
        put("code", registerAccountRequest.getCode());
        setTemplateLocation("register-account-email");
        setSubject("Code Jawn Account Registration");
        setTo(registerAccountRequest.getTo());
    }
}
