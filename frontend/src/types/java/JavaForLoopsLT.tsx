export interface javaForLoopsLT {
    id: number,
    forLoopsSyntaxLessonIsComplete: boolean,
    forLoopsConditionLessonIsComplete: boolean,
    forLoopsIncrementDecrementLessonIsComplete: boolean,
    nestedForLoopsLessonIsComplete: boolean,
    whileLoopsSyntaxLessonIsComplete: boolean,
    whileLoopsConditionLessonIsComplete: boolean,
    doWhileLoopsSyntaxLessonIsComplete: boolean,
    forEachSyntaxLessonIsComplete: boolean,
    quizIsComplete: boolean,
    complete: boolean
}

export const getDefaultJavaForLoopsLT = (): javaForLoopsLT => ({
    id: 0,
    forLoopsSyntaxLessonIsComplete: false,
    forLoopsConditionLessonIsComplete: false,
    forLoopsIncrementDecrementLessonIsComplete: false,
    nestedForLoopsLessonIsComplete: false,
    whileLoopsSyntaxLessonIsComplete: false,
    whileLoopsConditionLessonIsComplete: false,
    doWhileLoopsSyntaxLessonIsComplete: false,
    forEachSyntaxLessonIsComplete: false,
    quizIsComplete: false,
    complete: false
});