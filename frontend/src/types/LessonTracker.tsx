import { getDefaultJavaLT, javaLT } from "./java/JavaLT"

export interface LessonTracker {
    id: number,
    javaLT: javaLT
    complete: boolean
}

export const getDefaultLessonTracker = (): LessonTracker => ({
    id: 0,
    javaLT: getDefaultJavaLT(),
    complete: false
});