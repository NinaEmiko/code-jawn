import { StyleSheet, Text, Modal, View, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { STYLES } from '@/assets/styles';
import { validCharacters } from '@/helpers/validCharacters';
import { updateUserPassword } from '@/api/apiService';

export default function CustomModal({ props }:{ props: any}) {
    const [focus, setFocus] = React.useState<string | null>(null);
    const [oldPassword, setOldPassword] = React.useState('')
    const [newPassword, setNewPassword] = React.useState('')
    const [confirmNewPassword, setConfirmNewPassword] = React.useState('')
    const [showError, setShowError] = React.useState(false);
    const [errorText, setErrorText] = React.useState("");

    const handleFocus = (input: string) => {
        setFocus(input);
      };
    
      const handleBlur = () => {
        setFocus(null);
      };

const invalidCharacterCheck = () => {
    const charList = newPassword.split("")
    const isValid = charList.every(char => validCharacters.includes(char));
    return isValid;
  }

  const handleCloseModal = () => {
    setOldPassword("")
    setNewPassword("")
    setConfirmNewPassword("")
    setErrorText("")
    setShowError(false);
    props.handleToggleModal()
  }

  const handleUpdatePasswordModalConfirm = async () => {
    if (newPassword != confirmNewPassword) {
      setErrorText("New passwords do not match.")
      setShowError(true);
    } else if (newPassword.length < 8 || newPassword.length > 16) {
      setErrorText("Passwords must be between 8-16 character.")
      setShowError(true);
    } else if (!invalidCharacterCheck()) {
      setErrorText("Password contains invalid characters.")
      setShowError(true);
    } else if (!/[A-Z]/.test(newPassword)){
      setErrorText("Password must contain a capital letter.")
      setShowError(true);
    } else if (!/[a-z]/.test(newPassword)){
      setErrorText("Password must contain a lower case letter.")
      setShowError(true);
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)) {
      setErrorText("Password must contain at least one special character (ie: !, @, #, $, %, &).")
      setShowError(true);
    } else if (newPassword === props.username){
      setErrorText("Passwords cannot match usernames.")
      setShowError(true);
    } else {
      if (props.currentUser) {
        const data = await updateUserPassword(props.currentUser.userId, oldPassword, newPassword);
        console.log("Password updated.")
        setOldPassword("")
        setNewPassword("")
        setConfirmNewPassword("")
        setErrorText("")
        setShowError(false);
        props.handleToggleModal()
      } else {
        console.log("Password not updated.")
      }
    }
  }

  return(
        <Modal
          animationType="slide"
          transparent={true}
          visible={props.visible}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.titleText}>Update Password</Text>
              <TextInput
                  style={[styles.textInput, focus === 'oldPassword' ? styles.inputFocused : styles.inputUnfocused]}
                  onFocus={() => handleFocus('oldPassword')}
                  onBlur={handleBlur}
                  value={oldPassword}
                  onChangeText={setOldPassword} 
                  placeholder='Old Password'
                  secureTextEntry={true}
                />
              <TextInput
                  style={[styles.textInput, focus === 'newPassword' ? styles.inputFocused : styles.inputUnfocused]}
                  onFocus={() => handleFocus('newPassword')}
                  onBlur={handleBlur}
                  value={newPassword}
                  onChangeText={setNewPassword} 
                  placeholder='New Password'
                  secureTextEntry={true}
                />
              <TextInput
                  style={[styles.textInput, focus === 'confirmNewPassword' ? styles.inputFocused : styles.inputUnfocused]}
                  onFocus={() => handleFocus('confirmNewPassword')}
                  onBlur={handleBlur}
                  value={confirmNewPassword}
                  onChangeText={setConfirmNewPassword} 
                  placeholder='Confirm New Password'
                  secureTextEntry={true}
                />
              {showError &&
                <Text style={styles.errorText}>{errorText}</Text>
              }
              <View style={styles.modalButtons}>
                <TouchableOpacity onPress={handleUpdatePasswordModalConfirm} style={styles.submitButton}>
                  <Text style={styles.deleteButtonText}>Submit</Text>
                </TouchableOpacity>
  
                <TouchableOpacity onPress={handleCloseModal} style={styles.cancelButton}>
                  <Text style={styles.deleteButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
  );
}

const styles = StyleSheet.create({
        inputFocused: {
        borderColor: STYLES.ORANGE,
      },
      inputUnfocused: {
        borderColor: 'gray',
      },
      deleteButtonText: {
        color: 'black',
        fontWeight: "bold",
        fontSize: 16,
        fontFamily: STYLES.FONT,
      },
      cancelButton: {
        backgroundColor: STYLES.BLUE,
        padding: 10,
        borderRadius: 5,
        width: '40%',
        alignItems: 'center',
      },
      modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark background
      },
      modalContainer: {
        backgroundColor: STYLES.DARK_GREY,
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: STYLES.ORANGE
      },
      modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
      },
      submitButton: {
        backgroundColor: STYLES.ORANGE,
        padding: 10,
        borderRadius: 5,
        width: '40%',
        alignItems: 'center',
      },
      textInput: {
        height: 40,
        borderBottomWidth: 1,
        fontSize: 25,
        color: STYLES.ORANGE,
        borderColor: "grey",
        fontFamily: STYLES.FONT,
        marginBottom: 15,
        width: "100%",
      },
      text: {
        color: "white",
        fontSize: STYLES.FONT_SIZE_SUB_TEXT,
      },
      errorText: {
        color: "red",
        fontSize: STYLES.FONT_SIZE_SUB_TEXT,
        marginBottom: 10,
      },
      titleText: {
        color: STYLES.ORANGE,
        fontSize: STYLES.FONT_SIZE_TITLE,
      },
      button: {
        marginTop: 35,
        backgroundColor: STYLES.BLUE,
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        fontSize: STYLES.FONT_SIZE_BUTTON,
        fontFamily: STYLES.FONT,
      },
  });
  