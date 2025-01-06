package com.codejawn.controller;

import com.codejawn.dto.UpdateLTDTO;
import com.codejawn.model.java.JavaConditionalsLT;
import com.codejawn.service.JavaConditionalsLTService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.logging.Logger;

@AllArgsConstructor
@RestController
@RequestMapping("/api/java/conditionals/lessons")
public class JavaConditionalsLTController {
    private final Logger logger = Logger.getLogger(JavaConditionalsLTController.class.getName());
    private final JavaConditionalsLTService javaConditionalsLTService;

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getJavaConditionalsLT(@PathVariable @Valid Long id){
        logger.info("Inside getJavaConditionalsLT controller method.");
        JavaConditionalsLT javaConditionalsLT = javaConditionalsLTService.getLT(id);
        return new ResponseEntity<>(javaConditionalsLT, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateJavaConditionalsLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        logger.info("Inside updateJavaConditionalsLT controller method.");
        Long userId = updateLTDTO.getUserId();
        String lesson = updateLTDTO.getLesson();
        String response = javaConditionalsLTService.updateLT(userId, lesson);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/reset")
    public ResponseEntity<String> resetJavaConditionalsLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        logger.info("Inside resetJavaConditionalsLT controller method.");
        Long userId = updateLTDTO.getUserId();
        String response = javaConditionalsLTService.resetLT(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/complete")
    public ResponseEntity<String> completeJavaConditionalsLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        logger.info("Inside completeJavaConditionalsLT controller method.");
        Long userId = updateLTDTO.getUserId();
        String response = javaConditionalsLTService.completeLT(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}