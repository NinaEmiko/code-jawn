package com.codejawn.config;

import com.codejawn.security.JWTAuthEntryPoint;
import com.codejawn.security.JWTAuthenticationFilter;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@AllArgsConstructor
public class SecurityConfig {

    private JWTAuthEntryPoint authEntryPoint;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .exceptionHandling()
                .authenticationEntryPoint(authEntryPoint)
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeHttpRequests(authorizeRequests ->
                        authorizeRequests
                                .requestMatchers("/api/auth/login",
                                        "/api/auth/register",
                                        "/api/auth/verify",
                                        "/api/auth/verify-refresh",
                                        "/api/auth/get/{id}",
                                        "/api/lessons/get/{id}",
                                        "/api/java/datatypes/lessons/update",
                                        "/api/java/datatypes/lessons/get/{id}",
                                        "/api/java/datatypes/lessons/reset",
                                        "/api/java/datatypes/lessons/complete",
                                        "/api/java/variables/lessons/update",
                                        "/api/java/variables/lessons/get/{id}",
                                        "/api/java/variables/lessons/reset",
                                        "/api/java/variables/lessons/complete",
                                        "/api/java/for-loops/lessons/update",
                                        "/api/java/for-loops/lessons/get/{id}",
                                        "/api/java/for-loops/lessons/reset",
                                        "/api/java/for-loops/lessons/complete",
                                        "/api/java/conditionals/lessons/update",
                                        "/api/java/conditionals/lessons/get/{id}",
                                        "/api/java/conditionals/lessons/reset",
                                        "/api/java/conditionals/lessons/complete",
                                        "/api/java/arrays/lessons/update",
                                        "/api/java/arrays/lessons/get/{id}",
                                        "/api/java/arrays/lessons/reset",
                                        "/api/java/arrays/lessons/complete",
                                        "/api/java/methods/lessons/update",
                                        "/api/java/methods/lessons/get/{id}",
                                        "/api/java/methods/lessons/reset",
                                        "/api/java/methods/lessons/complete",
                                        "/api/java/operators/lessons/update",
                                        "/api/java/operators/lessons/get/{id}",
                                        "/api/java/operators/lessons/reset",
                                        "/api/java/operators/lessons/complete",
                                        "/api/auth/delete/{id}",
                                        "/api/auth/update-password",
                                        "/api/auth/update-email",
                                        "/api/auth/update-username")
                                .permitAll()
                                .anyRequest().authenticated()
                )
                .httpBasic()
                .and()
                .cors();

        http.addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public  JWTAuthenticationFilter jwtAuthenticationFilter() {
        return new JWTAuthenticationFilter();
    }
}
