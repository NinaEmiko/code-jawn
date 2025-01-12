package com.codejawn.controller;

import com.codejawn.dto.UpdateLTDTO;
import com.codejawn.model.java.JavaForLoopsLT;
import com.codejawn.service.JavaForLoopsLTService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;

import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class JavaForLoopsLTControllerTest {
    @Mock
    JavaForLoopsLTService javaForLoopsLTService;
    @Mock
    JavaForLoopsLT javaForLoopsLT;
    @Mock
    UpdateLTDTO updateLTDTO;
    @InjectMocks
    JavaForLoopsLTController javaForLoopsLTController;

    @BeforeEach
    void setup() {
        javaForLoopsLT = new JavaForLoopsLT();
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

        updateLTDTO = new UpdateLTDTO();
        updateLTDTO.setUserId(1L);
        updateLTDTO.setLesson("Strings");
    }

    @Test
    void get_java_for_loops_lt_should_make_call_to_service_class(){
        when(javaForLoopsLTService.getLT(anyLong())).thenReturn(javaForLoopsLT);
        javaForLoopsLTController.getJavaForLoopsLT(1L);
        verify(javaForLoopsLTService, times(1)).getLT(1L);
    }

    @Test
    void update_java_for_loops_lt_should_make_call_to_service_class(){
        when(javaForLoopsLTService.updateLT(anyLong(), anyString())).thenReturn("SUCCESS");
        javaForLoopsLTController.updateJavaForLoopsLT(updateLTDTO);
        verify(javaForLoopsLTService, times(1)).updateLT(1L, "Strings");
    }

    @Test
    void update_java_for_loops_lt_should_return_success(){
        when(javaForLoopsLTService.updateLT(anyLong(), anyString())).thenReturn("SUCCESS");
        ResponseEntity<?> response = javaForLoopsLTController.updateJavaForLoopsLT(updateLTDTO);
        Assertions.assertEquals(response.getBody(), "SUCCESS");
    }

    @Test
    void update_java_for_loops_lt_should_return_failed(){
        updateLTDTO.setLesson("Not a lesson");
        when(javaForLoopsLTService.updateLT(anyLong(), anyString())).thenReturn("FAILED");
        ResponseEntity<?> response = javaForLoopsLTController.updateJavaForLoopsLT(updateLTDTO);
        Assertions.assertEquals(response.getBody(), "FAILED");
    }

    @Test
    void reset_java_for_loops_lt_should_make_call_to_service_class(){
        when(javaForLoopsLTService.resetLT(anyLong())).thenReturn("");
        javaForLoopsLTController.resetJavaForLoopsLT(updateLTDTO);
        verify(javaForLoopsLTService, times(1)).resetLT(1L);
    }

    @Test
    void complete_java_for_loops_lt_should_make_call_to_service_class(){
        when(javaForLoopsLTService.completeLT(anyLong())).thenReturn("");
        javaForLoopsLTController.completeJavaForLoopsLT(updateLTDTO);
        verify(javaForLoopsLTService, times(1)).completeLT(1L);
    }
}
