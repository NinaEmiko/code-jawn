package com.codejawn.service;

import com.codejawn.client.EmailClientService;
import com.codejawn.model.*;
import com.codejawn.model.request.user.*;
import com.codejawn.repository.RoleRepository;
import com.codejawn.repository.UserAccountRepository;
import com.codejawn.repository.VerificationCodeRepository;
import com.codejawn.model.response.UpdateUsernameResponse;
import com.codejawn.security.JWTGenerator;
import com.codejawn.util.CodeJawnError;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@ExtendWith({MockitoExtension.class})
@MockitoSettings(strictness = Strictness.LENIENT)
public class UserAccountServiceTest {
    @InjectMocks
    UserAccountService userAccountService;
    @Mock
    UserAccountRepository userAccountRepository;
    @Mock
    JWTGenerator jwtGenerator;
    @Mock
    PasswordEncoder passwordEncoder;
    @Mock
    RoleRepository roleRepository;
    @Mock
    UserAccount userAccount;
    @Mock
    AuthenticationManager authenticationManager;
    @Mock
    Authentication authentication;
    @Mock
    VerificationCodeRepository verificationCodeRepository;
    @Mock
    EmailClientService emailClientService;
    private Role role;
    private VerificationCode verificationCode;
    private LoginRequest loginRequest;
    private RegisterRequest registerRequest;
    private UpdatePasswordRequest updatePasswordRequest;
    private UpdateEmailRequest updateEmailRequest;
    private UpdateUsernameRequest updateUsernameRequest;
    private VerifyAccountRegistrationRequest verifyAccountRegistrationRequest;
    private VerifyRefreshRequest verifyRefreshRequest;
    private VerifyCancelRequest verifyCancelRequest;
    private VerifyEmailUpdatedRequest verifyEmailUpdatedRequest;

    @BeforeEach
    void setup() {
        role = new Role();
        role.setName("USER");

        userAccount = new UserAccount();

        verificationCode = new VerificationCode();
        verificationCode.setEmail("email");
        verificationCode.setCode("code");

        loginRequest = new LoginRequest();
        loginRequest.setUsername("username");
        loginRequest.setPassword("password");

        registerRequest = new RegisterRequest();
        registerRequest.setPassword("password");
        registerRequest.setUsername("username");
        registerRequest.setEmail("email");

        updatePasswordRequest = new UpdatePasswordRequest();
        updatePasswordRequest.setId(1L);
        updatePasswordRequest.setNewPassword("newPassword");
        updatePasswordRequest.setOldPassword("oldPassword");

        updateEmailRequest = new UpdateEmailRequest();
        updateEmailRequest.setId(1L);
        updateEmailRequest.setNewEmail("newEmail");

        updateUsernameRequest = new UpdateUsernameRequest();
        updateUsernameRequest.setId(1L);
        updateUsernameRequest.setNewUsername("newUsername");

        verifyAccountRegistrationRequest = new VerifyAccountRegistrationRequest();
        verifyAccountRegistrationRequest.setCode("code");
        verifyAccountRegistrationRequest.setEmail("email");

        verifyRefreshRequest = new VerifyRefreshRequest();
        verifyRefreshRequest.setEmail("email");

        verifyCancelRequest = new VerifyCancelRequest();
        verifyCancelRequest.setEmail("email");

        verifyEmailUpdatedRequest = new VerifyEmailUpdatedRequest();
        verifyEmailUpdatedRequest.setCode("code");
        verifyEmailUpdatedRequest.setId(1L);
        verifyEmailUpdatedRequest.setEmail("email");
    }

    @Test
    void cancelVerificationCode_shouldThrowVerificationCodeNotFoundError() {
        when(verificationCodeRepository.findByEmail(anyString())).thenReturn(Optional.empty());

        Assertions.assertThrows(RuntimeException.class, () ->
                userAccountService.cancelVerificationCode(verifyCancelRequest)
        );
    }

    @Test
    void cancelVerificationCode_shouldThrowCancelVerificationCodeError() {
        when(verificationCodeRepository.findByEmail(anyString())).thenReturn(Optional.of(verificationCode));
        doThrow(new RuntimeException()).when(verificationCodeRepository).delete(any());

        Assertions.assertThrows(RuntimeException.class, () ->
                userAccountService.cancelVerificationCode(verifyCancelRequest)
        );
    }

    @Test
    void cancelVerificationCode_shouldMakeCallToRepository() {
        when(verificationCodeRepository.findByEmail(anyString())).thenReturn(Optional.ofNullable(verificationCode));
        doNothing().when(verificationCodeRepository).delete(any());

        userAccountService.cancelVerificationCode(verifyCancelRequest);

        verify(verificationCodeRepository).delete(any());
    }

    @Test
    void refreshVerificationCode_shouldMakeCallToEmailServiceClient() {
        when(verificationCodeRepository.findByEmail(anyString())).thenReturn(Optional.ofNullable(verificationCode));
        when(verificationCodeRepository.save(any())).thenReturn(verificationCode);
        when(emailClientService.sendRequest(any(), any())).thenReturn("SUCCESS");

        userAccountService.refreshVerificationCode(verifyRefreshRequest);

        verify(emailClientService).sendRequest(any(), any());
    }

    @Test
    void refreshVerificationCode_shouldThrowVerificationCodeNotFoundError() {
        when(verificationCodeRepository.findByEmail(anyString())).thenReturn(Optional.empty());

        Assertions.assertThrows(RuntimeException.class, () ->
                userAccountService.refreshVerificationCode(verifyRefreshRequest)
        );
    }

    @Test
    void refreshVerificationCode_shouldThrowRegisterUserError() {
        when(verificationCodeRepository.findByEmail(anyString())).thenReturn(Optional.ofNullable(verificationCode));
        when(verificationCodeRepository.save(any())).thenThrow(new RuntimeException());

        Assertions.assertThrows(RuntimeException.class, () ->
            userAccountService.refreshVerificationCode(verifyRefreshRequest)
        );
    }

    @Test
    void verifyAccountRegistration_shouldReturnUserAccount() {
        when(verificationCodeRepository.findByEmail(anyString())).thenReturn(Optional.ofNullable(verificationCode));
        doNothing().when(verificationCodeRepository).delete(any());
        when(roleRepository.findByName(anyString())).thenReturn(Optional.ofNullable(role));
        when(userAccountRepository.save(any())).thenReturn(userAccount);
        when(emailClientService.sendRequest(any(),any())).thenReturn("SUCCESS");

        UserAccount userAccount = userAccountService.verifyAccountRegistration(verifyAccountRegistrationRequest);

        Assertions.assertNotNull(userAccount);
    }

    @Test
    void verifyAccountRegistration_shouldMakeCallToEmailClientServiceAccountCreated() {
        when(verificationCodeRepository.findByEmail(anyString())).thenReturn(Optional.ofNullable(verificationCode));
        doNothing().when(verificationCodeRepository).delete(any());
        when(roleRepository.findByName(anyString())).thenReturn(Optional.ofNullable(role));
        when(userAccountRepository.save(any())).thenReturn(userAccount);
        when(emailClientService.sendRequest(any(),any())).thenReturn("SUCCESS");

        userAccountService.verifyAccountRegistration(verifyAccountRegistrationRequest);

        verify(emailClientService).sendRequest(any(), any());
    }

    @Test
    void verifyAccountRegistration_shouldThrowRoleUserNotFoundError() {
        when(verificationCodeRepository.findByEmail(anyString())).thenReturn(Optional.ofNullable(verificationCode));
        when(roleRepository.findByName(anyString())).thenReturn(Optional.empty());

        Assertions.assertThrows(RuntimeException.class, () ->
                userAccountService.verifyAccountRegistration(verifyAccountRegistrationRequest)
        );
    }

    @Test
    void verifyAccountRegistration_shouldThrowVerificationCodeNotFoundError() {
        when(verificationCodeRepository.findByEmail(anyString())).thenReturn(Optional.empty());

        Assertions.assertThrows(RuntimeException.class, () ->
                userAccountService.verifyAccountRegistration(verifyAccountRegistrationRequest)
        );
    }

    @Test
    void verifyAccountRegistration_shouldThrowVerificationCodeIncorrectError() {
        verifyAccountRegistrationRequest.setCode("different-code");
        when(verificationCodeRepository.findByEmail(anyString())).thenReturn(Optional.ofNullable(verificationCode));
        Assertions.assertThrows(RuntimeException.class, () ->
                userAccountService.verifyAccountRegistration(verifyAccountRegistrationRequest)
        );
    }

    @Test
    void verifyAccountRegistration_shouldThrowCreateUserError() {
        when(verificationCodeRepository.findByEmail(anyString())).thenReturn(Optional.ofNullable(verificationCode));
        when(roleRepository.findByName(anyString())).thenReturn(Optional.ofNullable(role));
        when(userAccountRepository.save(any())).thenThrow(new RuntimeException());

        Assertions.assertThrows(RuntimeException.class, () ->
                userAccountService.verifyAccountRegistration(verifyAccountRegistrationRequest)
        );
    }

    @Test
    void verifyAccountRegistration_shouldThrowDeleteVerificationCodeError() {
        when(verificationCodeRepository.findByEmail(anyString())).thenReturn(Optional.ofNullable(verificationCode));
        when(roleRepository.findByName(anyString())).thenReturn(Optional.ofNullable(role));
        when(userAccountRepository.save(any())).thenReturn(userAccount);
        doThrow(new RuntimeException()).when(verificationCodeRepository).delete(any());

        Assertions.assertThrows(RuntimeException.class, () ->
                userAccountService.verifyAccountRegistration(verifyAccountRegistrationRequest)
        );
    }

    @Test
    void verifyEmailUpdated_shouldReturnEmail() {
        when(verificationCodeRepository.findByEmail(anyString())).thenReturn(Optional.ofNullable(verificationCode));
        doNothing().when(verificationCodeRepository).delete(any());
        when(roleRepository.findByName(anyString())).thenReturn(Optional.ofNullable(role));
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(emailClientService.sendRequest(any(),any())).thenReturn("SUCCESS");

        String response = userAccountService.verifyEmailUpdated(verifyEmailUpdatedRequest);

        Assertions.assertEquals(response, "email");
    }

    @Test
    void verifyEmailUpdated_shouldMakeCallToEmailClientServiceAccountCreated() {
        when(verificationCodeRepository.findByEmail(anyString())).thenReturn(Optional.ofNullable(verificationCode));
        doNothing().when(verificationCodeRepository).delete(any());
        when(roleRepository.findByName(anyString())).thenReturn(Optional.ofNullable(role));
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(emailClientService.sendRequest(any(),any())).thenReturn("SUCCESS");

        userAccountService.verifyEmailUpdated(verifyEmailUpdatedRequest);

        verify(emailClientService).sendRequest(any(), any());
    }

    @Test
    void verifyEmailUpdated_shouldThrowRoleUserNotFoundError() {
        when(verificationCodeRepository.findByEmail(anyString())).thenReturn(Optional.ofNullable(verificationCode));
        when(roleRepository.findByName(anyString())).thenReturn(Optional.empty());

        Assertions.assertThrows(RuntimeException.class, () ->
                userAccountService.verifyEmailUpdated(verifyEmailUpdatedRequest)
        );
    }

    @Test
    void verifyEmailUpdated_shouldThrowVerificationCodeNotFoundError() {
        when(verificationCodeRepository.findByEmail(anyString())).thenReturn(Optional.empty());

        Assertions.assertThrows(RuntimeException.class, () ->
                userAccountService.verifyEmailUpdated(verifyEmailUpdatedRequest)
        );
    }

    @Test
    void verifyEmailUpdated_shouldThrowVerificationCodeIncorrectError() {
        verifyEmailUpdatedRequest.setCode("different-code");
        when(verificationCodeRepository.findByEmail(anyString())).thenReturn(Optional.ofNullable(verificationCode));
        Assertions.assertThrows(RuntimeException.class, () ->
                userAccountService.verifyEmailUpdated(verifyEmailUpdatedRequest)
        );
    }

    @Test
    void verifyEmailUpdated_shouldThrowCreateUserError() {
        when(verificationCodeRepository.findByEmail(anyString())).thenReturn(Optional.ofNullable(verificationCode));
        when(roleRepository.findByName(anyString())).thenReturn(Optional.ofNullable(role));
        when(userAccountRepository.save(any())).thenThrow(new RuntimeException());

        Assertions.assertThrows(RuntimeException.class, () ->
                userAccountService.verifyEmailUpdated(verifyEmailUpdatedRequest)
        );
    }

    @Test
    void verifyEmailUpdated_shouldThrowDeleteVerificationCodeError() {
        when(verificationCodeRepository.findByEmail(anyString())).thenReturn(Optional.ofNullable(verificationCode));
        when(roleRepository.findByName(anyString())).thenReturn(Optional.ofNullable(role));
        when(userAccountRepository.save(any())).thenReturn(userAccount);
        doThrow(new RuntimeException()).when(verificationCodeRepository).delete(any());

        Assertions.assertThrows(RuntimeException.class, () ->
                userAccountService.verifyEmailUpdated(verifyEmailUpdatedRequest)
        );
    }

    @Test
    void register_should_make_call_to_repository() {
        when(passwordEncoder.encode(any())).thenReturn("password");
        when(verificationCodeRepository.save(any())).thenReturn(verificationCode);
        when(emailClientService.sendRequest(any(), any())).thenReturn("");

        userAccountService.register(registerRequest);

        verify(emailClientService).sendRequest(any(), any());
        verify(verificationCodeRepository).save(any());
    }

    @Test
    void register_should_throw_exception() {
        when(passwordEncoder.encode(any())).thenReturn("password");
        when(verificationCodeRepository.save(any())).thenThrow(new RuntimeException());

        assertThrows(RuntimeException.class, () -> {
            userAccountService.register(registerRequest);
        });
        verify(verificationCodeRepository).save(any());
    }

    @Test
    void login_should_make_call_to_repository() {
        when(authenticationManager.authenticate(any())).thenReturn(authentication);
        when(jwtGenerator.generateToken(any())).thenReturn("token");
        when(userAccountRepository.findByUsername(anyString())).thenReturn(Optional.ofNullable(userAccount));

        userAccountService.login(loginRequest);

        verify(userAccountRepository, times(1)).findByUsername("username");
    }

    @Test
    void login_should_throw_runtime_exception() {
        when(authenticationManager.authenticate(any())).thenReturn(authentication);
        when(jwtGenerator.generateToken(any())).thenReturn("token");
        when(userAccountRepository.findByUsername(anyString())).thenReturn(Optional.empty());

        RuntimeException e = assertThrows(RuntimeException.class, () -> {
            userAccountService.login(loginRequest);
        });

        Assertions.assertEquals(e.getMessage(), CodeJawnError.USER_NOT_FOUND.getMessage());
    }

    @Test
    void update_username_should_make_2_calls_to_repository(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(userAccountRepository.save(any())).thenReturn(userAccount);

        userAccountService.updateUsername(updateUsernameRequest);

        verify(userAccountRepository, times(1)).findById(1L);
        verify(userAccountRepository, times(1)).save(userAccount);
    }

    @Test
    void update_username_response_should_contain_new_username(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(userAccountRepository.save(any())).thenReturn(userAccount);

        UpdateUsernameResponse response = userAccountService.updateUsername(updateUsernameRequest);

        Assertions.assertEquals(response.getNewUsername(), "newUsername");
    }
    @Test
    void update_username_should_throw_user_not_found_exception(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.empty());

        RuntimeException e = assertThrows(RuntimeException.class, () -> {
            userAccountService.updateUsername(updateUsernameRequest);
        });

        Assertions.assertEquals(e.getMessage(), CodeJawnError.USER_NOT_FOUND.getMessage());
    }
    @Test
    void update_username_should_throw_throw_runtime_exception(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(userAccountRepository.save(any())).thenThrow(new RuntimeException());

        assertThrows(RuntimeException.class, () -> {
            userAccountService.updateUsername(updateUsernameRequest);
        });
    }

    @Test
    void updateEmail_Should_contain_new_email(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(verificationCodeRepository.save(any())).thenReturn(verificationCode);
        when(emailClientService.sendRequest(any(), any())).thenReturn("");

        userAccountService.updateEmail(updateEmailRequest);

        verify(verificationCodeRepository).save(any());
        verify(emailClientService).sendRequest(any(),any());
    }

    @Test
    void updateEmail_shouldThrowUserNotFoundException(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.empty());

        RuntimeException e = assertThrows(RuntimeException.class, () -> {
            userAccountService.updateEmail(updateEmailRequest);
        });
        Assertions.assertEquals(e.getMessage(), CodeJawnError.USER_NOT_FOUND.getMessage());
    }
    @Test
    void update_email_should_throw_runtime_exception(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(verificationCodeRepository.save(any())).thenThrow(new RuntimeException());

        assertThrows(RuntimeException.class, () -> {
            userAccountService.updateEmail(updateEmailRequest);
        });
    }

    @Test
    void update_password_should_make_call_to_repository(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(passwordEncoder.encode(any())).thenReturn("newPassword");
        when(userAccountRepository.save(any())).thenReturn(userAccount);
        when(emailClientService.sendRequest(any(), any())).thenReturn("");

        userAccountService.updatePassword(updatePasswordRequest);

        verify(emailClientService).sendRequest(any(), any());
        verify(userAccountRepository, times(1)).save(userAccount);
    }
    @Test
    void update_password_should_throw_user_not_found_exception(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.empty());

        RuntimeException e = assertThrows(RuntimeException.class, () -> {
            userAccountService.updatePassword(updatePasswordRequest);
        });
        Assertions.assertEquals(e.getMessage(), CodeJawnError.USER_NOT_FOUND.getMessage());
    }
    @Test
    void update_password_should_throw_runtime_exception(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(userAccountRepository.save(any())).thenThrow(new RuntimeException());

        assertThrows(RuntimeException.class, () -> {
            userAccountService.updatePassword(updatePasswordRequest);
        });
    }

    @Test
    void deleteUser_shouldMakeCallToEmailClientService(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        doNothing().when(userAccountRepository).deleteById(anyLong());
        when(emailClientService.sendRequest(any(), any())).thenReturn("");

        userAccountService.deleteUser(1L);

        verify(emailClientService).sendRequest(any(), any());
    }

    @Test
    void deleteUser_shouldThrowException(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        doThrow(new RuntimeException()).when(userAccountRepository).deleteById(anyLong());

        assertThrows(RuntimeException.class, () -> {
            userAccountService.deleteUser(1L);
        });
    }
}
