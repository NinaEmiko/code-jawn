package com.codejawn.model.request.email;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PasswordUpdatedEmailRequest extends EmailRequest {
    public PasswordUpdatedEmailRequest(String to, String username) {
        super(to, username);
    }
}