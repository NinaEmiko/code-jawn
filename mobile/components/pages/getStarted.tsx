import { StyleSheet, Pressable, Text, ImageBackground, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function GetStartedScreen({ props }:{ props: any}) {

    const handlePress = () => {
        props.setGetStarted(false)
    }

  return(
    <>
        <ImageBackground 
            source={require('../../assets/images/HomeScreen.png')}
            style={styles.backgroundImage}
            resizeMode="cover">
            <LinearGradient
                colors={[
                    'rgba(0, 0, 0, 0)',
                    'rgba(0, 0, 0, 0.3)',
                    'rgba(0, 0, 0, 0.75)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 2)'
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}           
                style={styles.gradientOverlay}/>
            <View style={styles.buttonContainer}>
                <Pressable
                    style={({ pressed }) => [
                    styles.getStartedButton,
                    pressed && styles.pressed,
                    ]}
                    onPress={() => handlePress()}>
                    <Text style={styles.getStartedButtonText}>Get Started</Text>
                </Pressable>
            </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: 200,
        width: '100%',
        alignItems: 'center',
    },
    getStartedButtonText: {
        color: "white",
        fontSize: 25,
        fontFamily: "Menlo",
        bottom: 0,
    },
    getStartedButton: {
        // color: "white",
    },
    gradientOverlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 700,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: "white",
        fontSize: 25,
        fontFamily: "Menlo",
    },
    pressed: {
        opacity: 0.7,
    },
});
