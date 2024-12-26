import { deleteAccount, getUserAccount, updateUserEmail, updateUserPassword } from "@/api/apiService";
import { STYLES } from "@/assets/styles";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useUser } from "@/context/UserContext";
import { validCharacters } from "@/helpers/validCharacters";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { Link, router } from "expo-router";
import React, { useEffect } from "react";
import { View, Pressable, Image, Text, StyleSheet, Modal, TouchableOpacity, TextInput } from "react-native";

export default function SettingsScreen() {
  const navigation = useNavigation();
  const { logout, currentUser } = useUser();
  const [showError, setShowError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");
  const [oldPassword, setOldPassword] = React.useState('')
  const [newPassword, setNewPassword] = React.useState('')
  const [confirmNewPassword, setConfirmNewPassword] = React.useState('')
  const [username, setUsername] = React.useState("")
  const [focus, setFocus] = React.useState<string | null>(null);
  const [email, setEmail] = React.useState("")
  const [newEmail, setNewEmail] = React.useState("")
  const [deleteModalVisible, setDeleteModalVisible] = React.useState(false);
  const [updateEmailModalVisible, setUpdateEmailModalVisible] = React.useState(false);
  const [updatePasswordModalVisible, setUpdatePasswordModalVisible] = React.useState(false);

  const handleDeleteModal = () => {
    setDeleteModalVisible(!deleteModalVisible);
  }

  const handleUpdateEmail = () => {
    setUpdateEmailModalVisible(true)
  }

  const handleUpdatePassword = () => {
    setUpdatePasswordModalVisible(true)
  }

  const handleUpdateEmailModalCancel = () => {
    setUpdateEmailModalVisible(false)
    setShowError(false);
  }

  const handleUpdatePasswordModalCancel = () => {
    setOldPassword("")
    setNewPassword("")
    setConfirmNewPassword("")
    setUpdatePasswordModalVisible(false)
    setShowError(false);
  }

  const handleUpdateEmailModalConfirm = async () => {
    if (currentUser){
      const data = await updateUserEmail(currentUser.userId, newEmail);
      if (data.email != null) {
        setEmail(data.email);
        setUpdateEmailModalVisible(false)
      } else {
        setShowError(true);
      }
    }
  }

  const handleConfirmDelete = async () => {
    if (currentUser) {
      const data = await deleteAccount(currentUser.userId);
      setDeleteModalVisible(false);
    }
  };

  const handleNavigation = async () => {
      await logout()
  }

  const getUserAccountCall = async () => {
    if (currentUser) {
      const data = await getUserAccount(currentUser.userId);
      if(data != null){
        setUsername(data.username)
        setEmail(data.email)
      }
  }
  }

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
    } else if (newPassword === username){
      setErrorText("Passwords cannot match usernames.")
      setShowError(true);
    } else {
      if (currentUser) {
        const data = await updateUserPassword(currentUser.userId, oldPassword, newPassword);
        setUpdatePasswordModalVisible(false)
        setOldPassword("")
        setNewPassword("")
        setConfirmNewPassword("")
      } else {
        //
      }
    }
  }

  useEffect(() => {
      getUserAccountCall()
  })

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/WP1.jpeg')}
          style={styles.reactLogo}
        />
      }>

        <Text style={styles.titleText}>Account</Text>
        <Text style={styles.text}>{username}</Text>
        <Text style={styles.text}>{email}</Text>
        <View style={styles.divider} />

        <Text style={styles.titleText}>Security</Text>
        <Text style={styles.linkText} onPress={() => handleUpdateEmail()}>Update Email</Text>
        <Text style={styles.linkText} onPress={() => handleUpdatePassword()}>Update Password</Text>
        <Text style={styles.linkText} onPress={() => handleDeleteModal()}>Delete Account</Text>
        <View style={styles.divider} />
        
        <Text style={styles.titleText}>Other</Text>
        <Link href="/pages/termsAndConditions" style={styles.linkText}>Terms and Conditions</Link>
        <Link href="/pages/acknowledgments" style={styles.linkText}>Acknowledgments</Link>
        <Link href="/pages/support" style={styles.linkText}>Support</Link>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.pressed,
            
          ]}
          onPress={() => handleNavigation()}
        >
          <Text style={styles.buttonText}>Log Out</Text>
        </Pressable>

        <Modal
          animationType="slide"
          transparent={true}
          visible={updatePasswordModalVisible}
          onRequestClose={handleUpdatePasswordModalCancel}
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
              {showError &&
                <Text style={styles.errorText}>{errorText}</Text>
              }
              <View style={styles.modalButtons}>
                <TouchableOpacity onPress={handleUpdatePasswordModalConfirm} style={styles.submitButton}>
                  <Text style={styles.deleteButtonText}>Submit</Text>
                </TouchableOpacity>
  
                <TouchableOpacity onPress={handleUpdatePasswordModalCancel} style={styles.cancelButton}>
                  <Text style={styles.deleteButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={updateEmailModalVisible}
          onRequestClose={handleUpdateEmailModalCancel}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.titleText}>Update Email</Text>

              <TextInput
                  style={[styles.textInput, focus === 'Email' ? styles.inputFocused : styles.inputUnfocused]}
                  onFocus={() => handleFocus('Email')}
                  onBlur={handleBlur}
                  value={newEmail}
                  onChangeText={setNewEmail} 
                  placeholder='New Email'
                />
              {showError &&
              <Text style={styles.deleteButtonText}>Currently unable to update email.</Text>
              }
              <View style={styles.modalButtons}>
                <TouchableOpacity onPress={handleUpdateEmailModalConfirm} style={styles.submitButton}>
                  <Text style={styles.deleteButtonText}>Submit</Text>
                </TouchableOpacity>
  
                <TouchableOpacity onPress={handleUpdateEmailModalCancel} style={styles.cancelButton}>
                  <Text style={styles.deleteButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={deleteModalVisible}
          onRequestClose={handleDeleteModal}
        >
          <View style={styles.modalBackground}>
          
            <View style={styles.modalContainer}>
              <Text style={styles.titleText}>Delete Account</Text>
              <Text style={styles.modalText}>Are you sure you want to perform this action? This cannot be undone.</Text>
              
              <View style={styles.modalButtons}>
                <TouchableOpacity onPress={handleConfirmDelete} style={styles.confirmButton}>
                  <Text style={styles.deleteButtonText}>Confirm</Text>
                </TouchableOpacity>
  
                <TouchableOpacity onPress={handleDeleteModal} style={styles.cancelButton}>
                  <Text style={styles.deleteButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      
    </ParallaxScrollView>
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
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color: 'white',
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
  confirmButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    width: '40%',
    alignItems: 'center',
  },
  linkText: {
      color: "white",
      fontSize: STYLES.FONT_SIZE_SUB_TEXT,
      textDecorationLine: "underline",
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
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    fontSize: STYLES.FONT_SIZE_BUTTON,
    fontFamily: STYLES.FONT,
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 5,
  },
});
