export interface javaArraysLT {
    id: number,
    initializingArraysLessonIsComplete: boolean,
    assigningValuesLessonIsComplete: boolean,
    arrayIndexesLessonIsComplete: boolean,
    updatingValuesLessonIsComplete: boolean,
    lengthMethodLessonIsComplete: boolean,
    loopingThroughArrayLessonIsComplete: boolean,
    quizIsComplete: boolean,
    complete: boolean
}

export const getDefaultJavaArraysLT = (): javaArraysLT => ({
    id: 0,
    initializingArraysLessonIsComplete: false,
    assigningValuesLessonIsComplete: false,
    arrayIndexesLessonIsComplete: false,
    updatingValuesLessonIsComplete: false,
    lengthMethodLessonIsComplete: false,
    loopingThroughArrayLessonIsComplete: false,
    quizIsComplete: false,
    complete: false
});