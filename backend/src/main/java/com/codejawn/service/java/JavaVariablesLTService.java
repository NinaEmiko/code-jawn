package com.codejawn.service.java;

import com.codejawn.model.java.JavaVariablesLT;
import com.codejawn.model.UserAccount;
import com.codejawn.repository.java.JavaVariablesLTRepository;
import com.codejawn.repository.UserAccountRepository;
import com.codejawn.util.CodeJawnError;
import com.codejawn.util.StatusCode;
import com.codejawn.util.lessons.java.JavaVariablesLesson;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@AllArgsConstructor
@Service
public class JavaVariablesLTService {
    private final JavaVariablesLTRepository javaVariablesLTRepository;
    private final UserAccountRepository userAccountRepository;

    public JavaVariablesLT getLT(Long userId) {
        UserAccount userAccount = retrieveUserAccount(userId);
        return userAccount.getLessonTracker().getJavaLT().getJavaVariablesLT();
    }

    public String resetLT(Long userId) {
        UserAccount userAccount = retrieveUserAccount(userId);
        try {
            JavaVariablesLT javaVariablesLT = userAccount.getLessonTracker().getJavaLT().getJavaVariablesLT();
            javaVariablesLT.setInitializingVariablesLessonIsComplete(false);
            javaVariablesLT.setNamingVariablesLessonIsComplete(false);
            javaVariablesLT.setAssigningValuesLessonIsComplete(false);
            javaVariablesLT.setUpdatingValuesLessonIsComplete(false);
            javaVariablesLT.setConstantsLessonIsComplete(false);
            javaVariablesLT.setQuizIsComplete(false);
            javaVariablesLT.setComplete(false);
            javaVariablesLTRepository.save(javaVariablesLT);
            return StatusCode.SUCCESS.name();
        } catch (Exception e) {
            return StatusCode.FAILED.name();
        }
    }

    public String completeLT(Long userId) {
        UserAccount userAccount = retrieveUserAccount(userId);
        try {
            JavaVariablesLT javaVariablesLT = userAccount.getLessonTracker().getJavaLT().getJavaVariablesLT();
            javaVariablesLT.setInitializingVariablesLessonIsComplete(true);
            javaVariablesLT.setNamingVariablesLessonIsComplete(true);
            javaVariablesLT.setAssigningValuesLessonIsComplete(true);
            javaVariablesLT.setUpdatingValuesLessonIsComplete(true);
            javaVariablesLT.setConstantsLessonIsComplete(true);
            javaVariablesLT.setQuizIsComplete(true);
            javaVariablesLT.setComplete(true);
            javaVariablesLTRepository.save(javaVariablesLT);
            return StatusCode.SUCCESS.name();
        } catch (Exception e) {
            return StatusCode.FAILED.name();
        }
    }

    public String updateLT(Long userId, String lesson) {
        UserAccount userAccount = retrieveUserAccount(userId);
        try {
            JavaVariablesLT javaVariablesLT = userAccount.getLessonTracker().getJavaLT().getJavaVariablesLT();
            JavaVariablesLesson javaVariablesLesson = JavaVariablesLesson.fromLesson(lesson);
            switch (javaVariablesLesson) {
                case INITIALIZING_VARIABLES:
                    javaVariablesLT.setInitializingVariablesLessonIsComplete(true);
                    break;
                case NAMING_VARIABLES:
                    javaVariablesLT.setNamingVariablesLessonIsComplete(true);
                    break;
                case ASSIGNING_VALUES:
                    javaVariablesLT.setAssigningValuesLessonIsComplete(true);
                    break;
                case UPDATING_VALUES:
                    javaVariablesLT.setUpdatingValuesLessonIsComplete(true);
                    break;
                case CONSTANTS:
                    javaVariablesLT.setConstantsLessonIsComplete(true);
                    break;
                case QUIZ:
                    javaVariablesLT.setQuizIsComplete(true);
                    break;
            }
            checkCompletion(javaVariablesLT);
            javaVariablesLTRepository.save(javaVariablesLT);
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

    private void checkCompletion(JavaVariablesLT javaVariablesLT) {
        if (javaVariablesLT.isInitializingVariablesLessonIsComplete() &&
                javaVariablesLT.isNamingVariablesLessonIsComplete() &&
                javaVariablesLT.isAssigningValuesLessonIsComplete() &&
                javaVariablesLT.isUpdatingValuesLessonIsComplete() &&
                javaVariablesLT.isConstantsLessonIsComplete() &&
                javaVariablesLT.isQuizIsComplete()
        ) {
            javaVariablesLT.setComplete(true);
        }
    }
}
