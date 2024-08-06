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

@RestController
@RequestMapping("/api/auth")
public class UserAccountController {

    private AuthenticationManager authenticationManager;
    private UserAccountRepository userAccountRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;
    private JWTGenerator jwtGenerator;

    @Autowired
    public UserAccountController(AuthenticationManager authenticationManager, UserAccountRepository userAccountRepository,
                          RoleRepository roleRepository, PasswordEncoder passwordEncoder, JWTGenerator jwtGenerator) {
        this.authenticationManager = authenticationManager;
        this.userAccountRepository = userAccountRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtGenerator = jwtGenerator;
    }

    @PostMapping("login")
    public ResponseEntity<AuthResponseDTO> login(@RequestBody LoginDTO loginDTO){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginDTO.getUsername(),
                        loginDTO.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtGenerator.generateToken(authentication);
        return new ResponseEntity<>(new AuthResponseDTO(token), HttpStatus.OK);
    }

    @PostMapping("register")
    public ResponseEntity<String> register(@RequestBody RegisterDTO registerDTO) {
        if (userAccountRepository.existsByUsername(registerDTO.getUsername())) {
            return new ResponseEntity<>("Username is taken!", HttpStatus.BAD_REQUEST);
        }

        UserAccount userAccount = new UserAccount();
        userAccount.setUsername(registerDTO.getUsername());
        userAccount.setEmail(registerDTO.getEmail());
        userAccount.setPassword(passwordEncoder.encode((registerDTO.getPassword())));

        Role roles = roleRepository.findByName("USER").get();
        userAccount.setRoles(Collections.singletonList(roles));

        userAccountRepository.save(userAccount);

        return new ResponseEntity<>("User registered success!", HttpStatus.OK);
    }
}
