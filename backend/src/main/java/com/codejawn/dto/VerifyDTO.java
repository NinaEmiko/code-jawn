package com.codejawn.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VerifyDTO {
    private String email;
    private String code;
}
