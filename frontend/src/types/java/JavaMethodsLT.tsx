export interface javaMethodsLT {
    id: number,
    methodSignaturesLessonIsComplete: boolean,
    returnTypesLessonIsComplete: boolean,
    parametersLessonIsComplete: boolean,
    scopeLessonIsComplete: boolean,
    namingMethodsLessonIsComplete: boolean,
    overloadingLessonIsComplete: boolean,
    quizIsComplete: boolean,
    complete: boolean
}

export const getDefaultJavaMethodsLT = (): javaMethodsLT => ({
    id: 0,
    methodSignaturesLessonIsComplete: false,
    returnTypesLessonIsComplete: false,
    parametersLessonIsComplete: false,
    scopeLessonIsComplete: false,
    namingMethodsLessonIsComplete: false,
    overloadingLessonIsComplete: false,
    quizIsComplete: false,
    complete: false
});