import { StyleSheet, Animated, TouchableOpacity } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { STYLES } from '@/assets/styles';

export default function GetStartedScreen({ props }:{ props: any}) {

    const shadowRadius = useRef(new Animated.Value(10)).current;
    const shadowOpacity = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const animateGlow = () => {
          Animated.loop(
            Animated.sequence([
              // Increase intensity
              Animated.timing(shadowRadius, {
                toValue: 30,
                duration: 800,
                useNativeDriver: false,
              }),
              // Decrease intensity
              Animated.timing(shadowRadius, {
                toValue: 10,
                duration: 800,
                useNativeDriver: false,
              }),
            ])
          ).start();
        };
    
        //Start glow animation
        animateGlow();
    
        Animated.loop(
          Animated.sequence([
            Animated.timing(shadowOpacity, {
              toValue: 0.5, //Dim
              duration: 1000,
              useNativeDriver: false,
            }),
            Animated.timing(shadowOpacity, {
              toValue: 1, //Brighten
              duration: 1000,
              useNativeDriver: false,
            }),
          ])
        ).start();
      }, [shadowRadius, shadowOpacity]);

    const handlePress = () => {
        props.buttonPress()
    }

  return(
    <>
        <Animated.View style={[styles.buttonContainer]}>
            <TouchableOpacity style={styles.getStartedButton} onPress={() => handlePress()}>
            <Animated.Text
                style={[
                styles.getStartedButtonText,
                {
                    textShadowRadius: shadowRadius,
                    opacity: shadowOpacity,
                },
                {textShadowColor: props.buttonColor, color: props.buttonColor}
                ]}
            >
                {props.buttonText}
            </Animated.Text>
            </TouchableOpacity>
        </Animated.View>
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
        fontSize: STYLES.FONT_SIZE_BUTTON,
        fontFamily: STYLES.FONT,
        bottom: 0,
        fontWeight: 'bold',
        textShadowColor: STYLES.BLUE,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 15,
    },
    getStartedButton: {

    },
});
