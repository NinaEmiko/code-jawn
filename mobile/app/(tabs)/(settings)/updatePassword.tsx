import { StyleSheet, Text, Image, Pressable, TextInput } from 'react-native';
import React from 'react';
import ParallaxScrollView from '../../../components/ParallaxScrollView';

export default function UpdatePasswordScreen({ props }:{ props: any}) {
  const [oldPassword, setOldPassword] = React.useState('')
  const [newPassword, setNewPassword] = React.useState('')
  const [confirmNewPassword, setConfirmNewPassword] = React.useState('')
  const [focus, setFocus] = React.useState<string | null>(null);

  const handlePress = () => {
      // props.setGetStarted(false)
  }

  const handleFocus = (input: string) => {
      setFocus(input);
    };
  
    const handleBlur = () => {
      setFocus(null);
    };

  return(
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/WP1.jpeg')}
          style={styles.reactLogo}
        />
      }>

<TextInput
            style={[styles.textInput, focus === 'oldPassword' ? styles.inputFocused : styles.inputUnfocused]}
            onFocus={() => handleFocus('oldPassword')}
            onBlur={handleBlur}
            value={oldPassword}
            onChangeText={setOldPassword} 
            placeholder='Old Password'
          />

<TextInput
            style={[styles.textInput, focus === 'newPassword' ? styles.inputFocused : styles.inputUnfocused]}
            onFocus={() => handleFocus('newPassword')}
            onBlur={handleBlur}
            value={newPassword}
            onChangeText={setNewPassword} 
            placeholder='New Password'
          />

<TextInput
            style={[styles.textInput, focus === 'confirmNewPassword' ? styles.inputFocused : styles.inputUnfocused]}
            onFocus={() => handleFocus('confirmNewPassword')}
            onBlur={handleBlur}
            value={confirmNewPassword}
            onChangeText={setConfirmNewPassword} 
            placeholder='Confirm New Password'
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
    textInput: {
      height: 40,
      borderBottomWidth: 1,
      // borderRadius: 25,
      fontSize: 25,
      color: "#ff7100",
      borderColor: "grey",
      fontFamily: "Menlo",
      marginBottom: 15,
    },
    inputFocused: {
      borderColor: '#ff7100',
    },
    inputUnfocused: {
      borderColor: 'gray',
    },
    button: {
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
  });
  