package com.codejawn.util.lessons.java;

import com.codejawn.util.CodeJawnError;
import lombok.Getter;

@Getter
public enum JavaDataTypesLesson {
    STRINGS("Strings"),
    INTS("ints"),
    BOOLEANS("booleans"),
    LONGS("Longs"),
    CHARS("chars"),
    COMMENTS("Comments"),
    DOUBLES("doubles"),
    FLOATS("floats"),
    BYTES("bytes"),
    SHORTS("shorts"),
    QUIZ("Quiz");

    private final String lesson;

    JavaDataTypesLesson(String lesson) {
        this.lesson = lesson;
    }

    public static JavaDataTypesLesson fromLesson(String lessonString) {
        if (lessonString != null) {
            for (JavaDataTypesLesson l : values()) {
                if (l.getLesson().equalsIgnoreCase(lessonString)) {
                    return l;
                }
            }
        }
        throw new RuntimeException(CodeJawnError.LESSON_NOT_FOUND.getMessage());
    }
}
