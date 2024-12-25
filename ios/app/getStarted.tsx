import { StyleSheet, ImageBackground, Text } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import GlowingButton from '@/components/GlowingButton';
import { STYLES } from '../assets/styles';

export default function GetStartedScreen({ props }:{ props: any}) {

    const handlePress = () => {
        props.setGetStarted(false)
    }

  return(
    <>
        <ImageBackground 
            source={require('../assets/images/HomeScreen.png')}
            style={styles.backgroundImage}
            resizeMode="cover">
                <Text style={styles.title}>
                    Code Jawn
                </Text>
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
            <GlowingButton props={{buttonColor: STYLES.BLUE, buttonPress:handlePress, buttonText: "Get Started"}} />
        </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
    gradientOverlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 700,
    },
    backgroundImage: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        color: STYLES.ORANGE,
        fontWeight: "bold",
        fontSize: 50,
        fontFamily: STYLES.FONT,
        paddingTop: 100,
        textShadowColor: 'black',
        textShadowOffset: { width: 10, height: 1 },
        textShadowRadius: 5
    }
});
