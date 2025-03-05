package com.codejawn.model.request.user;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdatePasswordRequest {
    private Long id;
    private String oldPassword;
    private String newPassword;
}
