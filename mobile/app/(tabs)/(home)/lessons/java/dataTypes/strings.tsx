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
        <View style={styles.lessonCard}>
          <Text style={styles.text}>
              {STRINGS_LESSONS[0].EXPLANATION}
            </Text>
            {/* <Link style={styles.lessonButton} href=''>Go to lessons</Link> */}
        </View>
        <View style={styles.lessonCard2}>
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
  lessonCard: {
    backgroundColor: "#626262",
    height: screenHeight * 0.33,
    justifyContent: "center",
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  lessonCard2: {
    height: screenHeight * 0.50,
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    fontFamily: "Menlo",
    color: "black",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#12edd8",
    fontSize: 25,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    fontSize: 25,
    fontFamily: "Menlo",
  },
});
