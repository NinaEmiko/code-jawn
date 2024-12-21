import { StyleSheet, Image, View } from 'react-native';

import React, { useEffect } from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Collapsible } from '@/components/Collapsible';
import { useUser } from '@/context/UserContext';
import { Lessons } from '@/components/Lessons';
import { JAVA_PATHS } from '@/constants/Java/LessonPaths';

export default function JavaLessonsScreen() {
  const { currentUser } = useUser();

  const lessons = {
    "Data Types": [
      {"ints": [currentUser.lessonTracker.javaLT.javaDataTypesLT.intsLessonIsComplete, JAVA_PATHS['Data Types'].ints]},
      {"Strings": [currentUser.lessonTracker.javaLT.javaDataTypesLT.stringsLessonIsComplete, JAVA_PATHS['Data Types'].Strings]},
      {"booleans": [currentUser.lessonTracker.javaLT.javaDataTypesLT.booleansLessonIsComplete, JAVA_PATHS['Data Types'].booleans]},
      {"Longs": [currentUser.lessonTracker.javaLT.javaDataTypesLT.longsLessonIsComplete, JAVA_PATHS['Data Types'].Longs]},
      {"floats": [currentUser.lessonTracker.javaLT.javaDataTypesLT.floatsLessonIsComplete, JAVA_PATHS['Data Types'].floats]},
      {"doubles": [currentUser.lessonTracker.javaLT.javaDataTypesLT.doublesLessonIsComplete, JAVA_PATHS['Data Types'].doubles]},
      {"shorts": [currentUser.lessonTracker.javaLT.javaDataTypesLT.shortsLessonIsComplete, JAVA_PATHS['Data Types'].shorts]},
      {"bytes": [currentUser.lessonTracker.javaLT.javaDataTypesLT.bytesLessonIsComplete, JAVA_PATHS['Data Types'].bytes]},
      {"chars": [currentUser.lessonTracker.javaLT.javaDataTypesLT.charsLessonIsComplete, JAVA_PATHS['Data Types'].chars]},
      {"Comments": [currentUser.lessonTracker.javaLT.javaDataTypesLT.commentsLessonIsComplete, JAVA_PATHS['Data Types'].Comments]}
    ],
    "Variables": [
      {"Initializing Variables": [currentUser.lessonTracker.javaLT.javaVariablesLT.initializingVariablesLessonIsComplete, JAVA_PATHS['Variables']['Initializing Variables']]},
      {"Naming Variables": [currentUser.lessonTracker.javaLT.javaVariablesLT.namingVariablesLessonIsComplete, JAVA_PATHS['Variables']['Naming Variables']]},
      {"Assigning Values": [currentUser.lessonTracker.javaLT.javaVariablesLT.assigningValuesLessonIsComplete, JAVA_PATHS['Variables']['Assigning Values']]},
      {"Updating Values": [currentUser.lessonTracker.javaLT.javaVariablesLT.updatingValuesLessonIsComplete, JAVA_PATHS['Variables']['Updating Values']]},
      {"Constants": [currentUser.lessonTracker.javaLT.javaVariablesLT.constantsLessonIsComplete, JAVA_PATHS['Variables'].Constants]}
    ],
    "For Loops": [
      {"For Loops Syntax": [currentUser.lessonTracker.javaLT.javaForLoopsLT.forLoopsSyntaxLessonIsComplete, JAVA_PATHS['For Loops']['For Loops Syntax']]},
      {"For Loops Condition": [currentUser.lessonTracker.javaLT.javaForLoopsLT.forLoopsConditionLessonIsComplete, JAVA_PATHS['For Loops']['For Loops Condition']]},
      {"Increment/Decrement": [currentUser.lessonTracker.javaLT.javaForLoopsLT.forLoopsIncrementDecrementLessonIsComplete, JAVA_PATHS['For Loops']['Increment/Decrement']]},
      {"Nested For Loops": [currentUser.lessonTracker.javaLT.javaForLoopsLT.nestedForLoopsLessonIsComplete, JAVA_PATHS['For Loops']['Nested For Loops']]},
      {"While Loops Syntax": [currentUser.lessonTracker.javaLT.javaForLoopsLT.whileLoopsSyntaxLessonIsComplete, JAVA_PATHS['For Loops']['While Loops Syntax']]},
      {"While Loops Condition": [currentUser.lessonTracker.javaLT.javaForLoopsLT.whileLoopsConditionLessonIsComplete, JAVA_PATHS['For Loops']['While Loops Condition']]},
      {"Do While Loops": [currentUser.lessonTracker.javaLT.javaForLoopsLT.doWhileLoopsConditionLessonIsComplete, JAVA_PATHS['For Loops']['Do While Loops']]},
      {"For Each Syntax": [currentUser.lessonTracker.javaLT.javaForLoopsLT.forEachSyntaxLessonIsComplete, JAVA_PATHS['For Loops']['For Each Syntax']]},
    ],
    "Conditionals": [
      {"If": [currentUser.lessonTracker.javaLT.javaConditionalsLT.ifLessonIsComplete, JAVA_PATHS['Conditionals'].If]},
      {"Else": [currentUser.lessonTracker.javaLT.javaConditionalsLT.elseLessonIsComplete, JAVA_PATHS['Conditionals'].Else]},
      {"Elseif": [currentUser.lessonTracker.javaLT.javaConditionalsLT.elseifLessonIsComplete, JAVA_PATHS['Conditionals'].Elseif]},
      {"Multiple Ifs": [currentUser.lessonTracker.javaLT.javaConditionalsLT.multipleIfsLessonIsComplete, JAVA_PATHS['Conditionals']['Multiple Ifs']]},
      {"Multiple Elseifs": [currentUser.lessonTracker.javaLT.javaConditionalsLT.multipleElseifsLessonIsComplete, JAVA_PATHS['Conditionals']['Multiple Elseifs']]},
      {"If/Else Nesting": [currentUser.lessonTracker.javaLT.javaConditionalsLT.ifElseNestingLessonIsComplete, JAVA_PATHS['Conditionals']['If/Else Nesting']]},
      {"Ternary": [currentUser.lessonTracker.javaLT.javaConditionalsLT.ternaryLessonIsComplete, JAVA_PATHS['Conditionals'].Ternary]},
      {"Switch Syntax": [currentUser.lessonTracker.javaLT.javaConditionalsLT.switchSyntaxLessonIsComplete, JAVA_PATHS['Conditionals']['Switch Syntax']]},
      {"Switch Expressions": [currentUser.lessonTracker.javaLT.javaConditionalsLT.switchExpressionsLessonIsComplete, JAVA_PATHS['Conditionals']['Switch Expressions']]},
      {"Switch Cases": [currentUser.lessonTracker.javaLT.javaConditionalsLT.switchCasesLessonIsComplete, JAVA_PATHS['Conditionals']['Switch Cases']]},
      {"Break Statement": [currentUser.lessonTracker.javaLT.javaConditionalsLT.breakStatementLessonIsComplete, JAVA_PATHS['Conditionals']['Break Statement']]},
      {"Continue Statement": [currentUser.lessonTracker.javaLT.javaConditionalsLT.continueStatementLessonIsComplete, JAVA_PATHS['Conditionals']['Continue Statement']]},
    ],
    "Arrays":[
      {"Initializing Arrays": [currentUser.lessonTracker.javaLT.javaArraysLT.initializingArraysLessonIsComplete, JAVA_PATHS['Arrays']['Initializing Arrays']]},
      {"Assigning Values": [currentUser.lessonTracker.javaLT.javaArraysLT.assigningValuesLessonIsComplete, JAVA_PATHS['Arrays']['Assigning Values']]},
      {"Array Indexes": [currentUser.lessonTracker.javaLT.javaArraysLT.arrayIndexesLessonIsComplete, JAVA_PATHS['Arrays']['Array Indexes']]},
      {"Updating Values": [currentUser.lessonTracker.javaLT.javaArraysLT.updatingValuesLessonIsComplete, JAVA_PATHS['Arrays']['Updating Values']]},
      {"Length Method": [currentUser.lessonTracker.javaLT.javaArraysLT.lengthMethodLessonIsComplete, JAVA_PATHS['Arrays']['Length Method']]},
      {"Looping Through Arrays": [currentUser.lessonTracker.javaLT.javaArraysLT.loopingThroughAnArrayLessonIsComplete, JAVA_PATHS['Arrays']['Looping Through Arrays']]},
    ],
    "Collections": [
    ],
    "Methods": [
      {"Method Signatures": [currentUser.lessonTracker.javaLT.javaMethodsLT.methodSignaturesLessonIsComplete, JAVA_PATHS['Methods']['Method Signatures']]},
      {"Return Types": [currentUser.lessonTracker.javaLT.javaMethodsLT.returnTypesLessonIsComplete, JAVA_PATHS['Methods']['Return Types']]},
      {"Parameters": [currentUser.lessonTracker.javaLT.javaMethodsLT.parametersLessonIsComplete, JAVA_PATHS['Methods'].Parameters]},
      {"Scope": [currentUser.lessonTracker.javaLT.javaMethodsLT.scopeLessonIsComplete, JAVA_PATHS['Methods'].Scope]},
      {"Naming Methods": [currentUser.lessonTracker.javaLT.javaMethodsLT.namingMethodsLessonIsComplete, JAVA_PATHS['Methods']['Naming Methods']]},
      {"Overloading": [currentUser.lessonTracker.javaLT.javaMethodsLT.overloadingLessonIsComplete, JAVA_PATHS['Methods'].Overloading]},
    ],
    "Operators": [
      {"&&": [currentUser.lessonTracker.javaLT.javaOperatorsLT.andLessonIsComplete, JAVA_PATHS['Operators']['&&']]},
      {"||": [currentUser.lessonTracker.javaLT.javaOperatorsLT.orLessonIsComplete, JAVA_PATHS['Operators']['||']]},
      {"!": [currentUser.lessonTracker.javaLT.javaOperatorsLT.notLessonIsComplete, JAVA_PATHS['Operators']['!']]},
      {"+": [currentUser.lessonTracker.javaLT.javaOperatorsLT.plusLessonIsComplete, JAVA_PATHS['Operators']['+']]},
      {"-": [currentUser.lessonTracker.javaLT.javaOperatorsLT.minusLessonIsComplete, JAVA_PATHS['Operators']['-']]},
      {"/": [currentUser.lessonTracker.javaLT.javaOperatorsLT.divideLessonIsComplete, JAVA_PATHS['Operators']['/']]},
      {"*": [currentUser.lessonTracker.javaLT.javaOperatorsLT.multiplyLessonIsComplete, JAVA_PATHS['Operators']['*']]},
      {"%": [currentUser.lessonTracker.javaLT.javaOperatorsLT.modulusLessonIsComplete, JAVA_PATHS['Operators']['%']]},
      {"++": [currentUser.lessonTracker.javaLT.javaOperatorsLT.incrementLessonIsComplete, JAVA_PATHS['Operators']['++']]},
      {"--": [currentUser.lessonTracker.javaLT.javaOperatorsLT.decrementLessonIsComplete, JAVA_PATHS['Operators']['--']]},
      {"<": [currentUser.lessonTracker.javaLT.javaOperatorsLT.lessThanLessonIsComplete, JAVA_PATHS['Operators']['<']]},
      {">": [currentUser.lessonTracker.javaLT.javaOperatorsLT.greaterThanLessonIsComplete, JAVA_PATHS['Operators']['>']]},
      {"==": [currentUser.lessonTracker.javaLT.javaOperatorsLT.doubleEqualsLessonIsComplete, JAVA_PATHS['Operators']['==']]},
      {"<=": [currentUser.lessonTracker.javaLT.javaOperatorsLT.lessThanEqualToLessonIsComplete, JAVA_PATHS['Operators']['<=']]},
      {">=": [currentUser.lessonTracker.javaLT.javaOperatorsLT.greaterThanEqualToLessonIsComplete, JAVA_PATHS['Operators']['>=']]},
      {"!=": [currentUser.lessonTracker.javaLT.javaOperatorsLT.notEqualToLessonIsComplete, JAVA_PATHS['Operators']['!=']]},
      {"=": [currentUser.lessonTracker.javaLT.javaOperatorsLT.equalsLessonIsComplete, JAVA_PATHS['Operators']['=']]},
    ],
  }

  useEffect(() => {
    
  })
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/WP1.jpeg')}
          style={styles.pageImage}
      />
    }>
      <>
        {Object.entries(lessons).map(([lessonName, subLessonObject]) => (
          <Collapsible key={lessonName} title={lessonName}>
            <View style={styles.cardContainer}>
              {Object.entries(subLessonObject).map(([key, value]) => (
                Object.entries(value).map(([subLesson, isCompleteAndPath]) => (
                    <Lessons 
                      key={subLesson}
                      props={{
                        lesson: subLesson,
                        isComplete: isCompleteAndPath[0],
                        path: isCompleteAndPath[1]
                      }}
                    />
                ))
              ))}
            </View>
          </Collapsible>
        ))}
      </>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  pageImage: {
    height: 250,
    width: 430,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});