package com.codejawn.service.java;

import com.codejawn.model.LessonTracker;
import com.codejawn.model.UserAccount;
import com.codejawn.model.java.JavaArraysLT;
import com.codejawn.model.java.JavaLT;
import com.codejawn.repository.java.JavaArraysLTRepository;
import com.codejawn.repository.UserAccountRepository;
import com.codejawn.util.StatusCode;
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
public class JavaArraysLTServiceTest {

    @Mock
    JavaArraysLTRepository javaArraysLTRepository;
    @Mock
    UserAccountRepository userAccountRepository;
    @Mock
    JavaArraysLT javaArraysLT;
    @Mock
    UserAccount userAccount;
    @Mock
    LessonTracker lessonTracker;
    @Mock
    JavaLT javaLT;
    @InjectMocks
    JavaArraysLTService javaArraysLTService;

    @BeforeEach
    void setup(){
        lessonTracker = new LessonTracker();
        javaLT = new JavaLT();
        javaArraysLT = new JavaArraysLT();
        userAccount = new UserAccount();
        userAccount.setId(1L);
        userAccount.setLessonTracker(lessonTracker);
        lessonTracker.setJavaLT(javaLT);
        javaLT.setJavaArraysLT(javaArraysLT);

        javaArraysLT.setId(1L);
        javaArraysLT.setInitializingArraysLessonIsComplete(true);
        javaArraysLT.setAssigningValuesLessonIsComplete(true);
        javaArraysLT.setArrayIndexesLessonIsComplete(true);
        javaArraysLT.setUpdatingValuesLessonIsComplete(true);
        javaArraysLT.setLengthMethodLessonIsComplete(true);
        javaArraysLT.setLoopingThroughArrayLessonIsComplete(true);
        javaArraysLT.setComplete(false);
        javaArraysLT.setQuizIsComplete(false);
    }

    @Test
    void reset_lt_should_return_success() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaArraysLTRepository.save(any())).thenReturn(javaArraysLT);
        String response = javaArraysLTService.resetLT(1L);
        Assertions.assertEquals(StatusCode.SUCCESS.name(), response);
    }

    @Test
    void reset_lt_should_return_failed() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaArraysLTRepository.save(any())).thenThrow(new RuntimeException());
        String response = javaArraysLTService.resetLT(1L);
        Assertions.assertEquals(StatusCode.FAILED.name(), response);
    }

    @Test
    void getLTShouldReturnCorrectJavaArraysLT(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        JavaArraysLT response = javaArraysLTService.getLT(1L);
        Assertions.assertEquals(response, javaArraysLT);

        Assertions.assertEquals(1L, response.getId());
        Assertions.assertTrue(response.isInitializingArraysLessonIsComplete());
        Assertions.assertFalse(response.isComplete());
        Assertions.assertFalse(response.isQuizIsComplete());
        Assertions.assertTrue(response.isAssigningValuesLessonIsComplete());
        Assertions.assertTrue(response.isArrayIndexesLessonIsComplete());
        Assertions.assertTrue(response.isUpdatingValuesLessonIsComplete());
        Assertions.assertTrue(response.isLengthMethodLessonIsComplete());
        Assertions.assertTrue(response.isLoopingThroughArrayLessonIsComplete());
    }

    @Test
    void getLTShouldMakeCallToUserAccountRepository(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        javaArraysLTService.getLT(1L);
        verify(userAccountRepository, times(1)).findById(1L);
    }

    @Test
    void getLTShouldThrowUserNotFoundError(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.empty());
        RuntimeException e = assertThrows(RuntimeException.class, () -> {
            javaArraysLTService.getLT(2L);
        });
        Assertions.assertEquals(e.getMessage(), "User not found");
    }

    @Test
    void update_lt_should_make_call_to_repositories(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaArraysLTRepository.save(any())).thenReturn(userAccount);
        javaArraysLTService.updateLT(1L, "Strings");
        verify(userAccountRepository, times(1)).findById(1L);
        verify(javaArraysLTRepository, times(1)).save(javaArraysLT);
    }

    @Test
    void update_lt_should_throw_runtime_exception(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.empty());

        RuntimeException e = assertThrows(RuntimeException.class, () -> {
            javaArraysLTService.updateLT(1L, "ints");
        });

        Assertions.assertEquals(e.getMessage(), "User not found");
    }

    @Test
    void update_lt_should_return_success(){
        ArrayList<String> lessonsList = new ArrayList<>();
        lessonsList.add("Initializing Arrays");
        lessonsList.add("Assigning Values");
        lessonsList.add("Array Indexes");
        lessonsList.add("Updating Values");
        lessonsList.add("Length Method");
        lessonsList.add("Looping Through Arrays");
        lessonsList.add("Quiz");

        for (String lesson : lessonsList) {
            when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
            when(javaArraysLTRepository.save(any())).thenReturn(javaArraysLT);
            String response = javaArraysLTService.updateLT(1L, lesson);
            Assertions.assertEquals(response, StatusCode.SUCCESS.name());
        }
    }

    @Test
    void update_lt_should_return_failed(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaArraysLTRepository.save(any())).thenThrow(new RuntimeException());

        String response = javaArraysLTService.updateLT(1L, "ints");

        Assertions.assertEquals(response, StatusCode.FAILED.name());
    }

    @Test
    void complete_lt_should_return_success() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaArraysLTRepository.save(any())).thenReturn(javaArraysLT);
        String response = javaArraysLTService.completeLT(1L);
        Assertions.assertEquals(StatusCode.SUCCESS.name(), response);
    }

    @Test
    void complete_lt_should_return_failed() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaArraysLTRepository.save(any())).thenThrow(new RuntimeException());
        String response = javaArraysLTService.completeLT(1L);
        Assertions.assertEquals(StatusCode.FAILED.name(), response);
    }
}
