package com.codejawn.service;

import com.codejawn.model.java.JavaDataTypesLT;
import com.codejawn.model.UserAccount;
import com.codejawn.repository.JavaDataTypesLTRepository;
import com.codejawn.repository.UserAccountRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

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
        return userAccount.getLessonTracker().getJavaLT().getJavaDataTypesLT();
    }

    public String resetLT(Long userId, String lesson) {
        log.info("Inside resetLT");
        UserAccount userAccount = userAccountRepository.findById(userId)
                .orElseThrow(
                        () -> new RuntimeException("User not found")
                );
        try {
            JavaDataTypesLT javaDataTypesLT = userAccount.getLessonTracker().getJavaLT().getJavaDataTypesLT();
            switch (lesson) {
                case "Strings":
                    log.info("Strings and things");
                    javaDataTypesLT.setStringsLessonIsComplete(false);
                    break;
                case "ints":
                    javaDataTypesLT.setIntsLessonIsComplete(false);
                    break;
            }
            javaDataTypesLTRepository.save(javaDataTypesLT);
            return "SUCCESS";
        } catch (Exception e) {
            return "FAILED";
        }
    }

    public String updateLT(Long userId, String lesson) {
        UserAccount userAccount = userAccountRepository.findById(userId)
                .orElseThrow(
                        () -> new RuntimeException("User not found")
                );
        try {
            JavaDataTypesLT javaDataTypesLT = userAccount.getLessonTracker().getJavaLT().getJavaDataTypesLT();
            switch (lesson) {
                case "Strings":
                    log.info("Strings and things");
                    javaDataTypesLT.setStringsLessonIsComplete(true);
                    break;
                case "ints":
                    javaDataTypesLT.setIntsLessonIsComplete(true);
                    break;
            }
            javaDataTypesLTRepository.save(javaDataTypesLT);
            return "SUCCESS";
        } catch (Exception e) {
            return "FAILED";
        }
    }
}
