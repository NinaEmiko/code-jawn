package com.codejawn.controller;

import com.codejawn.dto.*;
import com.codejawn.model.UserAccount;
import com.codejawn.repository.UserAccountRepository;
import com.codejawn.response.UpdateEmailResponse;
import com.codejawn.response.UpdateUsernameResponse;
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

    @Mock
    UserAccountRepository userAccountRepository;
    @Mock
    UserAccountService userAccountService;
    @Mock
    AuthResponseDTO authResponseDTO;
    @Mock
    LoginDTO loginDTO;
    @Mock
    UserAccount userAccount;
    @Mock
    RegisterDTO registerDTO;
    @Mock
    UpdatePasswordDTO updatePasswordDTO;
    @Mock
    UpdateEmailDTO updateEmailDTO;
    @Mock
    UpdateUsernameDTO updateUsernameDTO;
    @InjectMocks
    UserAccountController userAccountController;
    @Mock
    UpdateEmailResponse updateEmailResponse;
    @Mock
    UpdateUsernameResponse updateUsernameResponse;
    @Mock
    UserAccountResponseDTO userAccountResponseDTO;
    private VerifyDTO verifyDTO;
    @BeforeEach
    void setup() {
        loginDTO = new LoginDTO();
        loginDTO.setUsername("username");
        loginDTO.setPassword("password");

        userAccount = new UserAccount();
        userAccount.setUsername("username");
        userAccount.setEmail("email");
        userAccount.setPassword("password");

        registerDTO = new RegisterDTO();
        registerDTO.setPassword("password");
        registerDTO.setUsername("username");
        registerDTO.setEmail("email");

        updatePasswordDTO = new UpdatePasswordDTO();
        updatePasswordDTO.setId(1L);
        updatePasswordDTO.setNewPassword("newPassword");
        updatePasswordDTO.setOldPassword("oldPassword");

        updateEmailResponse = new UpdateEmailResponse();
        updateEmailResponse.setNewEmail("newEmail");

        updateEmailDTO = new UpdateEmailDTO();
        updateEmailDTO.setId(1L);
        updateEmailDTO.setNewEmail("newEmail");

        updateUsernameResponse = new UpdateUsernameResponse();
        updateUsernameResponse.setNewUsername("newUsername");

        updateUsernameDTO = new UpdateUsernameDTO();
        updateUsernameDTO.setId(1L);
        updateUsernameDTO.setNewUsername("newUsername");

        authResponseDTO = new AuthResponseDTO("token");
        authResponseDTO.setUserId(1L);
        authResponseDTO.setRoles(null);
        authResponseDTO.setLessonTracker(null);
        authResponseDTO.setEmail("email");
        authResponseDTO.setUsername("username");

        userAccountResponseDTO.setEmail("email");
        userAccountResponseDTO.setUsername("username");
        userAccountResponseDTO.setUserId(1L);

        verifyDTO = new VerifyDTO();
        verifyDTO.setCode("code");
        verifyDTO.setEmail("email");
    }

    @Test
    void verifyRefresh_shouldMakeCallToUserAccountService(){
        when(userAccountService.refreshVerificationCode(anyString())).thenReturn("SUCCESS");
        userAccountController.verifyRefresh(verifyDTO);
        verify(userAccountService).refreshVerificationCode("email");
    }

    @Test
    void verifyRefresh_shouldReturnFailed(){
        when(userAccountService.refreshVerificationCode(anyString())).thenThrow(new RuntimeException());
        ResponseEntity<?> response = userAccountController.verifyRefresh(verifyDTO);
        Assertions.assertEquals(response.getBody(), StatusCode.FAILED.name());
    }

    @Test
    void verify_shouldMakeCallToUserAccountService(){
        when(userAccountService.verify(anyString(), anyString())).thenReturn(userAccount);
        userAccountController.verify(verifyDTO);
        verify(userAccountService).verify("email", "code");
    }

    @Test
    void verify_shouldReturnFailed(){
        when(userAccountService.verify(anyString(), anyString())).thenThrow(new RuntimeException());
        ResponseEntity<?> response = userAccountController.verify(verifyDTO);
        Assertions.assertEquals(response.getBody(), StatusCode.FAILED.name());
    }

    @Test
    void getUserAccount_shouldMakeCallToUserAccountService(){
        when(userAccountService.getUserAccount(anyLong())).thenReturn(userAccountResponseDTO);
        userAccountController.getUserAccount(1L);
        verify(userAccountService).getUserAccount(1L);
    }

    @Test
    void getUserAccount_shouldReturnFailed(){
        when(userAccountService.getUserAccount(anyLong())).thenThrow(new RuntimeException());
        ResponseEntity<?> response = userAccountController.getUserAccount(1L);
        Assertions.assertEquals(response.getBody(), StatusCode.FAILED.name());
    }

    @Test
    void login_shouldMakeCallToUserAccountService(){
        when(userAccountService.login(anyString(), anyString())).thenReturn(authResponseDTO);
        userAccountController.login(loginDTO);
        verify(userAccountService).login("username","password");
    }

    @Test
    void login_shouldReturnFailed(){
        when(userAccountService.login(anyString(), anyString())).thenThrow(new RuntimeException());
        ResponseEntity<?> response = userAccountController.login(loginDTO);
        Assertions.assertEquals(response.getBody(), StatusCode.FAILED.name());
    }

    @Test
    void register_shouldMakeCallToUserAccountService() {
        when(userAccountRepository.existsByUsername(anyString())).thenReturn(false);
        when(userAccountService.register(anyString(), anyString(), anyString())).thenReturn("SUCCESS");
        userAccountController.register(registerDTO);
        verify(userAccountService).register("username", "email", "password");
    }

    @Test
    void register_shouldReturnFailed() {
        when(userAccountRepository.existsByUsername(anyString())).thenReturn(false);
        when(userAccountService.register(anyString(), anyString(), anyString())).thenThrow(new RuntimeException());
        ResponseEntity<?> response = userAccountController.register(registerDTO);
        Assertions.assertEquals(response.getBody(), StatusCode.FAILED.name());
    }

    @Test
    void updatePassword_shouldMakeCallToUserAccountService(){
        doNothing().when(userAccountService).updatePassword(anyLong(), anyString(), anyString());
        userAccountController.updatePassword(updatePasswordDTO);
        verify(userAccountService).updatePassword(1L, "oldPassword", "newPassword");
    }

    @Test
    void updatePassword_shouldReturnSuccess(){
        doNothing().when(userAccountService).updatePassword(anyLong(), anyString(), anyString());
        ResponseEntity<?> response = userAccountController.updatePassword(updatePasswordDTO);
        Assertions.assertEquals(response.getBody(), StatusCode.SUCCESS.name());
    }

    @Test
    void updatePassword_shouldReturnFailed(){
        doThrow(new RuntimeException()).when(userAccountService).updatePassword(anyLong(), anyString(), anyString());
        ResponseEntity<?> response = userAccountController.updatePassword(updatePasswordDTO);
        Assertions.assertEquals(response.getBody(), StatusCode.FAILED.name());
    }

    @Test
    void updateEmail_shouldMakeCallToUserAccountService(){
        when(userAccountService.updateEmail(anyLong(), anyString())).thenReturn(updateEmailResponse);
        userAccountController.updateEmail(updateEmailDTO);
        verify(userAccountService).updateEmail(1L, "newEmail");
    }

    @Test
    void updateEmail_shouldReturnFailed(){
        doThrow(new RuntimeException()).when(userAccountService).updateEmail(anyLong(), anyString());
        ResponseEntity<?> response = userAccountController.updateEmail(updateEmailDTO);
        Assertions.assertEquals(response.getBody(), StatusCode.FAILED.name());
    }

    @Test
    void updateUsername_shouldMakeCallToUserAccountService(){
        when(userAccountService.updateUsername(anyLong(), anyString())).thenReturn(updateUsernameResponse);
        userAccountController.updateUsername(updateUsernameDTO);
        verify(userAccountService).updateUsername(1L, "newUsername");
    }

    @Test
    void updateUsername_shouldReturnFailed(){
        doThrow(new RuntimeException()).when(userAccountService).updateUsername(anyLong(), anyString());
        ResponseEntity<?> response =  userAccountController.updateUsername(updateUsernameDTO);
        Assertions.assertEquals(response.getBody(), StatusCode.FAILED.name());
    }

    @Test
    void deleteAccount_shouldMakeCallToUserAccountService(){
        when(userAccountService.deleteUser(anyLong())).thenReturn("");
        userAccountController.deleteAccount(1L);
        verify(userAccountService).deleteUser(1L);
    }

    @Test
    void deleteAccount_shouldReturnFailed(){
        when(userAccountService.deleteUser(anyLong())).thenThrow(new RuntimeException());
        ResponseEntity<?> response = userAccountController.deleteAccount(1L);
        Assertions.assertEquals(response.getBody(), StatusCode.FAILED.name());
    }

    @Test
    void register_shouldReturnUsernameIsTaken() {
        when(userAccountRepository.existsByUsername(anyString())).thenReturn(true);
        ResponseEntity<?> response = userAccountController.register(registerDTO);
        verify(userAccountService, times(0)).register("username", "email", "password");
        assertEquals(response.getBody(), "Username is taken!");
    }

    @Test
    void authResponseDtoFields_shouldMatch(){
        Assertions.assertEquals(authResponseDTO.getUserId(), 1L);
        Assertions.assertEquals(authResponseDTO.getUsername(), "username");
        Assertions.assertEquals(authResponseDTO.getEmail(), "email");
        Assertions.assertEquals(authResponseDTO.getTokenType(), "Bearer ");
        Assertions.assertEquals(authResponseDTO.getAccessToken(), "token");
        assertNull(authResponseDTO.getRoles());
        assertNull(authResponseDTO.getLessonTracker());
    }
}
