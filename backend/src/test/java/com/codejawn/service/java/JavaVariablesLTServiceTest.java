package com.codejawn.service.java;

import com.codejawn.model.LessonTracker;
import com.codejawn.model.UserAccount;
import com.codejawn.model.java.JavaLT;
import com.codejawn.model.java.JavaVariablesLT;
import com.codejawn.repository.java.JavaVariablesLTRepository;
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
public class JavaVariablesLTServiceTest {
    @Mock
    JavaVariablesLTRepository javaVariablesLTRepository;
    @Mock
    UserAccountRepository userAccountRepository;
    @Mock
    JavaVariablesLT javaVariablesLT;
    @Mock
    UserAccount userAccount;
    @Mock
    LessonTracker lessonTracker;
    @Mock
    JavaLT javaLT;
    @InjectMocks
    JavaVariablesLTService javaVariablesLTService;

    @BeforeEach
    void setup(){
        lessonTracker = new LessonTracker();
        javaLT = new JavaLT();
        javaVariablesLT = new JavaVariablesLT();
        userAccount = new UserAccount();
        userAccount.setId(1L);
        userAccount.setLessonTracker(lessonTracker);
        lessonTracker.setJavaLT(javaLT);
        javaLT.setJavaVariablesLT(javaVariablesLT);

        javaVariablesLT.setId(1L);
        javaVariablesLT.setAssigningValuesLessonIsComplete(true);
        javaVariablesLT.setUpdatingValuesLessonIsComplete(true);
        javaVariablesLT.setInitializingVariablesLessonIsComplete(true);
        javaVariablesLT.setConstantsLessonIsComplete(true);
        javaVariablesLT.setNamingVariablesLessonIsComplete(true);
        javaVariablesLT.setComplete(false);
        javaVariablesLT.setQuizIsComplete(false);
    }

    @Test
    void reset_lt_should_return_success() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaVariablesLTRepository.save(any())).thenReturn(javaVariablesLT);
        String response = javaVariablesLTService.resetLT(1L);
        Assertions.assertEquals(StatusCode.SUCCESS.name(), response);
    }

    @Test
    void reset_lt_should_return_failed() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaVariablesLTRepository.save(any())).thenThrow(new RuntimeException());
        String response = javaVariablesLTService.resetLT(1L);
        Assertions.assertEquals(StatusCode.FAILED.name(), response);
    }

    @Test
    void getLTShouldReturnCorrectJavaVariablesLT(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        JavaVariablesLT response = javaVariablesLTService.getLT(1L);
        Assertions.assertEquals(response, javaVariablesLT);

        Assertions.assertEquals(1L, response.getId());
        Assertions.assertTrue(response.isAssigningValuesLessonIsComplete());
        Assertions.assertFalse(response.isComplete());
        Assertions.assertFalse(response.isQuizIsComplete());
        Assertions.assertTrue(response.isUpdatingValuesLessonIsComplete());
        Assertions.assertTrue(response.isNamingVariablesLessonIsComplete());
        Assertions.assertTrue(response.isConstantsLessonIsComplete());
        Assertions.assertTrue(response.isInitializingVariablesLessonIsComplete());
    }

    @Test
    void getLTShouldMakeCallToUserAccountRepository(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        javaVariablesLTService.getLT(1L);
        verify(userAccountRepository, times(1)).findById(1L);
    }

    @Test
    void getLTShouldThrowUserNotFoundError(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.empty());
        RuntimeException e = assertThrows(RuntimeException.class, () -> {
            javaVariablesLTService.getLT(2L);
        });
        Assertions.assertEquals(e.getMessage(), CodeJawnError.USER_NOT_FOUND.getMessage());
    }

    @Test
    void update_lt_should_make_call_to_repositories(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaVariablesLTRepository.save(any())).thenReturn(userAccount);
        javaVariablesLTService.updateLT(1L, "Constants");
        verify(userAccountRepository, times(1)).findById(1L);
        verify(javaVariablesLTRepository, times(1)).save(javaVariablesLT);
    }

    @Test
    void update_lt_should_throw_runtime_exception(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.empty());

        RuntimeException e = assertThrows(RuntimeException.class, () -> {
            javaVariablesLTService.updateLT(1L, "Constants");
        });

        Assertions.assertEquals(e.getMessage(), CodeJawnError.USER_NOT_FOUND.getMessage());
    }

    @Test
    void update_lt_should_return_success(){
        ArrayList<String> lessonsList = new ArrayList<>();
        lessonsList.add("Initializing Variables");
        lessonsList.add("Naming Variables");
        lessonsList.add("Assigning Values");
        lessonsList.add("Updating Values");
        lessonsList.add("Constants");
        lessonsList.add("Quiz");

        for (String lesson : lessonsList) {
            when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
            when(javaVariablesLTRepository.save(any())).thenReturn(javaVariablesLT);
            String response = javaVariablesLTService.updateLT(1L, lesson);
            Assertions.assertEquals(response, StatusCode.SUCCESS.name());
        }
    }

    @Test
    void update_lt_should_return_failed(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaVariablesLTRepository.save(any())).thenThrow(new RuntimeException());

        String response = javaVariablesLTService.updateLT(1L, "Constants");

        Assertions.assertEquals(response, StatusCode.FAILED.name());
    }

    @Test
    void complete_lt_should_return_success() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaVariablesLTRepository.save(any())).thenReturn(javaVariablesLT);
        String response = javaVariablesLTService.completeLT(1L);
        Assertions.assertEquals(StatusCode.SUCCESS.name(), response);
    }

    @Test
    void complete_lt_should_return_failed() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaVariablesLTRepository.save(any())).thenThrow(new RuntimeException());
        String response = javaVariablesLTService.completeLT(1L);
        Assertions.assertEquals(StatusCode.FAILED.name(), response);
    }

    @Test
    void update_lt_should_return_failed_when_given_wrong_lesson(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        String response = javaVariablesLTService.updateLT(1L, "Cookie Monster");
        Assertions.assertEquals(response, StatusCode.FAILED.name());
    }
}
