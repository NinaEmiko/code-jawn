package com.codejawn.util.java;

import lombok.Getter;

@Getter
public enum JavaConditionalsLesson {
    IF("If"),
    ELSE("Else"),
    ELSEIF("Elseif"),
    MULTIPLE_IFS("Multiple Ifs"),
    MULTIPLE_ELSEIFS("Multiple Elseifs"),
    IF_ELSE_NESTING("If/Else Nesting"),
    TERNARY("Ternary"),
    SWITCH_SYNTAX("Switch Syntax"),
    SWITCH_EXPRESSIONS("Switch Expressions"),
    SWITCH_CASES("Switch Cases"),
    BREAK_STATEMENT("Break Statement"),
    CONTINUE_STATEMENT("Continue Statement"),
    QUIZ("Quiz");

    private final String lesson;

    JavaConditionalsLesson(String lesson) {
        this.lesson = lesson;
    }
}
