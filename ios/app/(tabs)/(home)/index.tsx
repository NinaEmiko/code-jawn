import { StyleSheet, Image, Text, View, ScrollView, TouchableOpacity, Pressable } from 'react-native';

import React, { useEffect } from 'react';
import { LANGUAGES } from '@/constants/SelectLanguageConstants';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { RelativePathString, router } from 'expo-router';
import ProgressCircle from '@/components/ProgressCircle';
import { STYLES } from '@/assets/styles';
import { useUser } from '@/context/UserContext';
import { javaProgressCalculator } from '@/helpers/progressCalculator';
import { getDefaultLessonTracker, LessonTracker } from '@/types/LessonTracker';
import { getLessonTracker } from '@/api/apiService';

export default function HomeScreen() {
    const { currentUser } = useUser();
    const [lessonTrackerSet, setLessonTrackerSet] = React.useState(false);
    const [lessonTracker, setLessonTracker] = React.useState<LessonTracker>(getDefaultLessonTracker());
    const [activeLanguage, setActiveLanguage] = React.useState(LANGUAGES[0].language);
    const [activeDescription, setActiveDescription] = React.useState(LANGUAGES[0].description);
    const [activeRoute, setActiveRoute] = React.useState(LANGUAGES[0].route);
    const [selectedButton, setSelectedButton] = React.useState(0);
    const [activeProgress, setActiveProgress] = React.useState(Math.round(javaProgressCalculator(getDefaultLessonTracker().javaLT)));

    const handleLanguagePress = (language: string, description: string, route: string, selectedButton: number) => {
      setActiveLanguage(language)
      setActiveDescription(description)
      setActiveRoute(route)
      setSelectedButton(selectedButton)
      if (language === "Java"){
        setActiveProgress(Math.round(javaProgressCalculator(lessonTracker.javaLT)))
      } else if (language == "JavaScript"){
        setActiveProgress(0)
      } else if (language == "Python") {
        setActiveProgress(0)
      }
    }

  const getLessonTrackerCall = async (id: any) =>{
    const data = await getLessonTracker(id);
    if (data != null) {
      setLessonTracker(data);
    }
  }
    
  useEffect(()=> {
    if (!lessonTrackerSet && currentUser){
      getLessonTrackerCall(currentUser.userId)
      setLessonTrackerSet(true);
    }
  })
      
  useEffect(()=> {
    setActiveProgress(Math.round(javaProgressCalculator(lessonTracker.javaLT)))
  }, [lessonTracker, setLessonTracker])
      
    const handleNavigation = () => {
      router.push(activeRoute as RelativePathString);
  }
  

    return (
      
        <ParallaxScrollView
          headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
          headerImage={
            <Image
              source={require('@/assets/images/HomeScreen3.png')}
              style={styles.pageImage}
            />
        }>

      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        {LANGUAGES.map((button, index) => (
          <TouchableOpacity 
          key={index} 
          style={[
            styles.languageButton,
            {
              backgroundColor: selectedButton === index ? STYLES.ORANGE : STYLES.DARK_GREY,
            },
          ]}
          onPress={() => handleLanguagePress(button.language, button.description, button.route, index)}>
            <Text style={[styles.languageButtonText,
            {color: selectedButton === index ? 'black' : 'white'}]}>
            {button.language}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

        <View style={styles.progress}>
          <ProgressCircle props={{percentage:activeProgress, style:{width: 200, height: 200}}} />
        </View> 

      <View style={styles.card}>
        <Text style={styles.text}>
          {activeDescription}
        </Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressed,
        ]}
        onPress={() => handleNavigation()}
      >
        <Text style={styles.buttonText}>{activeLanguage} Lessons</Text>
      </Pressable>
      </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  progress: {
    alignItems: "center"
  },
  scrollContainer: {
    flexDirection: 'row',
  },
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
  card: {
    backgroundColor: STYLES.DARK_GREY,
    borderRadius: 15,
  },
  text: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    marginTop: 15,
    fontFamily: STYLES.FONT,
    color: "white",
  },
  button: {
    backgroundColor: STYLES.BLUE,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageButton: {
    backgroundColor: STYLES.FONT,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 5,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    fontSize: STYLES.FONT_SIZE_BUTTON,
    fontFamily: STYLES.FONT,
  },
  languageButtonText: {
    fontSize: STYLES.FONT_SIZE_BUTTON,
    fontFamily: STYLES.FONT,
  },
});
