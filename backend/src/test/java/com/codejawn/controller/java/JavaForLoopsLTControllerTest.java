package com.codejawn.controller.java;

import com.codejawn.dto.UpdateLTDTO;
import com.codejawn.model.java.JavaForLoopsLT;
import com.codejawn.service.java.JavaForLoopsLTService;
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
public class JavaForLoopsLTControllerTest {
    @Mock
    JavaForLoopsLTService javaForLoopsLTService;
    @Mock
    JavaForLoopsLT javaForLoopsLT;
    @Mock
    UpdateLTDTO updateLTDTO;
    @InjectMocks
    JavaForLoopsLTController javaForLoopsLTController;

    @BeforeEach
    void setup() {
        javaForLoopsLT = new JavaForLoopsLT();
        javaForLoopsLT.setId(1L);

        updateLTDTO = new UpdateLTDTO();
        updateLTDTO.setUserId(1L);
        updateLTDTO.setLesson("Strings");
    }

    @Test
    void get_java_for_loops_lt_should_make_call_to_service_class(){
        when(javaForLoopsLTService.getLT(anyLong())).thenReturn(javaForLoopsLT);
        javaForLoopsLTController.getJavaForLoopsLT(1L);
        verify(javaForLoopsLTService, times(1)).getLT(1L);
    }

    @Test
    void update_java_for_loops_lt_should_make_call_to_service_class(){
        when(javaForLoopsLTService.updateLT(anyLong(), anyString())).thenReturn(StatusCode.SUCCESS.name());
        javaForLoopsLTController.updateJavaForLoopsLT(updateLTDTO);
        verify(javaForLoopsLTService, times(1)).updateLT(1L, "Strings");
    }

    @Test
    void update_java_for_loops_lt_should_return_success(){
        when(javaForLoopsLTService.updateLT(anyLong(), anyString())).thenReturn(StatusCode.SUCCESS.name());
        ResponseEntity<?> response = javaForLoopsLTController.updateJavaForLoopsLT(updateLTDTO);
        Assertions.assertEquals(response.getBody(), StatusCode.SUCCESS.name());
    }

    @Test
    void update_java_for_loops_lt_should_return_failed(){
        updateLTDTO.setLesson("Not a lesson");
        when(javaForLoopsLTService.updateLT(anyLong(), anyString())).thenReturn(StatusCode.FAILED.name());
        ResponseEntity<?> response = javaForLoopsLTController.updateJavaForLoopsLT(updateLTDTO);
        Assertions.assertEquals(response.getBody(), StatusCode.FAILED.name());
    }

    @Test
    void reset_java_for_loops_lt_should_make_call_to_service_class(){
        when(javaForLoopsLTService.resetLT(anyLong())).thenReturn("");
        javaForLoopsLTController.resetJavaForLoopsLT(updateLTDTO);
        verify(javaForLoopsLTService, times(1)).resetLT(1L);
    }

    @Test
    void complete_java_for_loops_lt_should_make_call_to_service_class(){
        when(javaForLoopsLTService.completeLT(anyLong())).thenReturn("");
        javaForLoopsLTController.completeJavaForLoopsLT(updateLTDTO);
        verify(javaForLoopsLTService, times(1)).completeLT(1L);
    }
}
