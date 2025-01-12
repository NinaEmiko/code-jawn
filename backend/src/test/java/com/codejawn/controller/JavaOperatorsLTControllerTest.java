package com.codejawn.controller;

import com.codejawn.dto.UpdateLTDTO;
import com.codejawn.model.java.JavaOperatorsLT;
import com.codejawn.service.JavaOperatorsLTService;
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
        javaOperatorsLT.setAndLessonIsComplete(true);
        javaOperatorsLT.setOrLessonIsComplete(true);
        javaOperatorsLT.setNotLessonIsComplete(true);
        javaOperatorsLT.setPlusLessonIsComplete(true);
        javaOperatorsLT.setMinusLessonIsComplete(true);
        javaOperatorsLT.setDivideLessonIsComplete(true);
        javaOperatorsLT.setMultiplyLessonIsComplete(true);
        javaOperatorsLT.setModulusLessonIsComplete(true);
        javaOperatorsLT.setIncrementLessonIsComplete(true);
        javaOperatorsLT.setDecrementLessonIsComplete(true);
        javaOperatorsLT.setLessThanLessonIsComplete(true);
        javaOperatorsLT.setGreaterThanLessonIsComplete(true);
        javaOperatorsLT.setDoubleEqualsLessonIsComplete(true);
        javaOperatorsLT.setLessThanEqualToLessonIsComplete(true);
        javaOperatorsLT.setGreaterThanEqualToLessonIsComplete(true);
        javaOperatorsLT.setNotEqualToLessonIsComplete(true);
        javaOperatorsLT.setEqualsLessonIsComplete(true);
        javaOperatorsLT.setComplete(false);
        javaOperatorsLT.setQuizIsComplete(false);

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
        when(javaOperatorsLTService.updateLT(anyLong(), anyString())).thenReturn("SUCCESS");
        javaOperatorsLTController.updateJavaOperatorsLT(updateLTDTO);
        verify(javaOperatorsLTService, times(1)).updateLT(1L, "Strings");
    }

    @Test
    void update_java_operators_lt_should_return_success(){
        when(javaOperatorsLTService.updateLT(anyLong(), anyString())).thenReturn("SUCCESS");
        ResponseEntity<?> response = javaOperatorsLTController.updateJavaOperatorsLT(updateLTDTO);
        Assertions.assertEquals(response.getBody(), "SUCCESS");
    }

    @Test
    void update_java_operators_lt_should_return_failed(){
        updateLTDTO.setLesson("Not a lesson");
        when(javaOperatorsLTService.updateLT(anyLong(), anyString())).thenReturn("FAILED");
        ResponseEntity<?> response = javaOperatorsLTController.updateJavaOperatorsLT(updateLTDTO);
        Assertions.assertEquals(response.getBody(), "FAILED");
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
