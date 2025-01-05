package com.codejawn.controller;

import com.codejawn.dto.UpdateLTDTO;
import com.codejawn.model.java.JavaOperatorsLT;
import com.codejawn.service.JavaOperatorsLTService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.logging.Logger;

@AllArgsConstructor
@RestController
@RequestMapping("/api/java/operators/lessons")
public class JavaOperatorsLTController {
    private final Logger logger = Logger.getLogger(JavaOperatorsLTController.class.getName());
    private final JavaOperatorsLTService javaOperatorsLTService;

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getJavaOperatorsLT(@PathVariable @Valid Long id){
        logger.info("Inside getJavaOperatorsLT controller method.");
        JavaOperatorsLT javaOperatorsLT = javaOperatorsLTService.getLT(id);
        return new ResponseEntity<>(javaOperatorsLT, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateJavaOperatorsLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        logger.info("Inside updateJavaOperatorsLT controller method.");
        Long userId = updateLTDTO.getUserId();
        String lesson = updateLTDTO.getLesson();
        String response = javaOperatorsLTService.updateLT(userId, lesson);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/reset")
    public ResponseEntity<String> resetJavaOperatorsLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        logger.info("Inside resetJavaOperatorsLT controller method.");
        Long userId = updateLTDTO.getUserId();
        String response = javaOperatorsLTService.resetLT(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/complete")
    public ResponseEntity<String> completeJavaOperatorsLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        logger.info("Inside completeJavaOperatorsLT controller method.");
        Long userId = updateLTDTO.getUserId();
        String response = javaOperatorsLTService.completeLT(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}