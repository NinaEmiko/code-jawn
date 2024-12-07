import { StyleSheet, Image, Platform, TextInput, Button } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import React from 'react';

export default function TabTwoScreen() {
  const [email, setEmail] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Register</ThemedText>
      </ThemedView>
      <ThemedText style={styles.text} >Email</ThemedText>
      <TextInput
        style={styles.textInput}
        value={email}
        onChangeText={setEmail}
      />
      <ThemedText style={styles.text} >Username</ThemedText>
      <TextInput
        style={styles.textInput}
        value={username}
        onChangeText={setUsername}
      />
      <ThemedText style={styles.text} >Password</ThemedText>
      <TextInput
        style={styles.textInput}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Submit" />
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
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
  },
  text: {
    color: "#ff7100",
    fontSize: 25,
  }
});
