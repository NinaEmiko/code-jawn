import { getDefaultJavaArraysLT, javaArraysLT } from "./JavaArraysLT"
import { getDefaultJavaCollectionsLT, javaCollectionsLT } from "./JavaCollectionsLT"
import { getDefaultJavaConditionalsLT, javaConditionalsLT } from "./JavaConditionalsLT"
import { getDefaultJavaDataTypesLT, javaDataTypesLT } from "./JavaDataTypesLT"
import { getDefaultJavaForLoopsLT, javaForLoopsLT } from "./JavaForLoopsLT"
import { getDefaultJavaMethodsLT, javaMethodsLT } from "./JavaMethodsLT"
import { getDefaultJavaOperatorsLT, javaOperatorsLT } from "./JavaOperatorsLT"
import { getDefaultJavaVariablesLT, javaVariablesLT } from "./JavaVariablesLT"

export interface javaLT {
    id: number,
    javaDataTypesLT: javaDataTypesLT,
    javaVariablesLT: javaVariablesLT,
    javaForLoopsLT: javaForLoopsLT,
    javaConditionalsLT: javaConditionalsLT,
    javaArraysLT: javaArraysLT,
    javaCollectionsLT: javaCollectionsLT,
    javaMethodsLT: javaMethodsLT,
    javaOperatorsLT: javaOperatorsLT
    finalIsComplete: boolean,
    complete: boolean
}

export const getDefaultJavaLT = (): javaLT => ({
    id: 0,
    javaDataTypesLT: getDefaultJavaDataTypesLT(),
    javaVariablesLT: getDefaultJavaVariablesLT(),
    javaForLoopsLT: getDefaultJavaForLoopsLT(),
    javaConditionalsLT: getDefaultJavaConditionalsLT(),
    javaArraysLT: getDefaultJavaArraysLT(),
    javaCollectionsLT: getDefaultJavaCollectionsLT(),
    javaMethodsLT: getDefaultJavaMethodsLT(),
    javaOperatorsLT: getDefaultJavaOperatorsLT(),
    finalIsComplete: false,
    complete: false
});
