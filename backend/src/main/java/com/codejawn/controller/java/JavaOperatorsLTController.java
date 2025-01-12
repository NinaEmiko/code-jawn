package com.codejawn.controller.java;

import com.codejawn.dto.UpdateLTDTO;
import com.codejawn.model.java.JavaOperatorsLT;
import com.codejawn.service.java.JavaOperatorsLTService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/api/java/operators/lessons")
@Slf4j
public class JavaOperatorsLTController {
    private final JavaOperatorsLTService javaOperatorsLTService;

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getJavaOperatorsLT(@PathVariable @Valid Long id){
        log.info("Received request for Java Operators Lesson Tracker for account with id: {}", id);
        JavaOperatorsLT javaOperatorsLT = javaOperatorsLTService.getLT(id);
        return new ResponseEntity<>(javaOperatorsLT, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateJavaOperatorsLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        log.info("Received request to update Java Operators Lesson Tracker for account with id: {}", updateLTDTO.getUserId());
        Long userId = updateLTDTO.getUserId();
        String lesson = updateLTDTO.getLesson();
        String response = javaOperatorsLTService.updateLT(userId, lesson);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/reset")
    public ResponseEntity<String> resetJavaOperatorsLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        log.info("Received request to reset Java Operators Lesson Tracker for account with id: {}", updateLTDTO.getUserId());
        Long userId = updateLTDTO.getUserId();
        String response = javaOperatorsLTService.resetLT(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/complete")
    public ResponseEntity<String> completeJavaOperatorsLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        log.info("Received request to complete Java Operators Lesson Tracker for account with id: {}", updateLTDTO.getUserId());
        Long userId = updateLTDTO.getUserId();
        String response = javaOperatorsLTService.completeLT(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}