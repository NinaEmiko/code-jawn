package com.codejawn.model.request.email;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AccountDeletedEmailRequest extends EmailRequest {
    public AccountDeletedEmailRequest(String to, String username) {
        super(to, username);
    }
}