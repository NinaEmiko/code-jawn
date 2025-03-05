package com.codejawn.controller;

import com.codejawn.model.UserAccount;
import com.codejawn.model.request.user.*;
import com.codejawn.model.response.LoginResponse;
import com.codejawn.repository.UserAccountRepository;
import com.codejawn.model.response.UpdateUsernameResponse;
import com.codejawn.service.UserAccountService;
import com.codejawn.util.StatusCode;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@Slf4j
@AllArgsConstructor
public class UserAccountController {

    private final UserAccountRepository userAccountRepository;
    private final UserAccountService userAccountService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody @Valid LoginRequest loginRequest){
        log.info("Received login request for user account with username: {}", loginRequest.getUsername());
        try {
            LoginResponse loginResponse = userAccountService.login(loginRequest);
            return new ResponseEntity<>(loginResponse, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/verify-refresh")
    public ResponseEntity<String> verifyRefresh(@RequestBody @Valid VerifyRefreshRequest verifyRefreshRequest){
        log.info("Received verification refresh request for user account with email: {}", verifyRefreshRequest.getEmail());
        try {
            userAccountService.refreshVerificationCode(verifyRefreshRequest);
            return new ResponseEntity<>(StatusCode.SUCCESS.name(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(StatusCode.FAILED.name(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/verify-cancel")
    public ResponseEntity<String> verifyCancel(@RequestBody @Valid VerifyCancelRequest verifyCancelRequest){
        log.info("Received verification cancel request for user account with email: {}", verifyCancelRequest.getEmail());
        try {
            userAccountService.cancelVerificationCode(verifyCancelRequest);
            return new ResponseEntity<>(StatusCode.SUCCESS.name(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(StatusCode.FAILED.name(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/verify-account-registration")
    public ResponseEntity<UserAccount> verifyAccountRegistration(@RequestBody @Valid VerifyAccountRegistrationRequest verifyAccountRegistrationRequest){
        log.info("Received verification request for user account with email: {}", verifyAccountRegistrationRequest.getEmail());
        try {
            UserAccount userAccount = userAccountService.verifyAccountRegistration(verifyAccountRegistrationRequest);
            return new ResponseEntity<>(userAccount, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/verify-email-updated")
    public ResponseEntity<String> verifyEmailUpdated(@RequestBody @Valid VerifyEmailUpdatedRequest verifyEmailUpdatedRequest){
        log.info("Received verification request for user account with email: {}", verifyEmailUpdatedRequest.getEmail());
        try {
            String response = userAccountService.verifyEmailUpdated(verifyEmailUpdatedRequest);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(StatusCode.FAILED.name(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody @Valid RegisterRequest registerRequest) {
        log.info("Received register request for new user account with username: {}", registerRequest.getUsername());
        if (userAccountRepository.existsByUsername(registerRequest.getUsername())) {
            return new ResponseEntity<>("Username is taken!", HttpStatus.BAD_REQUEST);
        }

        try {
            userAccountService.register(registerRequest);
            return new ResponseEntity<>(StatusCode.SUCCESS.name(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(StatusCode.FAILED.name(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/update-password")
    public ResponseEntity<String> updatePassword(@RequestBody @Valid UpdatePasswordRequest updatePasswordRequest) {
        log.info("Received request to update password for user account with id: {}", updatePasswordRequest.getId());
        if (updatePasswordRequest.getId() != 5) {
            try {
                userAccountService.updatePassword(updatePasswordRequest);
                return new ResponseEntity<>(StatusCode.SUCCESS.name(), HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity<>(StatusCode.FAILED.name(), HttpStatus.BAD_REQUEST);
            }
        } else {
            log.info("Attempt to update password for sample account");
        }
        return null;
    }

    @PutMapping("/update-email")
    public ResponseEntity<String> updateEmail(@RequestBody @Valid UpdateEmailRequest updateEmailRequest) {
        log.info("Received request to update email for user account with id: {}", updateEmailRequest.getId());
        if (updateEmailRequest.getId() != 5) {
            try {
                userAccountService.updateEmail(updateEmailRequest);
                return new ResponseEntity<>(StatusCode.SUCCESS.name(), HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity<>(StatusCode.FAILED.name(), HttpStatus.BAD_REQUEST);
            }
        } else {
            log.info("Attempt to update email for sample account");
        }
        return null;
    }

    @PutMapping("/update-username")
    public ResponseEntity<UpdateUsernameResponse> updateUsername(@RequestBody @Valid UpdateUsernameRequest updateUsernameRequest) {
        log.info("Received request to update username for user account with id: {}", updateUsernameRequest.getId());
        if (updateUsernameRequest.getId() != 5) {
            try {
                UpdateUsernameResponse updateUsernameResponse = userAccountService.updateUsername(updateUsernameRequest);
                return new ResponseEntity<>(updateUsernameResponse, HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
            }
        } else {
            log.info("Attempt to update username for sample account");
        }
        return null;
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteAccount(@PathVariable @Valid Long id){
        log.info("Received request to delete account with id: {}", id);
        if (id != 5) {
            try {
                userAccountService.deleteUser(id);
                return new ResponseEntity<>(StatusCode.SUCCESS.name(), HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity<>(StatusCode.FAILED.name(), HttpStatus.BAD_REQUEST);
            }
        } else {
            log.info("Attempt to delete sample account");
        }
        return null;
    }
}
