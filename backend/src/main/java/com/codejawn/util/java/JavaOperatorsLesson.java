package com.codejawn.util.java;

import com.codejawn.util.CodeJawnError;
import lombok.Getter;

@Getter
public enum JavaOperatorsLesson {
    AND("And"),
    OR("Or"),
    NOT("Not"),
    PLUS("Plus"),
    MINUS("Minus"),
    DIVIDE("Divide"),
    MULTIPLY("Multiply"),
    MODULUS("Modulus"),
    INCREMENT("Increment"),
    DECREMENT("Decrement"),
    LESS_THAN("Less Than"),
    GREATER_THAN("Greater Than"),
    DOUBLE_EQUALS("Double Equals"),
    LESS_THAN_EQUAL_TO("Less Than Equal To"),
    GREATER_THAN_EQUAL_TO("Greater Than Equal To"),
    NOT_EQUAL_TO("Not Equal To"),
    EQUALS("Equals"),
    QUIZ("Quiz");

    private final String lesson;

    JavaOperatorsLesson(String lesson) {
        this.lesson = lesson;
    }

    public static JavaOperatorsLesson fromLesson(String lessonString) {
        if (lessonString != null) {
            for (JavaOperatorsLesson l : values()) {
                if (l.getLesson().equalsIgnoreCase(lessonString)) {
                    return l;
                }
            }
        }
        throw new RuntimeException(CodeJawnError.LESSON_NOT_FOUND.getMessage());
    }
}
