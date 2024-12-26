import { StyleSheet, Animated, TouchableOpacity } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { STYLES } from '@/assets/styles';

interface GlowingButtonProps {
    buttonText: string,
    buttonColor: string,
    buttonPress: () => void,
}

const GlowingButton: React.FC<GlowingButtonProps> = ({ buttonText, buttonColor, buttonPress }) => {
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
        buttonPress()
    }

    return(
        <>
            <Animated.View style={[styles.buttonContainer]}>
                <TouchableOpacity onPress={() => handlePress()}>
                <Animated.Text
                    style={[
                        {
                            textShadowRadius: shadowRadius,
                            opacity: shadowOpacity,
                        },
                        {textShadowColor: buttonColor, color: buttonColor}
                    ]}
                >
                    {buttonText}
                </Animated.Text>
                </TouchableOpacity>
            </Animated.View>
        </>
    );
}

export default GlowingButton;

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: 200,
        width: '100%',
        alignItems: 'center',
    },
});
