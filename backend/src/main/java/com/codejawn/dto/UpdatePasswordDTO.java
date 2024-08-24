package com.codejawn.dto;

import lombok.Data;

@Data
public class UpdatePasswordDTO {
    private Long id;
    private String oldPassword;
    private String newPassword;
}
