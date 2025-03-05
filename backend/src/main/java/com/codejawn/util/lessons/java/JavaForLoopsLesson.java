package com.codejawn.util.lessons.java;

import com.codejawn.util.CodeJawnError;
import lombok.Getter;

@Getter
public enum JavaForLoopsLesson {
    FOR_LOOPS_SYNTAX("For Loops Syntax"),
    FOR_LOOPS_CONDITION("For Loops Condition"),
    FOR_LOOPS_INCREMENT_DECREMENT("For Loops Increment/Decrement"),
    NESTING_FOR_LOOPS("Nesting For Loops"),
    WHILE_LOOPS_SYNTAX("While Loops Syntax"),
    WHILE_LOOPS_CONDITION("While Loops Condition"),
    DO_WHILE_LOOPS_SYNTAX("Do While Loops Syntax"),
    FOR_EACH_SYNTAX("For Each Syntax"),
    QUIZ("Quiz");

    private final String lesson;

    JavaForLoopsLesson(String lesson) {
        this.lesson = lesson;
    }

    public static JavaForLoopsLesson fromLesson(String lessonString) {
        if (lessonString != null) {
            for (JavaForLoopsLesson l : values()) {
                if (l.getLesson().equalsIgnoreCase(lessonString)) {
                    return l;
                }
            }
        }
        throw new RuntimeException(CodeJawnError.LESSON_NOT_FOUND.getMessage());
    }
}
