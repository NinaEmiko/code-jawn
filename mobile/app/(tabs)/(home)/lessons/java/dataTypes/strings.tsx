import { StyleSheet, Image, Platform, Text, Button, View, Pressable } from 'react-native';

import { LESSONS } from '@/constants/JavaLessonsConstants';
import React from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Collapsible } from '@/components/Collapsible';

export default function JavaDataTypesStrings({ props }: { props: any; }) {

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

        <Text style={styles.buttonText}>Strings and Things</Text>
        

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
    fontSize: 20,
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
    color: "white",
  },
});
