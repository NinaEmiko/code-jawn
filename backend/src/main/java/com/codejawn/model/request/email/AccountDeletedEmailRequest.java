package com.codejawn.model.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AccountDeletedRequest extends EmailRequest {
    public AccountDeletedRequest(String to, String username) {
        super(to, username);
    }
}