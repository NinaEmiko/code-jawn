package com.codejawn.controller.java;

import com.codejawn.model.request.lessontracker.UpdateLTRequest;
import com.codejawn.model.java.JavaVariablesLT;
import com.codejawn.service.java.JavaVariablesLTService;
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
public class JavaVariablesLTControllerTest {
    @Mock
    JavaVariablesLTService javaVariablesLTService;
    @Mock
    JavaVariablesLT javaVariablesLT;
    @Mock
    UpdateLTRequest updateLTRequest;
    @InjectMocks
    JavaVariablesLTController javaVariablesLTController;

    @BeforeEach
    void setup() {
        javaVariablesLT = new JavaVariablesLT();
        javaVariablesLT.setId(1L);

        updateLTRequest = new UpdateLTRequest();
        updateLTRequest.setUserId(1L);
        updateLTRequest.setLesson("Naming Variables");
    }

    @Test
    void get_java_variables_lt_should_make_call_to_service_class(){
        when(javaVariablesLTService.getLT(anyLong())).thenReturn(javaVariablesLT);
        javaVariablesLTController.getJavaVariablesLT(1L);
        verify(javaVariablesLTService, times(1)).getLT(1L);
    }

    @Test
    void update_java_variables_lt_should_make_call_to_service_class(){
        when(javaVariablesLTService.updateLT(anyLong(), anyString())).thenReturn(StatusCode.SUCCESS.name());
        javaVariablesLTController.updateJavaVariablesLT(updateLTRequest);
        verify(javaVariablesLTService, times(1)).updateLT(1L, "Naming Variables");
    }

    @Test
    void update_java_variables_lt_should_return_success(){
        when(javaVariablesLTService.updateLT(anyLong(), anyString())).thenReturn(StatusCode.SUCCESS.name());
        ResponseEntity<?> response = javaVariablesLTController.updateJavaVariablesLT(updateLTRequest);
        Assertions.assertEquals(response.getBody(), StatusCode.SUCCESS.name());
    }

    @Test
    void update_java_variables_lt_should_return_failed(){
        updateLTRequest.setLesson("Not a lesson");
        when(javaVariablesLTService.updateLT(anyLong(), anyString())).thenReturn(StatusCode.FAILED.name());
        ResponseEntity<?> response = javaVariablesLTController.updateJavaVariablesLT(updateLTRequest);
        Assertions.assertEquals(response.getBody(), StatusCode.FAILED.name());
    }

    @Test
    void reset_java_variables_lt_should_make_call_to_service_class(){
        when(javaVariablesLTService.resetLT(anyLong())).thenReturn("");
        javaVariablesLTController.resetJavaVariablesLT(updateLTRequest);
        verify(javaVariablesLTService, times(1)).resetLT(1L);
    }

    @Test
    void complete_java_variables_lt_should_make_call_to_service_class(){
        when(javaVariablesLTService.completeLT(anyLong())).thenReturn("");
        javaVariablesLTController.completeJavaVariablesLT(updateLTRequest);
        verify(javaVariablesLTService, times(1)).completeLT(1L);
    }
}
