import { StyleSheet, Image, Text } from 'react-native';

import React from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Collapsible } from '@/components/Collapsible';
import { useUser } from '@/context/UserContext';
import { Lessons } from '@/components/Lessons';
import { STYLES } from '@/assets/styles';

export default function JavaScriptLessonsScreen() {
  const { currentUser } = useUser();

//   const lessons = {
//     "Data Types": [
//       {"ints": [currentUser.lessonTracker.javaLT.javaDataTypesLT.intsLessonIsComplete, JAVA_PATHS['Data Types'].ints]},
//     ],
//   }
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/WP1.jpeg')}
          style={styles.pageImage}
      />
    }>
      <Text style={styles.languageButtonText}>
      Coming Soon
        {/* {Object.entries(lessons).map(([lessonName, subLessonObject]) => (
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
        ))} */}
      </Text>
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
  languageButtonText: {
    fontSize: STYLES.FONT_SIZE_BUTTON,
    fontFamily: STYLES.FONT,
    color: STYLES.ORANGE
  },
});