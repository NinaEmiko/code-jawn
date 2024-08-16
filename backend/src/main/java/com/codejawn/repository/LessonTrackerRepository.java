package com.codejawn.repository;

import com.codejawn.model.LessonTracker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LessonTrackerRepository extends JpaRepository<LessonTracker, Long> {
}
