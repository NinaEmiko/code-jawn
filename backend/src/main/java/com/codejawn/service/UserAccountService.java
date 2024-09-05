package com.codejawn.service;

import com.codejawn.dto.AuthResponseDTO;
import com.codejawn.model.*;
import com.codejawn.repository.RoleRepository;
import com.codejawn.repository.UserAccountRepository;
import com.codejawn.response.UpdateEmailResponse;
import com.codejawn.response.UpdateUsernameResponse;
import com.codejawn.security.JWTGenerator;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Optional;
import java.util.logging.Logger;

@Service
@AllArgsConstructor
public class UserAccountService {

    private final UserAccountRepository userAccountRepository;
    private AuthenticationManager authenticationManager;
    private JWTGenerator jwtGenerator;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;
    private final Logger logger = Logger.getLogger(UserAccountService.class.getName());

    @Transactional
    public UserAccount register(String userName, String email, String password) {
        logger.info("Inside register service method.");
        JavaDataTypesLT javaDataTypesLT = new JavaDataTypesLT();
        JavaLT javaLT = new JavaLT();
        javaLT.setJavaDataTypesLT(javaDataTypesLT);
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
                        () -> new RuntimeException("User not found")
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
        logger.info("Inside updatePassword service method.");
        UserAccount userAccount = userAccountRepository.findById(id)
            .orElseThrow(
                    () -> new RuntimeException("User not found")
            );
        try{
            userAccount.setPassword(passwordEncoder.encode(newPassword));
            userAccountRepository.save(userAccount);

        } catch (Exception e) {
            throw new RuntimeException();
        }
    }

    public UpdateEmailResponse updateEmail(Long id, String newEmail) {
        logger.info("Inside update email service method.");

        logger.info("Retrieving user account with id " + id + ".");
        UserAccount userAccount = userAccountRepository.findById(id)
                .orElseThrow(
                        () -> new RuntimeException("User not found.")
                );

        try{
            logger.info("Updating email for user account with id " + id + ".");
            userAccount.setEmail(newEmail);

            logger.info("Saving user account with id " + id + " with updated email.");
            userAccountRepository.save(userAccount);

            logger.info("Building response object.");
            UpdateEmailResponse updateEmailResponse = new UpdateEmailResponse();
            updateEmailResponse.setNewEmail(newEmail);

            return updateEmailResponse;
        } catch (Exception e) {
            throw new RuntimeException("Error occurred while updating email for user account with id " + id + ".");
        }
    }

    public UpdateUsernameResponse updateUsername(Long id, String newUsername) {
        logger.info("Inside update username service method.");

        logger.info("Retrieving user account with id " + id + ".");
        UserAccount userAccount = userAccountRepository.findById(id)
                .orElseThrow(
                        () -> new RuntimeException("User not found.")
                );
        try{
            logger.info("Updating username for user account with id " + id + ".");
            userAccount.setUsername(newUsername);

            logger.info("Building response object.");
            UpdateUsernameResponse updateUsernameResponse = new UpdateUsernameResponse();
            updateUsernameResponse.setNewUsername(newUsername);

            logger.info("Saving user account with id " + id + " with updated username.");
            userAccountRepository.save(userAccount);

            return updateUsernameResponse;
        } catch (Exception e) {
            throw new RuntimeException("Error occurred while updating username for user account with id " + id + ".");
        }
    }

    public String deleteUser(Long id) {
        try {
            userAccountRepository.deleteById(id);
            return "SUCCESS";
        } catch (Exception e) {
            return "FAILED";
        }
    }
}
