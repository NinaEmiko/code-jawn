package com.codejawn.controller;

import com.codejawn.dto.*;
import com.codejawn.model.UserAccount;
import com.codejawn.repository.UserAccountRepository;
import com.codejawn.response.UpdateEmailResponse;
import com.codejawn.response.UpdateUsernameResponse;
import com.codejawn.service.UserAccountService;
import com.codejawn.util.StatusCode;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@Slf4j
public class UserAccountController {

    private UserAccountRepository userAccountRepository;
    private UserAccountService userAccountService;

    @Autowired
    public UserAccountController(UserAccountRepository userAccountRepository,
                                 UserAccountService userAccountService) {
        this.userAccountRepository = userAccountRepository;
        this.userAccountService = userAccountService;
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getUserAccount(@PathVariable @Valid Long id){
        log.info("Received request for user account with id: {}", id);
        try {
            UserAccountResponseDTO userAccountResponseDTO = userAccountService.getUserAccount(id);
            return new ResponseEntity<>(userAccountResponseDTO, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(StatusCode.FAILED.name(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @Valid LoginDTO loginDTO){
        log.info("Received login request for user account with username: {}", loginDTO.getUsername());
        String username = loginDTO.getUsername();
        String password = loginDTO.getPassword();
        try {
            AuthResponseDTO authResponseDTO = userAccountService.login(username, password);
            return new ResponseEntity<>(authResponseDTO, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(StatusCode.FAILED.name(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/verify-refresh")
    public ResponseEntity<?> verifyRefresh(@RequestBody @Valid VerifyDTO verifyDTO){
        log.info("Received verification refresh request for user account with email: {}", verifyDTO.getEmail());
        try {
            String response = userAccountService.refreshVerificationCode(verifyDTO.getEmail());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(StatusCode.FAILED.name(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/verify")
    public ResponseEntity<?> verify(@RequestBody @Valid VerifyDTO verifyDTO){
        log.info("Received verification request for user account with email: {}", verifyDTO.getEmail());
        String email = verifyDTO.getEmail();
        String code = verifyDTO.getCode();
        try {
            UserAccount userAccount = userAccountService.verify(email, code);
            return new ResponseEntity<>(userAccount, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(StatusCode.FAILED.name(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody @Valid RegisterDTO registerDTO) {
        log.info("Received register request for new user account with username: {}", registerDTO.getUsername());
        if (userAccountRepository.existsByUsername(registerDTO.getUsername())) {
            return new ResponseEntity<>("Username is taken!", HttpStatus.BAD_REQUEST);
        }

        String userName = registerDTO.getUsername();
        String email = registerDTO.getEmail();
        String password = registerDTO.getPassword();

        try {
            String response = userAccountService.register(userName, email, password);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(StatusCode.FAILED.name(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/update-password")
    public ResponseEntity<?> updatePassword(@RequestBody @Valid UpdatePasswordDTO updatePasswordDTO) {
        log.info("Received request to update password for user account with id: {}", updatePasswordDTO.getId());

        Long id = updatePasswordDTO.getId();
        String oldPassword = updatePasswordDTO.getOldPassword();
        String newPassword = updatePasswordDTO.getNewPassword();

        try{
            userAccountService.updatePassword(id, oldPassword, newPassword);
            return new ResponseEntity<>(StatusCode.SUCCESS.name(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(StatusCode.FAILED.name(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/update-email")
    public ResponseEntity<?> updateEmail(@RequestBody @Valid UpdateEmailDTO updateEmailDTO) {
        log.info("Received request to update email for user account with id: {}", updateEmailDTO.getId());

        Long id = updateEmailDTO.getId();
        String newEmail = updateEmailDTO.getNewEmail();

        try{
            UpdateEmailResponse updateEmailResponse =  userAccountService.updateEmail(id, newEmail);
            return new ResponseEntity<>(updateEmailResponse, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(StatusCode.FAILED.name(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/update-username")
    public ResponseEntity<?> updateUsername(@RequestBody @Valid UpdateUsernameDTO updateUsernameDTO) {
        log.info("Received request to update username for user account with id: {}", updateUsernameDTO.getId());

        Long id = updateUsernameDTO.getId();
        String newEmail = updateUsernameDTO.getNewUsername();

        try{
            UpdateUsernameResponse updateUsernameResponse = userAccountService.updateUsername(id, newEmail);
            return new ResponseEntity<>(updateUsernameResponse, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(StatusCode.FAILED.name(), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteAccount(@PathVariable @Valid Long id){
        log.info("Received request to delete account with id: {}", id);
        String response;
        try{
            response = userAccountService.deleteUser(id);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(StatusCode.FAILED.name(), HttpStatus.BAD_REQUEST);
        }
    }
}
