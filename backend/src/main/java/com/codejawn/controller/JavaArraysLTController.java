package com.codejawn.controller;

import com.codejawn.dto.UpdateLTDTO;
import com.codejawn.model.java.JavaArraysLT;
import com.codejawn.service.JavaArraysLTService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/api/java/arrays/lessons")
@Slf4j
public class JavaArraysLTController {
    private final JavaArraysLTService javaArraysLTService;

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getJavaArraysLT(@PathVariable @Valid Long id){
        log.info("Received request for Java Arrays Lesson Tracker for account with id: {}", id);
        JavaArraysLT javaArraysLT = javaArraysLTService.getLT(id);
        return new ResponseEntity<>(javaArraysLT, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateJavaArraysLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        log.info("Received request to update Java Arrays Lesson Tracker for account with id: {}", updateLTDTO.getUserId());
        Long userId = updateLTDTO.getUserId();
        String lesson = updateLTDTO.getLesson();
        String response = javaArraysLTService.updateLT(userId, lesson);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/reset")
    public ResponseEntity<String> resetJavaArraysLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        log.info("Received request to reset Java Arrays Lesson Tracker for account with id: {}", updateLTDTO.getUserId());
        Long userId = updateLTDTO.getUserId();
        String response = javaArraysLTService.resetLT(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/complete")
    public ResponseEntity<String> completeJavaArraysLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        log.info("Received complete to update Java Arrays Lesson Tracker for account with id: {}", updateLTDTO.getUserId());
        Long userId = updateLTDTO.getUserId();
        String response = javaArraysLTService.completeLT(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
