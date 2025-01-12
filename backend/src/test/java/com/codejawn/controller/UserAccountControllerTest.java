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

import java.util.Objects;

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
    }

    @Test
    void get_user_account_should_make_call_to_user_account_service(){
        when(userAccountService.getUserAccount(anyLong())).thenReturn(userAccountResponseDTO);
        userAccountController.getUserAccount(1L);
        verify(userAccountService).getUserAccount(1L);
    }

    @Test
    void login_should_make_call_to_user_account_service(){
        when(userAccountService.login(anyString(), anyString())).thenReturn(authResponseDTO);
        userAccountController.login(loginDTO);
        verify(userAccountService).login("username","password");
    }

    @Test
    void register_should_make_call_to_user_account_service() {
        when(userAccountRepository.existsByUsername(anyString())).thenReturn(false);
        when(userAccountService.register(anyString(), anyString(), anyString())).thenReturn(userAccount);
        userAccountController.register(registerDTO);
        verify(userAccountService).register("username", "email", "password");
    }

    @Test
    void update_password_should_make_call_to_user_account_service(){
        doNothing().when(userAccountService).updatePassword(anyLong(), anyString(), anyString());
        userAccountController.updatePassword(updatePasswordDTO);
        verify(userAccountService).updatePassword(1L, "oldPassword", "newPassword");
    }

    @Test
    void update_password_should_return_success(){
        doNothing().when(userAccountService).updatePassword(anyLong(), anyString(), anyString());
        ResponseEntity<?> response = userAccountController.updatePassword(updatePasswordDTO);
        Assertions.assertEquals(response.getBody(), StatusCode.SUCCESS.name());
    }

    @Test
    void update_password_should_return_failed(){
        doThrow(new RuntimeException()).when(userAccountService).updatePassword(anyLong(), anyString(), anyString());
        ResponseEntity<?> response = userAccountController.updatePassword(updatePasswordDTO);
        Assertions.assertEquals(response.getBody(), StatusCode.FAILED.name());
    }

    @Test
    void update_email_should_make_call_to_user_account_service(){
        when(userAccountService.updateEmail(anyLong(), anyString())).thenReturn(updateEmailResponse);
        userAccountController.updateEmail(updateEmailDTO);
        verify(userAccountService).updateEmail(1L, "newEmail");
    }

    @Test
    void update_email_should_return_failed(){
        doThrow(new RuntimeException()).when(userAccountService).updateEmail(anyLong(), anyString());
        ResponseEntity<?> response = userAccountController.updateEmail(updateEmailDTO);
        Assertions.assertEquals(response.getBody(), StatusCode.FAILED.name());
    }

    @Test
    void update_username_should_make_call_to_user_account_service(){
        when(userAccountService.updateUsername(anyLong(), anyString())).thenReturn(updateUsernameResponse);
        userAccountController.updateUsername(updateUsernameDTO);
        verify(userAccountService).updateUsername(1L, "newUsername");
    }

    @Test
    void update_username_should_return_failed(){
        doThrow(new RuntimeException()).when(userAccountService).updateUsername(anyLong(), anyString());
        ResponseEntity<?> response =  userAccountController.updateUsername(updateUsernameDTO);
        Assertions.assertEquals(response.getBody(), StatusCode.FAILED.name());
    }

    @Test
    void delete_account_should_make_call_to_user_account_service(){
        when(userAccountService.deleteUser(anyLong())).thenReturn("");
        userAccountController.deleteAccount(1L);
        verify(userAccountService).deleteUser(1L);
    }

    @Test
    void delete_account_should_return_failed(){
        when(userAccountService.deleteUser(anyLong())).thenThrow(new RuntimeException());
        ResponseEntity<?> response = userAccountController.deleteAccount(1L);
        Assertions.assertEquals(response.getBody(), StatusCode.FAILED.name());
    }

    @Test
    void register_should_return_username_is_taken() {
        when(userAccountRepository.existsByUsername(anyString())).thenReturn(true);
        ResponseEntity<?> response = userAccountController.register(registerDTO);
        verify(userAccountService, times(0)).register("username", "email", "password");
        assertEquals(response.getBody(), "Username is taken!");
    }

    @Test
    void auth_response_dto_fields_should_match(){
        Assertions.assertEquals(authResponseDTO.getUserId(), 1L);
        Assertions.assertEquals(authResponseDTO.getUsername(), "username");
        Assertions.assertEquals(authResponseDTO.getEmail(), "email");
        Assertions.assertEquals(authResponseDTO.getTokenType(), "Bearer ");
        Assertions.assertEquals(authResponseDTO.getAccessToken(), "token");
        assertNull(authResponseDTO.getRoles());
        assertNull(authResponseDTO.getLessonTracker());
    }
}
