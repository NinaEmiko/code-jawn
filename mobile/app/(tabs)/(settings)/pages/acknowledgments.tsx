import { StyleSheet, Text, Image } from 'react-native';
import React from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function AcknowledgmentsScreen({ props }:{ props: any}) {

    const handlePress = () => {
        props.setGetStarted(false)
    }

  return(
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/WP1.jpeg')}
          style={styles.reactLogo}
        />
      }>

        <Text style={styles.titleText}>Acknowledments</Text>
        <Text style={styles.subTitleText}>Special thanks to</Text>
        <Text style={styles.subTitleText}></Text>
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
    text: {
      color: "white",
      fontSize: 15,
    },
    titleText: {
      color: "#ff7100",
      fontSize: 30,
    },
    subTitleText: {
      color: "#ff7100",
      fontSize: 20,
    },
  });
  