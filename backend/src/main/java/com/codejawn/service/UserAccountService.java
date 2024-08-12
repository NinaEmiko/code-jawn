package com.codejawn.service;

import com.codejawn.model.Role;
import com.codejawn.model.UserAccount;
import com.codejawn.repository.RoleRepository;
import com.codejawn.repository.UserAccountRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Optional;

@Service
public class UserAccountService {

    private final UserAccountRepository userAccountRepository;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;

    public UserAccountService(UserAccountRepository userAccountRepository, PasswordEncoder passwordEncoder, RoleRepository roleRepository) {
        this.userAccountRepository = userAccountRepository;
        this.passwordEncoder = passwordEncoder;
        this.roleRepository = roleRepository;
    }

    public UserAccount register(String userName, String email, String password) {
        UserAccount userAccount = new UserAccount();
        userAccount.setUsername(userName);
        userAccount.setEmail(email);
        userAccount.setPassword(passwordEncoder.encode((password)));

        Optional<Role> role = roleRepository.findByName("USER");
        Role actualRole = null;
        if (role.isPresent()) {
            actualRole = role.get();
        }
        userAccount.setRoles(Collections.singletonList(actualRole));

        userAccountRepository.save(userAccount);

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
