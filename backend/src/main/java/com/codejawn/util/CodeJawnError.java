package com.codejawn.util;

import lombok.Getter;

@Getter
public enum CodeJawnError {
    REGISTER_USER_ERROR("Error occurred while registering user"),
    VERIFICATION_CODE_NOT_FOUND("Verification code not found"),
    VERIFICATION_CODE_INCORRECT("Verification code is incorrect"),
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
