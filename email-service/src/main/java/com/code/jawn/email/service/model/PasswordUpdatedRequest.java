package com.code.jawn.email.service.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PasswordUpdatedRequest extends EmailRequest {
    public PasswordUpdatedRequest(String to, String username) {
        super(to, username);
    }
}
