package com.codejawn.config;

import com.codejawn.security.JWTAuthenticationFilter;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.ObjectPostProcessor;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@ExtendWith(MockitoExtension.class)
public class SecurityConfigTest {
    @InjectMocks
    SecurityConfig securityConfig;
    @Mock
    JWTAuthenticationFilter jwtAuthenticationFilter;
    @Mock
    AuthenticationManager authenticationManager;
    @Mock
    AuthenticationConfiguration authenticationConfiguration;
    @Mock
    PasswordEncoder passwordEncoder;
    @Mock
    SecurityFilterChain securityFilterChain;
    @Test
    void jwtAuthenticationFilterTest() {
        Assertions.assertNotNull(jwtAuthenticationFilter = securityConfig.jwtAuthenticationFilter());
    }
    @Test
    void passwordEncoderTest() {
        Assertions.assertNotNull(passwordEncoder = securityConfig.passwordEncoder());
    }
    @Test
    void authenticationManagerTest() throws Exception {
        Assertions.assertNull(authenticationManager = securityConfig.authenticationManager(authenticationConfiguration));
    }
    @Test
    void filterChainTest() throws Exception {

    }
}
