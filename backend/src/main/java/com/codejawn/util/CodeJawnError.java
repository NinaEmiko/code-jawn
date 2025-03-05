package com.codejawn.util;

import lombok.Getter;

@Getter
public enum CodeJawnError {
    REGISTER_USER_ERROR("Error occurred while registering user"),
    UPDATE_PASSWORD_ERROR("Error occurred while updating password"),
    CANCEL_VERIFICATION_CODE_ERROR("Error occurred while deleting verification code"),
    VERIFICATION_CODE_NOT_FOUND("Verification code not found"),
    VERIFICATION_CODE_INCORRECT("Verification code is incorrect"),
    USER_NOT_FOUND("User not found"),
    ROLE_NOT_FOUND("Role not found"),
    CREATE_USER_ERROR("Error occurred while creating new user"),
    DELETE_VERIFICATION_CODE_ERROR("Error occurred while deleting verification code"),
    ROLE_ADMIN_NOT_FOUND("Role ADMIN not found"),
    UPDATE_USERNAME_ERROR("Error occurred while updating username"),
    UPDATE_EMAIL_ERROR("Error occurred while updating email"),
    INVALID_VERIFICATION_EMAIL("Invalid verification email"),
    DELETE_USER_ERROR("Error occurred while deleting user account"),
    LESSON_NOT_FOUND("Lesson not found");

    private final String message;

    CodeJawnError(String message) {
        this.message = message;
    }
}
