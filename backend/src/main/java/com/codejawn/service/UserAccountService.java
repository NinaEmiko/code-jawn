package com.codejawn.service;

import com.codejawn.client.EmailClientService;
import com.codejawn.dto.AuthResponseDTO;
import com.codejawn.dto.UserAccountResponseDTO;
import com.codejawn.model.*;
import com.codejawn.model.java.*;
import com.codejawn.model.request.DeleteAccountRequest;
import com.codejawn.model.request.RegisterAccountRequest;
import com.codejawn.model.request.UpdateEmailRequest;
import com.codejawn.model.request.UpdatePasswordRequest;
import com.codejawn.repository.RoleRepository;
import com.codejawn.repository.UserAccountRepository;
import com.codejawn.repository.VerificationCodeRepository;
import com.codejawn.response.UpdateEmailResponse;
import com.codejawn.response.UpdateUsernameResponse;
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

    public UserAccountResponseDTO getUserAccount(Long id){
        UserAccount userAccount = retrieveUserAccount(id);

        UserAccountResponseDTO userAccountResponseDTO = new UserAccountResponseDTO();
        userAccountResponseDTO.setUserId(id);
        userAccountResponseDTO.setUsername(userAccount.getUsername());
        userAccountResponseDTO.setEmail(userAccount.getEmail());

        return userAccountResponseDTO;
    }

    @Transactional
    public String refreshVerificationCode(String email) {
        VerificationCode verificationCode = verificationCodeRepository.findByEmail(email).orElseThrow(
                () -> new RuntimeException(CodeJawnError.VERIFICATION_CODE_NOT_FOUND.getMessage())
        );

        String code = VerificationCodeGenerator.generate().toUpperCase();
        verificationCode.setCode(code);

        RegisterAccountRequest registerAccountRequest = new RegisterAccountRequest(
                email,
                "",
                code
        );

        try {
            verificationCodeRepository.save(verificationCode);
            emailClientService.sendRequest(registerAccountRequest, EndPoint.REGISTER);
            return "SUCCESS";
        } catch (Exception e) {
            throw new RuntimeException(CodeJawnError.REGISTER_USER_ERROR.getMessage());
        }
    }

    @Transactional
    public UserAccount verify(String email, String code) {
        VerificationCode verificationCode = verificationCodeRepository.findByEmail(email).orElseThrow(
                () -> new RuntimeException(CodeJawnError.VERIFICATION_CODE_NOT_FOUND.getMessage())
        );
        if (Objects.equals(verificationCode.getCode(), code)){
            UserAccount useraccount = createNewUser(
                    verificationCode.getUsername(),
                    verificationCode.getEmail(),
                    verificationCode.getPassword()
            );
            log.info("user created");
            verificationCodeRepository.delete(verificationCode);
            return useraccount;
        } else {
            throw new RuntimeException(CodeJawnError.VERIFICATION_CODE_INCORRECT.getMessage());
        }
    }

    @Transactional
    public String register(String userName, String email, String password) {
        String code = VerificationCodeGenerator.generate().toUpperCase();

        VerificationCode verificationCode = new VerificationCode();
        verificationCode.setEmail(email);
        verificationCode.setCode(code);
        verificationCode.setUsername(userName);
        verificationCode.setPassword(passwordEncoder.encode(password));

        RegisterAccountRequest registerAccountRequest = new RegisterAccountRequest(
            email,
            userName,
            code
        );

        try {
            verificationCodeRepository.save(verificationCode);
            emailClientService.sendRequest(registerAccountRequest, EndPoint.REGISTER);
            return "SUCCESS";
        } catch (Exception e) {
            throw new RuntimeException(CodeJawnError.REGISTER_USER_ERROR.getMessage());
        }
    }

    public AuthResponseDTO login(String username, String password){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        username,
                        password));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtGenerator.generateToken(authentication);

        UserAccount userAccount = userAccountRepository.findByUsername(username)
                .orElseThrow(
                        () -> new RuntimeException(CodeJawnError.USER_NOT_FOUND.getMessage())
                );
        AuthResponseDTO authResponseDTO = new AuthResponseDTO(token);
        authResponseDTO.setUserId(userAccount.getId());
        authResponseDTO.setUsername(userAccount.getUsername());
        authResponseDTO.setEmail(userAccount.getEmail());
        authResponseDTO.setRoles(userAccount.getRoles());
        authResponseDTO.setLessonTracker(userAccount.getLessonTracker());
        return authResponseDTO;
    }

    public void updatePassword(Long id, String oldPassword, String newPassword) {
        UserAccount userAccount = retrieveUserAccount(id);
        UpdatePasswordRequest updatePasswordRequest = new UpdatePasswordRequest(
                userAccount.getEmail(),
                userAccount.getUsername()
        );
        try{
            userAccount.setPassword(passwordEncoder.encode(newPassword));
            userAccountRepository.save(userAccount);
            emailClientService.sendRequest(updatePasswordRequest, EndPoint.UPDATE_PASSWORD);
        } catch (Exception e) {
            throw new RuntimeException();
        }
    }

    public UpdateEmailResponse updateEmail(Long id, String newEmail) {
        UserAccount userAccount = retrieveUserAccount(id);
        UpdateEmailRequest updateEmailRequest = new UpdateEmailRequest(
                userAccount.getEmail(),
                userAccount.getUsername()
        );
        try{
            userAccount.setEmail(newEmail);

            userAccountRepository.save(userAccount);

            UpdateEmailResponse updateEmailResponse = new UpdateEmailResponse();
            updateEmailResponse.setNewEmail(newEmail);

            emailClientService.sendRequest(updateEmailRequest, EndPoint.UPDATE_EMAIL);

            return updateEmailResponse;
        } catch (Exception e) {
            throw new RuntimeException(CodeJawnError.UPDATE_EMAIL_ERROR.getMessage());
        }
    }

    public UpdateUsernameResponse updateUsername(Long id, String newUsername) {
        UserAccount userAccount = retrieveUserAccount(id);
        try{
            userAccount.setUsername(newUsername);

            userAccountRepository.save(userAccount);

            UpdateUsernameResponse updateUsernameResponse = new UpdateUsernameResponse();
            updateUsernameResponse.setNewUsername(newUsername);

            return updateUsernameResponse;
        } catch (Exception e) {
            throw new RuntimeException(CodeJawnError.UPDATE_USERNAME_ERROR.getMessage());
        }
    }

    public String deleteUser(Long id) {
        UserAccount userAccount = retrieveUserAccount(id);
        DeleteAccountRequest deleteAccountRequest = new DeleteAccountRequest(
                userAccount.getEmail(),
                userAccount.getUsername()
                );
        try {
            userAccountRepository.deleteById(id);
            emailClientService.sendRequest(deleteAccountRequest, EndPoint.DELETE_ACCOUNT);
            return StatusCode.SUCCESS.name();
        } catch (Exception e) {
            return StatusCode.FAILED.name();
        }
    }

    private UserAccount createNewUser(String userName, String email, String password) {
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
        userAccount.setUsername(userName);
        userAccount.setEmail(email);
        userAccount.setPassword(password);
        userAccount.setLessonTracker(lessonTracker);
        userAccount.setSubscriptionActive(true);

        Role role = roleRepository.findByName(RoleCode.USER.name())
                .orElseThrow(() -> new RuntimeException(CodeJawnError.ROLE_USER_NOT_FOUNT.getMessage()));

        userAccount.setRoles(Collections.singletonList(role));

        try {
            userAccountRepository.save(userAccount);
        } catch (Exception e) {
            throw new RuntimeException(CodeJawnError.REGISTER_USER_ERROR.getMessage());
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
