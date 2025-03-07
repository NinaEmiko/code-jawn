package com.codejawn.service;

import com.codejawn.model.LessonTracker;
import com.codejawn.model.UserAccount;
import com.codejawn.repository.LessonTrackerRepository;
import com.codejawn.repository.UserAccountRepository;
import com.codejawn.util.CodeJawnError;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class LessonTrackerService {
    private final LessonTrackerRepository lessonTrackerRepository;
    private final UserAccountRepository userAccountRepository;

    public void deleteById(Long id) {
        lessonTrackerRepository.deleteById(id);
    }

    public LessonTracker getLessonTracker(Long id) {

        UserAccount userAccount = userAccountRepository.findById(id)
                .orElseThrow(
                        () -> new RuntimeException(CodeJawnError.USER_NOT_FOUND.getMessage())
                );
        return userAccount.getLessonTracker();
    }
}
