package com.codejawn.service;

import com.codejawn.dto.AuthResponseDTO;
import com.codejawn.dto.UserAccountResponseDTO;
import com.codejawn.model.*;
import com.codejawn.model.java.JavaDataTypesLT;
import com.codejawn.model.java.JavaLT;
import com.codejawn.repository.RoleRepository;
import com.codejawn.repository.UserAccountRepository;
import com.codejawn.response.UpdateEmailResponse;
import com.codejawn.response.UpdateUsernameResponse;
import com.codejawn.security.JWTGenerator;
import com.codejawn.util.CodeJawnError;
import com.codejawn.util.StatusCode;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class UserAccountServiceTest {
    @Mock
    UserAccountRepository userAccountRepository;
    @Mock
    JWTGenerator jwtGenerator;
    @Mock
    PasswordEncoder passwordEncoder;
    @Mock
    RoleRepository roleRepository;
    @Mock
    LessonTracker lessonTracker;
    @Mock
    UserAccount userAccount;
    @Mock
    Role role;
    @InjectMocks
    UserAccountService userAccountService;
    @Mock
    List<Role> roles;
    @Mock
    JavaLT javaLT;
    @Mock
    JavaDataTypesLT javaDataTypesLT;
    @Mock
    AuthenticationManager authenticationManager;
    @Mock
    Authentication authentication;
    @Mock
    UserAccountResponseDTO userAccountResponseDTO;

    @BeforeEach
    void setup() {
        List<UserAccount> userAccountList = new ArrayList<>();
        role = new Role();
        role.setName("USER");
        role.setId(1);
        role.setUserAccounts(userAccountList);

        roles = new ArrayList<>();
        roles.add(role);

        javaDataTypesLT = new JavaDataTypesLT();

        javaLT = new JavaLT();
        javaLT.setJavaDataTypesLT(javaDataTypesLT);

        lessonTracker = new LessonTracker();
        lessonTracker.setJavaLT(javaLT);
        lessonTracker.setComplete(false);


        userAccount = new UserAccount();
        userAccount.setPassword("password");
        userAccount.setEmail("email");
        userAccount.setUsername("username");
        userAccount.setRoles(roles);
        userAccount.setSubscriptionActive(true);
        userAccount.setLessonTracker(lessonTracker);

        userAccountResponseDTO.setEmail("email");
        userAccountResponseDTO.setUsername("username");
        userAccountResponseDTO.setUserId(1L);
    }

    @Test
    void get_user_account_should_return_correct_dto(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        UserAccountResponseDTO response = userAccountService.getUserAccount(1L);
        Assertions.assertEquals("username", response.getUsername());
        Assertions.assertEquals("email", response.getEmail());
        Assertions.assertTrue(userAccount.getSubscriptionActive());
        Assertions.assertEquals("password", userAccount.getPassword());
        Assertions.assertEquals(1L, response.getUserId());
        Assertions.assertEquals(1L, role.getId());
        Assertions.assertEquals("USER", role.getName());
        Assertions.assertNotNull(role.getUserAccounts());
    }

    @Test
    void register_should_make_call_to_repository() {
        when(passwordEncoder.encode(any())).thenReturn("password");
        when(roleRepository.findByName(anyString())).thenReturn(Optional.ofNullable(role));
        when(userAccountRepository.save(any())).thenReturn(userAccount);

        userAccountService.register("username", "email", "password");

        verify(userAccountRepository, times(1)).save(any());
    }
    @Test
    void login_should_make_call_to_repository() {
        when(authenticationManager.authenticate(any())).thenReturn(authentication);
        when(jwtGenerator.generateToken(any())).thenReturn("token");
        when(userAccountRepository.findByUsername(anyString())).thenReturn(Optional.ofNullable(userAccount));

        userAccountService.login("username", "password");

        verify(userAccountRepository, times(1)).findByUsername("username");
    }

    @Test
    void login_should_throw_runtime_exception() {
        when(authenticationManager.authenticate(any())).thenReturn(authentication);
        when(jwtGenerator.generateToken(any())).thenReturn("token");
        when(userAccountRepository.findByUsername(anyString())).thenReturn(Optional.empty());

        RuntimeException e = assertThrows(RuntimeException.class, () -> {
            userAccountService.login("username", "password");
        });

        Assertions.assertEquals(e.getMessage(), CodeJawnError.USER_NOT_FOUND.getMessage());
    }

    @Test
    void login_should_return_auth_response_dto() {
        when(authenticationManager.authenticate(any())).thenReturn(authentication);
        when(jwtGenerator.generateToken(any())).thenReturn("token");
        when(userAccountRepository.findByUsername(anyString())).thenReturn(Optional.ofNullable(userAccount));

        AuthResponseDTO responseDTO = userAccountService.login("username", "password");

        Assertions.assertEquals(responseDTO.getUsername(), "username");
        Assertions.assertNull(responseDTO.getUserId());
        Assertions.assertEquals(responseDTO.getTokenType(), "Bearer ");
        Assertions.assertEquals(responseDTO.getAccessToken(), "token");
        Assertions.assertEquals(responseDTO.getEmail(), "email");
        Assertions.assertEquals(responseDTO.getRoles(), roles);
        Assertions.assertEquals(responseDTO.getLessonTracker(), lessonTracker);
    }

    @Test
    void update_username_should_make_2_calls_to_repository(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(userAccountRepository.save(any())).thenReturn(userAccount);

        userAccountService.updateUsername(1L, "newUsername");

        verify(userAccountRepository, times(1)).findById(1L);
        verify(userAccountRepository, times(1)).save(userAccount);
    }

    @Test
    void update_username_response_should_contain_new_username(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(userAccountRepository.save(any())).thenReturn(userAccount);

        UpdateUsernameResponse response = userAccountService.updateUsername(1L, "newUsername");

        Assertions.assertEquals(response.getNewUsername(), "newUsername");
    }
    @Test
    void update_username_should_throw_user_not_found_exception(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.empty());

        RuntimeException e = assertThrows(RuntimeException.class, () -> {
            userAccountService.updateUsername(1L, "newUsername");
        });

        Assertions.assertEquals(e.getMessage(), CodeJawnError.USER_NOT_FOUND.getMessage());
    }
    @Test
    void update_username_should_throw_throw_runtime_exception(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(userAccountRepository.save(any())).thenThrow(new RuntimeException());

        assertThrows(RuntimeException.class, () -> {
            userAccountService.updateUsername(1L, "newUsername");
        });
    }

    @Test
    void update_email_should_make_call_to_repository(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(userAccountRepository.save(any())).thenReturn(userAccount);

        userAccountService.updateEmail(1L, "newEmail");

        verify(userAccountRepository, times(1)).save(userAccount);
    }

    @Test
    void update_email_response_should_contain_new_email(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(userAccountRepository.save(any())).thenReturn(userAccount);

        UpdateEmailResponse response = userAccountService.updateEmail(1L, "newEmail");

        Assertions.assertEquals(response.getNewEmail(), "newEmail");
    }

    @Test
    void update_email_should_throw_user_not_found_exception(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.empty());

        RuntimeException e = assertThrows(RuntimeException.class, () -> {
            userAccountService.updateEmail(1L, "newEmail");
        });

        Assertions.assertEquals(e.getMessage(), CodeJawnError.USER_NOT_FOUND.getMessage());
    }
    @Test
    void update_email_should_throw_runtime_exception(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(userAccountRepository.save(any())).thenThrow(new RuntimeException());

        assertThrows(RuntimeException.class, () -> {
            userAccountService.updateEmail(1L, "newEmail");
        });
    }

    @Test
    void update_password_should_make_call_to_repository(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(passwordEncoder.encode(any())).thenReturn("newPassword");
        when(userAccountRepository.save(any())).thenReturn(userAccount);

        userAccountService.updatePassword(1L, "oldPassword","newPassword");

        verify(userAccountRepository, times(1)).save(userAccount);
    }
    @Test
    void update_password_should_throw_user_not_found_exception(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.empty());

        RuntimeException e = assertThrows(RuntimeException.class, () -> {
            userAccountService.updatePassword(1L, "oldPassword","newPassword");
        });

        Assertions.assertEquals(e.getMessage(), CodeJawnError.USER_NOT_FOUND.getMessage());
    }
    @Test
    void update_password_should_throw_runtime_exception(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(userAccountRepository.save(any())).thenThrow(new RuntimeException());

        assertThrows(RuntimeException.class, () -> {
            userAccountService.updatePassword(1L, "oldPassword","newPassword");
        });
    }

    @Test
    void delete_user_should_make_call_to_repository(){
        doNothing().when(userAccountRepository).deleteById(anyLong());

        userAccountService.deleteUser(1L);

        verify(userAccountRepository, times(1)).deleteById(1L);
    }
    @Test
    void delete_user_should_return_success(){
        doNothing().when(userAccountRepository).deleteById(anyLong());

        String response = userAccountService.deleteUser(1L);

        Assertions.assertEquals(response, StatusCode.SUCCESS.name());
    }
    @Test
    void delete_user_should_return_failed(){
        doThrow(new RuntimeException()).when(userAccountRepository).deleteById(anyLong());

        String response = userAccountService.deleteUser(1L);

        Assertions.assertEquals(response, StatusCode.FAILED.name());
    }
}
