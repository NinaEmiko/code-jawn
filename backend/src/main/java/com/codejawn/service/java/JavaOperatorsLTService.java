package com.codejawn.service.java;

import com.codejawn.model.java.JavaOperatorsLT;
import com.codejawn.model.UserAccount;
import com.codejawn.repository.java.JavaOperatorsLTRepository;
import com.codejawn.repository.UserAccountRepository;
import com.codejawn.util.CodeJawnError;
import com.codejawn.util.StatusCode;
import com.codejawn.util.java.JavaOperatorsLesson;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@AllArgsConstructor
@Service
public class JavaOperatorsLTService {
    private final JavaOperatorsLTRepository javaOperatorsLTRepository;
    private final UserAccountRepository userAccountRepository;

    public JavaOperatorsLT getLT(Long userId) {
        UserAccount userAccount = retrieveUserAccount(userId);
        return userAccount.getLessonTracker().getJavaLT().getJavaOperatorsLT();
    }

    public String resetLT(Long userId) {
        UserAccount userAccount = retrieveUserAccount(userId);
        try {
            JavaOperatorsLT javaOperatorsLT = userAccount.getLessonTracker().getJavaLT().getJavaOperatorsLT();
            javaOperatorsLT.setAndLessonIsComplete(false);
            javaOperatorsLT.setOrLessonIsComplete(false);
            javaOperatorsLT.setNotLessonIsComplete(false);
            javaOperatorsLT.setPlusLessonIsComplete(false);
            javaOperatorsLT.setMinusLessonIsComplete(false);
            javaOperatorsLT.setDivideLessonIsComplete(false);
            javaOperatorsLT.setMultiplyLessonIsComplete(false);
            javaOperatorsLT.setModulusLessonIsComplete(false);
            javaOperatorsLT.setIncrementLessonIsComplete(false);
            javaOperatorsLT.setDecrementLessonIsComplete(false);
            javaOperatorsLT.setLessThanLessonIsComplete(false);
            javaOperatorsLT.setGreaterThanLessonIsComplete(false);
            javaOperatorsLT.setDoubleEqualsLessonIsComplete(false);
            javaOperatorsLT.setLessThanEqualToLessonIsComplete(false);
            javaOperatorsLT.setGreaterThanEqualToLessonIsComplete(false);
            javaOperatorsLT.setNotEqualToLessonIsComplete(false);
            javaOperatorsLT.setEqualsLessonIsComplete(false);
            javaOperatorsLT.setQuizIsComplete(false);
            javaOperatorsLT.setComplete(false);
            javaOperatorsLTRepository.save(javaOperatorsLT);
            return StatusCode.SUCCESS.name();
        } catch (Exception e) {
            return StatusCode.FAILED.name();
        }
    }

    public String completeLT(Long userId) {
        UserAccount userAccount = retrieveUserAccount(userId);
        try {
            JavaOperatorsLT javaOperatorsLT = userAccount.getLessonTracker().getJavaLT().getJavaOperatorsLT();
            javaOperatorsLT.setAndLessonIsComplete(true);
            javaOperatorsLT.setOrLessonIsComplete(true);
            javaOperatorsLT.setNotLessonIsComplete(true);
            javaOperatorsLT.setPlusLessonIsComplete(true);
            javaOperatorsLT.setMinusLessonIsComplete(true);
            javaOperatorsLT.setDivideLessonIsComplete(true);
            javaOperatorsLT.setMultiplyLessonIsComplete(true);
            javaOperatorsLT.setModulusLessonIsComplete(true);
            javaOperatorsLT.setIncrementLessonIsComplete(true);
            javaOperatorsLT.setDecrementLessonIsComplete(true);
            javaOperatorsLT.setLessThanLessonIsComplete(true);
            javaOperatorsLT.setGreaterThanLessonIsComplete(true);
            javaOperatorsLT.setDoubleEqualsLessonIsComplete(true);
            javaOperatorsLT.setLessThanEqualToLessonIsComplete(true);
            javaOperatorsLT.setGreaterThanEqualToLessonIsComplete(true);
            javaOperatorsLT.setNotEqualToLessonIsComplete(true);
            javaOperatorsLT.setEqualsLessonIsComplete(true);
            javaOperatorsLT.setQuizIsComplete(true);
            javaOperatorsLT.setComplete(true);
            javaOperatorsLTRepository.save(javaOperatorsLT);
            return StatusCode.SUCCESS.name();
        } catch (Exception e) {
            return StatusCode.FAILED.name();
        }
    }

    public String updateLT(Long userId, String lesson) {
        UserAccount userAccount = retrieveUserAccount(userId);
        try {
            JavaOperatorsLT javaOperatorsLT = userAccount.getLessonTracker().getJavaLT().getJavaOperatorsLT();
            JavaOperatorsLesson javaOperatorsLesson = JavaOperatorsLesson.fromLesson(lesson);
            switch (javaOperatorsLesson) {
                case AND:
                    javaOperatorsLT.setAndLessonIsComplete(true);
                    break;
                case OR:
                    javaOperatorsLT.setOrLessonIsComplete(true);
                    break;
                case NOT:
                    javaOperatorsLT.setNotLessonIsComplete(true);
                    break;
                case PLUS:
                    javaOperatorsLT.setPlusLessonIsComplete(true);
                    break;
                case MINUS:
                    javaOperatorsLT.setMinusLessonIsComplete(true);
                    break;
                case DIVIDE:
                    javaOperatorsLT.setDivideLessonIsComplete(true);
                    break;
                case MULTIPLY:
                    javaOperatorsLT.setMultiplyLessonIsComplete(true);
                    break;
                case MODULUS:
                    javaOperatorsLT.setModulusLessonIsComplete(true);
                    break;
                case INCREMENT:
                    javaOperatorsLT.setIncrementLessonIsComplete(true);
                    break;
                case DECREMENT:
                    javaOperatorsLT.setDecrementLessonIsComplete(true);
                    break;
                case LESS_THAN:
                    javaOperatorsLT.setLessThanLessonIsComplete(true);
                    break;
                case GREATER_THAN:
                    javaOperatorsLT.setGreaterThanLessonIsComplete(true);
                    break;
                case DOUBLE_EQUALS:
                    javaOperatorsLT.setDoubleEqualsLessonIsComplete(true);
                    break;
                case LESS_THAN_EQUAL_TO:
                    javaOperatorsLT.setLessThanEqualToLessonIsComplete(true);
                    break;
                case GREATER_THAN_EQUAL_TO:
                    javaOperatorsLT.setGreaterThanEqualToLessonIsComplete(true);
                    break;
                case NOT_EQUAL_TO:
                    javaOperatorsLT.setNotEqualToLessonIsComplete(true);
                    break;
                case EQUALS:
                    javaOperatorsLT.setEqualsLessonIsComplete(true);
                case QUIZ:
                    javaOperatorsLT.setQuizIsComplete(true);
                    break;
                default:
                    throw new RuntimeException(CodeJawnError.LESSON_NOT_FOUND.getMessage());
            }
            checkCompletion(javaOperatorsLT);
            javaOperatorsLTRepository.save(javaOperatorsLT);
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

    private void checkCompletion(JavaOperatorsLT javaOperatorsLT) {
        if (javaOperatorsLT.isAndLessonIsComplete() &&
                javaOperatorsLT.isOrLessonIsComplete() &&
                javaOperatorsLT.isNotLessonIsComplete() &&
                javaOperatorsLT.isPlusLessonIsComplete() &&
                javaOperatorsLT.isMinusLessonIsComplete() &&
                javaOperatorsLT.isDivideLessonIsComplete() &&
                javaOperatorsLT.isMultiplyLessonIsComplete() &&
                javaOperatorsLT.isModulusLessonIsComplete() &&
                javaOperatorsLT.isIncrementLessonIsComplete() &&
                javaOperatorsLT.isDecrementLessonIsComplete() &&
                javaOperatorsLT.isLessThanLessonIsComplete() &&
                javaOperatorsLT.isGreaterThanLessonIsComplete() &&
                javaOperatorsLT.isLessThanEqualToLessonIsComplete() &&
                javaOperatorsLT.isGreaterThanEqualToLessonIsComplete() &&
                javaOperatorsLT.isNotEqualToLessonIsComplete() &&
                javaOperatorsLT.isEqualsLessonIsComplete() &&
                javaOperatorsLT.isDoubleEqualsLessonIsComplete() &&
                javaOperatorsLT.isQuizIsComplete()
        ) {
            javaOperatorsLT.setComplete(true);
        }
    }
}