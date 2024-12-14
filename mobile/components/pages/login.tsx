import { Image, StyleSheet, TextInput, Button, Pressable, Text, View, ImageBackground } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import GetStartedScreen from './getStarted';

export default function LoginScreen({ props }: { props: any; }) {
  const [getStarted, setGetStarted] = React.useState(true);
  const [tab, setTab] = React.useState('Login')
  const [onLogin, setOnLogin] = React.useState(true)
  const [focus, setFocus] = useState<string | null>(null);
  const [email, setEmail] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleTab = () => {
    setOnLogin(!onLogin)
    if (tab === 'Login') {
      setTab("Register")
    } else {
      setTab("Login")
    }
    // setFocus(null);
  }

  const handlePress = () => {
    props.setIsLoggedIn(true)
  }

  const handleFocus = (input: string) => {
    setFocus(input);
  };

  const handleBlur = () => {
    setFocus(null);
  };
  return (
    <>
    {getStarted ?
    <GetStartedScreen props={{setGetStarted:setGetStarted}} />
    :


    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/WP1.jpeg')}
          style={styles.reactLogo}
        />
      }>
      <Text style={styles.titleText}>{tab}</Text>

      {tab === 'Register' &&
        <><ThemedText style={styles.text}>Email</ThemedText><TextInput
            style={[styles.textInput, focus === 'Email' ? styles.inputFocused : styles.inputUnfocused]}
            onFocus={() => handleFocus('Email')}
            onBlur={handleBlur}
            value={email}
            onChangeText={setEmail} /></>
      }

      <ThemedText style={styles.text} >Username</ThemedText>
      <TextInput
        style={[styles.textInput, focus === 'Username' ? styles.inputFocused : styles.inputUnfocused]}
        onFocus={() => handleFocus('Username')}
        onBlur={handleBlur}
        value={username}
        onChangeText={setUsername}
      />
      <ThemedText style={styles.text} >Password</ThemedText>
      <TextInput
        style={[styles.textInput, focus === 'Password' ? styles.inputFocused : styles.inputUnfocused]}
        onFocus={() => handleFocus('Password')}
        onBlur={handleBlur}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressed,
        ]}
        onPress={() => handlePress()}
      >
        <Text style={styles.buttonText}>Submit</Text>
        {/* <Link style={styles.buttonText} href="/home">Submit</Link> */}
      </Pressable>

      {onLogin ?
          <Button
          title="New here? Create an account." 
          onPress={() => handleTab()}
          />
        :
          <Button
          title="Already have an account? Log in here." 
          onPress={() => handleTab()}
          />
      }

    </ParallaxScrollView>
    }
    </>
  );
}

const styles = StyleSheet.create({
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
  getStartedContainer: {
    fontSize: 20,
    color: "white",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 25,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 430,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  textInput: {
    height: 40,
    borderBottomWidth: 1,
    // borderRadius: 25,
    fontSize: 25,
    color: "#ff7100",
    borderColor: "grey",
    fontFamily: "Menlo",
  },
  text: {
    color: "white",
    fontSize: 25,
    fontFamily: "Menlo",
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
  tabButton: {
    // bottom: 0
  },
  inputFocused: {
    borderColor: '#ff7100',
  },
  inputUnfocused: {
    borderColor: 'gray',
  },
  titleText: {
    color: "#ff7100",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 25,
    fontFamily: "Menlo",
  },
});
