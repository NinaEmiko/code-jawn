package com.codejawn.model.request.email;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterAccountEmailRequest extends EmailRequest {
    private String code;

    public RegisterAccountEmailRequest(String to, String username, String code) {
        super(to, username);
        this.code = code;
    }
}