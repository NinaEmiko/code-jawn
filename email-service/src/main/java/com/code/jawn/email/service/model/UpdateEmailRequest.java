package com.code.jawn.email.service.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateEmailRequest extends EmailRequest {
    private String code;
    public UpdateEmailRequest(String to, String username, String code) {
        super(to, username);
        this.code = code;
    }
}
