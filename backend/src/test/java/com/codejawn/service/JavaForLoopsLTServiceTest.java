package com.codejawn.service;

import com.codejawn.model.LessonTracker;
import com.codejawn.model.UserAccount;
import com.codejawn.model.java.JavaForLoopsLT;
import com.codejawn.model.java.JavaLT;
import com.codejawn.repository.JavaForLoopsLTRepository;
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
public class JavaForLoopsLTServiceTest {
    @Mock
    JavaForLoopsLTRepository javaForLoopsLTRepository;
    @Mock
    UserAccountRepository userAccountRepository;
    @Mock
    JavaForLoopsLT javaForLoopsLT;
    @Mock
    UserAccount userAccount;
    @Mock
    LessonTracker lessonTracker;
    @Mock
    JavaLT javaLT;
    @InjectMocks
    JavaForLoopsLTService javaForLoopsLTService;

    @BeforeEach
    void setup(){
        lessonTracker = new LessonTracker();
        javaLT = new JavaLT();
        javaForLoopsLT = new JavaForLoopsLT();
        userAccount = new UserAccount();
        userAccount.setId(1L);
        userAccount.setLessonTracker(lessonTracker);
        lessonTracker.setJavaLT(javaLT);
        javaLT.setJavaForLoopsLT(javaForLoopsLT);

        javaForLoopsLT.setId(1L);
        javaForLoopsLT.setForLoopsSyntaxLessonIsComplete(true);
        javaForLoopsLT.setForLoopsConditionLessonIsComplete(true);
        javaForLoopsLT.setForLoopsIncrementDecrementLessonIsComplete(true);
        javaForLoopsLT.setNestedForLoopsLessonIsComplete(true);
        javaForLoopsLT.setWhileLoopsConditionLessonIsComplete(true);
        javaForLoopsLT.setWhileLoopsSyntaxLessonIsComplete(true);
        javaForLoopsLT.setDoWhileLoopsSyntaxLessonIsComplete(true);
        javaForLoopsLT.setForEachSyntaxLessonIsComplete(true);
        javaForLoopsLT.setComplete(false);
        javaForLoopsLT.setQuizIsComplete(false);
    }

    @Test
    void reset_lt_should_return_success() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaForLoopsLTRepository.save(any())).thenReturn(javaForLoopsLT);
        String response = javaForLoopsLTService.resetLT(1L);
        Assertions.assertEquals("SUCCESS", response);
    }

    @Test
    void reset_lt_should_return_failed() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaForLoopsLTRepository.save(any())).thenThrow(new RuntimeException());
        String response = javaForLoopsLTService.resetLT(1L);
        Assertions.assertEquals("FAILED", response);
    }

    @Test
    void getLTShouldReturnCorrectJavaForLoopsLT(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        JavaForLoopsLT response = javaForLoopsLTService.getLT(1L);
        Assertions.assertEquals(response, javaForLoopsLT);

        Assertions.assertEquals(1L, response.getId());
        Assertions.assertTrue(response.isForLoopsSyntaxLessonIsComplete());
        Assertions.assertFalse(response.isComplete());
        Assertions.assertFalse(response.isQuizIsComplete());
        Assertions.assertTrue(response.isForLoopsConditionLessonIsComplete());
        Assertions.assertTrue(response.isForLoopsIncrementDecrementLessonIsComplete());
        Assertions.assertTrue(response.isForEachSyntaxLessonIsComplete());
        Assertions.assertTrue(response.isWhileLoopsSyntaxLessonIsComplete());
        Assertions.assertTrue(response.isWhileLoopsConditionLessonIsComplete());
        Assertions.assertTrue(response.isDoWhileLoopsSyntaxLessonIsComplete());
        Assertions.assertTrue(response.isNestedForLoopsLessonIsComplete());
    }

    @Test
    void getLTShouldMakeCallToUserAccountRepository(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        javaForLoopsLTService.getLT(1L);
        verify(userAccountRepository, times(1)).findById(1L);
    }

    @Test
    void getLTShouldThrowUserNotFoundError(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.empty());
        RuntimeException e = assertThrows(RuntimeException.class, () -> {
            javaForLoopsLTService.getLT(2L);
        });
        Assertions.assertEquals(e.getMessage(), "User not found");
    }

    @Test
    void update_lt_should_make_call_to_repositories(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaForLoopsLTRepository.save(any())).thenReturn(userAccount);
        javaForLoopsLTService.updateLT(1L, "Strings");
        verify(userAccountRepository, times(1)).findById(1L);
        verify(javaForLoopsLTRepository, times(1)).save(javaForLoopsLT);
    }

    @Test
    void update_lt_should_throw_runtime_exception(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.empty());

        RuntimeException e = assertThrows(RuntimeException.class, () -> {
            javaForLoopsLTService.updateLT(1L, "ints");
        });

        Assertions.assertEquals(e.getMessage(), "User not found");
    }

    @Test
    void update_lt_should_return_success(){
        ArrayList<String> lessonsList = new ArrayList<>();
        lessonsList.add("For Loops Syntax");
        lessonsList.add("For Loops Condition");
        lessonsList.add("For Loops Increment/Decrement");
        lessonsList.add("Nesting For Loops");
        lessonsList.add("While Loops Syntax");
        lessonsList.add("While Loops Condition");
        lessonsList.add("Do While Loops Syntax");
        lessonsList.add("For Each Syntax");
        lessonsList.add("Quiz");

        for (String lesson : lessonsList) {
            when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
            when(javaForLoopsLTRepository.save(any())).thenReturn(javaForLoopsLT);
            String response = javaForLoopsLTService.updateLT(1L, lesson);
            Assertions.assertEquals(response, "SUCCESS");
        }
    }

    @Test
    void update_lt_should_return_failed(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaForLoopsLTRepository.save(any())).thenThrow(new RuntimeException());

        String response = javaForLoopsLTService.updateLT(1L, "ints");

        Assertions.assertEquals(response, "FAILED");
    }

    @Test
    void complete_lt_should_return_success() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaForLoopsLTRepository.save(any())).thenReturn(javaForLoopsLT);
        String response = javaForLoopsLTService.completeLT(1L);
        Assertions.assertEquals("SUCCESS", response);
    }

    @Test
    void complete_lt_should_return_failed() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaForLoopsLTRepository.save(any())).thenThrow(new RuntimeException());
        String response = javaForLoopsLTService.completeLT(1L);
        Assertions.assertEquals("FAILED", response);
    }
}
