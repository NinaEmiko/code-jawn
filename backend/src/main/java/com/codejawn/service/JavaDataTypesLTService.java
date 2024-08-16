package com.codejawn.service;

import com.codejawn.model.JavaDataTypesLT;
import com.codejawn.repository.JavaDataTypesLTRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class JavaDataTypesLTService {
    JavaDataTypesLTRepository javaDataTypesLTRepository;

    public JavaDataTypesLT createNewJavaDataTypesLT() {
        JavaDataTypesLT javaDataTypesLT = new JavaDataTypesLT();
        return  javaDataTypesLTRepository.save(javaDataTypesLT);
    }
}
