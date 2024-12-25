import { StyleSheet, Image, View } from 'react-native';

import React, { useEffect } from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Collapsible } from '@/components/Collapsible';
import { useUser } from '@/context/UserContext';
import { Lessons } from '@/components/Lessons';
import { getDefaultLessonTracker } from '@/types/LessonTracker';
import { getJavaLessons } from '@/helpers/getJavaLessonsHelper';
import { getLessonTracker } from '@/api/apiService';

export default function JavaLessonsScreen({props}:{props: any}) {
  const { currentUser } = useUser();
  const [lessons, setLessons] = React.useState(getJavaLessons(getDefaultLessonTracker()));
  const [lessonTrackerSet, setLessonTrackerSet] = React.useState(false);

  const getLessonTrackerCall = async (id: any) =>{

    const data = await getLessonTracker(id);
    if (data != null) {
      setLessons(getJavaLessons(data))
      setLessonTrackerSet(true);
    }
  }

  const handleUpdateComponent = (component: string) => {
    props.handleUpdateComponent(component)
  }

  useEffect(()=> {
    if (!lessonTrackerSet){
      getLessonTrackerCall(currentUser.userId)
    }
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
          <Collapsible key={lessonName} title={lessonName} openComponent='Data Types'>
            <View style={styles.cardContainer}>
              {Object.entries(subLessonObject).map(([key, value]) => (
                Object.entries(value).map(([subLesson, isCompleteAndPath]) => {
                  const [isComplete, path] = isCompleteAndPath as [boolean, string];
                  return (
                    <Lessons
                      key={subLesson}
                      props={{
                        lesson: subLesson,
                        isComplete,
                        path,
                        handleUpdateComponent: handleUpdateComponent
                      }}
                    />
                  );
                })
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