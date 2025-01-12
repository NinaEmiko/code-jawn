package com.codejawn.model.java;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "java_data_types_lt")
public class JavaDataTypesLT {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name= "is_complete")
    private boolean isComplete;
    @Column(name= "ints_lesson_is_complete")
    private boolean intsLessonIsComplete;
    @Column(name= "strings_lesson_is_complete")
    private boolean stringsLessonIsComplete;
    @Column(name= "booleans_lesson_is_complete")
    private boolean booleansLessonIsComplete;
    @Column(name= "longs_lesson_is_complete")
    private boolean longsLessonIsComplete;
    @Column(name= "floats_lesson_is_complete")
    private boolean floatsLessonIsComplete;
    @Column(name= "doubles_lesson_is_complete")
    private boolean doublesLessonIsComplete;
    @Column(name= "shorts_lesson_is_complete")
    private boolean shortsLessonIsComplete;
    @Column(name= "bytes_lesson_is_complete")
    private boolean bytesLessonIsComplete;
    @Column(name= "chars_lesson_is_complete")
    private boolean charsLessonIsComplete;
    @Column(name= "comments_lesson_is_complete")
    private boolean commentsLessonIsComplete;
    @Column(name= "quiz_is_complete")
    private boolean quizIsComplete;
}
