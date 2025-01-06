package com.codejawn.service;

import com.codejawn.model.java.JavaArraysLT;
import com.codejawn.model.UserAccount;
import com.codejawn.repository.JavaArraysLTRepository;
import com.codejawn.repository.UserAccountRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@AllArgsConstructor
@Service
public class JavaArraysLTService {
    private final JavaArraysLTRepository javaArraysLTRepository;
    private final UserAccountRepository userAccountRepository;

    public JavaArraysLT getLT(Long userId) {
        UserAccount userAccount = userAccountRepository.findById(userId)
                .orElseThrow(
                        () -> new RuntimeException("User not found")
                );
        return userAccount.getLessonTracker().getJavaLT().getJavaArraysLT();
    }

    public String resetLT(Long userId) {
        log.info("Inside resetLT");
        UserAccount userAccount = userAccountRepository.findById(userId)
                .orElseThrow(
                        () -> new RuntimeException("User not found")
                );
        try {
            JavaArraysLT javaArraysLT = userAccount.getLessonTracker().getJavaLT().getJavaArraysLT();
            javaArraysLT.setInitializingArraysLessonIsComplete(false);
            javaArraysLT.setAssigningValuesLessonIsComplete(false);
            javaArraysLT.setArrayIndexesLessonIsComplete(false);
            javaArraysLT.setUpdatingValuesLessonIsComplete(false);
            javaArraysLT.setLengthMethodLessonIsComplete(false);
            javaArraysLT.setLoopingThroughArrayLessonIsComplete(false);
            javaArraysLT.setQuizIsComplete(false);
            javaArraysLT.setComplete(false);
            javaArraysLTRepository.save(javaArraysLT);
            return "SUCCESS";
        } catch (Exception e) {
            return "FAILED";
        }
    }

    public String completeLT(Long userId) {
        log.info("Inside completeLT");
        UserAccount userAccount = userAccountRepository.findById(userId)
                .orElseThrow(
                        () -> new RuntimeException("User not found")
                );
        try {
            JavaArraysLT javaArraysLT = userAccount.getLessonTracker().getJavaLT().getJavaArraysLT();
            javaArraysLT.setInitializingArraysLessonIsComplete(true);
            javaArraysLT.setAssigningValuesLessonIsComplete(true);
            javaArraysLT.setArrayIndexesLessonIsComplete(true);
            javaArraysLT.setUpdatingValuesLessonIsComplete(true);
            javaArraysLT.setLengthMethodLessonIsComplete(true);
            javaArraysLT.setLoopingThroughArrayLessonIsComplete(true);
            javaArraysLT.setQuizIsComplete(true);
            javaArraysLT.setComplete(true);
            javaArraysLTRepository.save(javaArraysLT);
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
            JavaArraysLT javaArraysLT = userAccount.getLessonTracker().getJavaLT().getJavaArraysLT();
            switch (lesson) {
                case "Initializing Arrays":
                    javaArraysLT.setInitializingArraysLessonIsComplete(true);
                    break;
                case "Assigning Values":
                    javaArraysLT.setAssigningValuesLessonIsComplete(true);
                    break;
                case "Array Indexes":
                    javaArraysLT.setArrayIndexesLessonIsComplete(true);
                    break;
                case "Updating Values":
                    javaArraysLT.setUpdatingValuesLessonIsComplete(true);
                    break;
                case "Length Method":
                    javaArraysLT.setLengthMethodLessonIsComplete(true);
                    break;
                case "Looping Through Arrays":
                    javaArraysLT.setLoopingThroughArrayLessonIsComplete(true);                    break;
                case "Quiz":
                    javaArraysLT.setQuizIsComplete(true);
                    break;
            }
            checkCompletion(javaArraysLT);
            javaArraysLTRepository.save(javaArraysLT);
            return "SUCCESS";
        } catch (Exception e) {
            return "FAILED";
        }
    }

    private void checkCompletion(JavaArraysLT javaArraysLT) {
        if (javaArraysLT.isInitializingArraysLessonIsComplete() &&
                javaArraysLT.isAssigningValuesLessonIsComplete() &&
                javaArraysLT.isArrayIndexesLessonIsComplete() &&
                javaArraysLT.isUpdatingValuesLessonIsComplete() &&
                javaArraysLT.isLengthMethodLessonIsComplete() &&
                javaArraysLT.isLoopingThroughArrayLessonIsComplete() &&
                javaArraysLT.isQuizIsComplete()
        ) {
            javaArraysLT.setComplete(true);
        }
    }
}