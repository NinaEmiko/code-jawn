export interface javaConditionalsLT {
    id: number,
    ifLessonIsComplete: boolean,
    elseLessonIsComplete: boolean,
    elseifLessonIsComplete: boolean,
    multipleIfsLessonIsComplete: boolean,
    multipleElseifsLessonIsComplete: boolean,
    ifElseNestingLessonIsComplete: boolean,
    ternaryLessonIsComplete: boolean,
    switchSyntaxLessonIsComplete: boolean,
    switchExpressionsLessonIsComplete: boolean,
    switchCasesLessonIsComplete: boolean,
    breakStatementLessonIsComplete: boolean,
    continueStatementLessonIsComplete: boolean,
    quizIsComplete: boolean,
    complete: boolean
}

export const getDefaultJavaConditionalsLT = (): javaConditionalsLT => ({
    id: 0,
    ifLessonIsComplete: false,
    elseLessonIsComplete: false,
    elseifLessonIsComplete: false,
    multipleIfsLessonIsComplete: false,
    multipleElseifsLessonIsComplete: false,
    ifElseNestingLessonIsComplete: false,
    ternaryLessonIsComplete: false,
    switchSyntaxLessonIsComplete: false,
    switchExpressionsLessonIsComplete: false,
    switchCasesLessonIsComplete: false,
    breakStatementLessonIsComplete: false,
    continueStatementLessonIsComplete: false,
    quizIsComplete: false,
    complete: false
});