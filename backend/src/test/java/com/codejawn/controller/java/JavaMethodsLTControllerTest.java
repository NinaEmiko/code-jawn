package com.codejawn.controller.java;

import com.codejawn.model.request.lessontracker.UpdateLTRequest;
import com.codejawn.model.java.JavaMethodsLT;
import com.codejawn.service.java.JavaMethodsLTService;
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
public class JavaMethodsLTControllerTest {
    @Mock
    JavaMethodsLTService javaMethodsLTService;
    @Mock
    JavaMethodsLT javaMethodsLT;
    @Mock
    UpdateLTRequest updateLTRequest;
    @InjectMocks
    JavaMethodsLTController javaMethodsLTController;

    @BeforeEach
    void setup() {
        javaMethodsLT = new JavaMethodsLT();
        javaMethodsLT.setId(1L);

        updateLTRequest = new UpdateLTRequest();
        updateLTRequest.setUserId(1L);
        updateLTRequest.setLesson("Strings");
    }

    @Test
    void get_java_methods_lt_should_make_call_to_service_class(){
        when(javaMethodsLTService.getLT(anyLong())).thenReturn(javaMethodsLT);
        javaMethodsLTController.getJavaMethodsLT(1L);
        verify(javaMethodsLTService, times(1)).getLT(1L);
    }

    @Test
    void update_java_methods_lt_should_make_call_to_service_class(){
        when(javaMethodsLTService.updateLT(anyLong(), anyString())).thenReturn(StatusCode.SUCCESS.name());
        javaMethodsLTController.updateJavaMethodsLT(updateLTRequest);
        verify(javaMethodsLTService, times(1)).updateLT(1L, "Strings");
    }

    @Test
    void update_java_methods_lt_should_return_success(){
        when(javaMethodsLTService.updateLT(anyLong(), anyString())).thenReturn(StatusCode.SUCCESS.name());
        ResponseEntity<?> response = javaMethodsLTController.updateJavaMethodsLT(updateLTRequest);
        Assertions.assertEquals(response.getBody(), StatusCode.SUCCESS.name());
    }

    @Test
    void update_java_methods_lt_should_return_failed(){
        updateLTRequest.setLesson("Not a lesson");
        when(javaMethodsLTService.updateLT(anyLong(), anyString())).thenReturn(StatusCode.FAILED.name());
        ResponseEntity<?> response = javaMethodsLTController.updateJavaMethodsLT(updateLTRequest);
        Assertions.assertEquals(response.getBody(), StatusCode.FAILED.name());
    }

    @Test
    void reset_java_methods_lt_should_make_call_to_service_class(){
        when(javaMethodsLTService.resetLT(anyLong())).thenReturn("");
        javaMethodsLTController.resetJavaMethodsLT(updateLTRequest);
        verify(javaMethodsLTService, times(1)).resetLT(1L);
    }

    @Test
    void complete_java_methods_lt_should_make_call_to_service_class(){
        when(javaMethodsLTService.completeLT(anyLong())).thenReturn("");
        javaMethodsLTController.completeJavaMethodsLT(updateLTRequest);
        verify(javaMethodsLTService, times(1)).completeLT(1L);
    }
}
