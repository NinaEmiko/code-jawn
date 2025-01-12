package com.codejawn.controller;

import com.codejawn.dto.UpdateLTDTO;
import com.codejawn.model.java.JavaDataTypesLT;
import com.codejawn.service.JavaDataTypesLTService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/api/java/datatypes/lessons")
@Slf4j
public class JavaDataTypesLTController {
    private final JavaDataTypesLTService javaDataTypesLTService;

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getJavaDataTypesLT(@PathVariable @Valid Long id){
        log.info("Received request for Java Data Types Lesson Tracker for account with id: {}", id);
        JavaDataTypesLT javaDataTypesLT = javaDataTypesLTService.getLT(id);
        return new ResponseEntity<>(javaDataTypesLT, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateJavaDataTypesLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        log.info("Received request to update Java Data Types Lesson Tracker for account with id: {}", updateLTDTO.getUserId());
        Long userId = updateLTDTO.getUserId();
        String lesson = updateLTDTO.getLesson();
        String response = javaDataTypesLTService.updateLT(userId, lesson);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/reset")
    public ResponseEntity<String> resetJavaDataTypesLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        log.info("Received request to reset Java Conditionals Lesson Tracker for account with id: {}", updateLTDTO.getUserId());
        Long userId = updateLTDTO.getUserId();
        String response = javaDataTypesLTService.resetLT(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/complete")
    public ResponseEntity<String> completeJavaDataTypesLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        log.info("Received request to complete Java Conditionals Lesson Tracker for account with id: {}", updateLTDTO.getUserId());
        Long userId = updateLTDTO.getUserId();
        String response = javaDataTypesLTService.completeLT(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
