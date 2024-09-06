package com.codejawn.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdatePasswordDTO {
    private Long id;
    private String oldPassword;
    private String newPassword;
}
