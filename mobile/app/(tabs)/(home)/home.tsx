import { StyleSheet, Image, Platform, Text, Button, View, Pressable } from 'react-native';

import React from 'react';
import { LANGUAGES } from '@/constants/SelectLanguageConstants';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Link } from 'expo-router';

export default function FeedScreen({ props }: { props: any; }) {
  const JAWN = '/javaLessons'

  const handlePress = () => {
    props.setIsLoggedIn(false)
  }

  return (
      
    <ParallaxScrollView
    headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    headerImage={
      <Image
        source={require('@/assets/images/WP1.jpeg')}
        style={styles.reactLogo}
      />
    }>
      <Text style={styles.titleText}>Select a Language</Text>
        {LANGUAGES.map((item, index) => {
          const path = `${item.route}`;
return (
          <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{item.language}</Text>
          <Text style={styles.text}>
              {item.description}
            </Text>
            <Link style={styles.lessonButton} href={path}>Go to {item.language} lessons</Link>
        </View>
)
})}
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.pressed,
            ]}
            onPress={() => handlePress()}
          >
            <Text style={styles.buttonText}>Log Out</Text>
          </Pressable>
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
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 25,
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
    backgroundColor: "#626262",
    borderRadius: 15,
  },
  text: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    fontFamily: "Menlo",
    color: "white",
  },
  button: {
    marginTop: 35,
    backgroundColor: "#12edd8",
    fontSize: 25,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
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
