package com.codejawn.util.java;

import lombok.Getter;

@Getter
public enum JavaArraysLesson {
    INITIALIZING_ARRAYS("Initializing Arrays"),
    ASSIGNING_VALUES("Assigning Values"),
    ARRAY_INDEXES("Array Indexes"),
    UPDATING_VALUES("Updating Values"),
    LENGTH_METHOD("Length Method"),
    LOOPING_THROUGH_ARRAYS("Looping Through Arrays"),
    QUIZ("Quiz");

    private final String lesson;

    JavaArraysLesson(String lesson) {
        this.lesson = lesson;
    }
}
