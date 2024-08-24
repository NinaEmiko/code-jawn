package com.codejawn.controller;

import com.codejawn.dto.*;
import com.codejawn.model.UserAccount;
import com.codejawn.repository.UserAccountRepository;
import com.codejawn.service.UserAccountService;
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

        updateEmailDTO = new UpdateEmailDTO();
        updateEmailDTO.setId(1L);
        updateEmailDTO.setNewEmail("newEmail");

        updateUsernameDTO = new UpdateUsernameDTO();
        updateUsernameDTO.setId(1L);
        updateUsernameDTO.setNewUsername("newUsername");
    }

    @Test
    void login_should_make_call_to_user_account_service(){
        when(userAccountService.login(anyString(), anyString())).thenReturn(authResponseDTO);
        userAccountController.login(loginDTO);
        verify(userAccountService, times(1)).login("username","password");
    }

    @Test
    void register_should_make_call_to_user_account_service() {
        when(userAccountRepository.existsByUsername(anyString())).thenReturn(false);
        when(userAccountService.register(anyString(), anyString(), anyString())).thenReturn(userAccount);
        userAccountController.register(registerDTO);
        verify(userAccountService, times(1)).register("username", "email", "password");
    }

    @Test
    void update_password_should_make_call_to_user_account_service(){
        doNothing().when(userAccountService).updatePassword(anyLong(), anyString(), anyString());
        userAccountController.updatePassword(updatePasswordDTO);
        verify(userAccountService, times(1)).updatePassword(1L, "oldPassword", "newPassword");
    }

    @Test
    void update_password_should_return_success(){
        doNothing().when(userAccountService).updatePassword(anyLong(), anyString(), anyString());
        ResponseEntity<?> response = userAccountController.updatePassword(updatePasswordDTO);
        Assertions.assertEquals(response.getBody(), "SUCCESS");
    }

    @Test
    void update_password_should_return_failed(){
        doThrow(new RuntimeException()).when(userAccountService).updatePassword(anyLong(), anyString(), anyString());
        ResponseEntity<?> response = userAccountController.updatePassword(updatePasswordDTO);
        Assertions.assertEquals(response.getBody(), "FAILED");
    }

    @Test
    void update_email_should_make_call_to_user_account_service(){
        doNothing().when(userAccountService).updateEmail(anyLong(), anyString());
        userAccountController.updateEmail(updateEmailDTO);
        verify(userAccountService, times(1)).updateEmail(1L, "newEmail");
    }

    @Test
    void update_email_should_return_failed(){
        doThrow(new RuntimeException()).when(userAccountService).updateEmail(anyLong(), anyString());
        ResponseEntity<?> response = userAccountController.updateEmail(updateEmailDTO);
        Assertions.assertEquals(response.getBody(), "FAILED");
//        assertThrows(RuntimeException.class, () -> {
//            userAccountService.updateEmail(1L, "newEmail");
//        });
    }

    @Test
    void update_email_should_return_success(){
        doNothing().when(userAccountService).updateEmail(anyLong(), anyString());
        ResponseEntity<?> response = userAccountController.updateEmail(updateEmailDTO);
        Assertions.assertEquals(response.getBody(), "SUCCESS");
    }

    @Test
    void update_username_should_make_call_to_user_account_service(){
        doNothing().when(userAccountService).updateUsername(anyLong(), anyString());
        userAccountController.updateUsername(updateUsernameDTO);
        verify(userAccountService, times(1)).updateUsername(1L, "newUsername");
    }

    @Test
    void update_username_should_return_success(){
        doNothing().when(userAccountService).updateUsername(anyLong(), anyString());
        ResponseEntity<?> response =  userAccountController.updateUsername(updateUsernameDTO);
        Assertions.assertEquals(response.getBody(), "SUCCESS");
    }

    @Test
    void update_username_should_return_failed(){
        doThrow(new RuntimeException()).when(userAccountService).updateUsername(anyLong(), anyString());
        ResponseEntity<?> response =  userAccountController.updateUsername(updateUsernameDTO);
        Assertions.assertEquals(response.getBody(), "FAILED");
    }

    @Test
    void delete_account_should_make_call_to_user_account_service(){
        when(userAccountService.deleteUser(anyLong())).thenReturn("");
        userAccountController.deleteAccount(1L);
        verify(userAccountService, times(1)).deleteUser(1L);
    }

    @Test
    void delete_account_should_return_failed(){
        when(userAccountService.deleteUser(anyLong())).thenThrow(new RuntimeException());
        ResponseEntity<?> response = userAccountController.deleteAccount(1L);
        Assertions.assertEquals(response.getBody(), "FAILED");
    }

    @Test
    void register_should_return_username_is_taken() {
        when(userAccountRepository.existsByUsername(anyString())).thenReturn(true);
        ResponseEntity<?> response = userAccountController.register(registerDTO);
        verify(userAccountService, times(0)).register("username", "email", "password");
        assertEquals(response.getBody(), "Username is taken!");
    }
}
