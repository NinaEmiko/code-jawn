package com.codejawn.service.java;

import com.codejawn.model.LessonTracker;
import com.codejawn.model.UserAccount;
import com.codejawn.model.java.JavaConditionalsLT;
import com.codejawn.model.java.JavaLT;
import com.codejawn.repository.java.JavaConditionalsLTRepository;
import com.codejawn.repository.UserAccountRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class JavaConditionalsLTServiceTest {

    @Mock
    JavaConditionalsLTRepository javaConditionalsLTRepository;
    @Mock
    UserAccountRepository userAccountRepository;
    @Mock
    JavaConditionalsLT javaConditionalsLT;
    @Mock
    UserAccount userAccount;
    @Mock
    LessonTracker lessonTracker;
    @Mock
    JavaLT javaLT;
    @InjectMocks
    JavaConditionalsLTService javaConditionalsLTService;

    @BeforeEach
    void setup(){
        lessonTracker = new LessonTracker();
        javaLT = new JavaLT();
        javaConditionalsLT = new JavaConditionalsLT();
        userAccount = new UserAccount();
        userAccount.setId(1L);
        userAccount.setLessonTracker(lessonTracker);
        lessonTracker.setJavaLT(javaLT);
        javaLT.setJavaConditionalsLT(javaConditionalsLT);

        javaConditionalsLT.setId(1L);
        javaConditionalsLT.setIfLessonIsComplete(true);
        javaConditionalsLT.setElseifLessonIsComplete(true);
        javaConditionalsLT.setElseLessonIsComplete(true);
        javaConditionalsLT.setMultipleIfsLessonIsComplete(true);
        javaConditionalsLT.setMultipleElseifsLessonIsComplete(true);
        javaConditionalsLT.setIfElseNestingLessonIsComplete(true);
        javaConditionalsLT.setTernaryLessonIsComplete(true);
        javaConditionalsLT.setSwitchSyntaxLessonIsComplete(true);
        javaConditionalsLT.setSwitchCasesLessonIsComplete(true);
        javaConditionalsLT.setSwitchExpressionsLessonIsComplete(true);
        javaConditionalsLT.setBreakStatementLessonIsComplete(true);
        javaConditionalsLT.setContinueStatementLessonIsComplete(true);
        javaConditionalsLT.setComplete(false);
        javaConditionalsLT.setQuizIsComplete(false);

    }

    @Test
    void reset_lt_should_return_success() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaConditionalsLTRepository.save(any())).thenReturn(javaConditionalsLT);
        String response = javaConditionalsLTService.resetLT(1L);
        Assertions.assertEquals("SUCCESS", response);
    }

    @Test
    void reset_lt_should_return_failed() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaConditionalsLTRepository.save(any())).thenThrow(new RuntimeException());
        String response = javaConditionalsLTService.resetLT(1L);
        Assertions.assertEquals("FAILED", response);
    }

    @Test
    void getLTShouldReturnCorrectJavaConditionalsLT(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        JavaConditionalsLT response = javaConditionalsLTService.getLT(1L);
        Assertions.assertEquals(response, javaConditionalsLT);

        Assertions.assertEquals(1L, response.getId());
        Assertions.assertTrue(response.isIfLessonIsComplete());
        Assertions.assertFalse(response.isComplete());
        Assertions.assertFalse(response.isQuizIsComplete());
        Assertions.assertTrue(response.isElseifLessonIsComplete());
        Assertions.assertTrue(response.isElseLessonIsComplete());
        Assertions.assertTrue(response.isIfElseNestingLessonIsComplete());
        Assertions.assertTrue(response.isMultipleIfsLessonIsComplete());
        Assertions.assertTrue(response.isMultipleElseifsLessonIsComplete());
        Assertions.assertTrue(response.isSwitchCasesLessonIsComplete());
        Assertions.assertTrue(response.isSwitchExpressionsLessonIsComplete());
        Assertions.assertTrue(response.isSwitchSyntaxLessonIsComplete());
        Assertions.assertTrue(response.isBreakStatementLessonIsComplete());
        Assertions.assertTrue(response.isContinueStatementLessonIsComplete());
        Assertions.assertTrue(response.isTernaryLessonIsComplete());
    }

    @Test
    void getLTShouldMakeCallToUserAccountRepository(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        javaConditionalsLTService.getLT(1L);
        verify(userAccountRepository, times(1)).findById(1L);
    }

    @Test
    void getLTShouldThrowUserNotFoundError(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.empty());
        RuntimeException e = assertThrows(RuntimeException.class, () -> {
            javaConditionalsLTService.getLT(2L);
        });
        Assertions.assertEquals(e.getMessage(), "User not found");
    }

    @Test
    void update_lt_should_make_call_to_repositories(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaConditionalsLTRepository.save(any())).thenReturn(userAccount);
        javaConditionalsLTService.updateLT(1L, "Strings");
        verify(userAccountRepository, times(1)).findById(1L);
        verify(javaConditionalsLTRepository, times(1)).save(javaConditionalsLT);
    }

    @Test
    void update_lt_should_throw_runtime_exception(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.empty());

        RuntimeException e = assertThrows(RuntimeException.class, () -> {
            javaConditionalsLTService.updateLT(1L, "ints");
        });

        Assertions.assertEquals(e.getMessage(), "User not found");
    }

    @Test
    void update_lt_should_return_success(){
        ArrayList<String> lessonsList = new ArrayList<>();
        lessonsList.add("If");
        lessonsList.add("Else");
        lessonsList.add("Elseif");
        lessonsList.add("Multiple Ifs");
        lessonsList.add("Multiple Elseifs");
        lessonsList.add("If/Else Nesting");
        lessonsList.add("Ternary");
        lessonsList.add("Switch Syntax");
        lessonsList.add("Switch Expressions");
        lessonsList.add("Switch Cases");
        lessonsList.add("Break Statement");
        lessonsList.add("Continue Statement");
        lessonsList.add("Quiz");

        for (String lesson : lessonsList) {
            when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
            when(javaConditionalsLTRepository.save(any())).thenReturn(javaConditionalsLT);
            String response = javaConditionalsLTService.updateLT(1L, lesson);
            Assertions.assertEquals(response, "SUCCESS");
        }
    }

    @Test
    void update_lt_should_return_failed(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaConditionalsLTRepository.save(any())).thenThrow(new RuntimeException());

        String response = javaConditionalsLTService.updateLT(1L, "ints");

        Assertions.assertEquals(response, "FAILED");
    }

    @Test
    void complete_lt_should_return_success() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaConditionalsLTRepository.save(any())).thenReturn(javaConditionalsLT);
        String response = javaConditionalsLTService.completeLT(1L);
        Assertions.assertEquals("SUCCESS", response);
    }

    @Test
    void complete_lt_should_return_failed() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaConditionalsLTRepository.save(any())).thenThrow(new RuntimeException());
        String response = javaConditionalsLTService.completeLT(1L);
        Assertions.assertEquals("FAILED", response);
    }
}
