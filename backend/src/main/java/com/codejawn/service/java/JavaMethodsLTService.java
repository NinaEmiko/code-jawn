package com.codejawn.service.java;

import com.codejawn.model.java.JavaMethodsLT;
import com.codejawn.model.UserAccount;
import com.codejawn.repository.java.JavaMethodsLTRepository;
import com.codejawn.repository.UserAccountRepository;
import com.codejawn.util.CodeJawnError;
import com.codejawn.util.StatusCode;
import com.codejawn.util.java.JavaMethodsLesson;
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
            return StatusCode.SUCCESS.name();
        } catch (Exception e) {
            return StatusCode.FAILED.name();
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
            return StatusCode.SUCCESS.name();
        } catch (Exception e) {
            return StatusCode.FAILED.name();
        }
    }

    public String updateLT(Long userId, String lesson) {
        UserAccount userAccount = retrieveUserAccount(userId);
        try {
            JavaMethodsLT javaMethodsLT = userAccount.getLessonTracker().getJavaLT().getJavaMethodsLT();
            JavaMethodsLesson javaMethodsLesson = JavaMethodsLesson.fromLesson(lesson);
            switch (javaMethodsLesson) {
                case METHOD_SIGNATURES:
                    javaMethodsLT.setMethodSignaturesLessonIsComplete(true);
                    break;
                case RETURN_TYPES:
                    javaMethodsLT.setReturnTypesLessonIsComplete(true);
                    break;
                case PARAMETERS:
                    javaMethodsLT.setParametersLessonIsComplete(true);
                    break;
                case SCOPE:
                    javaMethodsLT.setScopeLessonIsComplete(true);
                    break;
                case NAMING_METHODS:
                    javaMethodsLT.setNamingMethodsLessonIsComplete(true);
                    break;
                case OVERLOADING:
                    javaMethodsLT.setOverloadingLessonIsComplete(true);
                    break;
                case QUIZ:
                    javaMethodsLT.setQuizIsComplete(true);
                    break;
                default:
                    throw new RuntimeException(CodeJawnError.LESSON_NOT_FOUND.getMessage());
            }
            checkCompletion(javaMethodsLT);
            javaMethodsLTRepository.save(javaMethodsLT);
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