package com.codejawn.service;

import com.codejawn.model.java.JavaMethodsLT;
import com.codejawn.model.UserAccount;
import com.codejawn.repository.JavaMethodsLTRepository;
import com.codejawn.repository.UserAccountRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@AllArgsConstructor
@Service
public class JavaMethodsLTService {
    private final JavaMethodsLTRepository javaMethodsLTRepository;
    private final UserAccountRepository userAccountRepository;

    public JavaMethodsLT getLT(Long userId) {
        UserAccount userAccount = retrieveUserAccount(userId);
        return userAccount.getLessonTracker().getJavaLT().getJavaMethodsLT();
    }

    public String resetLT(Long userId) {
        UserAccount userAccount = retrieveUserAccount(userId);
        try {
            JavaMethodsLT javaMethodsLT = userAccount.getLessonTracker().getJavaLT().getJavaMethodsLT();
            javaMethodsLT.setMethodSignaturesLessonIsComplete(false);
            javaMethodsLT.setReturnTypesLessonIsComplete(false);
            javaMethodsLT.setParametersLessonIsComplete(false);
            javaMethodsLT.setScopeLessonIsComplete(false);
            javaMethodsLT.setNamingMethodsLessonIsComplete(false);
            javaMethodsLT.setOverloadingLessonIsComplete(false);
            javaMethodsLT.setQuizIsComplete(false);
            javaMethodsLT.setComplete(false);
            javaMethodsLTRepository.save(javaMethodsLT);
            return "SUCCESS";
        } catch (Exception e) {
            return "FAILED";
        }
    }

    public String completeLT(Long userId) {
        UserAccount userAccount = retrieveUserAccount(userId);
        try {
            JavaMethodsLT javaMethodsLT = userAccount.getLessonTracker().getJavaLT().getJavaMethodsLT();
            javaMethodsLT.setMethodSignaturesLessonIsComplete(true);
            javaMethodsLT.setReturnTypesLessonIsComplete(true);
            javaMethodsLT.setParametersLessonIsComplete(true);
            javaMethodsLT.setScopeLessonIsComplete(true);
            javaMethodsLT.setNamingMethodsLessonIsComplete(true);
            javaMethodsLT.setOverloadingLessonIsComplete(true);
            javaMethodsLT.setQuizIsComplete(true);
            javaMethodsLT.setComplete(true);
            javaMethodsLTRepository.save(javaMethodsLT);
            return "SUCCESS";
        } catch (Exception e) {
            return "FAILED";
        }
    }

    public String updateLT(Long userId, String lesson) {
        UserAccount userAccount = retrieveUserAccount(userId);
        try {
            JavaMethodsLT javaMethodsLT = userAccount.getLessonTracker().getJavaLT().getJavaMethodsLT();
            switch (lesson) {
                case "Method Signatures":
                    javaMethodsLT.setMethodSignaturesLessonIsComplete(true);
                    break;
                case "Return Types":
                    javaMethodsLT.setReturnTypesLessonIsComplete(true);
                    break;
                case "Parameters":
                    javaMethodsLT.setParametersLessonIsComplete(true);
                    break;
                case "Scope":
                    javaMethodsLT.setScopeLessonIsComplete(true);
                    break;
                case "Naming Methods":
                    javaMethodsLT.setNamingMethodsLessonIsComplete(true);
                    break;
                case "Overloading":
                    javaMethodsLT.setOverloadingLessonIsComplete(true);
                    break;
                case "Quiz":
                    javaMethodsLT.setQuizIsComplete(true);
                    break;
            }
            checkCompletion(javaMethodsLT);
            javaMethodsLTRepository.save(javaMethodsLT);
            return "SUCCESS";
        } catch (Exception e) {
            return "FAILED";
        }
    }

    private UserAccount retrieveUserAccount(Long userId) {
        return userAccountRepository.findById(userId)
                .orElseThrow(
                        () -> new RuntimeException("User not found")
                );
    }

    private void checkCompletion(JavaMethodsLT javaMethodsLT) {
        if (javaMethodsLT.isMethodSignaturesLessonIsComplete() &&
                javaMethodsLT.isNamingMethodsLessonIsComplete() &&
                javaMethodsLT.isParametersLessonIsComplete() &&
                javaMethodsLT.isReturnTypesLessonIsComplete() &&
                javaMethodsLT.isScopeLessonIsComplete() &&
                javaMethodsLT.isOverloadingLessonIsComplete() &&
                javaMethodsLT.isQuizIsComplete()
        ) {
            javaMethodsLT.setComplete(true);
        }
    }
}