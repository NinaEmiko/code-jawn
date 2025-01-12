package com.codejawn.service.java;

import com.codejawn.model.java.JavaForLoopsLT;
import com.codejawn.model.UserAccount;
import com.codejawn.repository.java.JavaForLoopsLTRepository;
import com.codejawn.repository.UserAccountRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@AllArgsConstructor
@Service
public class JavaForLoopsLTService {
    private final JavaForLoopsLTRepository javaForLoopsLTRepository;
    private final UserAccountRepository userAccountRepository;

    public JavaForLoopsLT getLT(Long userId) {
        UserAccount userAccount = retrieveUserAccount(userId);
        return userAccount.getLessonTracker().getJavaLT().getJavaForLoopsLT();
    }

    public String resetLT(Long userId) {
        UserAccount userAccount = retrieveUserAccount(userId);
        try {
            JavaForLoopsLT javaForLoopsLT = userAccount.getLessonTracker().getJavaLT().getJavaForLoopsLT();
            javaForLoopsLT.setForLoopsSyntaxLessonIsComplete(false);
            javaForLoopsLT.setForLoopsConditionLessonIsComplete(false);
            javaForLoopsLT.setForLoopsIncrementDecrementLessonIsComplete(false);
            javaForLoopsLT.setNestedForLoopsLessonIsComplete(false);
            javaForLoopsLT.setWhileLoopsSyntaxLessonIsComplete(false);
            javaForLoopsLT.setWhileLoopsConditionLessonIsComplete(false);
            javaForLoopsLT.setDoWhileLoopsSyntaxLessonIsComplete(false);
            javaForLoopsLT.setForEachSyntaxLessonIsComplete(false);
            javaForLoopsLT.setComplete(false);
            javaForLoopsLTRepository.save(javaForLoopsLT);
            return "SUCCESS";
        } catch (Exception e) {
            return "FAILED";
        }
    }

    public String completeLT(Long userId) {
        UserAccount userAccount = retrieveUserAccount(userId);
        try {
            JavaForLoopsLT javaForLoopsLT = userAccount.getLessonTracker().getJavaLT().getJavaForLoopsLT();
            javaForLoopsLT.setForLoopsSyntaxLessonIsComplete(true);
            javaForLoopsLT.setForLoopsConditionLessonIsComplete(true);
            javaForLoopsLT.setForLoopsIncrementDecrementLessonIsComplete(true);
            javaForLoopsLT.setNestedForLoopsLessonIsComplete(true);
            javaForLoopsLT.setWhileLoopsSyntaxLessonIsComplete(true);
            javaForLoopsLT.setWhileLoopsConditionLessonIsComplete(true);
            javaForLoopsLT.setDoWhileLoopsSyntaxLessonIsComplete(true);
            javaForLoopsLT.setForEachSyntaxLessonIsComplete(true);
            javaForLoopsLT.setQuizIsComplete(true);
            javaForLoopsLT.setComplete(true);
            javaForLoopsLTRepository.save(javaForLoopsLT);
            return "SUCCESS";
        } catch (Exception e) {
            return "FAILED";
        }
    }

    public String updateLT(Long userId, String lesson) {
        UserAccount userAccount = retrieveUserAccount(userId);
        try {
            JavaForLoopsLT javaForLoopsLT = userAccount.getLessonTracker().getJavaLT().getJavaForLoopsLT();
            switch (lesson) {
                case "For Loops Syntax":
                    javaForLoopsLT.setForLoopsSyntaxLessonIsComplete(true);
                    break;
                case "For Loops Condition":
                    javaForLoopsLT.setForLoopsConditionLessonIsComplete(true);
                    break;
                case "For Loops Increment/Decrement":
                    javaForLoopsLT.setForLoopsIncrementDecrementLessonIsComplete(true);
                    break;
                case "Nesting For Loops":
                    javaForLoopsLT.setNestedForLoopsLessonIsComplete(true);
                    break;
                case "While Loops Syntax":
                    javaForLoopsLT.setWhileLoopsSyntaxLessonIsComplete(true);
                    break;
                case "While Loops Condition":
                    javaForLoopsLT.setWhileLoopsConditionLessonIsComplete(true);
                    break;
                case "Do While Loops Syntax":
                    javaForLoopsLT.setDoWhileLoopsSyntaxLessonIsComplete(true);
                    break;
                case "For Each Syntax":
                    javaForLoopsLT.setForEachSyntaxLessonIsComplete(true);
                    break;
                case "Quiz":
                    javaForLoopsLT.setQuizIsComplete(true);
                    break;
            }
            checkCompletion(javaForLoopsLT);
            javaForLoopsLTRepository.save(javaForLoopsLT);
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

    private void checkCompletion(JavaForLoopsLT javaForLoopsLT) {
        if (javaForLoopsLT.isForLoopsSyntaxLessonIsComplete() &&
                javaForLoopsLT.isForLoopsConditionLessonIsComplete() &&
                javaForLoopsLT.isForLoopsIncrementDecrementLessonIsComplete() &&
                javaForLoopsLT.isNestedForLoopsLessonIsComplete() &&
                javaForLoopsLT.isWhileLoopsSyntaxLessonIsComplete() &&
                javaForLoopsLT.isWhileLoopsConditionLessonIsComplete() &&
                javaForLoopsLT.isDoWhileLoopsSyntaxLessonIsComplete() &&
                javaForLoopsLT.isForEachSyntaxLessonIsComplete() &&
                javaForLoopsLT.isQuizIsComplete()
        ) {
            javaForLoopsLT.setComplete(true);
        }
    }
}