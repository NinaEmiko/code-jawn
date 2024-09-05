package com.codejawn.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateUsernameDTO {
    private Long id;
    private String newUsername;
}
