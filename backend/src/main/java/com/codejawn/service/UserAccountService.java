package com.codejawn.service;

import com.codejawn.dto.AuthResponseDTO;
import com.codejawn.dto.UserAccountResponseDTO;
import com.codejawn.model.*;
import com.codejawn.model.java.*;
import com.codejawn.repository.RoleRepository;
import com.codejawn.repository.UserAccountRepository;
import com.codejawn.response.UpdateEmailResponse;
import com.codejawn.response.UpdateUsernameResponse;
import com.codejawn.security.JWTGenerator;
import com.codejawn.util.CodeJawnError;
import com.codejawn.util.StatusCode;
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

@Service
@AllArgsConstructor
@Slf4j
public class UserAccountService {

    private final UserAccountRepository userAccountRepository;
    private AuthenticationManager authenticationManager;
    private JWTGenerator jwtGenerator;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;

    public UserAccountResponseDTO getUserAccount(Long id){
        UserAccount userAccount = retrieveUserAccount(id);

        UserAccountResponseDTO userAccountResponseDTO = new UserAccountResponseDTO();
        userAccountResponseDTO.setUserId(id);
        userAccountResponseDTO.setUsername(userAccount.getUsername());
        userAccountResponseDTO.setEmail(userAccount.getEmail());

        return userAccountResponseDTO;
    }

    @Transactional
    public UserAccount register(String userName, String email, String password) {
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
        userAccount.setPassword(passwordEncoder.encode(password));
        userAccount.setLessonTracker(lessonTracker);
        userAccount.setSubscriptionActive(true);

        Role role = roleRepository.findByName("USER")
                .orElseThrow(() -> new RuntimeException("Error: Role USER not found."));

        userAccount.setRoles(Collections.singletonList(role));
        return userAccountRepository.save(userAccount);
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
        try{
            userAccount.setPassword(passwordEncoder.encode(newPassword));
            userAccountRepository.save(userAccount);

        } catch (Exception e) {
            throw new RuntimeException();
        }
    }

    public UpdateEmailResponse updateEmail(Long id, String newEmail) {
        UserAccount userAccount = retrieveUserAccount(id);

        try{
            userAccount.setEmail(newEmail);

            userAccountRepository.save(userAccount);

            UpdateEmailResponse updateEmailResponse = new UpdateEmailResponse();
            updateEmailResponse.setNewEmail(newEmail);

            return updateEmailResponse;
        } catch (Exception e) {
            throw new RuntimeException("Error occurred while updating email for user account with id " + id + ".");
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
            throw new RuntimeException("Error occurred while updating username for user account with id " + id + ".");
        }
    }

    public String deleteUser(Long id) {
        try {
            userAccountRepository.deleteById(id);
            return StatusCode.SUCCESS.name();
        } catch (Exception e) {
            return StatusCode.FAILED.name();
        }
    }

    private UserAccount retrieveUserAccount(Long userId) {
        return userAccountRepository.findById(userId)
                .orElseThrow(
                        () -> new RuntimeException(CodeJawnError.USER_NOT_FOUND.getMessage())
                );
    }
}
