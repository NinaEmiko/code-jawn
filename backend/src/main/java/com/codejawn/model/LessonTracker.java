package com.codejawn.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "lesson_tracker")
public class LessonTracker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name= "is_complete")
    private boolean isComplete;
    @OneToOne(mappedBy = "lessonTracker", cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "java_lt_id")
    private JavaLT javaLT;
    @ManyToOne
    @JoinColumn(name = "user_account_id")
    private UserAccount userAccount;
}
