package com.codejawn.util;

import lombok.Getter;

@Getter
public enum CodeJawnError {
    USER_NOT_FOUND("User not found"),
    ROLE_USER_NOT_FOUNT("Role USER not found"),
    ROLE_ADMIN_NOT_FOUND("Role ADMIN not found"),
    UPDATE_USERNAME_ERROR("Error occurred while updating username"),
    UPDATE_EMAIL_ERROR("Error occurred while updating email"),
    LESSON_NOT_FOUND("Lesson not found");

    private final String message;

    CodeJawnError(String message) {
        this.message = message;
    }
}
