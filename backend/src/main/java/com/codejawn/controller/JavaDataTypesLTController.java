package com.codejawn.controller;

import com.codejawn.dto.UpdateLTDTO;
import com.codejawn.model.JavaDataTypesLT;
import com.codejawn.service.JavaDataTypesLTService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.logging.Logger;

@AllArgsConstructor
@RestController
@RequestMapping("/api/java/datatypes/lessons")
public class JavaDataTypesLTController {
    private final Logger logger = Logger.getLogger(JavaDataTypesLTController.class.getName());
    private final JavaDataTypesLTService javaDataTypesLTService;

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getJavaDataTypesLT(@PathVariable @Valid long id){
        logger.info("Inside getJavaDataTypesLT controller method.");
        JavaDataTypesLT javaDataTypesLT = javaDataTypesLTService.getLT(id);
        return new ResponseEntity<>(javaDataTypesLT, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateJavaDataTypesLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        logger.info("Inside updateJavaDataTypesLT controller method.");
        long userId = updateLTDTO.getUserId();
        String lesson = updateLTDTO.getLesson();
        String response = javaDataTypesLTService.updateLT(userId, lesson);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
