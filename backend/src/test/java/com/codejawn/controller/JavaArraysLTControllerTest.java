package com.codejawn.controller;

import com.codejawn.dto.UpdateLTDTO;
import com.codejawn.model.java.JavaArraysLT;
import com.codejawn.service.JavaArraysLTService;
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
    UpdateLTDTO updateLTDTO;
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

        updateLTDTO = new UpdateLTDTO();
        updateLTDTO.setUserId(1L);
        updateLTDTO.setLesson("Strings");
    }

    @Test
    void get_java_arrays_lt_should_make_call_to_service_class(){
        when(javaArraysLTService.getLT(anyLong())).thenReturn(javaArraysLT);
        javaArraysLTController.getJavaArraysLT(1L);
        verify(javaArraysLTService, times(1)).getLT(1L);
    }

    @Test
    void update_java_arrays_lt_should_make_call_to_service_class(){
        when(javaArraysLTService.updateLT(anyLong(), anyString())).thenReturn("SUCCESS");
        javaArraysLTController.updateJavaArraysLT(updateLTDTO);
        verify(javaArraysLTService, times(1)).updateLT(1L, "Strings");
    }

    @Test
    void update_java_arrays_lt_should_return_success(){
        when(javaArraysLTService.updateLT(anyLong(), anyString())).thenReturn("SUCCESS");
        ResponseEntity<?> response = javaArraysLTController.updateJavaArraysLT(updateLTDTO);
        Assertions.assertEquals(response.getBody(), "SUCCESS");
    }

    @Test
    void update_java_arrays_lt_should_return_failed(){
        updateLTDTO.setLesson("Not a lesson");
        when(javaArraysLTService.updateLT(anyLong(), anyString())).thenReturn("FAILED");
        ResponseEntity<?> response = javaArraysLTController.updateJavaArraysLT(updateLTDTO);
        Assertions.assertEquals(response.getBody(), "FAILED");
    }

    @Test
    void reset_java_arrays_lt_should_make_call_to_service_class(){
        when(javaArraysLTService.resetLT(anyLong())).thenReturn("");
        javaArraysLTController.resetJavaArraysLT(updateLTDTO);
        verify(javaArraysLTService, times(1)).resetLT(1L);
    }

    @Test
    void complete_java_arrays_lt_should_make_call_to_service_class(){
        when(javaArraysLTService.completeLT(anyLong())).thenReturn("");
        javaArraysLTController.completeJavaArraysLT(updateLTDTO);
        verify(javaArraysLTService, times(1)).completeLT(1L);
    }
}
