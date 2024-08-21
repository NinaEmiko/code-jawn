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
        try {
            Optional<UserAccount> optionalUserAccount = userAccountRepository.findById(userId);
            if (optionalUserAccount.isPresent()) {
                UserAccount userAccount = optionalUserAccount.get();
                return userAccount.getLessonTracker().getJavaLT().getJavaDataTypesLT();
            }
        } catch (Exception e) {
            throw new RuntimeException();
        }
        return null;
    }

    public String updateLT(long userId, String lesson) {
        Optional<UserAccount> optionalUserAccount = userAccountRepository.findById(userId);
        if (optionalUserAccount.isPresent()){
            UserAccount userAccount = optionalUserAccount.get();
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
        }
        return "FAILED";
    }
}
