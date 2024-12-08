import { StyleSheet, Image, Platform, Text, Button } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import React from 'react';

export default function SettingsScreen() {

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/WP1.jpeg')}
          style={styles.reactLogo}
        />
      }>

        <Text style={styles.titleText}>Settings</Text>
      
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
  text: {
    color: "#ff7100",
    fontSize: 25,
  },
  titleText: {
    color: "#ff7100",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 25,
  },
});
