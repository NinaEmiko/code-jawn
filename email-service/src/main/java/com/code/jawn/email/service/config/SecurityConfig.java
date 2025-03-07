package com.code.jawn.email.service.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(authorizeRequests ->
                        authorizeRequests
                                .requestMatchers("/api/email/account-created",
                                        "/api/email/account-deleted",
                                        "/api/email/email-updated",
                                        "/api/email/password-updated",
                                        "/api/email/register-account",
                                        "/api/email/update-email"
                                ).permitAll()
                                .anyRequest().authenticated()
                );
        return http.build();
    }
}
