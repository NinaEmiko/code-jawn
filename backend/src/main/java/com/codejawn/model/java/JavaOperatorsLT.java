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
@Table(name = "java_operators_lt")
public class JavaOperatorsLT {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name= "is_complete")
    private boolean isComplete;
    @Column(name= "and_lesson_is_complete")
    private boolean andLessonIsComplete;
    @Column(name= "or_lesson_is_complete")
    private boolean orLessonIsComplete;
    @Column(name= "not_lesson_is_complete")
    private boolean notLessonIsComplete;
    @Column(name= "plus_lesson_is_complete")
    private boolean plusLessonIsComplete;
    @Column(name= "minus_lesson_is_complete")
    private boolean minusLessonIsComplete;
    @Column(name= "divide_lesson_is_complete")
    private boolean divideLessonIsComplete;
    @Column(name= "multiply_lesson_is_complete")
    private boolean multiplyLessonIsComplete;
    @Column(name= "modulus_lesson_is_complete")
    private boolean modulusLessonIsComplete;
    @Column(name= "increment_lesson_is_complete")
    private boolean incrementLessonIsComplete;
    @Column(name= "decrement_lesson_is_complete")
    private boolean decrementLessonIsComplete;
    @Column(name= "less_than_lesson_is_complete")
    private boolean lessThanLessonIsComplete;
    @Column(name= "greater_than_lesson_is_complete")
    private boolean greaterThanLessonIsComplete;
    @Column(name= "double_equals_lesson_is_complete")
    private boolean doubleEqualsLessonIsComplete;
    @Column(name= "less_than_equal_to_lesson_is_complete")
    private boolean lessThanEqualToLessonIsComplete;
    @Column(name= "greater_than_equal_to_lesson_is_complete")
    private boolean greaterThanEqualToLessonIsComplete;
    @Column(name= "not_equal_to_lesson_is_complete")
    private boolean notEqualToLessonIsComplete;
    @Column(name= "equals_lesson_is_complete")
    private boolean equalsLessonIsComplete;
    @Column(name= "quiz_is_complete")
    private boolean quizIsComplete;
}
