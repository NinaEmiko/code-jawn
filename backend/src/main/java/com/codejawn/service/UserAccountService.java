package com.codejawn.service;

import com.codejawn.model.UserAccount;
import com.codejawn.repository.UserAccountRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserAccountService {

    private final UserAccountRepository userAccountRepository;
    private final PasswordEncoder passwordEncoder;

    public UserAccountService(UserAccountRepository userAccountRepository, PasswordEncoder passwordEncoder) {
        this.userAccountRepository = userAccountRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public UserAccount register(UserAccount userAccount) {
        userAccount.setPassword(passwordEncoder.encode(userAccount.getPassword()));
        return userAccountRepository.save(userAccount);
    }

    public Optional<UserAccount> findByUsername(String username) {
        return userAccountRepository.findByUsername(username);
    }

    public void updatePassword(Long id, String newPassword) {
        UserAccount userAccount = userAccountRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        userAccount.setPassword(passwordEncoder.encode(newPassword));
        userAccountRepository.save(userAccount);
    }

    public void deleteUser(Long id) {
        userAccountRepository.deleteById(id);
    }
}
