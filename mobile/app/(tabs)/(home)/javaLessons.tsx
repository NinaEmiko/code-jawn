import { StyleSheet, Image, Platform, Text, Button, View, Pressable } from 'react-native';

import { LESSONS } from '@/constants/JavaLessonsConstants';
import React from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Collapsible } from '@/components/Collapsible';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { javaProgress } from '@/mocking/userData';
import { STYLES } from '@/assets/styles';

export default function JavaLessonsScreen() {

  return (
      
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/WP1.jpeg')}
          style={styles.reactLogo}
        />
      }>
      <>
        {LESSONS.map((item, index) => {
          const path = `${item.ROUTES[index]}`;
          return (
          <View key={index}>
            <Collapsible title={item.LESSON} >

            <View style={styles.container}>
              {item.SUB_LESSON.map((item, index) =>{
                return (
                  <Link key={index} style={styles.card} href={path}>
                  <View style={styles.progress}>
                    <MaterialIcons name="laptop" size={60} color={STYLES.ORANGE} style={styles.icon} />
                    <Text style={styles.text}>{item}</Text>
                     {javaProgress[index] ?
                      <Text style={[styles.subText, {color: "green"}]}>Completed!</Text>
                    :
                      <Text style={[styles.subText, {color: "white"}]}>Not Started</Text>
                    }
                  </View>
                  </Link>
                )
              })}
              </View>
            </Collapsible>
        </View>
          )
        })}
        
        </>
      </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  progress: {
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: "100%",
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  reactLogo: {
    height: 250,
    width: 430,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  card: {
    width: '48%',
    marginBottom: 10,
    backgroundColor: STYLES.DARK_GREY,
    borderRadius: 25,
    padding: 15,
  },
  text: {
    fontFamily: STYLES.FONT,
    color: "white",
    fontSize: STYLES.FONT_SIZE_SUB_TEXT,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.7,
  },
  subText: {
    fontFamily: STYLES.FONT,
    fontSize: 15,
  },
  icon: {
  },
});
