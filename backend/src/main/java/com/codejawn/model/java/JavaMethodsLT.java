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
@Table(name = "java_methods_lt")
public class JavaMethodsLT {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name= "is_complete")
    private boolean isComplete;
    @Column(name= "method_signatures_lesson_is_complete")
    private boolean methodSignaturesLessonIsComplete;
    @Column(name= "return_types_lesson_is_complete")
    private boolean returnTypesLessonIsComplete;
    @Column(name= "parameters_lesson_is_complete")
    private boolean parametersLessonIsComplete;
    @Column(name= "scope_lesson_is_complete")
    private boolean scopeLessonIsComplete;
    @Column(name= "naming_methods_lesson_is_complete")
    private boolean namingMethodsLessonIsComplete;
    @Column(name= "overloading_lesson_is_complete")
    private boolean overloadingLessonIsComplete;
    @Column(name= "quiz_is_complete")
    private boolean quizIsComplete;
}
