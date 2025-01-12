package com.codejawn.util;

import lombok.Getter;

@Getter
public enum CodeJawnError {
    USER_NOT_FOUND("User not found");

    private final String message;

    CodeJawnError(String message) {
        this.message = message;
    }
}
