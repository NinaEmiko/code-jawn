package com.codejawn.service.java;

import com.codejawn.model.java.JavaForLoopsLT;
import com.codejawn.model.UserAccount;
import com.codejawn.repository.java.JavaForLoopsLTRepository;
import com.codejawn.repository.UserAccountRepository;
import com.codejawn.util.CodeJawnError;
import com.codejawn.util.StatusCode;
import com.codejawn.util.lessons.java.JavaForLoopsLesson;
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
            return StatusCode.SUCCESS.name();
        } catch (Exception e) {
            return StatusCode.FAILED.name();
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
            return StatusCode.SUCCESS.name();
        } catch (Exception e) {
            return StatusCode.FAILED.name();
        }
    }

    public String updateLT(Long userId, String lesson) {
        UserAccount userAccount = retrieveUserAccount(userId);
        try {
            JavaForLoopsLT javaForLoopsLT = userAccount.getLessonTracker().getJavaLT().getJavaForLoopsLT();
            JavaForLoopsLesson javaForLoopsLesson = JavaForLoopsLesson.fromLesson(lesson);
            switch (javaForLoopsLesson) {
                case FOR_LOOPS_SYNTAX:
                    javaForLoopsLT.setForLoopsSyntaxLessonIsComplete(true);
                    break;
                case FOR_LOOPS_CONDITION:
                    javaForLoopsLT.setForLoopsConditionLessonIsComplete(true);
                    break;
                case FOR_LOOPS_INCREMENT_DECREMENT:
                    javaForLoopsLT.setForLoopsIncrementDecrementLessonIsComplete(true);
                    break;
                case NESTING_FOR_LOOPS:
                    javaForLoopsLT.setNestedForLoopsLessonIsComplete(true);
                    break;
                case WHILE_LOOPS_SYNTAX:
                    javaForLoopsLT.setWhileLoopsSyntaxLessonIsComplete(true);
                    break;
                case WHILE_LOOPS_CONDITION:
                    javaForLoopsLT.setWhileLoopsConditionLessonIsComplete(true);
                    break;
                case DO_WHILE_LOOPS_SYNTAX:
                    javaForLoopsLT.setDoWhileLoopsSyntaxLessonIsComplete(true);
                    break;
                case FOR_EACH_SYNTAX:
                    javaForLoopsLT.setForEachSyntaxLessonIsComplete(true);
                    break;
                case QUIZ:
                    javaForLoopsLT.setQuizIsComplete(true);
                    break;
            }
            checkCompletion(javaForLoopsLT);
            javaForLoopsLTRepository.save(javaForLoopsLT);
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