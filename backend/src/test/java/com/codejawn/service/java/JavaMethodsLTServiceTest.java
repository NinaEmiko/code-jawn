package com.codejawn.service.java;

import com.codejawn.model.LessonTracker;
import com.codejawn.model.UserAccount;
import com.codejawn.model.java.JavaMethodsLT;
import com.codejawn.model.java.JavaLT;
import com.codejawn.repository.java.JavaMethodsLTRepository;
import com.codejawn.repository.UserAccountRepository;
import com.codejawn.util.CodeJawnError;
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
public class JavaMethodsLTServiceTest {
    @Mock
    JavaMethodsLTRepository javaMethodsLTRepository;
    @Mock
    UserAccountRepository userAccountRepository;
    @Mock
    JavaMethodsLT javaMethodsLT;
    @Mock
    UserAccount userAccount;
    @Mock
    LessonTracker lessonTracker;
    @Mock
    JavaLT javaLT;
    @InjectMocks
    JavaMethodsLTService javaMethodsLTService;

    @BeforeEach
    void setup(){
        lessonTracker = new LessonTracker();
        javaLT = new JavaLT();
        javaMethodsLT = new JavaMethodsLT();
        userAccount = new UserAccount();
        userAccount.setId(1L);
        userAccount.setLessonTracker(lessonTracker);
        lessonTracker.setJavaLT(javaLT);
        javaLT.setJavaMethodsLT(javaMethodsLT);

        javaMethodsLT.setId(1L);
        javaMethodsLT.setMethodSignaturesLessonIsComplete(true);
        javaMethodsLT.setReturnTypesLessonIsComplete(true);
        javaMethodsLT.setParametersLessonIsComplete(true);
        javaMethodsLT.setScopeLessonIsComplete(true);
        javaMethodsLT.setNamingMethodsLessonIsComplete(true);
        javaMethodsLT.setOverloadingLessonIsComplete(true);
        javaMethodsLT.setComplete(false);
        javaMethodsLT.setQuizIsComplete(false);
    }

    @Test
    void reset_lt_should_return_success() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaMethodsLTRepository.save(any())).thenReturn(javaMethodsLT);
        String response = javaMethodsLTService.resetLT(1L);
        Assertions.assertEquals(StatusCode.SUCCESS.name(), response);
    }

    @Test
    void reset_lt_should_return_failed() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaMethodsLTRepository.save(any())).thenThrow(new RuntimeException());
        String response = javaMethodsLTService.resetLT(1L);
        Assertions.assertEquals(StatusCode.FAILED.name(), response);
    }

    @Test
    void getLTShouldReturnCorrectJavaMethodsLT(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        JavaMethodsLT response = javaMethodsLTService.getLT(1L);
        Assertions.assertEquals(response, javaMethodsLT);

        Assertions.assertEquals(1L, response.getId());
        Assertions.assertTrue(response.isMethodSignaturesLessonIsComplete());
        Assertions.assertFalse(response.isComplete());
        Assertions.assertFalse(response.isQuizIsComplete());
        Assertions.assertTrue(response.isReturnTypesLessonIsComplete());
        Assertions.assertTrue(response.isParametersLessonIsComplete());
        Assertions.assertTrue(response.isNamingMethodsLessonIsComplete());
        Assertions.assertTrue(response.isOverloadingLessonIsComplete());
        Assertions.assertTrue(response.isScopeLessonIsComplete());
    }

    @Test
    void getLTShouldMakeCallToUserAccountRepository(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        javaMethodsLTService.getLT(1L);
        verify(userAccountRepository, times(1)).findById(1L);
    }

    @Test
    void getLTShouldThrowUserNotFoundError(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.empty());
        RuntimeException e = assertThrows(RuntimeException.class, () -> {
            javaMethodsLTService.getLT(2L);
        });
        Assertions.assertEquals(e.getMessage(), CodeJawnError.USER_NOT_FOUND.getMessage());
    }

    @Test
    void update_lt_should_make_call_to_repositories(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaMethodsLTRepository.save(any())).thenReturn(userAccount);
        javaMethodsLTService.updateLT(1L, "Strings");
        verify(userAccountRepository, times(1)).findById(1L);
        verify(javaMethodsLTRepository, times(1)).save(javaMethodsLT);
    }

    @Test
    void update_lt_should_throw_runtime_exception(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.empty());

        RuntimeException e = assertThrows(RuntimeException.class, () -> {
            javaMethodsLTService.updateLT(1L, "ints");
        });

        Assertions.assertEquals(e.getMessage(), CodeJawnError.USER_NOT_FOUND.getMessage());
    }

    @Test
    void update_lt_should_return_success(){
        ArrayList<String> lessonsList = new ArrayList<>();
        lessonsList.add("Method Signatures");
        lessonsList.add("Return Types");
        lessonsList.add("Parameters");
        lessonsList.add("Scope");
        lessonsList.add("Naming Methods");
        lessonsList.add("Overloading");
        lessonsList.add("Quiz");

        for (String lesson : lessonsList) {
            when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
            when(javaMethodsLTRepository.save(any())).thenReturn(javaMethodsLT);
            String response = javaMethodsLTService.updateLT(1L, lesson);
            Assertions.assertEquals(response, StatusCode.SUCCESS.name());
        }
    }

    @Test
    void update_lt_should_return_failed(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaMethodsLTRepository.save(any())).thenThrow(new RuntimeException());

        String response = javaMethodsLTService.updateLT(1L, "ints");

        Assertions.assertEquals(response, StatusCode.FAILED.name());
    }

    @Test
    void complete_lt_should_return_success() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaMethodsLTRepository.save(any())).thenReturn(javaMethodsLT);
        String response = javaMethodsLTService.completeLT(1L);
        Assertions.assertEquals(StatusCode.SUCCESS.name(), response);
    }

    @Test
    void complete_lt_should_return_failed() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaMethodsLTRepository.save(any())).thenThrow(new RuntimeException());
        String response = javaMethodsLTService.completeLT(1L);
        Assertions.assertEquals(StatusCode.FAILED.name(), response);
    }
}
