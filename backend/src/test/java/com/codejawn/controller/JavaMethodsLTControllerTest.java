package com.codejawn.controller;

import com.codejawn.dto.UpdateLTDTO;
import com.codejawn.model.java.JavaMethodsLT;
import com.codejawn.service.JavaMethodsLTService;
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
public class JavaMethodsLTControllerTest {
    @Mock
    JavaMethodsLTService javaMethodsLTService;
    @Mock
    JavaMethodsLT javaMethodsLT;
    @Mock
    UpdateLTDTO updateLTDTO;
    @InjectMocks
    JavaMethodsLTController javaMethodsLTController;

    @BeforeEach
    void setup() {
        javaMethodsLT = new JavaMethodsLT();
        javaMethodsLT.setId(1L);
        javaMethodsLT.setMethodSignaturesLessonIsComplete(true);
        javaMethodsLT.setReturnTypesLessonIsComplete(true);
        javaMethodsLT.setParametersLessonIsComplete(true);
        javaMethodsLT.setScopeLessonIsComplete(true);
        javaMethodsLT.setNamingMethodsLessonIsComplete(true);
        javaMethodsLT.setOverloadingLessonIsComplete(true);
        javaMethodsLT.setComplete(false);
        javaMethodsLT.setQuizIsComplete(false);

        updateLTDTO = new UpdateLTDTO();
        updateLTDTO.setUserId(1L);
        updateLTDTO.setLesson("Strings");
    }

    @Test
    void get_java_methods_lt_should_make_call_to_service_class(){
        when(javaMethodsLTService.getLT(anyLong())).thenReturn(javaMethodsLT);
        javaMethodsLTController.getJavaMethodsLT(1L);
        verify(javaMethodsLTService, times(1)).getLT(1L);
    }

    @Test
    void update_java_methods_lt_should_make_call_to_service_class(){
        when(javaMethodsLTService.updateLT(anyLong(), anyString())).thenReturn("SUCCESS");
        javaMethodsLTController.updateJavaMethodsLT(updateLTDTO);
        verify(javaMethodsLTService, times(1)).updateLT(1L, "Strings");
    }

    @Test
    void update_java_methods_lt_should_return_success(){
        when(javaMethodsLTService.updateLT(anyLong(), anyString())).thenReturn("SUCCESS");
        ResponseEntity<?> response = javaMethodsLTController.updateJavaMethodsLT(updateLTDTO);
        Assertions.assertEquals(response.getBody(), "SUCCESS");
    }

    @Test
    void update_java_methods_lt_should_return_failed(){
        updateLTDTO.setLesson("Not a lesson");
        when(javaMethodsLTService.updateLT(anyLong(), anyString())).thenReturn("FAILED");
        ResponseEntity<?> response = javaMethodsLTController.updateJavaMethodsLT(updateLTDTO);
        Assertions.assertEquals(response.getBody(), "FAILED");
    }

    @Test
    void reset_java_methods_lt_should_make_call_to_service_class(){
        when(javaMethodsLTService.resetLT(anyLong())).thenReturn("");
        javaMethodsLTController.resetJavaMethodsLT(updateLTDTO);
        verify(javaMethodsLTService, times(1)).resetLT(1L);
    }

    @Test
    void complete_java_methods_lt_should_make_call_to_service_class(){
        when(javaMethodsLTService.completeLT(anyLong())).thenReturn("");
        javaMethodsLTController.completeJavaMethodsLT(updateLTDTO);
        verify(javaMethodsLTService, times(1)).completeLT(1L);
    }
}
