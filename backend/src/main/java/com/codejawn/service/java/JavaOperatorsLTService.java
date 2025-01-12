package com.codejawn.service.java;

import com.codejawn.model.java.JavaOperatorsLT;
import com.codejawn.model.UserAccount;
import com.codejawn.repository.java.JavaOperatorsLTRepository;
import com.codejawn.repository.UserAccountRepository;
import com.codejawn.util.StatusCode;
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
            switch (lesson) {
                case "And":
                    javaOperatorsLT.setAndLessonIsComplete(true);
                    break;
                case "Or":
                    javaOperatorsLT.setOrLessonIsComplete(true);
                    break;
                case "Not":
                    javaOperatorsLT.setNotLessonIsComplete(true);
                    break;
                case "Plus":
                    javaOperatorsLT.setPlusLessonIsComplete(true);
                    break;
                case "Minus":
                    javaOperatorsLT.setMinusLessonIsComplete(true);
                    break;
                case "Divide":
                    javaOperatorsLT.setDivideLessonIsComplete(true);
                    break;
                case "Multiply":
                    javaOperatorsLT.setMultiplyLessonIsComplete(true);
                    break;
                case "Modulus":
                    javaOperatorsLT.setModulusLessonIsComplete(true);
                    break;
                case "Increment":
                    javaOperatorsLT.setIncrementLessonIsComplete(true);
                    break;
                case "Decrement":
                    javaOperatorsLT.setDecrementLessonIsComplete(true);
                    break;
                case "Less Than":
                    javaOperatorsLT.setLessThanLessonIsComplete(true);
                    break;
                case "Greater Than":
                    javaOperatorsLT.setGreaterThanLessonIsComplete(true);
                    break;
                case "Double Equals":
                    javaOperatorsLT.setDoubleEqualsLessonIsComplete(true);
                    break;
                case "Less Than Equal To":
                    javaOperatorsLT.setLessThanEqualToLessonIsComplete(true);
                    break;
                case "Greater Than Equal To":
                    javaOperatorsLT.setGreaterThanEqualToLessonIsComplete(true);
                    break;
                case "Not Equal To":
                    javaOperatorsLT.setNotEqualToLessonIsComplete(true);
                    break;
                case "Equals":
                    javaOperatorsLT.setEqualsLessonIsComplete(true);
                case "Quiz":
                    javaOperatorsLT.setQuizIsComplete(true);
                    break;
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
                        () -> new RuntimeException("User not found")
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