package com.codejawn.controller.java;

import com.codejawn.model.request.lessontracker.UpdateLTRequest;
import com.codejawn.model.java.JavaArraysLT;
import com.codejawn.service.java.JavaArraysLTService;
import com.codejawn.util.StatusCode;
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
public class JavaArraysLTControllerTest {
    @Mock
    JavaArraysLTService javaArraysLTService;
    @Mock
    JavaArraysLT javaArraysLT;
    @Mock
    UpdateLTRequest updateLTRequest;
    @InjectMocks
    JavaArraysLTController javaArraysLTController;

    @BeforeEach
    void setup() {
        javaArraysLT = new JavaArraysLT();
        javaArraysLT.setId(1L);
        javaArraysLT.setInitializingArraysLessonIsComplete(true);
        javaArraysLT.setAssigningValuesLessonIsComplete(true);
        javaArraysLT.setArrayIndexesLessonIsComplete(true);
        javaArraysLT.setUpdatingValuesLessonIsComplete(true);
        javaArraysLT.setLengthMethodLessonIsComplete(true);
        javaArraysLT.setLoopingThroughArrayLessonIsComplete(true);
        javaArraysLT.setComplete(false);
        javaArraysLT.setQuizIsComplete(false);

        updateLTRequest = new UpdateLTRequest();
        updateLTRequest.setUserId(1L);
        updateLTRequest.setLesson("Strings");
    }

    @Test
    void get_java_arrays_lt_should_make_call_to_service_class(){
        when(javaArraysLTService.getLT(anyLong())).thenReturn(javaArraysLT);
        javaArraysLTController.getJavaArraysLT(1L);
        verify(javaArraysLTService, times(1)).getLT(1L);
    }

    @Test
    void update_java_arrays_lt_should_make_call_to_service_class(){
        when(javaArraysLTService.updateLT(anyLong(), anyString())).thenReturn(StatusCode.SUCCESS.name());
        javaArraysLTController.updateJavaArraysLT(updateLTRequest);
        verify(javaArraysLTService, times(1)).updateLT(1L, "Strings");
    }

    @Test
    void update_java_arrays_lt_should_return_success(){
        when(javaArraysLTService.updateLT(anyLong(), anyString())).thenReturn(StatusCode.SUCCESS.name());
        ResponseEntity<?> response = javaArraysLTController.updateJavaArraysLT(updateLTRequest);
        Assertions.assertEquals(response.getBody(), StatusCode.SUCCESS.name());
    }

    @Test
    void update_java_arrays_lt_should_return_failed(){
        updateLTRequest.setLesson("Not a lesson");
        when(javaArraysLTService.updateLT(anyLong(), anyString())).thenReturn(StatusCode.FAILED.name());
        ResponseEntity<?> response = javaArraysLTController.updateJavaArraysLT(updateLTRequest);
        Assertions.assertEquals(response.getBody(), StatusCode.FAILED.name());
    }

    @Test
    void reset_java_arrays_lt_should_make_call_to_service_class(){
        when(javaArraysLTService.resetLT(anyLong())).thenReturn("");
        javaArraysLTController.resetJavaArraysLT(updateLTRequest);
        verify(javaArraysLTService, times(1)).resetLT(1L);
    }

    @Test
    void complete_java_arrays_lt_should_make_call_to_service_class(){
        when(javaArraysLTService.completeLT(anyLong())).thenReturn("");
        javaArraysLTController.completeJavaArraysLT(updateLTRequest);
        verify(javaArraysLTService, times(1)).completeLT(1L);
    }
}
