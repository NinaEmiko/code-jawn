package com.codejawn.controller.java;

import com.codejawn.dto.UpdateLTDTO;
import com.codejawn.model.java.JavaOperatorsLT;
import com.codejawn.service.java.JavaOperatorsLTService;
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
public class JavaOperatorsLTControllerTest {
    @Mock
    JavaOperatorsLTService javaOperatorsLTService;
    @Mock
    JavaOperatorsLT javaOperatorsLT;
    @Mock
    UpdateLTDTO updateLTDTO;
    @InjectMocks
    JavaOperatorsLTController javaOperatorsLTController;

    @BeforeEach
    void setup() {
        javaOperatorsLT = new JavaOperatorsLT();
        javaOperatorsLT.setId(1L);

        updateLTDTO = new UpdateLTDTO();
        updateLTDTO.setUserId(1L);
        updateLTDTO.setLesson("Strings");
    }

    @Test
    void get_java_operators_lt_should_make_call_to_service_class(){
        when(javaOperatorsLTService.getLT(anyLong())).thenReturn(javaOperatorsLT);
        javaOperatorsLTController.getJavaOperatorsLT(1L);
        verify(javaOperatorsLTService, times(1)).getLT(1L);
    }

    @Test
    void update_java_operators_lt_should_make_call_to_service_class(){
        when(javaOperatorsLTService.updateLT(anyLong(), anyString())).thenReturn(StatusCode.SUCCESS.name());
        javaOperatorsLTController.updateJavaOperatorsLT(updateLTDTO);
        verify(javaOperatorsLTService, times(1)).updateLT(1L, "Strings");
    }

    @Test
    void update_java_operators_lt_should_return_success(){
        when(javaOperatorsLTService.updateLT(anyLong(), anyString())).thenReturn(StatusCode.SUCCESS.name());
        ResponseEntity<?> response = javaOperatorsLTController.updateJavaOperatorsLT(updateLTDTO);
        Assertions.assertEquals(response.getBody(), StatusCode.SUCCESS.name());
    }

    @Test
    void update_java_operators_lt_should_return_failed(){
        updateLTDTO.setLesson("Not a lesson");
        when(javaOperatorsLTService.updateLT(anyLong(), anyString())).thenReturn(StatusCode.FAILED.name());
        ResponseEntity<?> response = javaOperatorsLTController.updateJavaOperatorsLT(updateLTDTO);
        Assertions.assertEquals(response.getBody(), StatusCode.FAILED.name());
    }

    @Test
    void reset_java_operators_lt_should_make_call_to_service_class(){
        when(javaOperatorsLTService.resetLT(anyLong())).thenReturn("");
        javaOperatorsLTController.resetJavaOperatorsLT(updateLTDTO);
        verify(javaOperatorsLTService, times(1)).resetLT(1L);
    }

    @Test
    void complete_java_operators_lt_should_make_call_to_service_class(){
        when(javaOperatorsLTService.completeLT(anyLong())).thenReturn("");
        javaOperatorsLTController.completeJavaOperatorsLT(updateLTDTO);
        verify(javaOperatorsLTService, times(1)).completeLT(1L);
    }
}
