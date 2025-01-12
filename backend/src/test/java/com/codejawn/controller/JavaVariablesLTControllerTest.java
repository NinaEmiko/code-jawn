package com.codejawn.controller;

import com.codejawn.dto.UpdateLTDTO;
import com.codejawn.model.java.JavaVariablesLT;
import com.codejawn.service.JavaVariablesLTService;
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
public class JavaVariablesLTControllerTest {
    @Mock
    JavaVariablesLTService javaVariablesLTService;
    @Mock
    JavaVariablesLT javaVariablesLT;
    @Mock
    UpdateLTDTO updateLTDTO;
    @InjectMocks
    JavaVariablesLTController javaVariablesLTController;

    @BeforeEach
    void setup() {
        javaVariablesLT = new JavaVariablesLT();
        javaVariablesLT.setId(1L);

        updateLTDTO = new UpdateLTDTO();
        updateLTDTO.setUserId(1L);
        updateLTDTO.setLesson("Naming Variables");
    }

    @Test
    void get_java_variables_lt_should_make_call_to_service_class(){
        when(javaVariablesLTService.getLT(anyLong())).thenReturn(javaVariablesLT);
        javaVariablesLTController.getJavaVariablesLT(1L);
        verify(javaVariablesLTService, times(1)).getLT(1L);
    }

    @Test
    void update_java_variables_lt_should_make_call_to_service_class(){
        when(javaVariablesLTService.updateLT(anyLong(), anyString())).thenReturn("SUCCESS");
        javaVariablesLTController.updateJavaVariablesLT(updateLTDTO);
        verify(javaVariablesLTService, times(1)).updateLT(1L, "Naming Variables");
    }

    @Test
    void update_java_variables_lt_should_return_success(){
        when(javaVariablesLTService.updateLT(anyLong(), anyString())).thenReturn("SUCCESS");
        ResponseEntity<?> response = javaVariablesLTController.updateJavaVariablesLT(updateLTDTO);
        Assertions.assertEquals(response.getBody(), "SUCCESS");
    }

    @Test
    void update_java_variables_lt_should_return_failed(){
        updateLTDTO.setLesson("Not a lesson");
        when(javaVariablesLTService.updateLT(anyLong(), anyString())).thenReturn("FAILED");
        ResponseEntity<?> response = javaVariablesLTController.updateJavaVariablesLT(updateLTDTO);
        Assertions.assertEquals(response.getBody(), "FAILED");
    }

    @Test
    void reset_java_variables_lt_should_make_call_to_service_class(){
        when(javaVariablesLTService.resetLT(anyLong())).thenReturn("");
        javaVariablesLTController.resetJavaVariablesLT(updateLTDTO);
        verify(javaVariablesLTService, times(1)).resetLT(1L);
    }

    @Test
    void complete_java_variables_lt_should_make_call_to_service_class(){
        when(javaVariablesLTService.completeLT(anyLong())).thenReturn("");
        javaVariablesLTController.completeJavaVariablesLT(updateLTDTO);
        verify(javaVariablesLTService, times(1)).completeLT(1L);
    }
}
