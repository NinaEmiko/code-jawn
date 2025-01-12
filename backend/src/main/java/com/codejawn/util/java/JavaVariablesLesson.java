package com.codejawn.util.java;

import lombok.Getter;

@Getter
public enum JavaVariablesLesson {
    INITIALIZING_VARIABLES("Initializing Variables"),
    NAMING_VARIABLES("Naming Variables"),
    ASSIGNING_VALUES("Assigning Values"),
    UPDATING_VALUES("Updating Values"),
    CONSTANTS("Constants"),
    QUIZ("Quiz");

    private final String lesson;

    JavaVariablesLesson(String lesson) {
        this.lesson = lesson;
    }

    public static JavaVariablesLesson fromLesson(String lessonString) {
        if (lessonString != null) {
            for (JavaVariablesLesson l : values()) {
                if (l.getLesson().equalsIgnoreCase(lessonString)) {
                    return l;
                }
            }
        }
        return null;
    }
}
