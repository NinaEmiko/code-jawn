package com.codejawn.model.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateEmailRequest extends EmailRequest {
    public UpdateEmailRequest(String to, String username) {
        super(to, username);
    }
}