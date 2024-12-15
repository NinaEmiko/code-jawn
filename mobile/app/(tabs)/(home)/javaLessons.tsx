import { StyleSheet, Image, Platform, Text, Button, View, Pressable } from 'react-native';

import { LESSONS } from '@/constants/JavaLessonsConstants';
import React from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Collapsible } from '@/components/Collapsible';
import { Link } from 'expo-router';
import ProgressCircle from '@/components/ProgressCircle';

export default function JavaLessonsScreen({ props }: { props: any; }) {

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
<>
        {/* {LESSONS.map((item, index) => {
          const path = `${item.ROUTES[index]}`;
          return (
          <View key={index} style={styles.card}>
            <Collapsible title={item.LESSON} >

              {item.SUB_LESSON.map((item, index) =>{
                return (
                  <Link key={index} style={styles.text} href={path}>{item}</Link>
                )
              })}
            </Collapsible>
        </View>
          )
        })} */}
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
                    <Text style={styles.text}>{item}</Text>
                  <ProgressCircle props={{percentage:30, style: {width: 160, height: 160}}} />
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
    alignItems: "center",
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
    width: '48%',
    marginBottom: 10,
    backgroundColor: "#333333",
    borderRadius: 30,
  },
  text: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    fontFamily: "Menlo",
    color: "#12edd8",
    fontSize: 20,
    textAlign: "center",
    paddingTop: 15,
    fontWeight: "bold",
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
    fontFamily: "Menlo",
    color: "white",
    marginLeft: 20,
  },
});
