package com.codejawn.service.java;

import com.codejawn.model.java.JavaCollectionsLT;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class JavaCollectionsLTServiceTest {
    @InjectMocks
    JavaCollectionsLT javaCollectionsLT;
    @Test
    void pojoTest() {
        javaCollectionsLT = new JavaCollectionsLT();
        javaCollectionsLT.setId(1L);
        javaCollectionsLT.setComplete(false);
        javaCollectionsLT.setQuizIsComplete(false);
        Assertions.assertFalse(javaCollectionsLT.isComplete());
        Assertions.assertFalse(javaCollectionsLT.isQuizIsComplete());
        Assertions.assertEquals(1L, javaCollectionsLT.getId());
    }
}
