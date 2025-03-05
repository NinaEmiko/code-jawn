package com.codejawn.model.request.user;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VerifyEmailUpdatedRequest {
    private long id;
    private String email;
    private String code;
}
