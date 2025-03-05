package com.codejawn.model.request.user;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateUsernameRequest {
    private Long id;
    private String newUsername;
}
