package com.codejawn.service;

import com.codejawn.model.JavaDataTypesLT;
import com.codejawn.model.UserAccount;
import com.codejawn.repository.JavaDataTypesLTRepository;
import com.codejawn.repository.UserAccountRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@AllArgsConstructor
@Service
public class JavaDataTypesLTService {
    private final JavaDataTypesLTRepository javaDataTypesLTRepository;
    private final UserAccountRepository userAccountRepository;

    public JavaDataTypesLT getLT(Long userId) {
        UserAccount userAccount = userAccountRepository.findById(userId)
            .orElseThrow(
                    () -> new RuntimeException("User not found")
            );
        try {
            return userAccount.getLessonTracker().getJavaLT().getJavaDataTypesLT();
        } catch (Exception e) {
            throw new RuntimeException();
        }
    }

    public String updateLT(Long userId, String lesson) {
        log.info("parameters: " + userId + " " + lesson);
        UserAccount userAccount = userAccountRepository.findById(userId)
                .orElseThrow(
                        () -> new RuntimeException("User not found")
                );
        log.info("user account: " + userAccount);

        try {
            log.info("user account JDTLT: " + userAccount.getLessonTracker().getJavaLT().getJavaDataTypesLT());

            JavaDataTypesLT javaDataTypesLT = userAccount.getLessonTracker().getJavaLT().getJavaDataTypesLT();

            switch (lesson) {
                case "Strings":
                    log.info("Strings and things");
                    javaDataTypesLT.setStringsLessonIsComplete(true);
                    break;
                case "ints":
                    break;
            }

            javaDataTypesLTRepository.save(javaDataTypesLT);
            return "SUCCESS";
        } catch (Exception e) {
            return "FAILED";
        }
    }
}
