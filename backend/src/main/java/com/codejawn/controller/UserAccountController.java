package com.codejawn.controller;

import com.codejawn.dto.*;
import com.codejawn.model.UserAccount;
import com.codejawn.repository.UserAccountRepository;
import com.codejawn.response.UpdateEmailResponse;
import com.codejawn.response.UpdateUsernameResponse;
import com.codejawn.service.UserAccountService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.logging.Logger;

@RestController
@RequestMapping("/api/auth")
public class UserAccountController {

    private UserAccountRepository userAccountRepository;
    private UserAccountService userAccountService;
    private final Logger logger = Logger.getLogger(UserAccountController.class.getName());

    @Autowired
    public UserAccountController(UserAccountRepository userAccountRepository,
                                 UserAccountService userAccountService) {
        this.userAccountRepository = userAccountRepository;
        this.userAccountService = userAccountService;
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<UserAccountResponseDTO> getUserAccount(@PathVariable @Valid Long id){
        logger.info("Inside getUserAccount controller method.");
        UserAccountResponseDTO userAccountResponseDTO = userAccountService.getUserAccount(id);
        return new ResponseEntity<>(userAccountResponseDTO, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponseDTO> login(@RequestBody @Valid LoginDTO loginDTO){
        logger.info("Inside login controller method.");
        String username = loginDTO.getUsername();
        String password = loginDTO.getPassword();
        AuthResponseDTO authResponseDTO = userAccountService.login(username, password);
        return new ResponseEntity<>(authResponseDTO, HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody @Valid RegisterDTO registerDTO) {
        logger.info("Inside register controller method.");
        if (userAccountRepository.existsByUsername(registerDTO.getUsername())) {
            return new ResponseEntity<>("Username is taken!", HttpStatus.BAD_REQUEST);
        }

        String userName = registerDTO.getUsername();
        String email = registerDTO.getEmail();
        String password = registerDTO.getPassword();

        UserAccount userAccount = userAccountService.register(userName, email, password);

        return new ResponseEntity<>(userAccount, HttpStatus.OK);
    }

    @PutMapping("/update-password")
    public ResponseEntity<?> updatePassword(@RequestBody @Valid UpdatePasswordDTO updatePasswordDTO) {
        logger.info("Inside updatePassword controller method.");

        Long id = updatePasswordDTO.getId();
        String oldPassword = updatePasswordDTO.getOldPassword();
        String newPassword = updatePasswordDTO.getNewPassword();

        try{
            userAccountService.updatePassword(id, oldPassword, newPassword);
            return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("FAILED", HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/update-email")
    public ResponseEntity<?> updateEmail(@RequestBody @Valid UpdateEmailDTO updateEmailDTO) {
        logger.info("Inside update email controller method.");
        logger.info("Update email request: " + updateEmailDTO + ".");

        Long id = updateEmailDTO.getId();
        String newEmail = updateEmailDTO.getNewEmail();

        try{
            UpdateEmailResponse updateEmailResponse =  userAccountService.updateEmail(id, newEmail);
            return new ResponseEntity<>(updateEmailResponse, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("FAILED", HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/update-username")
    public ResponseEntity<?> updateUsername(@RequestBody @Valid UpdateUsernameDTO updateUsernameDTO) {
        logger.info("Inside update username controller method.");
        logger.info("Update username request: " + updateUsernameDTO + ".");

        Long id = updateUsernameDTO.getId();
        String newEmail = updateUsernameDTO.getNewUsername();

        try{
            UpdateUsernameResponse updateUsernameResponse = userAccountService.updateUsername(id, newEmail);
            return new ResponseEntity<>(updateUsernameResponse, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("FAILED", HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteAccount(@PathVariable @Valid Long id){
        logger.info("Inside deleteAccount controller method.");
        String response;
        try{
            response = userAccountService.deleteUser(id);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("FAILED", HttpStatus.BAD_REQUEST);
        }
    }
}
