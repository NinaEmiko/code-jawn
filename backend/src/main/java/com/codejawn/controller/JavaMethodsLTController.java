package com.codejawn.controller;

import com.codejawn.dto.UpdateLTDTO;
import com.codejawn.model.java.JavaMethodsLT;
import com.codejawn.service.JavaMethodsLTService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.logging.Logger;

@AllArgsConstructor
@RestController
@RequestMapping("/api/java/methods/lessons")
public class JavaMethodsLTController {
    private final Logger logger = Logger.getLogger(JavaMethodsLTController.class.getName());
    private final JavaMethodsLTService javaMethodsLTService;

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getJavaMethodsLT(@PathVariable @Valid Long id){
        logger.info("Inside getJavaMethodsLT controller method.");
        JavaMethodsLT javaMethodsLT = javaMethodsLTService.getLT(id);
        return new ResponseEntity<>(javaMethodsLT, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateJavaMethodsLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        logger.info("Inside updateJavaMethodsLT controller method.");
        Long userId = updateLTDTO.getUserId();
        String lesson = updateLTDTO.getLesson();
        String response = javaMethodsLTService.updateLT(userId, lesson);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/reset")
    public ResponseEntity<String> resetJavaMethodsLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        logger.info("Inside resetJavaMethodsLT controller method.");
        Long userId = updateLTDTO.getUserId();
        String response = javaMethodsLTService.resetLT(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/complete")
    public ResponseEntity<String> completeJavaMethodsLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        logger.info("Inside completeJavaMethodsLT controller method.");
        Long userId = updateLTDTO.getUserId();
        String response = javaMethodsLTService.completeLT(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}