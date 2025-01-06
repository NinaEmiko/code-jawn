package com.codejawn.controller;

import com.codejawn.model.LessonTracker;
import com.codejawn.model.java.JavaDataTypesLT;
import com.codejawn.service.LessonTrackerService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.logging.Logger;

@AllArgsConstructor
@RestController
@RequestMapping("/api/lessons")
public class LessonTrackerController {
    private final Logger logger = Logger.getLogger(JavaDataTypesLTController.class.getName());
    private LessonTrackerService lessonTrackerService;

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getLT(@PathVariable @Valid Long id){
        logger.info("Inside getLT controller method.");
        LessonTracker lessonTracker = lessonTrackerService.getLessonTracker(id);
        return new ResponseEntity<>(lessonTracker, HttpStatus.OK);
    }

}
