package com.codejawn.util.java;

import com.codejawn.util.CodeJawnError;
import lombok.Getter;

@Getter
public enum JavaMethodsLesson {
    METHOD_SIGNATURES("Method Signatures"),
    RETURN_TYPES("Return Types"),
    PARAMETERS("Parameters"),
    SCOPE("Scope"),
    NAMING_METHODS("Naming Methods"),
    OVERLOADING("Overloading"),
    QUIZ("Quiz");

    private final String lesson;

    JavaMethodsLesson(String lesson) {
        this.lesson = lesson;
    }

    public static JavaMethodsLesson fromLesson(String lessonString) {
        if (lessonString != null) {
            for (JavaMethodsLesson l : values()) {
                if (l.getLesson().equalsIgnoreCase(lessonString)) {
                    return l;
                }
            }
        }
        throw new RuntimeException(CodeJawnError.LESSON_NOT_FOUND.getMessage());
    }
}
