package com.codejawn.util.lessons.java;

import com.codejawn.util.CodeJawnError;
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

    public static JavaArraysLesson fromLesson(String lessonString) {
        if (lessonString != null) {
            for (JavaArraysLesson l : values()) {
                if (l.getLesson().equalsIgnoreCase(lessonString)) {
                    return l;
                }
            }
        }
        throw new RuntimeException(CodeJawnError.LESSON_NOT_FOUND.getMessage());
    }
}
