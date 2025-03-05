package com.codejawn.controller.java;

import com.codejawn.model.request.lessontracker.UpdateLTRequest;
import com.codejawn.model.java.JavaConditionalsLT;
import com.codejawn.service.java.JavaConditionalsLTService;
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
public class JavaConditionalsLTControllerTest {
    @Mock
    JavaConditionalsLTService javaConditionalsLTService;
    @Mock
    JavaConditionalsLT javaConditionalsLT;
    @Mock
    UpdateLTRequest updateLTRequest;
    @InjectMocks
    JavaConditionalsLTController javaConditionalsLTController;

    @BeforeEach
    void setup() {
        javaConditionalsLT = new JavaConditionalsLT();
        javaConditionalsLT.setId(1L);

        updateLTRequest = new UpdateLTRequest();
        updateLTRequest.setUserId(1L);
        updateLTRequest.setLesson("Strings");
    }

    @Test
    void get_java_conditionals_lt_should_make_call_to_service_class(){
        when(javaConditionalsLTService.getLT(anyLong())).thenReturn(javaConditionalsLT);
        javaConditionalsLTController.getJavaConditionalsLT(1L);
        verify(javaConditionalsLTService, times(1)).getLT(1L);
    }

    @Test
    void update_java_conditionals_lt_should_make_call_to_service_class(){
        when(javaConditionalsLTService.updateLT(anyLong(), anyString())).thenReturn(StatusCode.SUCCESS.name());
        javaConditionalsLTController.updateJavaConditionalsLT(updateLTRequest);
        verify(javaConditionalsLTService, times(1)).updateLT(1L, "Strings");
    }

    @Test
    void update_java_conditionals_lt_should_return_success(){
        when(javaConditionalsLTService.updateLT(anyLong(), anyString())).thenReturn(StatusCode.SUCCESS.name());
        ResponseEntity<?> response = javaConditionalsLTController.updateJavaConditionalsLT(updateLTRequest);
        Assertions.assertEquals(response.getBody(), StatusCode.SUCCESS.name());
    }

    @Test
    void update_java_conditionals_lt_should_return_failed(){
        updateLTRequest.setLesson("Not a lesson");
        when(javaConditionalsLTService.updateLT(anyLong(), anyString())).thenReturn(StatusCode.FAILED.name());
        ResponseEntity<?> response = javaConditionalsLTController.updateJavaConditionalsLT(updateLTRequest);
        Assertions.assertEquals(response.getBody(), StatusCode.FAILED.name());
    }

    @Test
    void reset_java_conditionals_lt_should_make_call_to_service_class(){
        when(javaConditionalsLTService.resetLT(anyLong())).thenReturn("");
        javaConditionalsLTController.resetJavaConditionalsLT(updateLTRequest);
        verify(javaConditionalsLTService, times(1)).resetLT(1L);
    }

    @Test
    void complete_java_conditionals_lt_should_make_call_to_service_class(){
        when(javaConditionalsLTService.completeLT(anyLong())).thenReturn("");
        javaConditionalsLTController.completeJavaConditionalsLT(updateLTRequest);
        verify(javaConditionalsLTService, times(1)).completeLT(1L);
    }
}
