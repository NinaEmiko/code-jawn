package com.codejawn.model.java;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "java_for_loops_lt")
public class JavaForLoopsLT {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name= "is_complete")
    private boolean isComplete;
    @Column(name= "for_loops_syntax_lesson_is_complete")
    private boolean forLoopsSyntaxLessonIsComplete;
    @Column(name= "for_loops_condition_lesson_is_complete")
    private boolean forLoopsConditionLessonIsComplete;
    @Column(name= "for_loops_increment_decrement_lesson_is_complete")
    private boolean forLoopsIncrementDecrementLessonIsComplete;
    @Column(name= "nested_for_loops_lesson_is_complete")
    private boolean nestedForLoopsLessonIsComplete;
    @Column(name= "while_loops_syntax_lesson_is_complete")
    private boolean whileLoopsSyntaxLessonIsComplete;
    @Column(name= "while_loops_condition_lesson_is_complete")
    private boolean whileLoopsConditionLessonIsComplete;
    @Column(name= "do_while_loops_syntax_lesson_is_complete")
    private boolean doWhileLoopsSyntaxLessonIsComplete;
    @Column(name= "for_each_syntax_lesson_is_complete")
    private boolean forEachSyntaxLessonIsComplete;
    @Column(name= "quiz_is_complete")
    private boolean quizIsComplete;
}
