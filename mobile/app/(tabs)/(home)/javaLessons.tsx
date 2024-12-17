import { StyleSheet, Image } from 'react-native';

import React from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Collapsible } from '@/components/Collapsible';
import { useUser } from '@/context/UserContext';
import { Lessons } from '@/components/Lessons';

export default function JavaLessonsScreen() {
  const { currentUser } = useUser();

  const dataTypesLessons = [
    {
      name: "ints",
      completed: currentUser.lessonTracker.javaLT.javaDataTypesLT.intsLessonIsComplete,
      path: '/(tabs)/(home)/lessons/java/dataTypes/strings'
    },
    {
      name: "Strings",
      completed: currentUser.lessonTracker.javaLT.javaDataTypesLT.stringsLessonIsComplete,
      path: '/(tabs)/(home)/lessons/java/dataTypes/strings'
    },
    {
      name: "booleans",
      completed: currentUser.lessonTracker.javaLT.javaDataTypesLT.booleansLessonIsComplete,
      path: '/(tabs)/(home)/lessons/java/dataTypes/strings'
    },
    {
      name: "Longs",
      completed: currentUser.lessonTracker.javaLT.javaDataTypesLT.longsLessonIsComplete,
      path: '/(tabs)/(home)/lessons/java/dataTypes/strings'
    },
    {
      name: "floats",
      completed: currentUser.lessonTracker.javaLT.javaDataTypesLT.floatsLessonIsComplete,
      path: '/(tabs)/(home)/lessons/java/dataTypes/strings'
    },
    {
      name: "doubles",
      completed: currentUser.lessonTracker.javaLT.javaDataTypesLT.doublesLessonIsComplete,
      path: '/(tabs)/(home)/lessons/java/dataTypes/strings'
    },
    {
      name: "shorts",
      completed: currentUser.lessonTracker.javaLT.javaDataTypesLT.shortsLessonIsComplete,
      path: '/(tabs)/(home)/lessons/java/dataTypes/strings'
    },
    {
      name: "bytes",
      completed: currentUser.lessonTracker.javaLT.javaDataTypesLT.bytesLessonIsComplete,
      path: '/(tabs)/(home)/lessons/java/dataTypes/strings'
    },
    {
      name: "chars",
      completed: currentUser.lessonTracker.javaLT.javaDataTypesLT.charsLessonIsComplete,
      path: '/(tabs)/(home)/lessons/java/dataTypes/strings'
    },
    {
      name: "Comments",
      completed: currentUser.lessonTracker.javaLT.javaDataTypesLT.commentsLessonIsComplete,
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
        <Collapsible title="Data Types">
          <Lessons props={{lesson: dataTypesLessons}} />
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