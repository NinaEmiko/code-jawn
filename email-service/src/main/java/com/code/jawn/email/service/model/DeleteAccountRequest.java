package com.code.jawn.email.service.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DeleteAccountRequest extends EmailRequest {
    public DeleteAccountRequest(String to, String username) {
        super(to, username);
    }
}
