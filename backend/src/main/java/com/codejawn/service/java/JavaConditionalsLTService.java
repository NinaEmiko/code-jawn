package com.codejawn.service.java;

import com.codejawn.model.java.JavaConditionalsLT;
import com.codejawn.model.UserAccount;
import com.codejawn.repository.java.JavaConditionalsLTRepository;
import com.codejawn.repository.UserAccountRepository;
import com.codejawn.util.StatusCode;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@AllArgsConstructor
@Service
public class JavaConditionalsLTService {
    private final JavaConditionalsLTRepository javaConditionalsLTRepository;
    private final UserAccountRepository userAccountRepository;

    public JavaConditionalsLT getLT(Long userId) {
        UserAccount userAccount = retrieveUserAccount(userId);
        return userAccount.getLessonTracker().getJavaLT().getJavaConditionalsLT();
    }

    public String resetLT(Long userId) {
        UserAccount userAccount = retrieveUserAccount(userId);
        try {
            JavaConditionalsLT javaConditionalsLT = userAccount.getLessonTracker().getJavaLT().getJavaConditionalsLT();
            javaConditionalsLT.setIfLessonIsComplete(false);
            javaConditionalsLT.setElseLessonIsComplete(false);
            javaConditionalsLT.setElseifLessonIsComplete(false);
            javaConditionalsLT.setMultipleIfsLessonIsComplete(false);
            javaConditionalsLT.setMultipleElseifsLessonIsComplete(false);
            javaConditionalsLT.setIfElseNestingLessonIsComplete(false);
            javaConditionalsLT.setTernaryLessonIsComplete(false);
            javaConditionalsLT.setSwitchSyntaxLessonIsComplete(false);
            javaConditionalsLT.setSwitchExpressionsLessonIsComplete(false);
            javaConditionalsLT.setSwitchCasesLessonIsComplete(false);
            javaConditionalsLT.setBreakStatementLessonIsComplete(false);
            javaConditionalsLT.setContinueStatementLessonIsComplete(false);
            javaConditionalsLT.setQuizIsComplete(false);
            javaConditionalsLT.setComplete(false);
            javaConditionalsLTRepository.save(javaConditionalsLT);
            return StatusCode.SUCCESS.name();
        } catch (Exception e) {
            return StatusCode.FAILED.name();
        }
    }

    public String completeLT(Long userId) {
        UserAccount userAccount = retrieveUserAccount(userId);
        try {
            JavaConditionalsLT javaConditionalsLT = userAccount.getLessonTracker().getJavaLT().getJavaConditionalsLT();
            javaConditionalsLT.setIfLessonIsComplete(true);
            javaConditionalsLT.setElseLessonIsComplete(true);
            javaConditionalsLT.setElseifLessonIsComplete(true);
            javaConditionalsLT.setMultipleIfsLessonIsComplete(true);
            javaConditionalsLT.setMultipleElseifsLessonIsComplete(true);
            javaConditionalsLT.setIfElseNestingLessonIsComplete(true);
            javaConditionalsLT.setTernaryLessonIsComplete(true);
            javaConditionalsLT.setSwitchSyntaxLessonIsComplete(true);
            javaConditionalsLT.setSwitchExpressionsLessonIsComplete(true);
            javaConditionalsLT.setSwitchCasesLessonIsComplete(true);
            javaConditionalsLT.setBreakStatementLessonIsComplete(true);
            javaConditionalsLT.setContinueStatementLessonIsComplete(true);
            javaConditionalsLT.setQuizIsComplete(true);
            javaConditionalsLT.setComplete(true);
            javaConditionalsLTRepository.save(javaConditionalsLT);
            return StatusCode.SUCCESS.name();
        } catch (Exception e) {
            return StatusCode.FAILED.name();
        }
    }

    public String updateLT(Long userId, String lesson) {
        UserAccount userAccount = retrieveUserAccount(userId);
        try {
            JavaConditionalsLT javaConditionalsLT = userAccount.getLessonTracker().getJavaLT().getJavaConditionalsLT();
            switch (lesson) {
                case "If":
                    javaConditionalsLT.setIfLessonIsComplete(true);
                    break;
                case "Else":
                    javaConditionalsLT.setElseLessonIsComplete(true);
                    break;
                case "Elseif":
                    javaConditionalsLT.setElseifLessonIsComplete(true);
                    break;
                case "Multiple Ifs":
                    javaConditionalsLT.setMultipleIfsLessonIsComplete(true);
                    break;
                case "Multiple Elseifs":
                    javaConditionalsLT.setMultipleElseifsLessonIsComplete(true);
                    break;
                case "If/Else Nesting":
                    javaConditionalsLT.setIfElseNestingLessonIsComplete(true);
                    break;
                case "Ternary":
                    javaConditionalsLT.setTernaryLessonIsComplete(true);
                    break;
                case "Switch Syntax":
                    javaConditionalsLT.setSwitchSyntaxLessonIsComplete(true);
                    break;
                case "Switch Expressions":
                    javaConditionalsLT.setSwitchExpressionsLessonIsComplete(true);
                    break;
                case "Switch Cases":
                    javaConditionalsLT.setSwitchCasesLessonIsComplete(true);
                    break;
                case "Break Statement":
                    javaConditionalsLT.setBreakStatementLessonIsComplete(true);
                    break;
                case "Continue Statement":
                    javaConditionalsLT.setContinueStatementLessonIsComplete(true);
                    break;
                case "Quiz":
                    javaConditionalsLT.setQuizIsComplete(true);
                    break;
            }
            checkCompletion(javaConditionalsLT);
            javaConditionalsLTRepository.save(javaConditionalsLT);
            return StatusCode.SUCCESS.name();
        } catch (Exception e) {
            return StatusCode.FAILED.name();
        }
    }

    private UserAccount retrieveUserAccount(Long userId) {
        return userAccountRepository.findById(userId)
                .orElseThrow(
                        () -> new RuntimeException("User not found")
                );
    }

    private void checkCompletion(JavaConditionalsLT javaConditionalsLT) {
        if (javaConditionalsLT.isIfLessonIsComplete() &&
                javaConditionalsLT.isElseLessonIsComplete() &&
                javaConditionalsLT.isElseifLessonIsComplete() &&
                javaConditionalsLT.isMultipleIfsLessonIsComplete() &&
                javaConditionalsLT.isMultipleElseifsLessonIsComplete() &&
                javaConditionalsLT.isIfElseNestingLessonIsComplete() &&
                javaConditionalsLT.isTernaryLessonIsComplete() &&
                javaConditionalsLT.isSwitchSyntaxLessonIsComplete() &&
                javaConditionalsLT.isSwitchExpressionsLessonIsComplete() &&
                javaConditionalsLT.isSwitchCasesLessonIsComplete() &&
                javaConditionalsLT.isBreakStatementLessonIsComplete() &&
                javaConditionalsLT.isContinueStatementLessonIsComplete() &&
                javaConditionalsLT.isQuizIsComplete()
        ) {
            javaConditionalsLT.setComplete(true);
        }
    }
}