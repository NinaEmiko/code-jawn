package com.codejawn.service;

import com.codejawn.model.JavaDataTypesLT;
import com.codejawn.model.JavaLT;
import com.codejawn.repository.JavaLTRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class JavaLTServiceTest {
    @Mock
    JavaLTRepository javaLTRepository;
    @Mock
    JavaDataTypesLTService javaDataTypesLTService;
    @Mock
    JavaLT javaLT;
    @Mock
    JavaDataTypesLT javaDataTypesLT;
    @InjectMocks
    JavaLTService javaLTService;
    @BeforeEach
    void setup() {
        javaDataTypesLT = new JavaDataTypesLT();
        javaDataTypesLT.setId(null);
        javaDataTypesLT.setComplete(false);
        javaDataTypesLT.setQuizIsComplete(false);
        javaDataTypesLT.setIntsLessonIsComplete(false);
        javaDataTypesLT.setBooleansLessonIsComplete(false);
        javaDataTypesLT.setStringsLessonIsComplete(false);

        javaLT = new JavaLT();
        javaLT.setFinalIsComplete(false);
        javaLT.setComplete(false);
        javaLT.setId(null);
        javaLT.setLessonTracker(null);

        javaLT.setJavaDataTypesLT(javaDataTypesLT);
        javaDataTypesLT.setJavaLT(javaLT);
    }
    @Test
    void create_new_java_lt_should_make_calls_to_java_data_types_lt_service_and_repository(){
        when(javaDataTypesLTService.createNewJavaDataTypesLT()).thenReturn(javaDataTypesLT);
        when(javaLTRepository.save(any())).thenReturn(javaLT);
        javaLTService.createNewJavaLT();
        verify(javaDataTypesLTService, times(1)).createNewJavaDataTypesLT();
        verify(javaLTRepository, times(1)).save(javaLT);

    }
    @Test
    void delete_by_id_should_make_call_to_repository() {
        doNothing().when(javaLTRepository).deleteById(anyLong());
        javaLTService.deleteById(1L);
        verify(javaLTRepository, times(1)).deleteById(1L);
    }
}