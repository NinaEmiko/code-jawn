package com.codejawn.model.java;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "java_conditionals_lt")
public class JavaConditionalsLT {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name= "is_complete")
    private boolean isComplete;
    @Column(name= "if_lesson_is_complete")
    private boolean ifLessonIsComplete;
    @Column(name= "else_lesson_is_complete")
    private boolean elseLessonIsComplete;
    @Column(name= "elseif_lesson_is_complete")
    private boolean elseifLessonIsComplete;
    @Column(name= "multiple_ifs_lesson_is_complete")
    private boolean multipleIfsLessonIsComplete;
    @Column(name= "multiple_elseifs_lesson_is_complete")
    private boolean multipleElseifsLessonIsComplete;
    @Column(name= "if_else_nesting_lesson_is_complete")
    private boolean ifElseNestingLessonIsComplete;
    @Column(name= "ternary_lesson_is_complete")
    private boolean ternaryLessonIsComplete;
    @Column(name= "switch_syntax_lesson_is_complete")
    private boolean switchSyntaxLessonIsComplete;
    @Column(name= "swtich_expressions_lesson_is_complete")
    private boolean switchExpressionsLessonIsComplete;
    @Column(name= "switch_cases_lesson_is_complete")
    private boolean switchCasesLessonIsComplete;
    @Column(name= "break_statement_lesson_is_complete")
    private boolean breakStatementLessonIsComplete;
    @Column(name= "continue_statement_lesson_is_complete")
    private boolean continueStatementLessonIsComplete;
    @Column(name= "quiz_is_complete")
    private boolean quizIsComplete;
}
