export interface javaCollectionsLT {
    id: number,
    quizIsComplete: boolean,
    complete: boolean
}

export const getDefaultJavaCollectionsLT = (): javaCollectionsLT => ({
    id: 0,
    quizIsComplete: false,
    complete: false
});