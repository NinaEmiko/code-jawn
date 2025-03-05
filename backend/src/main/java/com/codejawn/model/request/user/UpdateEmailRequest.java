package com.codejawn.model.request.user;

import jakarta.validation.constraints.Email;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateEmailRequest {
    private Long id;
    @Email
    private String newEmail;
}
