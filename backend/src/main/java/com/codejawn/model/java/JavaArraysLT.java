package com.codejawn.model.java;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "java_arrays_lt")
public class JavaArraysLT {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name= "is_complete")
    private boolean isComplete;
    @Column(name= "initializing_arrays_lesson_is_complete")
    private boolean initializingArraysLessonIsComplete;
    @Column(name= "assigning_values_lesson_is_complete")
    private boolean assigningValuesLessonIsComplete;
    @Column(name= "array_indexes_lesson_is_complete")
    private boolean arrayIndexesLessonIsComplete;
    @Column(name= "updating_values_lesson_is_complete")
    private boolean updatingValuesLessonIsComplete;
    @Column(name= "length_method_lesson_is_complete")
    private boolean lengthMethodLessonIsComplete;
    @Column(name= "looping_through_array_lesson_is_complete")
    private boolean loopingThroughArrayLessonIsComplete;
    @Column(name= "quiz_is_complete")
    private boolean quizIsComplete;
}
