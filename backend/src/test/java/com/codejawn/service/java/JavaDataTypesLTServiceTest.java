package com.codejawn.service.java;

import com.codejawn.model.java.JavaDataTypesLT;
import com.codejawn.model.java.JavaLT;
import com.codejawn.model.LessonTracker;
import com.codejawn.model.UserAccount;
import com.codejawn.repository.java.JavaDataTypesLTRepository;
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
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class JavaDataTypesLTServiceTest {

    @Mock
    JavaDataTypesLTRepository javaDataTypesLTRepository;
    @Mock
    UserAccountRepository userAccountRepository;
    @Mock
    JavaDataTypesLT javaDataTypesLT;
    @Mock
    UserAccount userAccount;
    @Mock
    LessonTracker lessonTracker;
    @Mock
    JavaLT javaLT;
    @InjectMocks
    JavaDataTypesLTService javaDataTypesLTService;

    @BeforeEach
    void setup(){
        lessonTracker = new LessonTracker();
        javaLT = new JavaLT();
        javaDataTypesLT = new JavaDataTypesLT();
        userAccount = new UserAccount();
        userAccount.setId(1L);
        userAccount.setLessonTracker(lessonTracker);
        lessonTracker.setJavaLT(javaLT);
        javaLT.setJavaDataTypesLT(javaDataTypesLT);

        javaDataTypesLT.setId(1L);
        javaDataTypesLT.setStringsLessonIsComplete(true);
        javaDataTypesLT.setComplete(false);
        javaDataTypesLT.setQuizIsComplete(false);
        javaDataTypesLT.setBooleansLessonIsComplete(false);
        javaDataTypesLT.setIntsLessonIsComplete(false);
        javaDataTypesLT.setBytesLessonIsComplete(false);
        javaDataTypesLT.setCharsLessonIsComplete(false);
        javaDataTypesLT.setShortsLessonIsComplete(false);
        javaDataTypesLT.setLongsLessonIsComplete(false);
        javaDataTypesLT.setCommentsLessonIsComplete(false);
        javaDataTypesLT.setDoublesLessonIsComplete(false);
        javaDataTypesLT.setFloatsLessonIsComplete(false);
    }

    @Test
    void reset_lt_should_return_success() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaDataTypesLTRepository.save(any())).thenReturn(javaDataTypesLT);
        String response = javaDataTypesLTService.resetLT(1L);
        Assertions.assertEquals("SUCCESS", response);
    }

    @Test
    void reset_lt_should_return_failed() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaDataTypesLTRepository.save(any())).thenThrow(new RuntimeException());
        String response = javaDataTypesLTService.resetLT(1L);
        Assertions.assertEquals("FAILED", response);
    }

    @Test
    void getLTShouldReturnCorrectJavaDataTypesLT(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        JavaDataTypesLT response = javaDataTypesLTService.getLT(1L);
        Assertions.assertEquals(response, javaDataTypesLT);

        Assertions.assertEquals(1L, response.getId());
        Assertions.assertTrue(response.isStringsLessonIsComplete());
        Assertions.assertFalse(response.isComplete());
        Assertions.assertFalse(response.isQuizIsComplete());
        Assertions.assertFalse(response.isIntsLessonIsComplete());
        Assertions.assertFalse(response.isLongsLessonIsComplete());
        Assertions.assertFalse(response.isShortsLessonIsComplete());
        Assertions.assertFalse(response.isCharsLessonIsComplete());
        Assertions.assertFalse(response.isCommentsLessonIsComplete());
        Assertions.assertFalse(response.isDoublesLessonIsComplete());
        Assertions.assertFalse(response.isFloatsLessonIsComplete());
        Assertions.assertFalse(response.isBytesLessonIsComplete());
    }

    @Test
    void getLTShouldMakeCallToUserAccountRepository(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        javaDataTypesLTService.getLT(1L);
        verify(userAccountRepository, times(1)).findById(1L);
    }

    @Test
    void getLTShouldThrowUserNotFoundError(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.empty());
        RuntimeException e = assertThrows(RuntimeException.class, () -> {
            javaDataTypesLTService.getLT(2L);
        });
        Assertions.assertEquals(e.getMessage(), "User not found");
    }

    @Test
    void update_lt_should_make_call_to_repositories(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaDataTypesLTRepository.save(any())).thenReturn(userAccount);
        javaDataTypesLTService.updateLT(1L, "Strings");
        verify(userAccountRepository, times(1)).findById(1L);
        verify(javaDataTypesLTRepository, times(1)).save(javaDataTypesLT);
    }

    @Test
    void update_lt_should_throw_runtime_exception(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.empty());

        RuntimeException e = assertThrows(RuntimeException.class, () -> {
            javaDataTypesLTService.updateLT(1L, "ints");
        });

        Assertions.assertEquals(e.getMessage(), "User not found");
    }

    @Test
    void update_lt_should_return_success(){
        ArrayList<String> lessonsList = new ArrayList<>();
        lessonsList.add("Strings");
        lessonsList.add("ints");
        lessonsList.add("booleans");
        lessonsList.add("Longs");
        lessonsList.add("shorts");
        lessonsList.add("bytes");
        lessonsList.add("chars");
        lessonsList.add("Comments");
        lessonsList.add("doubles");
        lessonsList.add("floats");
        lessonsList.add("Quiz");

        for (String lesson : lessonsList) {
            when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
            when(javaDataTypesLTRepository.save(any())).thenReturn(javaDataTypesLT);
            String response = javaDataTypesLTService.updateLT(1L, lesson);
            Assertions.assertEquals(response, "SUCCESS");
        }
    }

    @Test
    void update_lt_should_return_failed(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaDataTypesLTRepository.save(any())).thenThrow(new RuntimeException());

        String response = javaDataTypesLTService.updateLT(1L, "ints");

        Assertions.assertEquals(response, "FAILED");
    }

    @Test
    void complete_lt_should_return_success() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaDataTypesLTRepository.save(any())).thenReturn(javaDataTypesLT);
        String response = javaDataTypesLTService.completeLT(1L);
        Assertions.assertEquals("SUCCESS", response);
    }

    @Test
    void complete_lt_should_return_failed() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaDataTypesLTRepository.save(any())).thenThrow(new RuntimeException());
        String response = javaDataTypesLTService.completeLT(1L);
        Assertions.assertEquals("FAILED", response);
    }
}