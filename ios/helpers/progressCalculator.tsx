export const javaProgressCalculator = (jawn: any) => {
    let percentage = 0;

    //10 lessons
    jawn.javaDataTypesLT.intsLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaDataTypesLT.stringsLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaDataTypesLT.booleansLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaDataTypesLT.longsLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaDataTypesLT.shortsLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaDataTypesLT.bytesLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaDataTypesLT.charsLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaDataTypesLT.commentsLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaDataTypesLT.floatsLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaDataTypesLT.doublesLessonIsComplete ? percentage += 1 : percentage += 0;

    //5 lessons
    jawn.javaVariablesLT.initializingVariablesLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaVariablesLT.namingVariablesLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaVariablesLT.assigningValuesLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaVariablesLT.updatingValuesLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaVariablesLT.constantsLessonIsComplete ? percentage += 1 : percentage += 0;

    //8 lessons
    jawn.javaForLoopsLT.forLoopsSyntaxLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaForLoopsLT.forLoopsConditionLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaForLoopsLT.forLoopsIncrementDecrementLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaForLoopsLT.nestedForLoopsLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaForLoopsLT.whileLoopsSyntaxLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaForLoopsLT.whileLoopsConditionLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaForLoopsLT.doWhileLoopsSyntaxLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaForLoopsLT.forEachSyntaxLessonIsComplete ? percentage += 1 : percentage += 0;

    //12 lessons
    jawn.javaConditionalsLT.ifLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaConditionalsLT.elseLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaConditionalsLT.elseifLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaConditionalsLT.multipleIfsLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaConditionalsLT.multipleElseifsLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaConditionalsLT.ifElseNestingLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaConditionalsLT.ternaryLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaConditionalsLT.switchSyntaxLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaConditionalsLT.switchExpressionsLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaConditionalsLT.switchCasesLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaConditionalsLT.breakStatementLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaConditionalsLT.continueStatementLessonIsComplete ? percentage += 1 : percentage += 0;

    //6 lessons
    jawn.javaArraysLT.initializingArraysLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaArraysLT.assigningValuesLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaArraysLT.arrayIndexesLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaArraysLT.updatingValuesLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaArraysLT.lengthMethodLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaArraysLT.loopingThroughArrayLessonIsComplete ? percentage += 1 : percentage += 0;

    //6 lessons
    jawn.javaMethodsLT.methodSignaturesLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaMethodsLT.returnTypesLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaMethodsLT.parametersLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaMethodsLT.scopeLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaMethodsLT.namingMethodsLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaMethodsLT.overloadingLessonIsComplete ? percentage += 1 : percentage += 0;

    //16 lessons
    jawn.javaOperatorsLT.andLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaOperatorsLT.orLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaOperatorsLT.notLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaOperatorsLT.plusLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaOperatorsLT.minusLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaOperatorsLT.divideLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaOperatorsLT.multiplyLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaOperatorsLT.modulusLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaOperatorsLT.incrementLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaOperatorsLT.decrementLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaOperatorsLT.lessThanLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaOperatorsLT.greaterThanLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaOperatorsLT.doubleEqualsLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaOperatorsLT.greaterThanEqualToLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaOperatorsLT.notEqualToLessonIsComplete ? percentage += 1 : percentage += 0;
    jawn.javaOperatorsLT.equalsLessonIsComplete ? percentage += 1 : percentage += 0;

    return (percentage / 63) * 100;
}