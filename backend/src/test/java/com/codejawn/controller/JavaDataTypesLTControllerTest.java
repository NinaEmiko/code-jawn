package com.codejawn.controller;

import com.codejawn.dto.UpdateLTDTO;
import com.codejawn.model.java.JavaDataTypesLT;
import com.codejawn.service.JavaDataTypesLTService;
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
        javaDataTypesLT.setStringsLessonIsComplete(true);
        javaDataTypesLT.setComplete(false);
        javaDataTypesLT.setQuizIsComplete(false);
        javaDataTypesLT.setBooleansLessonIsComplete(false);
        javaDataTypesLT.setIntsLessonIsComplete(false);

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
        when(javaDataTypesLTService.updateLT(anyLong(), anyString())).thenReturn("SUCCESS");
        javaDataTypesLTController.updateJavaDataTypesLT(updateLTDTO);
        verify(javaDataTypesLTService, times(1)).updateLT(1L, "Strings");
    }

    @Test
    void update_java_data_types_lt_should_return_success(){
        when(javaDataTypesLTService.updateLT(anyLong(), anyString())).thenReturn("SUCCESS");
        ResponseEntity<?> response = javaDataTypesLTController.updateJavaDataTypesLT(updateLTDTO);
        Assertions.assertEquals(response.getBody(), "SUCCESS");
    }

    @Test
    void update_java_data_types_lt_should_return_failed(){
        updateLTDTO.setLesson("Not a lesson");
        when(javaDataTypesLTService.updateLT(anyLong(), anyString())).thenReturn("FAILED");
        ResponseEntity<?> response = javaDataTypesLTController.updateJavaDataTypesLT(updateLTDTO);
        Assertions.assertEquals(response.getBody(), "FAILED");
    }
}
