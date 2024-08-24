package com.codejawn.service;

import com.codejawn.model.JavaDataTypesLT;
import com.codejawn.model.UserAccount;
import com.codejawn.repository.JavaDataTypesLTRepository;
import com.codejawn.repository.UserAccountRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@AllArgsConstructor
@Service
public class JavaDataTypesLTService {
    private final JavaDataTypesLTRepository javaDataTypesLTRepository;
    private final UserAccountRepository userAccountRepository;

    public JavaDataTypesLT createNewJavaDataTypesLT() {
        JavaDataTypesLT javaDataTypesLT = new JavaDataTypesLT();
        return  javaDataTypesLTRepository.save(javaDataTypesLT);
    }

    public JavaDataTypesLT getLT(long userId) {
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

    public String updateLT(long userId, String lesson) {
        UserAccount userAccount = userAccountRepository.findById(userId)
                .orElseThrow(
                        () -> new RuntimeException("User not found")
                );
        try {
            JavaDataTypesLT javaDataTypesLT = userAccount.getLessonTracker().getJavaLT().getJavaDataTypesLT();

            switch (lesson) {
                case "Strings":
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
