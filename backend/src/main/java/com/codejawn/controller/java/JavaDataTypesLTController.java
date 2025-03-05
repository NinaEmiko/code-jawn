package com.codejawn.controller.java;

import com.codejawn.model.request.lessontracker.UpdateLTRequest;
import com.codejawn.model.java.JavaDataTypesLT;
import com.codejawn.service.java.JavaDataTypesLTService;
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
    public ResponseEntity<String> updateJavaDataTypesLT(@RequestBody @Valid UpdateLTRequest updateLTRequest){
        log.info("Received request to update Java Data Types Lesson Tracker for account with id: {}", updateLTRequest.getUserId());
        Long userId = updateLTRequest.getUserId();
        String lesson = updateLTRequest.getLesson();
        String response = javaDataTypesLTService.updateLT(userId, lesson);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/reset")
    public ResponseEntity<String> resetJavaDataTypesLT(@RequestBody @Valid UpdateLTRequest updateLTRequest){
        log.info("Received request to reset Java Conditionals Lesson Tracker for account with id: {}", updateLTRequest.getUserId());
        Long userId = updateLTRequest.getUserId();
        String response = javaDataTypesLTService.resetLT(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/complete")
    public ResponseEntity<String> completeJavaDataTypesLT(@RequestBody @Valid UpdateLTRequest updateLTRequest){
        log.info("Received request to complete Java Conditionals Lesson Tracker for account with id: {}", updateLTRequest.getUserId());
        Long userId = updateLTRequest.getUserId();
        String response = javaDataTypesLTService.completeLT(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
