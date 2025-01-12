package com.codejawn.controller;

import com.codejawn.model.LessonTracker;
import com.codejawn.service.LessonTrackerService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/api/lessons")
@Slf4j
public class LessonTrackerController {
    private LessonTrackerService lessonTrackerService;

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getLT(@PathVariable @Valid Long id){
        log.info("Received request for Lesson Tracker for account with id: {}", id);
        LessonTracker lessonTracker = lessonTrackerService.getLessonTracker(id);
        return new ResponseEntity<>(lessonTracker, HttpStatus.OK);
    }
}
