package com.codejawn.util;

import lombok.Getter;

@Getter
public enum EndPoint {
    REGISTER_ACCOUNT("/api/email/register-account"),
    PASSWORD_UPDATED("/api/email/password-updated"),
    EMAIL_UPDATED("/api/email/email-updated"),
    UPDATE_EMAIL("/api/email/update-email"),
    ACCOUNT_CREATED("/api/email/account-created"),
    ACCOUNT_DELETED("/api/email/account-deleted");

    private final String endpoint;

    EndPoint(String endpoint) {
        this.endpoint = endpoint;
    }
}
