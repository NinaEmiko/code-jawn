package com.codejawn.model.response;

import com.codejawn.model.LessonTracker;
import com.codejawn.model.Role;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class LoginResponse {
    private String accessToken;
    private String tokenType = "Bearer ";
    private String username;
    private String email;
    private Long userId;
    private LessonTracker lessonTracker;
    private List<Role> roles;
    public LoginResponse(String accessToken) {
        this.accessToken = accessToken;
    }
}
