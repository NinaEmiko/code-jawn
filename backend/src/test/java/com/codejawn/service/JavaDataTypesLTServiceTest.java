package com.codejawn.service;

import com.codejawn.model.JavaDataTypesLT;
import com.codejawn.model.JavaLT;
import com.codejawn.model.LessonTracker;
import com.codejawn.model.UserAccount;
import com.codejawn.repository.JavaDataTypesLTRepository;
import com.codejawn.repository.UserAccountRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class JavaDataTypesLTServiceTest {
    @Mock
    JavaDataTypesLTRepository javaDataTypesLTRepository;
    @Mock
    UserAccountRepository userAccountRepository;
    @Mock
    JavaDataTypesLT javaDataTypesLT;
    @Mock
    UserAccount userAccount;
    @Mock
    LessonTracker lessonTracker;
    @Mock
    JavaLT javaLT;
    @InjectMocks
    JavaDataTypesLTService javaDataTypesLTService;
    @BeforeEach
    void setup(){
        lessonTracker = new LessonTracker();
        javaLT = new JavaLT();
        javaDataTypesLT = new JavaDataTypesLT();
        userAccount = new UserAccount();
        userAccount.setLessonTracker(lessonTracker);
        lessonTracker.setJavaLT(javaLT);
        javaLT.setJavaDataTypesLT(javaDataTypesLT);

    }
    @Test
    void create_new_java_data_types_lt_should_make_call_to_repository() {
        when(javaDataTypesLTRepository.save(any())).thenReturn(javaDataTypesLT);
        javaDataTypesLTService.createNewJavaDataTypesLT();
        verify(javaDataTypesLTRepository, times(1)).save(javaDataTypesLT);
    }
    @Test
    void update_lt_should_make_call_to_repositories(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
        when(javaDataTypesLTRepository.save(any())).thenReturn(userAccount);
        javaDataTypesLTService.updateLT(1L, "Strings");
        verify(userAccountRepository, times(1)).findById(1L);
        verify(javaDataTypesLTRepository, times(1)).save(javaDataTypesLT);
    }

    @Test
    void update_lt_should_throw_runtime_exception(){
        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.empty());

        RuntimeException e = assertThrows(RuntimeException.class, () -> {
            javaDataTypesLTService.updateLT(1L, "ints");
        });

        Assertions.assertEquals(e.getMessage(), "User not found");
    }

//    @Test
//    void update_lt_should_return_success(){
//        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
//        when(javaDataTypesLTRepository.save(any())).thenReturn(userAccount);
//        String response = javaDataTypesLTService.updateLT(1L, "Strings");
//        Assertions.assertEquals(response, "SUCCESS");
//    }
//
//    @Test
//    void update_lt_should_return_failed(){
//        when(userAccountRepository.findById(anyLong())).thenReturn(Optional.ofNullable(userAccount));
//        when(javaDataTypesLTRepository.save(any())).thenThrow(new RuntimeException());
//
//        String response = javaDataTypesLTService.updateLT(1L, "ints");
//
//        Assertions.assertEquals(response, "FAILED");
//    }
}
