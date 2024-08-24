package com.codejawn.service;

import com.codejawn.model.JavaLT;
import com.codejawn.model.LessonTracker;
import com.codejawn.model.UserAccount;
import com.codejawn.repository.LessonTrackerRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class LessonTrackerServiceTest {
    @Mock
    LessonTrackerRepository lessonTrackerRepository;
    @Mock
    JavaLTService javaLTService;
    @Mock
    JavaLT javaLT;
    @Mock
    LessonTracker lessonTracker;
    @InjectMocks
    LessonTrackerService lessonTrackerService;

    @BeforeEach
    void setup() {
        lessonTracker = new LessonTracker();
        lessonTracker.setComplete(false);
        lessonTracker.setId(null);
        lessonTracker.setUserAccount(null);

        javaLT = new JavaLT();
        javaLT.setId(null);
        javaLT.setComplete(false);
        javaLT.setFinalIsComplete(false);
        javaLT.setJavaDataTypesLT(null);
    }
    @Test
    void create_new_lesson_tracker_should_make_call_to_java_lt_service_and_repository(){
        lessonTracker.setJavaLT(javaLT);
        javaLT.setLessonTracker(lessonTracker);

        when(javaLTService.createNewJavaLT()).thenReturn(javaLT);
        when(lessonTrackerRepository.save(any())).thenReturn(lessonTracker);

        lessonTrackerService.createNewLessonTracker();

        verify(javaLTService, times(1)).createNewJavaLT();
        verify(lessonTrackerRepository, times(1)).save(lessonTracker);
    }

    @Test
    void delete_by_id_should_make_call_To_repository() {
        doNothing().when(lessonTrackerRepository).deleteById(anyLong());

        lessonTrackerService.deleteById(1L);

        verify(lessonTrackerRepository, times(1)).deleteById(1L);
    }
}
