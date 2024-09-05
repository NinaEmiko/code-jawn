package com.codejawn.dto;

import jakarta.validation.constraints.Email;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateEmailDTO {
    private Long id;
    @Email
    private String newEmail;
}
