package com.codejawn.service.java;

import com.codejawn.repository.java.JavaLTRepository;
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
