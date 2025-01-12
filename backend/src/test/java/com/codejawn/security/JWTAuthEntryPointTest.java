package com.codejawn.security;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.springframework.security.core.AuthenticationException;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class JWTAuthEntryPointTest {

    private JWTAuthEntryPoint jwtAuthEntryPoint;
    private HttpServletRequest mockRequest;
    private HttpServletResponse mockResponse;
    private AuthenticationException mockAuthException;

    @BeforeEach
    void setUp() {
        jwtAuthEntryPoint = new JWTAuthEntryPoint();
        mockRequest = mock(HttpServletRequest.class);
        mockResponse = mock(HttpServletResponse.class);
        mockAuthException = mock(AuthenticationException.class);
    }

    @Test
    void testCommence_ShouldSendUnauthorizedError_WhenAuthenticationFails() throws IOException, ServletException {
        String expectedMessage = "Authentication failed";
        when(mockAuthException.getMessage()).thenReturn(expectedMessage);

        jwtAuthEntryPoint.commence(mockRequest, mockResponse, mockAuthException);

        ArgumentCaptor<Integer> statusCaptor = ArgumentCaptor.forClass(Integer.class);
        ArgumentCaptor<String> messageCaptor = ArgumentCaptor.forClass(String.class);

        verify(mockResponse).sendError(statusCaptor.capture(), messageCaptor.capture());

        assertEquals(HttpServletResponse.SC_UNAUTHORIZED, statusCaptor.getValue());

        assertEquals(expectedMessage, messageCaptor.getValue());
    }
}
