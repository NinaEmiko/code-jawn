package com.codejawn.model.java;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "java_variables_lt")
public class JavaVariablesLT {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name= "is_complete")
    private boolean isComplete;
    @Column(name= "initializing_variables_lesson_is_complete")
    private boolean initializingVariablesLessonIsComplete;
    @Column(name= "naming_variables_lesson_is_complete")
    private boolean namingVariablesLessonIsComplete;
    @Column(name= "assigning_values_lesson_is_complete")
    private boolean assigningValuesLessonIsComplete;
    @Column(name= "updating_values_lesson_is_complete")
    private boolean updatingValuesLessonIsComplete;
    @Column(name= "constants_lesson_is_complete")
    private boolean constantsLessonIsComplete;
    @Column(name= "quiz_is_complete")
    private boolean quizIsComplete;
}
