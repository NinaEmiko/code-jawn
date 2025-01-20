package com.code.jawn.email.service.context;

import com.code.jawn.email.service.model.EmailRequest;

public class AccountDeletedEmailContext extends EmailContext{
    @Override
    public <T> void init(T context) {
        EmailRequest accountDeletedRequest = (EmailRequest) context;

        put("username", accountDeletedRequest.getUsername());
        setTemplateLocation("account-deleted-email");
        setSubject("Code Jawn Account Deleted");
        setTo(accountDeletedRequest.getTo());
    }
}
