import { StyleSheet, Image, Platform, Text, Button, Pressable, View } from 'react-native';

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

        <Text style={styles.titleText}>Account</Text>
        <Text style={styles.text}>AccountName</Text>
        <Text style={styles.text}>AccountEmail</Text>
        <View style={styles.divider} />

        <Text style={styles.titleText}>Security</Text>
        <Text style={styles.text}>Update Email</Text>
        <Text style={styles.text}>Update Password</Text>
        <Text style={styles.text}>Delete Account</Text>
        <View style={styles.divider} />
        
        <Text style={styles.titleText}>Other</Text>
        <Text style={styles.text}>Terms and Conditions</Text>
        <Text style={styles.text}>Acknowledgments</Text>
        <Text style={styles.text}>Support</Text>

        <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.pressed,
            ]}
            onPress={() => null}
          >
            <Text style={styles.buttonText}>Sign Out</Text>
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
  text: {
    color: "white",
    fontSize: 15,
  },
  titleText: {
    color: "#ff7100",
    fontSize: 30,
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
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 5,
  },
});
