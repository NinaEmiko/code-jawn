package com.code.jawn.email.service.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AccountDeletedRequest extends EmailRequest {
    public AccountDeletedRequest(String to, String username) {
        super(to, username);
    }
}
