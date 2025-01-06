package com.codejawn.controller;

import com.codejawn.model.LessonTracker;
import com.codejawn.service.LessonTrackerService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class LessonTrackerControllerTest {

    @InjectMocks
    LessonTrackerController lessonTrackerController;
    @Mock
    LessonTrackerService lessonTrackerService;
    @Mock
    LessonTracker lessonTracker;
    @Test
    void getLTTest(){
        when(lessonTrackerService.getLessonTracker(anyLong())).thenReturn(lessonTracker);
        lessonTrackerController.getLT(1l);
        verify(lessonTrackerService).getLessonTracker(anyLong());
    }
}
