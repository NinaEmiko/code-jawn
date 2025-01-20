package com.codejawn.util;

import lombok.Getter;

@Getter
public enum EndPoint {
    REGISTER("/api/email/register-account"),
    UPDATE_PASSWORD("/api/email/update-password"),
    UPDATE_EMAIL("/api/email/update-email"),
    DELETE_ACCOUNT("/api/email/delete-account");

    private final String endpoint;

    EndPoint(String endpoint) {
        this.endpoint = endpoint;
    }
}
