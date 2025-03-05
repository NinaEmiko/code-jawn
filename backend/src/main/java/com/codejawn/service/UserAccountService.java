package com.codejawn.service;

import com.codejawn.client.EmailClientService;
import com.codejawn.model.*;
import com.codejawn.model.java.*;
import com.codejawn.model.request.email.*;
import com.codejawn.model.request.user.*;
import com.codejawn.model.response.LoginResponse;
import com.codejawn.repository.RoleRepository;
import com.codejawn.repository.UserAccountRepository;
import com.codejawn.repository.VerificationCodeRepository;
import com.codejawn.model.response.UpdateUsernameResponse;
import com.codejawn.security.JWTGenerator;
import com.codejawn.util.*;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Objects;

@Service
@AllArgsConstructor
@Slf4j
public class UserAccountService {

    private final UserAccountRepository userAccountRepository;
    private AuthenticationManager authenticationManager;
    private JWTGenerator jwtGenerator;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;
    private final EmailClientService emailClientService;
    private final VerificationCodeRepository verificationCodeRepository;

    @Transactional
    public void refreshVerificationCode(VerifyRefreshRequest verifyRefreshRequest) {
        VerificationCode verificationCode = verificationCodeRepository.findByEmail(verifyRefreshRequest.getEmail()).orElseThrow(
                () -> new RuntimeException(CodeJawnError.VERIFICATION_CODE_NOT_FOUND.getMessage())
        );

        String code = VerificationCodeGenerator.generate().toUpperCase();
        verificationCode.setCode(code);

        RegisterAccountEmailRequest registerAccountEmailRequest = new RegisterAccountEmailRequest(
                verifyRefreshRequest.getEmail(),
                "",
                code
        );

        try {
            verificationCodeRepository.save(verificationCode);
            emailClientService.sendRequest(registerAccountEmailRequest, EndPoint.REGISTER_ACCOUNT);
        } catch (Exception e) {
            throw new RuntimeException(CodeJawnError.REGISTER_USER_ERROR.getMessage());
        }
    }

    @Transactional
    public void cancelVerificationCode(VerifyCancelRequest verifyCancelRequest) {
        //Don't throw error here, return
        VerificationCode verificationCode = verificationCodeRepository.findByEmail(verifyCancelRequest.getEmail()).orElseThrow(
                () -> new RuntimeException(CodeJawnError.VERIFICATION_CODE_NOT_FOUND.getMessage())
        );

        try {
            verificationCodeRepository.delete(verificationCode);
        } catch (Exception e) {
            throw new RuntimeException(CodeJawnError.CANCEL_VERIFICATION_CODE_ERROR.getMessage());
        }
    }

    @Transactional
    public UserAccount verifyAccountRegistration(VerifyAccountRegistrationRequest verifyAccountRegistrationRequest) {

        VerificationCode verificationCode = verificationCodeRepository.findByEmail(verifyAccountRegistrationRequest.getEmail()).orElseThrow(
                () -> new RuntimeException(CodeJawnError.VERIFICATION_CODE_NOT_FOUND.getMessage())
        );

        if (Objects.equals(verificationCode.getCode(), verifyAccountRegistrationRequest.getCode())){

            try {
                verificationCodeRepository.delete(verificationCode);
            } catch (Exception e) {
                throw new RuntimeException(CodeJawnError.DELETE_VERIFICATION_CODE_ERROR.getMessage());
            }

            UserAccount useraccount = createNewUser(verificationCode);

            AccountCreatedEmailRequest accountCreatedEmailRequest = new AccountCreatedEmailRequest(
                    useraccount.getEmail(),
                    useraccount.getUsername()
            );

            emailClientService.sendRequest(accountCreatedEmailRequest, EndPoint.ACCOUNT_CREATED);
            return useraccount;
        } else {
            throw new RuntimeException(CodeJawnError.VERIFICATION_CODE_INCORRECT.getMessage());
        }
    }

    @Transactional
    public String verifyEmailUpdated(VerifyEmailUpdatedRequest verifyEmailUpdatedRequest) {
        UserAccount userAccount = retrieveUserAccount(verifyEmailUpdatedRequest.getId());

        VerificationCode verificationCode = verificationCodeRepository.findByEmail(verifyEmailUpdatedRequest.getEmail()).orElseThrow(
                () -> new RuntimeException(CodeJawnError.VERIFICATION_CODE_NOT_FOUND.getMessage())
        );

        if (Objects.equals(verificationCode.getCode(), verifyEmailUpdatedRequest.getCode())){
            try {
                verificationCodeRepository.delete(verificationCode);
            } catch (Exception e) {
                throw new RuntimeException(CodeJawnError.DELETE_VERIFICATION_CODE_ERROR.getMessage());
            }

            EmailUpdatedEmailRequest emailUpdatedEmailRequest = new EmailUpdatedEmailRequest(
                    verifyEmailUpdatedRequest.getEmail(),
                    verificationCode.getUsername()
            );

            userAccount.setEmail(verifyEmailUpdatedRequest.getEmail());
            try {
                userAccountRepository.save(userAccount);
            } catch (Exception e) {
                throw new RuntimeException(CodeJawnError.UPDATE_EMAIL_ERROR.getMessage());
            }

            emailClientService.sendRequest(emailUpdatedEmailRequest, EndPoint.EMAIL_UPDATED);
        } else {
            throw new RuntimeException(CodeJawnError.VERIFICATION_CODE_INCORRECT.getMessage());
        }
        return verifyEmailUpdatedRequest.getEmail();
    }

    @Transactional
    public void register(RegisterRequest registerRequest) {
        String code = VerificationCodeGenerator.generate().toUpperCase();

        VerificationCode verificationCode = new VerificationCode();
        verificationCode.setEmail(registerRequest.getEmail());
        verificationCode.setCode(code);
        verificationCode.setUsername(registerRequest.getUsername());
        verificationCode.setPassword(passwordEncoder.encode(registerRequest.getPassword()));

        RegisterAccountEmailRequest registerAccountEmailRequest = new RegisterAccountEmailRequest(
                registerRequest.getEmail(),
                registerRequest.getUsername(),
            code
        );

        try {
            verificationCodeRepository.save(verificationCode);
            emailClientService.sendRequest(registerAccountEmailRequest, EndPoint.REGISTER_ACCOUNT);
        } catch (Exception e) {
            throw new RuntimeException(CodeJawnError.REGISTER_USER_ERROR.getMessage());
        }
    }

    public LoginResponse login(LoginRequest loginRequest){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtGenerator.generateToken(authentication);

        UserAccount userAccount = userAccountRepository.findByUsername(loginRequest.getUsername())
                .orElseThrow(
                        () -> new RuntimeException(CodeJawnError.USER_NOT_FOUND.getMessage())
                );

        LoginResponse loginResponse = new LoginResponse(token);
        loginResponse.setUserId(userAccount.getId());
        loginResponse.setUsername(userAccount.getUsername());
        loginResponse.setEmail(userAccount.getEmail());
        loginResponse.setRoles(userAccount.getRoles());
        loginResponse.setLessonTracker(userAccount.getLessonTracker());

        return loginResponse;
    }

    public void updatePassword(UpdatePasswordRequest updatePasswordRequest) {
        UserAccount userAccount = retrieveUserAccount(updatePasswordRequest.getId());

        PasswordUpdatedEmailRequest passwordUpdatedEmailRequest = new PasswordUpdatedEmailRequest(
                userAccount.getEmail(),
                userAccount.getUsername()
        );
        userAccount.setPassword(passwordEncoder.encode(updatePasswordRequest.getNewPassword()));

        try{
            userAccountRepository.save(userAccount);
            emailClientService.sendRequest(passwordUpdatedEmailRequest, EndPoint.PASSWORD_UPDATED);
        } catch (Exception e) {
            throw new RuntimeException(CodeJawnError.UPDATE_PASSWORD_ERROR.getMessage());
        }
    }

    public void updateEmail(UpdateEmailRequest updateEmailRequest) {
        UserAccount userAccount = retrieveUserAccount(updateEmailRequest.getId());

        String code = VerificationCodeGenerator.generate().toUpperCase();

        VerificationCode verificationCode = new VerificationCode();
        verificationCode.setEmail(updateEmailRequest.getNewEmail());
        verificationCode.setUsername(userAccount.getUsername());
        verificationCode.setPassword(userAccount.getPassword());
        verificationCode.setCode(code);

        UpdateEmailEmailRequest updateEmailEmailRequest = new UpdateEmailEmailRequest(
                verificationCode.getEmail(),
                verificationCode.getUsername(),
                verificationCode.getCode()
        );

        try{
            verificationCodeRepository.save(verificationCode);
            emailClientService.sendRequest(updateEmailEmailRequest, EndPoint.UPDATE_EMAIL);
        } catch (Exception e) {
            throw new RuntimeException(CodeJawnError.UPDATE_EMAIL_ERROR.getMessage());
        }
    }

    public UpdateUsernameResponse updateUsername(UpdateUsernameRequest updateUsernameRequest) {
        UserAccount userAccount = retrieveUserAccount(updateUsernameRequest.getId());
        userAccount.setUsername(updateUsernameRequest.getNewUsername());
        try{
            userAccountRepository.save(userAccount);
        } catch (Exception e) {
            throw new RuntimeException(CodeJawnError.UPDATE_USERNAME_ERROR.getMessage());
        }
        UpdateUsernameResponse updateUsernameResponse = new UpdateUsernameResponse();
        updateUsernameResponse.setNewUsername(updateUsernameRequest.getNewUsername());

        return updateUsernameResponse;
    }

    public void deleteUser(Long id) {
        UserAccount userAccount = retrieveUserAccount(id);
        AccountDeletedEmailRequest accountDeletedEmailRequest = new AccountDeletedEmailRequest(
                userAccount.getEmail(),
                userAccount.getUsername()
                );
        try {
            userAccountRepository.deleteById(id);
            emailClientService.sendRequest(accountDeletedEmailRequest, EndPoint.ACCOUNT_DELETED);
        } catch (Exception e) {
            throw new RuntimeException(CodeJawnError.DELETE_USER_ERROR.getMessage());
        }
    }

    private UserAccount createNewUser(VerificationCode verificationCode) {
        JavaArraysLT javaArraysLT = new JavaArraysLT();
        JavaCollectionsLT javaCollectionsLT = new JavaCollectionsLT();
        JavaConditionalsLT javaConditionalsLT = new JavaConditionalsLT();
        JavaDataTypesLT javaDataTypesLT = new JavaDataTypesLT();
        JavaForLoopsLT javaForLoopsLT = new JavaForLoopsLT();
        JavaMethodsLT javaMethodsLT = new JavaMethodsLT();
        JavaOperatorsLT javaOperatorsLT = new JavaOperatorsLT();
        JavaVariablesLT javaVariablesLT = new JavaVariablesLT();

        JavaLT javaLT = new JavaLT();

        javaLT.setJavaArraysLT(javaArraysLT);
        javaLT.setJavaCollectionsLT(javaCollectionsLT);
        javaLT.setJavaConditionalsLT(javaConditionalsLT);
        javaLT.setJavaDataTypesLT(javaDataTypesLT);
        javaLT.setJavaForLoopsLT(javaForLoopsLT);
        javaLT.setJavaMethodsLT(javaMethodsLT);
        javaLT.setJavaOperatorsLT(javaOperatorsLT);
        javaLT.setJavaVariablesLT(javaVariablesLT);

        LessonTracker lessonTracker = new LessonTracker();
        lessonTracker.setJavaLT(javaLT);

        UserAccount userAccount = new UserAccount();
        userAccount.setUsername(verificationCode.getUsername());
        userAccount.setEmail(verificationCode.getEmail());
        userAccount.setPassword(verificationCode.getPassword());
        userAccount.setLessonTracker(lessonTracker);
        userAccount.setSubscriptionActive(true);

        Role role = roleRepository.findByName(RoleCode.USER.name())
                .orElseThrow(() -> new RuntimeException(CodeJawnError.ROLE_NOT_FOUND.getMessage()));

        userAccount.setRoles(Collections.singletonList(role));

        try {
            userAccountRepository.save(userAccount);
        } catch (Exception e) {
            throw new RuntimeException(CodeJawnError.CREATE_USER_ERROR.getMessage());
        }

        return userAccount;
    }

    private UserAccount retrieveUserAccount(Long userId) {
        return userAccountRepository.findById(userId)
                .orElseThrow(
                        () -> new RuntimeException(CodeJawnError.USER_NOT_FOUND.getMessage())
                );
    }
}
