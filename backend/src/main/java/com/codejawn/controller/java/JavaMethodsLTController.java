package com.codejawn.controller.java;

import com.codejawn.model.request.lessontracker.UpdateLTRequest;
import com.codejawn.model.java.JavaMethodsLT;
import com.codejawn.service.java.JavaMethodsLTService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/api/java/methods/lessons")
@Slf4j
public class JavaMethodsLTController {
    private final JavaMethodsLTService javaMethodsLTService;

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getJavaMethodsLT(@PathVariable @Valid Long id){
        log.info("Received request for Java Methods Lesson Tracker for account with id: {}", id);
        JavaMethodsLT javaMethodsLT = javaMethodsLTService.getLT(id);
        return new ResponseEntity<>(javaMethodsLT, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateJavaMethodsLT(@RequestBody @Valid UpdateLTRequest updateLTRequest){
        log.info("Received request to update Java Methods Lesson Tracker for account with id: {}", updateLTRequest.getUserId());
        Long userId = updateLTRequest.getUserId();
        String lesson = updateLTRequest.getLesson();
        String response = javaMethodsLTService.updateLT(userId, lesson);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/reset")
    public ResponseEntity<String> resetJavaMethodsLT(@RequestBody @Valid UpdateLTRequest updateLTRequest){
        log.info("Received request to reset Java Methods Lesson Tracker for account with id: {}", updateLTRequest.getUserId());
        Long userId = updateLTRequest.getUserId();
        String response = javaMethodsLTService.resetLT(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/complete")
    public ResponseEntity<String> completeJavaMethodsLT(@RequestBody @Valid UpdateLTRequest updateLTRequest){
        log.info("Received request to complete Java Methods Lesson Tracker for account with id: {}", updateLTRequest.getUserId());
        Long userId = updateLTRequest.getUserId();
        String response = javaMethodsLTService.completeLT(userId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}