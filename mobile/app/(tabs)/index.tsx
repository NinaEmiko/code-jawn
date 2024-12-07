import { Image, StyleSheet, TextInput, Button, Pressable, Text } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useState } from 'react';

export default function HomeScreen() {
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
  }

  const handlePress = () => {

  }

  const handleFocus = (input: string) => {
    setFocus(input);
  };

  const handleBlur = () => {
    setFocus(null);
  };
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
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
  );
}

const styles = StyleSheet.create({
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
    height: 178,
    width: 290,
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
  },
  text: {
    color: "white",
    fontSize: 25,
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
  },
});
