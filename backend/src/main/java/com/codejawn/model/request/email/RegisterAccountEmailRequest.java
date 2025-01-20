package com.codejawn.model.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterAccountRequest extends EmailRequest {
    private String code;

    public RegisterAccountRequest(String to, String username, String code) {
        super(to, username);
        this.code = code;
    }
}