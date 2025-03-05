package com.codejawn.controller;

import com.codejawn.model.UserAccount;
import com.codejawn.model.request.user.*;
import com.codejawn.model.response.LoginResponse;
import com.codejawn.repository.UserAccountRepository;
import com.codejawn.model.response.UpdateEmailResponse;
import com.codejawn.model.response.UpdateUsernameResponse;
import com.codejawn.service.UserAccountService;
import com.codejawn.util.StatusCode;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class UserAccountControllerTest {
    @InjectMocks
    UserAccountController userAccountController;
    @Mock
    UserAccountRepository userAccountRepository;
    @Mock
    UserAccountService userAccountService;
    private UserAccount userAccount;
    private UpdateEmailResponse updateEmailResponse;
    private UpdateUsernameResponse updateUsernameResponse;
    private LoginRequest loginRequest;
    private RegisterRequest registerRequest;
    private UpdatePasswordRequest updatePasswordRequest;
    private UpdateEmailRequest updateEmailRequest;
    private UpdateUsernameRequest updateUsernameRequest;
    private LoginResponse loginResponse;
    private VerifyAccountRegistrationRequest verifyAccountRegistrationRequest;
    private VerifyRefreshRequest verifyRefreshRequest;
    private VerifyCancelRequest verifyCancelRequest;
    private VerifyEmailUpdatedRequest verifyEmailUpdatedRequest;

    @BeforeEach
    void setup() {
        loginRequest = new LoginRequest();
        loginRequest.setUsername("username");
        loginRequest.setPassword("password");

        userAccount = new UserAccount();
        userAccount.setUsername("username");
        userAccount.setEmail("email");
        userAccount.setPassword("password");

        registerRequest = new RegisterRequest();
        registerRequest.setPassword("password");
        registerRequest.setUsername("username");
        registerRequest.setEmail("email");

        updatePasswordRequest = new UpdatePasswordRequest();
        updatePasswordRequest.setId(1L);
        updatePasswordRequest.setNewPassword("newPassword");
        updatePasswordRequest.setOldPassword("oldPassword");

        updateEmailResponse = new UpdateEmailResponse();
        updateEmailResponse.setNewEmail("newEmail");

        updateEmailRequest = new UpdateEmailRequest();
        updateEmailRequest.setId(1L);
        updateEmailRequest.setNewEmail("newEmail");

        updateUsernameResponse = new UpdateUsernameResponse();
        updateUsernameResponse.setNewUsername("newUsername");

        updateUsernameRequest = new UpdateUsernameRequest();
        updateUsernameRequest.setId(1L);
        updateUsernameRequest.setNewUsername("newUsername");

        loginResponse = new LoginResponse("token");
        loginResponse.setUserId(1L);
        loginResponse.setRoles(null);
        loginResponse.setLessonTracker(null);
        loginResponse.setEmail("email");
        loginResponse.setUsername("username");

        verifyAccountRegistrationRequest = new VerifyAccountRegistrationRequest();
        verifyAccountRegistrationRequest.setCode("code");
        verifyAccountRegistrationRequest.setEmail("email");

        verifyRefreshRequest = new VerifyRefreshRequest();
        verifyRefreshRequest.setEmail("email");

        verifyCancelRequest = new VerifyCancelRequest();
        verifyCancelRequest.setEmail("email");

        verifyEmailUpdatedRequest = new VerifyEmailUpdatedRequest();
        verifyEmailUpdatedRequest.setEmail("email");
        verifyEmailUpdatedRequest.setCode("code");
        verifyEmailUpdatedRequest.setId(1L);
    }

    @Test
    void login_shouldMakeCallToUserAccountService(){
        when(userAccountService.login(any())).thenReturn(loginResponse);
        userAccountController.login(loginRequest);
        verify(userAccountService).login(loginRequest);
    }

    @Test
    void login_shouldReturnLoginResponse(){
        when(userAccountService.login(any())).thenReturn(loginResponse);
        ResponseEntity<LoginResponse> response = userAccountController.login(loginRequest);
        Assertions.assertNotNull(response.getBody());
    }

    @Test
    void login_shouldReturnNullResponse(){
        when(userAccountService.login(any())).thenThrow(new RuntimeException());
        ResponseEntity<?> response = userAccountController.login(loginRequest);
        Assertions.assertNull(response.getBody());
    }

    @Test
    void verifyRefresh_shouldMakeCallToUserAccountService(){
        doNothing().when(userAccountService).refreshVerificationCode(any());
        userAccountController.verifyRefresh(verifyRefreshRequest);
        verify(userAccountService).refreshVerificationCode(verifyRefreshRequest);
    }

    @Test
    void verifyRefresh_shouldReturnSuccess(){
        doNothing().when(userAccountService).refreshVerificationCode(any());
        ResponseEntity<String> response = userAccountController.verifyRefresh(verifyRefreshRequest);
        Assertions.assertEquals(response.getBody(), StatusCode.SUCCESS.name());
    }

    @Test
    void verifyRefresh_shouldReturnFailed(){
        doThrow(new RuntimeException()).when(userAccountService).refreshVerificationCode(any());
        ResponseEntity<String> response = userAccountController.verifyRefresh(verifyRefreshRequest);
        Assertions.assertEquals(response.getBody(), StatusCode.FAILED.name());
    }

    @Test
    void verifyCancel_shouldMakeCallToUserAccountService(){
        doNothing().when(userAccountService).cancelVerificationCode(any());
        userAccountController.verifyCancel(verifyCancelRequest);
        verify(userAccountService).cancelVerificationCode(verifyCancelRequest);
    }

    @Test
    void verifyCancel_shouldReturnSuccess(){
        doNothing().when(userAccountService).cancelVerificationCode(any());
        ResponseEntity<String> response = userAccountController.verifyCancel(verifyCancelRequest);
        Assertions.assertEquals(response.getBody(), StatusCode.SUCCESS.name());
    }

    @Test
    void verifyCancel_shouldReturnFailed(){
        doThrow(new RuntimeException()).when(userAccountService).cancelVerificationCode(any());
        ResponseEntity<String> response = userAccountController.verifyCancel(verifyCancelRequest);
        Assertions.assertEquals(response.getBody(), StatusCode.FAILED.name());
    }

    @Test
    void verifyAccountRegistration_shouldMakeCallToUserAccountService(){
        when(userAccountService.verifyAccountRegistration(any())).thenReturn(userAccount);
        userAccountController.verifyAccountRegistration(verifyAccountRegistrationRequest);
        verify(userAccountService).verifyAccountRegistration(verifyAccountRegistrationRequest);
    }

    @Test
    void verifyAccountRegistration_shouldReturnUserAccount(){
        when(userAccountService.verifyAccountRegistration(any())).thenReturn(userAccount);
        ResponseEntity<?> response = userAccountController.verifyAccountRegistration(verifyAccountRegistrationRequest);
        Assertions.assertNotNull(response.getBody());
    }

    @Test
    void verifyAccountRegistration_shouldReturnNull(){
        when(userAccountService.verifyAccountRegistration(any())).thenThrow(new RuntimeException());
        ResponseEntity<?> response = userAccountController.verifyAccountRegistration(verifyAccountRegistrationRequest);
        Assertions.assertNull(response.getBody());
    }

    @Test
    void verifyEmailUpdated_shouldMakeCallToUserAccountService(){
        when(userAccountService.verifyEmailUpdated(any())).thenReturn("SUCCESS");
        userAccountController.verifyEmailUpdated(verifyEmailUpdatedRequest);
        verify(userAccountService).verifyEmailUpdated(verifyEmailUpdatedRequest);
    }

    @Test
    void verifyEmailUpdated_shouldReturnFailed(){
        when(userAccountService.verifyEmailUpdated(any())).thenThrow(new RuntimeException());
        ResponseEntity<?> response = userAccountController.verifyEmailUpdated(verifyEmailUpdatedRequest);
        Assertions.assertEquals(response.getBody(), StatusCode.FAILED.name());
    }

    @Test
    void verifyEmailUpdated_shouldReturnSuccess(){
        when(userAccountService.verifyEmailUpdated(any())).thenReturn("SUCCESS");
        ResponseEntity<?> response = userAccountController.verifyEmailUpdated(verifyEmailUpdatedRequest);
        Assertions.assertEquals(response.getBody(), StatusCode.SUCCESS.name());
    }

    @Test
    void register_shouldMakeCallToUserAccountService() {
        when(userAccountRepository.existsByUsername(anyString())).thenReturn(false);
        doNothing().when(userAccountService).register(any());
        userAccountController.register(registerRequest);
        verify(userAccountService).register(registerRequest);
    }

    @Test
    void register_shouldReturnSuccess() {
        when(userAccountRepository.existsByUsername(anyString())).thenReturn(false);
        doNothing().when(userAccountService).register(any());
        ResponseEntity<?> response = userAccountController.register(registerRequest);
        Assertions.assertEquals(response.getBody(), StatusCode.SUCCESS.name());
    }

    @Test
    void register_shouldReturnFailed() {
        when(userAccountRepository.existsByUsername(anyString())).thenReturn(false);
        doThrow(new RuntimeException()).when(userAccountService).register(any());
        ResponseEntity<?> response = userAccountController.register(registerRequest);
        Assertions.assertEquals(response.getBody(), StatusCode.FAILED.name());
    }

    @Test
    void register_shouldReturnUsernameIsTaken() {
        when(userAccountRepository.existsByUsername(anyString())).thenReturn(true);
        ResponseEntity<?> response = userAccountController.register(registerRequest);
        verify(userAccountService, times(0)).register(registerRequest);
        assertEquals(response.getBody(), "Username is taken!");
    }

    @Test
    void updatePassword_shouldMakeCallToUserAccountService(){
        doNothing().when(userAccountService).updatePassword(any());
        userAccountController.updatePassword(updatePasswordRequest);
        verify(userAccountService).updatePassword(updatePasswordRequest);
    }

    @Test
    void updatePassword_shouldReturnSuccess(){
        doNothing().when(userAccountService).updatePassword(any());
        ResponseEntity<?> response = userAccountController.updatePassword(updatePasswordRequest);
        Assertions.assertEquals(response.getBody(), StatusCode.SUCCESS.name());
    }

    @Test
    void updatePassword_shouldReturnFailed(){
        doThrow(new RuntimeException()).when(userAccountService).updatePassword(any());
        ResponseEntity<?> response = userAccountController.updatePassword(updatePasswordRequest);
        Assertions.assertEquals(response.getBody(), StatusCode.FAILED.name());
    }

    @Test
    void updateEmail_shouldMakeCallToUserAccountService(){
        doNothing().when(userAccountService).updateEmail(any());
        userAccountController.updateEmail(updateEmailRequest);
        verify(userAccountService).updateEmail(updateEmailRequest);
    }

    @Test
    void updateEmail_shouldReturnFailed(){
        doThrow(new RuntimeException()).when(userAccountService).updateEmail(any());
        ResponseEntity<?> response = userAccountController.updateEmail(updateEmailRequest);
        Assertions.assertEquals(response.getBody(), StatusCode.FAILED.name());
    }

    @Test
    void updateEmail_shouldReturnResponse(){
        doNothing().when(userAccountService).updateEmail(any());
        ResponseEntity<?> response = userAccountController.updateEmail(updateEmailRequest);
        Assertions.assertNotNull(response.getBody());
    }

    @Test
    void updateUsername_shouldMakeCallToUserAccountService(){
        when(userAccountService.updateUsername(any())).thenReturn(updateUsernameResponse);
        userAccountController.updateUsername(updateUsernameRequest);
        verify(userAccountService).updateUsername(updateUsernameRequest);
    }

    @Test
    void updateUsername_shouldReturnNull(){
        doThrow(new RuntimeException()).when(userAccountService).updateUsername(any());
        ResponseEntity<?> response =  userAccountController.updateUsername(updateUsernameRequest);
        Assertions.assertNull(response.getBody());
    }

    @Test
    void updateUsername_shouldReturnResponse(){
        when(userAccountService.updateUsername(any())).thenReturn(updateUsernameResponse);
        ResponseEntity<?> response =  userAccountController.updateUsername(updateUsernameRequest);
        Assertions.assertNotNull(response.getBody());
    }

    @Test
    void deleteAccount_shouldMakeCallToUserAccountService(){
        doNothing().when(userAccountService).deleteUser(anyLong());
        userAccountController.deleteAccount(1L);
        verify(userAccountService).deleteUser(1L);
    }

    @Test
    void deleteAccount_shouldReturnFailed(){
        doThrow(new RuntimeException()).when(userAccountService).deleteUser(anyLong());
        ResponseEntity<?> response = userAccountController.deleteAccount(1L);
        Assertions.assertEquals(response.getBody(), StatusCode.FAILED.name());
    }

    @Test
    void deleteAccount_shouldReturnSuccess(){
        doNothing().when(userAccountService).deleteUser(anyLong());
        ResponseEntity<?> response = userAccountController.deleteAccount(1L);
        Assertions.assertEquals(response.getBody(), StatusCode.SUCCESS.name());
    }
}
