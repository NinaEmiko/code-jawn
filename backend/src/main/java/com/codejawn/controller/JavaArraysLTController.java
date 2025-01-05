package com.codejawn.controller;

import com.codejawn.dto.UpdateLTDTO;
import com.codejawn.model.java.JavaArraysLT;
import com.codejawn.service.JavaArraysLTService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.logging.Logger;

@AllArgsConstructor
@RestController
@RequestMapping("/api/java/arrays/lessons")
public class JavaArraysLTController {
    private final Logger logger = Logger.getLogger(JavaArraysLTController.class.getName());
    private final JavaArraysLTService javaArraysLTService;

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getJavaArraysLT(@PathVariable @Valid Long id){
        logger.info("Inside getJavaArraysLT controller method.");
        JavaArraysLT javaArraysLT = javaArraysLTService.getLT(id);
        return new ResponseEntity<>(javaArraysLT, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateJavaArraysLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        logger.info("Inside updateJavaArraysLT controller method.");
        Long userId = updateLTDTO.getUserId();
        String lesson = updateLTDTO.getLesson();
        String response = javaArraysLTService.updateLT(userId, lesson);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/reset")
    public ResponseEntity<String> resetJavaArraysLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        logger.info("Inside resetJavaArraysLT controller method.");
        Long userId = updateLTDTO.getUserId();
        String response = javaArraysLTService.resetLT(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/complete")
    public ResponseEntity<String> completeJavaArraysLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        logger.info("Inside completeJavaArraysLT controller method.");
        Long userId = updateLTDTO.getUserId();
        String response = javaArraysLTService.completeLT(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
