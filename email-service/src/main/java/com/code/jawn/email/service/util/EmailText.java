package com.code.jawn.email.service.util;

import lombok.Getter;

public enum EmailText {
    UPDATE_PASSWORD_TEXT(", your password has successfully been updated. If this was a mistake, please contact us."),
    UPDATE_EMAIL_TEXT(", your email has successfully been updated. If this was a mistake, please contact us."),
    DELETE_ACCOUNT_TEXT(", we're sorry to see you go! Your Code Jawn account has successfully been deleted."),
    REGISTER_ACCOUNT_TEXT("! Please use this code to complete the registration process for your new Code Jawn account: ");

    private final String message;

    EmailText(String message) {
        this.message = message;
    }

    public String getMessage(String username) {
        return "Hello, " + username + message;
    }
}
