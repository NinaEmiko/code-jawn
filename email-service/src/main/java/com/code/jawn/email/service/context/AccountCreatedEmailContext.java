package com.code.jawn.email.service.context;

import com.code.jawn.email.service.model.AccountCreatedRequest;

public class AccountCreatedEmailContext extends EmailContext {
    @Override
    public <T> void init(T context) {
        AccountCreatedRequest accountCreatedRequest = (AccountCreatedRequest) context;

        put("username", accountCreatedRequest.getUsername());
        setTemplateLocation("account-created-email");
        setSubject("Code Jawn Account Created");
        setTo(accountCreatedRequest.getTo());
    }
}
