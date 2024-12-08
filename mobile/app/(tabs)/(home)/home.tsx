import { StyleSheet, Image, Platform, Text, Button, View, Pressable } from 'react-native';

import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function FeedScreen({ props }: { props: any; }) {

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
          <Text style={styles.titleText}>Select a Language</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Java</Text>
            <Text style={styles.text}>
              Java is a high-level, object-oriented programming language. 
              It's widely used for building robust, secure, and scalable applications, from web and mobile apps to enterprise and embedded systems.
              </Text>
              {/* <Link href="/">Go to Java lessons</Link> */}
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>JavaScript</Text>
            <Text style={styles.text}>
            JavaScript is a versatile, high-level programming language primarily used for adding interactive and dynamic features to websites.</Text>
              {/* <Link href="/">Go to Java lessons</Link> */}
          </View>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.pressed,
            ]}
            onPress={() => handlePress()}
          >
            <Text style={styles.buttonText}>Log Out</Text>
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
  cardTitle: {
    color: "#ff7100",
    fontSize: 30,
    // fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 15,
    marginTop: 15,
  },
  titleText: {
    color: "#ff7100",
    fontSize: 30,
    fontWeight: "bold",
    // marginBottom: 25,
    // marginLeft: 25,
  },
  card: {
    backgroundColor: "#626262",
    // marginLeft: 20,
    // width: 390,
    // height: 300,
    borderRadius: 15,
  },
  text: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    fontFamily: "Menlo",
    color: "white",
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
  },
});
