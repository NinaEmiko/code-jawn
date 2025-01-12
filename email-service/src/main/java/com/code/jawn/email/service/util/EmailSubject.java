package com.code.jawn.email.service.util;

import lombok.Getter;

@Getter
public enum EmailSubject {
    UPDATE_PASSWORD_SUBJECT("Your Code Jawn password has been updated"),
    UPDATE_EMAIL_SUBJECT("Your Code Jawn email has been updated"),
    DELETE_ACCOUNT_SUBJECT("Your Code Jawn account has been deleted"),
    REGISTER_ACCOUNT_SUBJECT("Confirmation: Finish creating your new Code Jawn account.");

    private final String message;

    EmailSubject(String message) {
        this.message = message;
    }
}
