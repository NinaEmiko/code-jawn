package com.codejawn.controller;

import com.codejawn.dto.AuthResponseDTO;
import com.codejawn.dto.LoginDTO;
import com.codejawn.dto.RegisterDTO;
import com.codejawn.model.Role;
import com.codejawn.model.UserAccount;
import com.codejawn.repository.RoleRepository;
import com.codejawn.repository.UserAccountRepository;
import com.codejawn.security.JWTGenerator;
import com.codejawn.service.UserAccountService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Optional;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api/auth")
public class UserAccountController {

    private AuthenticationManager authenticationManager;
    private UserAccountRepository userAccountRepository;
    private UserAccountService userAccountService;
    private JWTGenerator jwtGenerator;
    private final Logger logger = Logger.getLogger(UserAccountController.class.getName());


    @Autowired
    public UserAccountController(AuthenticationManager authenticationManager,
                                 UserAccountRepository userAccountRepository,
                                 JWTGenerator jwtGenerator,
                                 UserAccountService userAccountService) {
        this.authenticationManager = authenticationManager;
        this.userAccountRepository = userAccountRepository;
        this.jwtGenerator = jwtGenerator;
        this.userAccountService = userAccountService;
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
}
