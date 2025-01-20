package com.codejawn.util;

import org.apache.commons.lang3.RandomStringUtils;

public class VerificationCodeGenerator {
    public static String generate() {
        return RandomStringUtils.random(6, 0, 0, true, true);
    }
}
