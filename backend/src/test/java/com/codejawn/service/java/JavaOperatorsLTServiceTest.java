package com.codejawn.service.java;

import com.codejawn.model.LessonTracker;
import com.codejawn.model.UserAccount;
import com.codejawn.model.java.JavaLT;
import com.codejawn.model.java.JavaOperatorsLT;
import com.codejawn.repository.java.JavaOperatorsLTRepository;
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
public class JavaOperatorsLTServiceTest {
    @Mock
    JavaOperatorsLTRepository javaOperatorsLTRepository;
    @Mock
    UserAccountRepository userAccountRepository;
    @Mock
    JavaOperatorsLT javaOperatorsLT;
    @Mock
    UserAccount userAccount;
    @Mock
    LessonTracker lessonTracker;
    @Mock
    JavaLT javaLT;
    @InjectMocks
    JavaOperatorsLTService javaOperatorsLTService;

    @BeforeEach
    void setup(){
        lessonTracker = new LessonTracker();
        javaLT = new JavaLT();
        javaOperatorsLT = new JavaOperatorsLT();
        userAccount = new UserAccount();
        userAccount.setId(1L);
        userAccount.setLessonTracker(lessonTracker);
        lessonTracker.setJavaLT(javaLT);
        javaLT.setJavaOperatorsLT(javaOperatorsLT);

        javaOperatorsLT.setId(1L);
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
        javaOperatorsLT.setComplete(false);
        javaOperatorsLT.setQuizIsComplete(false);
    }

    @Test
    void reset_lt_should_return_success() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaOperatorsLTRepository.save(any())).thenReturn(javaOperatorsLT);
        String response = javaOperatorsLTService.resetLT(1L);
        Assertions.assertEquals(StatusCode.SUCCESS.name(), response);
    }

    @Test
    void reset_lt_should_return_failed() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaOperatorsLTRepository.save(any())).thenThrow(new RuntimeException());
        String response = javaOperatorsLTService.resetLT(1L);
        Assertions.assertEquals(StatusCode.FAILED.name(), response);
    }

    @Test
    void getLTShouldReturnCorrectJavaOperatorsLT(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        JavaOperatorsLT response = javaOperatorsLTService.getLT(1L);
        Assertions.assertEquals(response, javaOperatorsLT);

        Assertions.assertEquals(1L, response.getId());
        Assertions.assertTrue(response.isAndLessonIsComplete());
        Assertions.assertFalse(response.isComplete());
        Assertions.assertFalse(response.isQuizIsComplete());
        Assertions.assertTrue(response.isOrLessonIsComplete());
        Assertions.assertTrue(response.isNotLessonIsComplete());
        Assertions.assertTrue(response.isPlusLessonIsComplete());
        Assertions.assertTrue(response.isMinusLessonIsComplete());
        Assertions.assertTrue(response.isDivideLessonIsComplete());
        Assertions.assertTrue(response.isMultiplyLessonIsComplete());
        Assertions.assertTrue(response.isModulusLessonIsComplete());
        Assertions.assertTrue(response.isIncrementLessonIsComplete());
        Assertions.assertTrue(response.isDecrementLessonIsComplete());
        Assertions.assertTrue(response.isLessThanLessonIsComplete());
        Assertions.assertTrue(response.isGreaterThanEqualToLessonIsComplete());
        Assertions.assertTrue(response.isLessThanEqualToLessonIsComplete());
        Assertions.assertTrue(response.isGreaterThanLessonIsComplete());
        Assertions.assertTrue(response.isDoubleEqualsLessonIsComplete());
        Assertions.assertTrue(response.isNotEqualToLessonIsComplete());
        Assertions.assertTrue(response.isEqualsLessonIsComplete());
    }

    @Test
    void getLTShouldMakeCallToUserAccountRepository(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        javaOperatorsLTService.getLT(1L);
        verify(userAccountRepository, times(1)).findById(1L);
    }

    @Test
    void getLTShouldThrowUserNotFoundError(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.empty());
        RuntimeException e = assertThrows(RuntimeException.class, () -> {
            javaOperatorsLTService.getLT(2L);
        });
        Assertions.assertEquals(e.getMessage(), CodeJawnError.USER_NOT_FOUND.getMessage());
    }

    @Test
    void update_lt_should_make_call_to_repositories(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaOperatorsLTRepository.save(any())).thenReturn(userAccount);
        javaOperatorsLTService.updateLT(1L, "Multiply");
        verify(userAccountRepository, times(1)).findById(1L);
        verify(javaOperatorsLTRepository, times(1)).save(javaOperatorsLT);
    }

    @Test
    void update_lt_should_throw_runtime_exception(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.empty());

        RuntimeException e = assertThrows(RuntimeException.class, () -> {
            javaOperatorsLTService.updateLT(1L, "Multiply");
        });

        Assertions.assertEquals(e.getMessage(), CodeJawnError.USER_NOT_FOUND.getMessage());
    }

    @Test
    void update_lt_should_return_success(){
        ArrayList<String> lessonsList = new ArrayList<>();
        lessonsList.add("And");
        lessonsList.add("Or");
        lessonsList.add("Not");
        lessonsList.add("Plus");
        lessonsList.add("Minus");
        lessonsList.add("Divide");
        lessonsList.add("Multiply");
        lessonsList.add("Modulus");
        lessonsList.add("Increment");
        lessonsList.add("Decrement");
        lessonsList.add("Less Than");
        lessonsList.add("Greater Than");
        lessonsList.add("Double Equals");
        lessonsList.add("Less Than Equal To");
        lessonsList.add("Greater Than Equal To");
        lessonsList.add("Not Equal To");
        lessonsList.add("Equals");
        lessonsList.add("Quiz");

        for (String lesson : lessonsList) {
            when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
            when(javaOperatorsLTRepository.save(any())).thenReturn(javaOperatorsLT);
            String response = javaOperatorsLTService.updateLT(1L, lesson);
            Assertions.assertEquals(response, StatusCode.SUCCESS.name());
        }
    }

    @Test
    void update_lt_should_return_failed(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaOperatorsLTRepository.save(any())).thenThrow(new RuntimeException());

        String response = javaOperatorsLTService.updateLT(1L, "Multiply");

        Assertions.assertEquals(response, StatusCode.FAILED.name());
    }

    @Test
    void complete_lt_should_return_success() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaOperatorsLTRepository.save(any())).thenReturn(javaOperatorsLT);
        String response = javaOperatorsLTService.completeLT(1L);
        Assertions.assertEquals(StatusCode.SUCCESS.name(), response);
    }

    @Test
    void complete_lt_should_return_failed() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaOperatorsLTRepository.save(any())).thenThrow(new RuntimeException());
        String response = javaOperatorsLTService.completeLT(1L);
        Assertions.assertEquals(StatusCode.FAILED.name(), response);
    }
    @Test
    void update_lt_should_return_failed_when_given_wrong_lesson(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        String response = javaOperatorsLTService.updateLT(1L, "Cookie Monster");
        Assertions.assertEquals(response, StatusCode.FAILED.name());
    }
}
