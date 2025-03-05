package com.codejawn.model.request.email;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmailUpdatedEmailRequest extends EmailRequest {
    public EmailUpdatedEmailRequest(String to, String username) {
        super(to, username);
    }
}
