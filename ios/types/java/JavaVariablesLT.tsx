export interface javaVariablesLT {
    id: number,
    initializingVariablesLessonIsComplete: boolean,
    namingVariablesLessonIsComplete: boolean,
    assigningValuesLessonIsComplete: boolean,
    updatingValuesLessonIsComplete: boolean,
    constantsLessonIsComplete: boolean,
    quizIsComplete: boolean,
    complete: boolean
}

export const getDefaultJavaVariablesLT = (): javaVariablesLT => ({
    id: 0,
    initializingVariablesLessonIsComplete: false,
    namingVariablesLessonIsComplete: false,
    assigningValuesLessonIsComplete: false,
    updatingValuesLessonIsComplete: false,
    constantsLessonIsComplete: false,
    quizIsComplete: false,
    complete: false
});