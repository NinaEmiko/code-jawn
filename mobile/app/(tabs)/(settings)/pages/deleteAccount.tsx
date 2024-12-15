import { StyleSheet, Text, Image } from 'react-native';
import React from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { STYLES } from '@/assets/styles';

export default function DeleteAccountScreen({ props }:{ props: any}) {

    const handlePress = () => {
        props.setGetStarted(false)
    }

  return(
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/WP1.jpeg')}
          style={styles.pageImage}
        />
      }>

        <Text style={styles.titleText}>Delete Account</Text>
        <Text style={styles.subTitleText}></Text>
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
    pageImage: {
      height: 250,
      width: 430,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
    text: {
      color: "white",
      fontSize: STYLES.FONT_SIZE_SUB_TEXT,
    },
    titleText: {
      color: STYLES.ORANGE,
      fontSize: STYLES.FONT_SIZE_TITLE,
      fontWeight: "bold",
    },
    subTitleText: {
      color: STYLES.ORANGE,
      fontSize: STYLES.FONT_SIZE_TEXT,
    },
  });
  