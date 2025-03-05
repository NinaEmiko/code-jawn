package com.code.jawn.email.service.model;

public class AccountCreatedRequest extends EmailRequest {
    public AccountCreatedRequest(String to, String username) {
        super(to, username);
    }
}
