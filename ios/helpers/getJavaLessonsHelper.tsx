import { JAVA_LESSONS_PATHS } from "@/constants/Java/LessonPaths"
import { LessonTracker } from "@/types/LessonTracker"

export const getJavaLessons = (lessonTracker: LessonTracker) => {
    return {
      "Data Types": [
        {"ints": [lessonTracker.javaLT.javaDataTypesLT.intsLessonIsComplete, JAVA_LESSONS_PATHS['Data Types'].ints]},
        {"Strings": [lessonTracker.javaLT.javaDataTypesLT.stringsLessonIsComplete, JAVA_LESSONS_PATHS['Data Types'].Strings]},
        {"booleans": [lessonTracker.javaLT.javaDataTypesLT.booleansLessonIsComplete, JAVA_LESSONS_PATHS['Data Types'].booleans]},
        {"Longs": [lessonTracker.javaLT.javaDataTypesLT.longsLessonIsComplete, JAVA_LESSONS_PATHS['Data Types'].Longs]},
        {"floats": [lessonTracker.javaLT.javaDataTypesLT.floatsLessonIsComplete, JAVA_LESSONS_PATHS['Data Types'].floats]},
        {"doubles": [lessonTracker.javaLT.javaDataTypesLT.doublesLessonIsComplete, JAVA_LESSONS_PATHS['Data Types'].doubles]},
        {"shorts": [lessonTracker.javaLT.javaDataTypesLT.shortsLessonIsComplete, JAVA_LESSONS_PATHS['Data Types'].shorts]},
        {"bytes": [lessonTracker.javaLT.javaDataTypesLT.bytesLessonIsComplete, JAVA_LESSONS_PATHS['Data Types'].bytes]},
        {"chars": [lessonTracker.javaLT.javaDataTypesLT.charsLessonIsComplete, JAVA_LESSONS_PATHS['Data Types'].chars]},
        {"Comments": [lessonTracker.javaLT.javaDataTypesLT.commentsLessonIsComplete, JAVA_LESSONS_PATHS['Data Types'].Comments]}
      ],
      "Variables": [
        {"Initializing Variables": [lessonTracker.javaLT.javaVariablesLT.initializingVariablesLessonIsComplete, JAVA_LESSONS_PATHS['Variables']['Initializing Variables']]},
        {"Naming Variables": [lessonTracker.javaLT.javaVariablesLT.namingVariablesLessonIsComplete, JAVA_LESSONS_PATHS['Variables']['Naming Variables']]},
        {"Assigning Values": [lessonTracker.javaLT.javaVariablesLT.assigningValuesLessonIsComplete, JAVA_LESSONS_PATHS['Variables']['Assigning Values']]},
        {"Updating Values": [lessonTracker.javaLT.javaVariablesLT.updatingValuesLessonIsComplete, JAVA_LESSONS_PATHS['Variables']['Updating Values']]},
        {"Constants": [lessonTracker.javaLT.javaVariablesLT.constantsLessonIsComplete, JAVA_LESSONS_PATHS['Variables'].Constants]}
      ],
      "For Loops": [
        {"For Loops Syntax": [lessonTracker.javaLT.javaForLoopsLT.forLoopsSyntaxLessonIsComplete, JAVA_LESSONS_PATHS['For Loops']['For Loops Syntax']]},
        {"For Loops Condition": [lessonTracker.javaLT.javaForLoopsLT.forLoopsConditionLessonIsComplete, JAVA_LESSONS_PATHS['For Loops']['For Loops Condition']]},
        {"Increment/Decrement": [lessonTracker.javaLT.javaForLoopsLT.forLoopsIncrementDecrementLessonIsComplete, JAVA_LESSONS_PATHS['For Loops']['Increment/Decrement']]},
        {"Nested For Loops": [lessonTracker.javaLT.javaForLoopsLT.nestedForLoopsLessonIsComplete, JAVA_LESSONS_PATHS['For Loops']['Nested For Loops']]},
        {"While Loops Syntax": [lessonTracker.javaLT.javaForLoopsLT.whileLoopsSyntaxLessonIsComplete, JAVA_LESSONS_PATHS['For Loops']['While Loops Syntax']]},
        {"While Loops Condition": [lessonTracker.javaLT.javaForLoopsLT.whileLoopsConditionLessonIsComplete, JAVA_LESSONS_PATHS['For Loops']['While Loops Condition']]},
        {"For Each Syntax": [lessonTracker.javaLT.javaForLoopsLT.forEachSyntaxLessonIsComplete, JAVA_LESSONS_PATHS['For Loops']['For Each Syntax']]},
      ],
      "Conditionals": [
        {"If": [lessonTracker.javaLT.javaConditionalsLT.ifLessonIsComplete, JAVA_LESSONS_PATHS['Conditionals'].If]},
        {"Else": [lessonTracker.javaLT.javaConditionalsLT.elseLessonIsComplete, JAVA_LESSONS_PATHS['Conditionals'].Else]},
        {"Elseif": [lessonTracker.javaLT.javaConditionalsLT.elseifLessonIsComplete, JAVA_LESSONS_PATHS['Conditionals'].Elseif]},
        {"Multiple Ifs": [lessonTracker.javaLT.javaConditionalsLT.multipleIfsLessonIsComplete, JAVA_LESSONS_PATHS['Conditionals']['Multiple Ifs']]},
        {"Multiple Elseifs": [lessonTracker.javaLT.javaConditionalsLT.multipleElseifsLessonIsComplete, JAVA_LESSONS_PATHS['Conditionals']['Multiple Elseifs']]},
        {"If/Else Nesting": [lessonTracker.javaLT.javaConditionalsLT.ifElseNestingLessonIsComplete, JAVA_LESSONS_PATHS['Conditionals']['If/Else Nesting']]},
        {"Ternary": [lessonTracker.javaLT.javaConditionalsLT.ternaryLessonIsComplete, JAVA_LESSONS_PATHS['Conditionals'].Ternary]},
        {"Switch Syntax": [lessonTracker.javaLT.javaConditionalsLT.switchSyntaxLessonIsComplete, JAVA_LESSONS_PATHS['Conditionals']['Switch Syntax']]},
        {"Switch Expressions": [lessonTracker.javaLT.javaConditionalsLT.switchExpressionsLessonIsComplete, JAVA_LESSONS_PATHS['Conditionals']['Switch Expressions']]},
        {"Switch Cases": [lessonTracker.javaLT.javaConditionalsLT.switchCasesLessonIsComplete, JAVA_LESSONS_PATHS['Conditionals']['Switch Cases']]},
        {"Break Statement": [lessonTracker.javaLT.javaConditionalsLT.breakStatementLessonIsComplete, JAVA_LESSONS_PATHS['Conditionals']['Break Statement']]},
        {"Continue Statement": [lessonTracker.javaLT.javaConditionalsLT.continueStatementLessonIsComplete, JAVA_LESSONS_PATHS['Conditionals']['Continue Statement']]},
      ],
      "Arrays":[
        {"Initializing Arrays": [lessonTracker.javaLT.javaArraysLT.initializingArraysLessonIsComplete, JAVA_LESSONS_PATHS['Arrays']['Initializing Arrays']]},
        {"Assigning Values": [lessonTracker.javaLT.javaArraysLT.assigningValuesLessonIsComplete, JAVA_LESSONS_PATHS['Arrays']['Assigning Values']]},
        {"Array Indexes": [lessonTracker.javaLT.javaArraysLT.arrayIndexesLessonIsComplete, JAVA_LESSONS_PATHS['Arrays']['Array Indexes']]},
        {"Updating Values": [lessonTracker.javaLT.javaArraysLT.updatingValuesLessonIsComplete, JAVA_LESSONS_PATHS['Arrays']['Updating Values']]},
        {"Length Method": [lessonTracker.javaLT.javaArraysLT.lengthMethodLessonIsComplete, JAVA_LESSONS_PATHS['Arrays']['Length Method']]},
        {"Looping Through Arrays": [lessonTracker.javaLT.javaArraysLT.loopingThroughArrayLessonIsComplete, JAVA_LESSONS_PATHS['Arrays']['Looping Through Arrays']]},
      ],
      "Collections": [
      ],
      "Methods": [
        {"Method Signatures": [lessonTracker.javaLT.javaMethodsLT.methodSignaturesLessonIsComplete, JAVA_LESSONS_PATHS['Methods']['Method Signatures']]},
        {"Return Types": [lessonTracker.javaLT.javaMethodsLT.returnTypesLessonIsComplete, JAVA_LESSONS_PATHS['Methods']['Return Types']]},
        {"Parameters": [lessonTracker.javaLT.javaMethodsLT.parametersLessonIsComplete, JAVA_LESSONS_PATHS['Methods'].Parameters]},
        {"Scope": [lessonTracker.javaLT.javaMethodsLT.scopeLessonIsComplete, JAVA_LESSONS_PATHS['Methods'].Scope]},
        {"Naming Methods": [lessonTracker.javaLT.javaMethodsLT.namingMethodsLessonIsComplete, JAVA_LESSONS_PATHS['Methods']['Naming Methods']]},
        {"Overloading": [lessonTracker.javaLT.javaMethodsLT.overloadingLessonIsComplete, JAVA_LESSONS_PATHS['Methods'].Overloading]},
      ],
      "Operators": [
        {"&&": [lessonTracker.javaLT.javaOperatorsLT.andLessonIsComplete, JAVA_LESSONS_PATHS['Operators']['&&']]},
        {"||": [lessonTracker.javaLT.javaOperatorsLT.orLessonIsComplete, JAVA_LESSONS_PATHS['Operators']['||']]},
        {"!": [lessonTracker.javaLT.javaOperatorsLT.notLessonIsComplete, JAVA_LESSONS_PATHS['Operators']['!']]},
        {"+": [lessonTracker.javaLT.javaOperatorsLT.plusLessonIsComplete, JAVA_LESSONS_PATHS['Operators']['+']]},
        {"-": [lessonTracker.javaLT.javaOperatorsLT.minusLessonIsComplete, JAVA_LESSONS_PATHS['Operators']['-']]},
        {"/": [lessonTracker.javaLT.javaOperatorsLT.divideLessonIsComplete, JAVA_LESSONS_PATHS['Operators']['/']]},
        {"*": [lessonTracker.javaLT.javaOperatorsLT.multiplyLessonIsComplete, JAVA_LESSONS_PATHS['Operators']['*']]},
        {"%": [lessonTracker.javaLT.javaOperatorsLT.modulusLessonIsComplete, JAVA_LESSONS_PATHS['Operators']['%']]},
        {"++": [lessonTracker.javaLT.javaOperatorsLT.incrementLessonIsComplete, JAVA_LESSONS_PATHS['Operators']['++']]},
        {"--": [lessonTracker.javaLT.javaOperatorsLT.decrementLessonIsComplete, JAVA_LESSONS_PATHS['Operators']['--']]},
        {"<": [lessonTracker.javaLT.javaOperatorsLT.lessThanLessonIsComplete, JAVA_LESSONS_PATHS['Operators']['<']]},
        {">": [lessonTracker.javaLT.javaOperatorsLT.greaterThanLessonIsComplete, JAVA_LESSONS_PATHS['Operators']['>']]},
        {"==": [lessonTracker.javaLT.javaOperatorsLT.doubleEqualsLessonIsComplete, JAVA_LESSONS_PATHS['Operators']['==']]},
        {"<=": [lessonTracker.javaLT.javaOperatorsLT.lessThanEqualToLessonIsComplete, JAVA_LESSONS_PATHS['Operators']['<=']]},
        {">=": [lessonTracker.javaLT.javaOperatorsLT.greaterThanEqualToLessonIsComplete, JAVA_LESSONS_PATHS['Operators']['>=']]},
        {"!=": [lessonTracker.javaLT.javaOperatorsLT.notEqualToLessonIsComplete, JAVA_LESSONS_PATHS['Operators']['!=']]},
        {"=": [lessonTracker.javaLT.javaOperatorsLT.equalsLessonIsComplete, JAVA_LESSONS_PATHS['Operators']['=']]},
      ],
    }
  }
