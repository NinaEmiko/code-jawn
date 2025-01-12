package com.codejawn.controller.java;

import com.codejawn.dto.UpdateLTDTO;
import com.codejawn.model.java.JavaConditionalsLT;
import com.codejawn.service.java.JavaConditionalsLTService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/api/java/conditionals/lessons")
@Slf4j
public class JavaConditionalsLTController {
    private final JavaConditionalsLTService javaConditionalsLTService;

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getJavaConditionalsLT(@PathVariable @Valid Long id){
        log.info("Received request for Java Conditionals Lesson Tracker for account with id: {}", id);
        JavaConditionalsLT javaConditionalsLT = javaConditionalsLTService.getLT(id);
        return new ResponseEntity<>(javaConditionalsLT, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateJavaConditionalsLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        log.info("Received request to update Java Conditionals Lesson Tracker for account with id: {}", updateLTDTO.getUserId());
        Long userId = updateLTDTO.getUserId();
        String lesson = updateLTDTO.getLesson();
        String response = javaConditionalsLTService.updateLT(userId, lesson);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/reset")
    public ResponseEntity<String> resetJavaConditionalsLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        log.info("Received request to reset Java Conditionals Lesson Tracker for account with id: {}", updateLTDTO.getUserId());
        Long userId = updateLTDTO.getUserId();
        String response = javaConditionalsLTService.resetLT(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/complete")
    public ResponseEntity<String> completeJavaConditionalsLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        log.info("Received request to complete Java Conditionals Lesson Tracker for account with id: {}", updateLTDTO.getUserId());
        Long userId = updateLTDTO.getUserId();
        String response = javaConditionalsLTService.completeLT(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}