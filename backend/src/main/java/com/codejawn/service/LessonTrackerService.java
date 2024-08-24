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
    private final JavaLTService javaLTService;

    public LessonTracker createNewLessonTracker(){
        LessonTracker lessonTracker = new LessonTracker();
        JavaLT javaLT = javaLTService.createNewJavaLT();
        lessonTracker.setJavaLT(javaLT);
        return lessonTrackerRepository.save(lessonTracker);
    }
    public void deleteById(Long id) {
        lessonTrackerRepository.deleteById(id);
    }
}
