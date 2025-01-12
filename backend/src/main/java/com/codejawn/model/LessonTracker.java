package com.codejawn.model;

import com.codejawn.model.java.JavaLT;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "lesson_tracker")
public class LessonTracker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name= "is_complete")
    private boolean isComplete;
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "java_lt_id", referencedColumnName = "id")
    private JavaLT javaLT;
}
