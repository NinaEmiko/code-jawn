package com.codejawn.service.java;

import com.codejawn.model.java.JavaArraysLT;
import com.codejawn.model.UserAccount;
import com.codejawn.repository.java.JavaArraysLTRepository;
import com.codejawn.repository.UserAccountRepository;
import com.codejawn.util.CodeJawnError;
import com.codejawn.util.StatusCode;
import com.codejawn.util.lessons.java.JavaArraysLesson;
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
        UserAccount userAccount = retrieveUserAccount(userId);
        return userAccount.getLessonTracker().getJavaLT().getJavaArraysLT();
    }

    public String resetLT(Long userId) {
        UserAccount userAccount = retrieveUserAccount(userId);

        JavaArraysLT javaArraysLT = userAccount.getLessonTracker().getJavaLT().getJavaArraysLT();
        javaArraysLT.setInitializingArraysLessonIsComplete(false);
        javaArraysLT.setAssigningValuesLessonIsComplete(false);
        javaArraysLT.setArrayIndexesLessonIsComplete(false);
        javaArraysLT.setUpdatingValuesLessonIsComplete(false);
        javaArraysLT.setLengthMethodLessonIsComplete(false);
        javaArraysLT.setLoopingThroughArrayLessonIsComplete(false);
        javaArraysLT.setQuizIsComplete(false);
        javaArraysLT.setComplete(false);

        try {
            javaArraysLTRepository.save(javaArraysLT);
            return StatusCode.SUCCESS.name();
        } catch (Exception e) {
            return StatusCode.FAILED.name();
        }
    }

    public String completeLT(Long userId) {
        UserAccount userAccount = retrieveUserAccount(userId);
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
            return StatusCode.SUCCESS.name();
        } catch (Exception e) {
            return StatusCode.FAILED.name();
        }
    }

    public String updateLT(Long userId, String lesson) {
        UserAccount userAccount = retrieveUserAccount(userId);
        try {
            JavaArraysLT javaArraysLT = userAccount.getLessonTracker().getJavaLT().getJavaArraysLT();
            JavaArraysLesson javaArraysLesson = JavaArraysLesson.fromLesson(lesson);
            switch (javaArraysLesson) {
                case INITIALIZING_ARRAYS:
                    javaArraysLT.setInitializingArraysLessonIsComplete(true);
                    break;
                case ASSIGNING_VALUES:
                    javaArraysLT.setAssigningValuesLessonIsComplete(true);
                    break;
                case ARRAY_INDEXES:
                    javaArraysLT.setArrayIndexesLessonIsComplete(true);
                    break;
                case UPDATING_VALUES:
                    javaArraysLT.setUpdatingValuesLessonIsComplete(true);
                    break;
                case LENGTH_METHOD:
                    javaArraysLT.setLengthMethodLessonIsComplete(true);
                    break;
                case LOOPING_THROUGH_ARRAYS:
                    javaArraysLT.setLoopingThroughArrayLessonIsComplete(true);
                    break;
                case QUIZ:
                    javaArraysLT.setQuizIsComplete(true);
                    break;
            }
            checkCompletion(javaArraysLT);
            javaArraysLTRepository.save(javaArraysLT);
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