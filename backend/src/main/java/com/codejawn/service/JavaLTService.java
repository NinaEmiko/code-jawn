package com.codejawn.service;

import com.codejawn.model.JavaDataTypesLT;
import com.codejawn.model.JavaLT;
import com.codejawn.repository.JavaLTRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
@AllArgsConstructor
@Service
public class JavaLTService {
    private final JavaLTRepository javaLTRepository;

    public void deleteById(Long id) {
        javaLTRepository.deleteById(id);
    }
}
