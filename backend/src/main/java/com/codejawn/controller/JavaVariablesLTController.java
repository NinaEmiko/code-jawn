package com.codejawn.controller;

import com.codejawn.dto.UpdateLTDTO;
import com.codejawn.model.java.JavaVariablesLT;
import com.codejawn.service.JavaVariablesLTService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.logging.Logger;

@AllArgsConstructor
@RestController
@RequestMapping("/api/java/variables/lessons")
public class JavaVariablesLTController {
    private final Logger logger = Logger.getLogger(JavaVariablesLTController.class.getName());
    private final JavaVariablesLTService javaVariablesLTService;

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getJavaVariablesLT(@PathVariable @Valid Long id){
        logger.info("Inside getJavaVariablesLT controller method.");
        JavaVariablesLT javaVariablesLT = javaVariablesLTService.getLT(id);
        return new ResponseEntity<>(javaVariablesLT, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateJavaVariablesLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        logger.info("Inside updateJavaVariablesLT controller method.");
        Long userId = updateLTDTO.getUserId();
        String lesson = updateLTDTO.getLesson();
        String response = javaVariablesLTService.updateLT(userId, lesson);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/reset")
    public ResponseEntity<String> resetJavaVariablesLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        logger.info("Inside resetJavaVariablesLT controller method.");
        Long userId = updateLTDTO.getUserId();
        String response = javaVariablesLTService.resetLT(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/complete")
    public ResponseEntity<String> completeJavaVariablesLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        logger.info("Inside completeJavaVariablesLT controller method.");
        Long userId = updateLTDTO.getUserId();
        String response = javaVariablesLTService.completeLT(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
