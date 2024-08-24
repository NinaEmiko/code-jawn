package com.codejawn.dto;

import jakarta.validation.constraints.Email;
import lombok.Data;

@Data
public class UpdateEmailDTO {
    Long id;
    @Email
    String newEmail;
}
