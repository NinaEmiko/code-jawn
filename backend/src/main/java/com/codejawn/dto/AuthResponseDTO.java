package com.codejawn.dto;

import com.codejawn.model.LessonTracker;
import com.codejawn.model.Role;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class AuthResponseDTO {
    private String accessToken;
    private String tokenType = "Bearer ";
    private String username;
    private String email;
    private Long userId;
    private LessonTracker lessonTracker;
    private List<Role> roles;
    public AuthResponseDTO(String accessToken) {
        this.accessToken = accessToken;
    }
}