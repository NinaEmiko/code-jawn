package com.codejawn.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "java_data_types_lt")
public class JavaDataTypesLT {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne
    @JoinColumn(name = "java_lt_id")
    private JavaLT javaLT;
    @Column(name= "is_complete")
    private boolean isComplete;
    @Column(name= "ints_lesson_is_complete")
    private boolean intsLessonIsComplete;
    @Column(name= "strings_lesson_is_complete")
    private boolean stringsLessonIsComplete;
    @Column(name= "booleans_lesson_is_complete")
    private boolean booleansLessonIsComplete;
    @Column(name= "quiz_is_complete")
    private boolean quizIsComplete;

}
