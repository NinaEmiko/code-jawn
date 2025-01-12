package com.codejawn.service;

import com.codejawn.model.UserAccount;
import com.codejawn.model.java.JavaLT;
import com.codejawn.model.LessonTracker;
import com.codejawn.repository.LessonTrackerRepository;
import com.codejawn.repository.UserAccountRepository;
import com.codejawn.service.java.JavaLTService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class LessonTrackerServiceTest {
    @Mock
    LessonTrackerRepository lessonTrackerRepository;
    @Mock
    JavaLTService javaLTService;
    @Mock
    UserAccount userAccount;
    @Mock
    JavaLT javaLT;
    @Mock
    LessonTracker lessonTracker;
    @InjectMocks
    LessonTrackerService lessonTrackerService;
    @Mock
    UserAccountRepository userAccountRepository;

    @BeforeEach
    void setup() {

        lessonTracker = new LessonTracker();
        lessonTracker.setComplete(false);
        lessonTracker.setId(null);

        javaLT = new JavaLT();
        javaLT.setId(null);
        javaLT.setComplete(false);
        javaLT.setFinalIsComplete(false);
        javaLT.setJavaDataTypesLT(null);

        userAccount.setLessonTracker(lessonTracker);
    }

    @Test
    void delete_by_id_should_make_call_To_repository() {
        doNothing().when(lessonTrackerRepository).deleteById(anyLong());
        lessonTrackerService.deleteById(1L);
        verify(lessonTrackerRepository).deleteById(1L);
    }

    @Test
    void get_lesson_tracker_should_return_lesson_tracker_object(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        LessonTracker response = lessonTrackerService.getLessonTracker(1L);
        Assertions.assertNotNull(lessonTracker);
        Assertions.assertNull(lessonTracker.getId());
        Assertions.assertFalse(lessonTracker.isComplete());
    }

    @Test
    void get_lesson_tracker_should_throw_runt_time_exception() {
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> {
            lessonTrackerService.getLessonTracker(1L);
        });
    }
}
