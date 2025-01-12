package com.codejawn.controller;

import com.codejawn.dto.UpdateLTDTO;
import com.codejawn.model.java.JavaConditionalsLT;
import com.codejawn.service.JavaConditionalsLTService;
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
public class JavaConditionalsLTControllerTest {
    @Mock
    JavaConditionalsLTService javaConditionalsLTService;
    @Mock
    JavaConditionalsLT javaConditionalsLT;
    @Mock
    UpdateLTDTO updateLTDTO;
    @InjectMocks
    JavaConditionalsLTController javaConditionalsLTController;

    @BeforeEach
    void setup() {
        javaConditionalsLT = new JavaConditionalsLT();
        javaConditionalsLT.setId(1L);

        updateLTDTO = new UpdateLTDTO();
        updateLTDTO.setUserId(1L);
        updateLTDTO.setLesson("Strings");
    }

    @Test
    void get_java_conditionals_lt_should_make_call_to_service_class(){
        when(javaConditionalsLTService.getLT(anyLong())).thenReturn(javaConditionalsLT);
        javaConditionalsLTController.getJavaConditionalsLT(1L);
        verify(javaConditionalsLTService, times(1)).getLT(1L);
    }

    @Test
    void update_java_conditionals_lt_should_make_call_to_service_class(){
        when(javaConditionalsLTService.updateLT(anyLong(), anyString())).thenReturn("SUCCESS");
        javaConditionalsLTController.updateJavaConditionalsLT(updateLTDTO);
        verify(javaConditionalsLTService, times(1)).updateLT(1L, "Strings");
    }

    @Test
    void update_java_conditionals_lt_should_return_success(){
        when(javaConditionalsLTService.updateLT(anyLong(), anyString())).thenReturn("SUCCESS");
        ResponseEntity<?> response = javaConditionalsLTController.updateJavaConditionalsLT(updateLTDTO);
        Assertions.assertEquals(response.getBody(), "SUCCESS");
    }

    @Test
    void update_java_conditionals_lt_should_return_failed(){
        updateLTDTO.setLesson("Not a lesson");
        when(javaConditionalsLTService.updateLT(anyLong(), anyString())).thenReturn("FAILED");
        ResponseEntity<?> response = javaConditionalsLTController.updateJavaConditionalsLT(updateLTDTO);
        Assertions.assertEquals(response.getBody(), "FAILED");
    }

    @Test
    void reset_java_conditionals_lt_should_make_call_to_service_class(){
        when(javaConditionalsLTService.resetLT(anyLong())).thenReturn("");
        javaConditionalsLTController.resetJavaConditionalsLT(updateLTDTO);
        verify(javaConditionalsLTService, times(1)).resetLT(1L);
    }

    @Test
    void complete_java_conditionals_lt_should_make_call_to_service_class(){
        when(javaConditionalsLTService.completeLT(anyLong())).thenReturn("");
        javaConditionalsLTController.completeJavaConditionalsLT(updateLTDTO);
        verify(javaConditionalsLTService, times(1)).completeLT(1L);
    }
}
