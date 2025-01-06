package com.codejawn.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserAccountResponseDTO {
    private String username;
    private String email;
    private Long userId;
}
