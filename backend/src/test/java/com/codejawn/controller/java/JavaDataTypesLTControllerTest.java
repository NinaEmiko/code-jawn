package com.codejawn.controller.java;

import com.codejawn.dto.UpdateLTDTO;
import com.codejawn.model.java.JavaDataTypesLT;
import com.codejawn.service.java.JavaDataTypesLTService;
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
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class JavaDataTypesLTControllerTest {
    @Mock
    JavaDataTypesLTService javaDataTypesLTService;
    @Mock
    JavaDataTypesLT javaDataTypesLT;
    @Mock
    UpdateLTDTO updateLTDTO;
    @InjectMocks
    JavaDataTypesLTController javaDataTypesLTController;

    @BeforeEach
    void setup() {
        javaDataTypesLT = new JavaDataTypesLT();
        javaDataTypesLT.setId(1L);

        updateLTDTO = new UpdateLTDTO();
        updateLTDTO.setUserId(1L);
        updateLTDTO.setLesson("Strings");
    }

    @Test
    void get_java_data_types_lt_should_make_call_to_service_class(){
        when(javaDataTypesLTService.getLT(anyLong())).thenReturn(javaDataTypesLT);
        javaDataTypesLTController.getJavaDataTypesLT(1L);
        verify(javaDataTypesLTService, times(1)).getLT(1L);
    }

    @Test
    void update_java_data_types_lt_should_make_call_to_service_class(){
        when(javaDataTypesLTService.updateLT(anyLong(), anyString())).thenReturn(StatusCode.SUCCESS.name());
        javaDataTypesLTController.updateJavaDataTypesLT(updateLTDTO);
        verify(javaDataTypesLTService, times(1)).updateLT(1L, "Strings");
    }

    @Test
    void update_java_data_types_lt_should_return_success(){
        when(javaDataTypesLTService.updateLT(anyLong(), anyString())).thenReturn(StatusCode.SUCCESS.name());
        ResponseEntity<?> response = javaDataTypesLTController.updateJavaDataTypesLT(updateLTDTO);
        Assertions.assertEquals(response.getBody(), StatusCode.SUCCESS.name());
    }

    @Test
    void update_java_data_types_lt_should_return_failed(){
        updateLTDTO.setLesson("Not a lesson");
        when(javaDataTypesLTService.updateLT(anyLong(), anyString())).thenReturn(StatusCode.FAILED.name());
        ResponseEntity<?> response = javaDataTypesLTController.updateJavaDataTypesLT(updateLTDTO);
        Assertions.assertEquals(response.getBody(), StatusCode.FAILED.name());
    }

    @Test
    void reset_java_data_types_lt_should_make_call_to_service_class(){
        when(javaDataTypesLTService.resetLT(anyLong())).thenReturn("");
        javaDataTypesLTController.resetJavaDataTypesLT(updateLTDTO);
        verify(javaDataTypesLTService, times(1)).resetLT(1L);
    }

    @Test
    void complete_java_data_types_lt_should_make_call_to_service_class(){
        when(javaDataTypesLTService.completeLT(anyLong())).thenReturn("");
        javaDataTypesLTController.completeJavaDataTypesLT(updateLTDTO);
        verify(javaDataTypesLTService, times(1)).completeLT(1L);
    }
}