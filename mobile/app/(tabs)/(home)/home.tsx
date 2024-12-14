import { StyleSheet, Image, Text, View, Pressable, ScrollView, TouchableOpacity } from 'react-native';

import React, { useEffect } from 'react';
import { LANGUAGES } from '@/constants/SelectLanguageConstants';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Link } from 'expo-router';
import ProgressCircle from '@/components/ProgressCircle';
import { userData } from '@/mocking/userData';

export default function FeedScreen({ props }: { props: any; }) {
  const [activeLanguage, setActiveLanguage] = React.useState(LANGUAGES[0].language);
  const [activeDescription, setActiveDescription] = React.useState(LANGUAGES[0].description);
  const [activeRoute, setActiveRoute] = React.useState(LANGUAGES[0].route);
  const [selectedButton, setSelectedButton] = React.useState(0);
  const [activeProgress, setActiveProgress] = React.useState(userData.javaProgress);

  const handlePress = () => {
    props.setIsLoggedIn(false)
  }
  const handleLanguagePress = (language: string, description: string, route: string, selectedButton: number) => {
    setActiveLanguage(language)
    setActiveDescription(description)
    setActiveRoute(route)
    setSelectedButton(selectedButton)
    if (language === "Java"){
      setActiveProgress(userData.javaProgress)
    } else if (language == "JavaScript"){
      setActiveProgress(userData.javaScriptProgress)
    } else if (language == "Python") {
      setActiveProgress(userData.pythonProgress)
    }
  }

  return (
      
    <ParallaxScrollView
    headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    headerImage={
      <Image
        source={require('@/assets/images/HomeScreen3.png')}
        style={styles.reactLogo}
      />
    }>

      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        {LANGUAGES.map((button, index) => (
          <TouchableOpacity 
          key={index} 
          style={[
            styles.languageButton,
            {
              backgroundColor: selectedButton === index ? '#ff7100' : '#333333',
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

      <ProgressCircle props={{percentage:activeProgress}} />

      <View style={styles.card}>
        <Text style={styles.text}>
          {activeDescription}
        </Text>
      </View>

      <View style={styles.button}>
        <Link style={styles.buttonText} href={activeRoute}>{activeLanguage} Lessons</Link>
      </View>


          {/* <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.pressed,
            ]}
            onPress={() => handlePress()}
          >
            <Text style={styles.buttonText}>Log Out</Text>
          </Pressable> */}
      </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'row',
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  reactLogo: {
    height: 250,
    width: 430,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
  },
  cardTitle: {
    color: "#ff7100",
    fontSize: 30,
    marginBottom: 10,
    marginLeft: 15,
    marginTop: 15,
    fontFamily: "Menlo",
  },
  titleText: {
    color: "#ff7100",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Menlo",
  },
  card: {
    backgroundColor: "#333333",
    borderRadius: 15,
  },
  text: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    marginTop: 15,
    fontFamily: "Menlo",
    color: "white",
  },
  button: {
    backgroundColor: "#12edd8",
    fontSize: 25,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageButton: {
    backgroundColor: "#ff7100",
    fontSize: 25,
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
    fontSize: 25,
    fontFamily: "Menlo",
  },
  languageButtonText: {
    fontSize: 25,
    fontFamily: "Menlo",
  },
  lessonButton: {
    fontFamily: "Menlo",
    color: "#0000EE",
    textDecorationLine: "underline",
    textAlign: "right",
    marginBottom: 15,
    marginRight: 15,
  }
});
