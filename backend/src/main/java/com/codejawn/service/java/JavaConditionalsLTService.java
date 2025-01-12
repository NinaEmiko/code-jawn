package com.codejawn.service.java;

import com.codejawn.model.java.JavaConditionalsLT;
import com.codejawn.model.UserAccount;
import com.codejawn.repository.java.JavaConditionalsLTRepository;
import com.codejawn.repository.UserAccountRepository;
import com.codejawn.util.CodeJawnError;
import com.codejawn.util.StatusCode;
import com.codejawn.util.java.JavaArraysLesson;
import com.codejawn.util.java.JavaConditionalsLesson;
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
            JavaConditionalsLesson javaConditionalsLesson = JavaConditionalsLesson.valueOf(lesson);
            switch (javaConditionalsLesson) {
                case IF:
                    javaConditionalsLT.setIfLessonIsComplete(true);
                    break;
                case ELSE:
                    javaConditionalsLT.setElseLessonIsComplete(true);
                    break;
                case ELSEIF:
                    javaConditionalsLT.setElseifLessonIsComplete(true);
                    break;
                case MULTIPLE_IFS:
                    javaConditionalsLT.setMultipleIfsLessonIsComplete(true);
                    break;
                case MULTIPLE_ELSEIFS:
                    javaConditionalsLT.setMultipleElseifsLessonIsComplete(true);
                    break;
                case IF_ELSE_NESTING:
                    javaConditionalsLT.setIfElseNestingLessonIsComplete(true);
                    break;
                case TERNARY:
                    javaConditionalsLT.setTernaryLessonIsComplete(true);
                    break;
                case SWITCH_SYNTAX:
                    javaConditionalsLT.setSwitchSyntaxLessonIsComplete(true);
                    break;
                case SWITCH_EXPRESSIONS:
                    javaConditionalsLT.setSwitchExpressionsLessonIsComplete(true);
                    break;
                case SWITCH_CASES:
                    javaConditionalsLT.setSwitchCasesLessonIsComplete(true);
                    break;
                case BREAK_STATEMENT:
                    javaConditionalsLT.setBreakStatementLessonIsComplete(true);
                    break;
                case CONTINUE_STATEMENT:
                    javaConditionalsLT.setContinueStatementLessonIsComplete(true);
                    break;
                case QUIZ:
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
                        () -> new RuntimeException(CodeJawnError.USER_NOT_FOUND.getMessage())
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