package com.codejawn.model.request.email;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AccountCreatedEmailRequest extends EmailRequest {
    public AccountCreatedEmailRequest(String to, String username) {
        super(to, username);
    }
}
