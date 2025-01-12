package com.codejawn.service.java;

import com.codejawn.model.java.JavaDataTypesLT;
import com.codejawn.model.UserAccount;
import com.codejawn.repository.java.JavaDataTypesLTRepository;
import com.codejawn.repository.UserAccountRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@AllArgsConstructor
@Service
public class JavaDataTypesLTService {
    private final JavaDataTypesLTRepository javaDataTypesLTRepository;
    private final UserAccountRepository userAccountRepository;

    public JavaDataTypesLT getLT(Long userId) {
        UserAccount userAccount = retrieveUserAccount(userId);
        return userAccount.getLessonTracker().getJavaLT().getJavaDataTypesLT();
    }

    public String resetLT(Long userId) {
        UserAccount userAccount = retrieveUserAccount(userId);
        try {
            JavaDataTypesLT javaDataTypesLT = userAccount.getLessonTracker().getJavaLT().getJavaDataTypesLT();
            javaDataTypesLT.setStringsLessonIsComplete(false);
            javaDataTypesLT.setIntsLessonIsComplete(false);
            javaDataTypesLT.setBooleansLessonIsComplete(false);
            javaDataTypesLT.setLongsLessonIsComplete(false);
            javaDataTypesLT.setFloatsLessonIsComplete(false);
            javaDataTypesLT.setDoublesLessonIsComplete(false);
            javaDataTypesLT.setShortsLessonIsComplete(false);
            javaDataTypesLT.setBytesLessonIsComplete(false);
            javaDataTypesLT.setCharsLessonIsComplete(false);
            javaDataTypesLT.setCommentsLessonIsComplete(false);
            javaDataTypesLT.setQuizIsComplete(false);
            javaDataTypesLT.setComplete(false);
            javaDataTypesLTRepository.save(javaDataTypesLT);
            return "SUCCESS";
        } catch (Exception e) {
            return "FAILED";
        }
    }

    public String completeLT(Long userId) {
        UserAccount userAccount = retrieveUserAccount(userId);
        try {
            JavaDataTypesLT javaDataTypesLT = userAccount.getLessonTracker().getJavaLT().getJavaDataTypesLT();
            javaDataTypesLT.setStringsLessonIsComplete(true);
            javaDataTypesLT.setIntsLessonIsComplete(true);
            javaDataTypesLT.setBooleansLessonIsComplete(true);
            javaDataTypesLT.setLongsLessonIsComplete(true);
            javaDataTypesLT.setFloatsLessonIsComplete(true);
            javaDataTypesLT.setDoublesLessonIsComplete(true);
            javaDataTypesLT.setShortsLessonIsComplete(true);
            javaDataTypesLT.setBytesLessonIsComplete(true);
            javaDataTypesLT.setCharsLessonIsComplete(true);
            javaDataTypesLT.setCommentsLessonIsComplete(true);
            javaDataTypesLT.setQuizIsComplete(true);
            javaDataTypesLT.setComplete(true);
            javaDataTypesLTRepository.save(javaDataTypesLT);
            return "SUCCESS";
        } catch (Exception e) {
            return "FAILED";
        }
    }

    public String updateLT(Long userId, String lesson) {
        UserAccount userAccount = retrieveUserAccount(userId);
        try {
            JavaDataTypesLT javaDataTypesLT = userAccount.getLessonTracker().getJavaLT().getJavaDataTypesLT();
            switch (lesson) {
                case "Strings":
                    javaDataTypesLT.setStringsLessonIsComplete(true);
                    break;
                case "ints":
                    javaDataTypesLT.setIntsLessonIsComplete(true);
                    break;
                case "booleans":
                    javaDataTypesLT.setBooleansLessonIsComplete(true);
                    break;
                case "Longs":
                    javaDataTypesLT.setLongsLessonIsComplete(true);
                    break;
                case "floats":
                    javaDataTypesLT.setFloatsLessonIsComplete(true);
                    break;
                case "doubles":
                    javaDataTypesLT.setDoublesLessonIsComplete(true);
                    break;
                case "shorts":
                    javaDataTypesLT.setShortsLessonIsComplete(true);
                    break;
                case "bytes":
                    javaDataTypesLT.setBytesLessonIsComplete(true);
                    break;
                case "chars":
                    javaDataTypesLT.setCharsLessonIsComplete(true);
                    break;
                case "Comments":
                    javaDataTypesLT.setCommentsLessonIsComplete(true);
                    break;
                case "Quiz":
                    javaDataTypesLT.setQuizIsComplete(true);
                    break;
            }
            checkCompletion(javaDataTypesLT);
            javaDataTypesLTRepository.save(javaDataTypesLT);
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

    private void checkCompletion(JavaDataTypesLT javaDataTypesLT) {
        if (javaDataTypesLT.isStringsLessonIsComplete() &&
                javaDataTypesLT.isIntsLessonIsComplete() &&
                javaDataTypesLT.isBooleansLessonIsComplete() &&
                javaDataTypesLT.isLongsLessonIsComplete() &&
                javaDataTypesLT.isFloatsLessonIsComplete() &&
                javaDataTypesLT.isDoublesLessonIsComplete() &&
                javaDataTypesLT.isShortsLessonIsComplete() &&
                javaDataTypesLT.isBytesLessonIsComplete() &&
                javaDataTypesLT.isCharsLessonIsComplete() &&
                javaDataTypesLT.isCommentsLessonIsComplete() &&
                javaDataTypesLT.isQuizIsComplete()
        ) {
            javaDataTypesLT.setComplete(true);
        }
    }
}
