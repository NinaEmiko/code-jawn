package com.codejawn.controller;

import com.codejawn.dto.UpdateLTDTO;
import com.codejawn.model.java.JavaForLoopsLT;
import com.codejawn.service.JavaForLoopsLTService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/api/java/for-loops/lessons")
@Slf4j
public class JavaForLoopsLTController {
    private final JavaForLoopsLTService javaForLoopsLTService;

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getJavaForLoopsLT(@PathVariable @Valid Long id){
        log.info("Received request for Java For Loops Lesson Tracker for account with id: {}", id);
        JavaForLoopsLT javaForLoopsLT = javaForLoopsLTService.getLT(id);
        return new ResponseEntity<>(javaForLoopsLT, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateJavaForLoopsLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        log.info("Received request to update Java For Loops Lesson Tracker for account with id: {}", updateLTDTO.getUserId());
        Long userId = updateLTDTO.getUserId();
        String lesson = updateLTDTO.getLesson();
        String response = javaForLoopsLTService.updateLT(userId, lesson);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/reset")
    public ResponseEntity<String> resetJavaForLoopsLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        log.info("Received request to reset Java For Loops Lesson Tracker for account with id: {}", updateLTDTO.getUserId());
        Long userId = updateLTDTO.getUserId();
        String response = javaForLoopsLTService.resetLT(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/complete")
    public ResponseEntity<String> completeJavaForLoopsLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        log.info("Received request to complete Java For Loops Lesson Tracker for account with id: {}", updateLTDTO.getUserId());
        Long userId = updateLTDTO.getUserId();
        String response = javaForLoopsLTService.completeLT(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}