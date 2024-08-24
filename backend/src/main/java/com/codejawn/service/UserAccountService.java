package com.codejawn.service;

import com.codejawn.controller.UserAccountController;
import com.codejawn.dto.AuthResponseDTO;
import com.codejawn.model.*;
import com.codejawn.repository.RoleRepository;
import com.codejawn.repository.UserAccountRepository;
import com.codejawn.security.JWTGenerator;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;
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
    private final LessonTrackerService lessonTrackerService;
    private final JavaDataTypesLTService javaDataTypesLTService;
    private final Logger logger = Logger.getLogger(UserAccountService.class.getName());

    public UserAccount register(String userName, String email, String password) {
        logger.info("Inside register service method.");

        LessonTracker lessonTracker = lessonTrackerService.createNewLessonTracker();

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

        UserAccount userAccount = new UserAccount();
        Optional<UserAccount> optionalUserAccount = findByUsername(username);
        if (optionalUserAccount.isPresent()){
            userAccount = optionalUserAccount.get();
        }
        AuthResponseDTO authResponseDTO = new AuthResponseDTO(token);
        authResponseDTO.setUserId(userAccount.getId());
        authResponseDTO.setUsername(userAccount.getUsername());
        authResponseDTO.setEmail(userAccount.getEmail());
        authResponseDTO.setRoles(userAccount.getRoles());
        authResponseDTO.setLessonTracker(userAccount.getLessonTracker());
        return authResponseDTO;
    }

    public Optional<UserAccount> findByUsername(String username) {
        return userAccountRepository.findByUsername(username);
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

    public void updateEmail(Long id, String newEmail) {
        UserAccount userAccount = userAccountRepository.findById(id)
                .orElseThrow(
                        () -> new RuntimeException("User not found")
                );
        try{
            userAccount.setEmail(newEmail);
            userAccountRepository.save(userAccount);

        } catch (Exception e) {
            throw new RuntimeException();
        }
    }

    public void updateUsername(Long id, String newUsername) {
        UserAccount userAccount = userAccountRepository.findById(id)
                .orElseThrow(
                        () -> new RuntimeException("User not found")
                );
        try{
            userAccount.setUsername(newUsername);
            userAccountRepository.save(userAccount);

        } catch (Exception e) {
            throw new RuntimeException();
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
