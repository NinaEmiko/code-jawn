package com.codejawn.service;

import com.codejawn.model.JavaLT;
import com.codejawn.model.LessonTracker;
import com.codejawn.repository.LessonTrackerRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class LessonTrackerService {
    private final LessonTrackerRepository lessonTrackerRepository;

    public void deleteById(Long id) {
        lessonTrackerRepository.deleteById(id);
    }
}
