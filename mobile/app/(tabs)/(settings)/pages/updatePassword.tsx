import { StyleSheet, Text, Image, Pressable, TextInput } from 'react-native';
import React from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { STYLES } from '@/assets/styles';
import { useUser } from '@/context/UserContext';
import { updateUserPassword } from '@/api/apiService';
import { validCharacters } from '@/helpers/validCharacters';

export default function UpdatePasswordScreen() {
  const {currentUser, setCurrentUser} = useUser(); 

  const [oldPassword, setOldPassword] = React.useState('')
  const [newPassword, setNewPassword] = React.useState('')
  const [confirmNewPassword, setConfirmNewPassword] = React.useState('')
  const [focus, setFocus] = React.useState<string | null>(null);

  const invalidCharacterCheck = () => {
    const charList = newPassword.split("")
    const isValid = charList.every(char => validCharacters.includes(char));
    return isValid;
  }

  const handlePress = async () => {
    if (oldPassword != currentUser.password) {
      console.log("current password incorrect")
    } else if (newPassword != confirmNewPassword) {
      console.log("new passwords do not match")
    } else if (newPassword.length < 8 || newPassword.length > 16) {
      console.log("passwords must be between 8-16 character")
    } else if (!invalidCharacterCheck()) {
      console.log("password contains invalid characters")
    } else if (!/[A-Z]/.test(newPassword)){
      console.log("password must contain a capital letter")
    } else if (!/[a-z]/.test(newPassword)){
      console.log("password must contain a lower case letter")
    } else if (!/\d/.test(newPassword)) {
      console.log("password must contain at least one letter")
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)) {
      console.log("password must contain at least one special character (ie: !, @, #, $, %, &)")
    } else if (newPassword === currentUser.username){
      console.log("passwords cannot match usernames")
    } else {
      try {
        const data = await updateUserPassword(currentUser.id, oldPassword, newPassword);
        setCurrentUser({
          ...currentUser,
          password: newPassword,
        });
      } catch (error) {
        console.log("error while updating password: ", error)
      }
    }
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
          style={styles.pageImage}
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
    pageImage: {
      height: 250,
      width: 430,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
    textInput: {
      height: 40,
      borderBottomWidth: 1,
      fontSize: 25,
      color: STYLES.ORANGE,
      borderColor: "grey",
      fontFamily: STYLES.FONT,
      marginBottom: 15,
    },
    inputFocused: {
      borderColor: STYLES.ORANGE,
    },
    inputUnfocused: {
      borderColor: 'gray',
    },
    button: {
      backgroundColor: STYLES.BLUE,
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
      fontFamily: STYLES.FONT,
    },
  });
  