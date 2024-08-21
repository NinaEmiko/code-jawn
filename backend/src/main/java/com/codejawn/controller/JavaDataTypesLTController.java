package com.codejawn.controller;

import com.codejawn.dto.LoginDTO;
import com.codejawn.dto.UpdateLTDTO;
import com.codejawn.service.JavaDataTypesLTService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.logging.Logger;

@AllArgsConstructor
@RestController
@RequestMapping("/api/java/datatypes/lessons")
public class JavaDataTypesLTController {
    private final Logger logger = Logger.getLogger(JavaDataTypesLTController.class.getName());
    private final JavaDataTypesLTService javaDataTypesLTService;

    @PutMapping("/update")
    public ResponseEntity<String> updateJavaDataTypesLT(@RequestBody @Valid UpdateLTDTO updateLTDTO){
        logger.info("Inside updateJavaDataTypesLT controller method.");
        long userId = updateLTDTO.getUserId();
        String lesson = updateLTDTO.getLesson();
        String response = javaDataTypesLTService.updateLT(userId, lesson);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
