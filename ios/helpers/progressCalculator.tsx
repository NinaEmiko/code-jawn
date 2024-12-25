export const javaProgressCalculator = (jawn: any) => {
    let percentage = 0;

    jawn.javaDataTypesLT.intsLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaDataTypesLT.stringsLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaDataTypesLT.booleansLessonIsComplete ? percentage += 1 : percentage += 0;
    
    return (percentage / 56) * 100;
}