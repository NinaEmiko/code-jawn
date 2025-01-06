export interface javaDataTypesLT {
    id: number,
    intsLessonIsComplete: boolean,
    stringsLessonIsComplete: boolean,
    booleansLessonIsComplete: boolean,
    longsLessonIsComplete: boolean,
    floatsLessonIsComplete: boolean,
    doublesLessonIsComplete: boolean,
    shortsLessonIsComplete: boolean,
    bytesLessonIsComplete: boolean,
    charsLessonIsComplete: boolean,
    commentsLessonIsComplete: boolean,
    quizIsComplete: boolean,
    complete: boolean
}

export const getDefaultJavaDataTypesLT = (): javaDataTypesLT => ({
    id: 0,
    intsLessonIsComplete: false,
    stringsLessonIsComplete: false,
    booleansLessonIsComplete: false,
    longsLessonIsComplete: false,
    floatsLessonIsComplete: false,
    doublesLessonIsComplete: false,
    shortsLessonIsComplete: false,
    bytesLessonIsComplete: false,
    charsLessonIsComplete: false,
    commentsLessonIsComplete: false,
    quizIsComplete: false,
    complete: false
});