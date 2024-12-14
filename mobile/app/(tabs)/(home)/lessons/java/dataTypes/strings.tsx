import { StyleSheet, Image, Platform, Text, Button, View, Pressable, Dimensions } from 'react-native';

import { LESSONS } from '@/constants/JavaLessonsConstants';
import React from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Collapsible } from '@/components/Collapsible';
import { Link } from 'expo-router';
import { STRINGS_LESSONS } from '@/constants/Java/DataTypes/StringsConstants';

const screenHeight = Dimensions.get('window').height;

export default function JavaDataTypesStrings({ props }: { props: any; }) {

  const handlePress = () => {
    props.setIsLoggedIn(false)
  }

  return (
    <>
    <View style={styles.lessonContainer}>
    <Text style={styles.text}>
              {STRINGS_LESSONS[0].EXPLANATION}
            </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.pressed,
            ]}
            onPress={() => null}
          >
            <Text style={styles.buttonText}>Begin</Text>
          </Pressable>
          </View>
      </>

  );
}

const styles = StyleSheet.create({
  lessonContainer: {
    backgroundColor: "#151718",
    height: screenHeight * .70,
  },
  buttonContainer: {
    height: screenHeight * 0.30,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "#151718",
  },
  text: {
    fontFamily: "Menlo",
    color: "white",
    fontSize: 20,
    padding: 20,
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
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    fontSize: 25,
    fontFamily: "Menlo",
  },
});
