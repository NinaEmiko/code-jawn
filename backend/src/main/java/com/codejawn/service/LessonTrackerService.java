package com.codejawn.service;

import com.codejawn.model.LessonTracker;
import com.codejawn.model.UserAccount;
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
    public LessonTracker getLessonTracker(Long id) {
        return lessonTrackerRepository.findById(id)
                .orElseThrow(
                        () -> new RuntimeException("User not found")
                );
    }
}
