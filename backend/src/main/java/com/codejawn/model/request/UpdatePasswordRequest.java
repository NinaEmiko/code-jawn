package com.codejawn.model.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdatePasswordRequest extends EmailRequest {
    public UpdatePasswordRequest(String to, String username) {
        super(to, username);
    }
}