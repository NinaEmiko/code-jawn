package com.codejawn.model.request.email;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateEmailEmailRequest extends EmailRequest {
    private String code;

    public UpdateEmailEmailRequest(String to, String username, String code) {
        super(to, username);
        this.code = code;
    }
}