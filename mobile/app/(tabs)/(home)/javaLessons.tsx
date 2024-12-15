import { StyleSheet, Image } from 'react-native';

import React from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Collapsible } from '@/components/Collapsible';
import { useUser } from '@/context/UserContext';
import { Lessons } from '@/components/Lessons';
import { TemporaryLessons } from '@/components/TemporaryLessons';

export default function JavaLessonsScreen() {
  const { currentUser } = useUser();
  const paths = [
    {
      name: "Data Types",
      path: '/(tabs)/(home)/lessons/java/dataTypes/strings'
    },
    {
      name: "Variables",
      path: '/(tabs)/(home)/lessons/java/dataTypes/strings'
    },
    {
      name: "For Loops",
      path: '/(tabs)/(home)/lessons/java/dataTypes/strings'
    },
    {
      name: "Conditionals",
      path: '/(tabs)/(home)/lessons/java/dataTypes/strings'
    },
    {
      name: "Arrays",
      path: '/(tabs)/(home)/lessons/java/dataTypes/strings'
    },
    {
      name: "Collections",
      path: '/(tabs)/(home)/lessons/java/dataTypes/strings'
    },
    {
      name: "Methods",
      path: '/(tabs)/(home)/lessons/java/dataTypes/strings'
    },
    {
      name: "Operators",
      path: '/(tabs)/(home)/lessons/java/dataTypes/strings'
    }
  ]
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
    {/* {currentUser.javaLessonsProgress.map((lesson, index) => {

      return Object.entries(lesson).map(([key, jawnObject], jawnIndex) => {

        return (
          <Collapsible key={`${index}-${jawnIndex}`} title={key}>
            <Lessons
              props={{
                lesson: jawnObject,
                path: paths[index].path
              }}
            />
          </Collapsible>
        );
      });
    })} */}

          <Collapsible title="Data Types">
            {/* <Lessons
              props={{
                lesson: currentUser.lessonTracker.javaLT.javaDataTypesLT,
                path: paths[0].path
              }}
            /> */}
            <TemporaryLessons
              props={{
                lesson: "ints",
                completed: currentUser.lessonTracker.javaLT.javaDataTypesLT.intsLessonIsComplete,
                path: paths[0].path
              }}
            />
            <TemporaryLessons
              props={{
                lesson: "Strings",
                completed: currentUser.lessonTracker.javaLT.javaDataTypesLT.stringsLessonIsComplete,
                path: paths[0].path
              }}
            />
                        <TemporaryLessons
              props={{
                lesson: "booleans",
                completed: currentUser.lessonTracker.javaLT.javaDataTypesLT.booleansLessonIsComplete,
                path: paths[0].path
              }}
            />
          </Collapsible>

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
});
