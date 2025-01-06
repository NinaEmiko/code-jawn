package com.codejawn.controller;

import com.codejawn.dto.UpdateLTDTO;
import com.codejawn.model.java.JavaForLoopsLT;
import com.codejawn.service.JavaForLoopsLTService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.logging.Logger;

@AllArgsConstructor
@RestController
@RequestMapping("/api/java/for-loops/lessons")
public class JavaForLoopsLTController {
    private final Logger logger = Logger.getLogger(JavaForLoopsLTController.class.getName());
    private final JavaForLoopsLTService javaForLoopsLTService;

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getJavaForLoopsLT(@PathVariable @Valid Long id){
        logger.info("Inside getJavaForLoopsLT controller method.");
        JavaForLoopsLT javaForLoopsLT = javaForLoopsLTService.getLT(id);
        return new ResponseEntity<>(javaForLoopsLT, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateJavaForLoopsLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        logger.info("Inside updateJavaForLoopsLT controller method.");
        Long userId = updateLTDTO.getUserId();
        String lesson = updateLTDTO.getLesson();
        String response = javaForLoopsLTService.updateLT(userId, lesson);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/reset")
    public ResponseEntity<String> resetJavaForLoopsLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        logger.info("Inside resetJavaForLoopsLT controller method.");
        Long userId = updateLTDTO.getUserId();
        String response = javaForLoopsLTService.resetLT(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/complete")
    public ResponseEntity<String> completeJavaForLoopsLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        logger.info("Inside completeJavaForLoopsLT controller method.");
        Long userId = updateLTDTO.getUserId();
        String response = javaForLoopsLTService.completeLT(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}