package com.codejawn.controller;

import com.codejawn.dto.UpdateLTDTO;
import com.codejawn.model.java.JavaVariablesLT;
import com.codejawn.service.JavaVariablesLTService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/api/java/variables/lessons")
@Slf4j
public class JavaVariablesLTController {
    private final JavaVariablesLTService javaVariablesLTService;

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getJavaVariablesLT(@PathVariable @Valid Long id){
        log.info("Received request for Java Variables Lesson Tracker for account with id: {}", id);
        JavaVariablesLT javaVariablesLT = javaVariablesLTService.getLT(id);
        return new ResponseEntity<>(javaVariablesLT, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateJavaVariablesLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        log.info("Received request to update Java Variables Lesson Tracker for account with id: {}", updateLTDTO.getUserId());
        Long userId = updateLTDTO.getUserId();
        String lesson = updateLTDTO.getLesson();
        String response = javaVariablesLTService.updateLT(userId, lesson);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/reset")
    public ResponseEntity<String> resetJavaVariablesLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        log.info("Received request to reset Java Variables Lesson Tracker for account with id: {}", updateLTDTO.getUserId());
        Long userId = updateLTDTO.getUserId();
        String response = javaVariablesLTService.resetLT(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/complete")
    public ResponseEntity<String> completeJavaVariablesLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        log.info("Received request to complete Java Variables Lesson Tracker for account with id: {}", updateLTDTO.getUserId());
        Long userId = updateLTDTO.getUserId();
        String response = javaVariablesLTService.completeLT(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
