import { getUserAccount } from "@/api/apiService";
import { STYLES } from "@/assets/styles";
import DeleteAccountModal from "@/components/DeleteAccountModal";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import UpdateEmailModal from "@/components/UpdateEmailModal";
import UpdatePasswordModal from "@/components/UpdatePasswordModal";
import { useUser } from "@/context/UserContext";
import { Link } from "expo-router";
import React, { useEffect } from "react";
import { View, Pressable, Image, Text, StyleSheet } from "react-native";

export default function SettingsScreen() {
  const { logout, currentUser } = useUser();
  const [username, setUsername] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [deleteModalVisible, setDeleteModalVisible] = React.useState(false);
  const [updateEmailModalVisible, setUpdateEmailModalVisible] = React.useState(false);
  const [updatePasswordModalVisible, setUpdatePasswordModalVisible] = React.useState(false);

  const handleToggleDeleteModal = () => {
    setDeleteModalVisible(!deleteModalVisible);
  }

  const handleToggleUpdateEmailModal = () => {
    setUpdateEmailModalVisible(!updateEmailModalVisible)
  }

  const handleToggleUpdatePasswordModal = () => {
    setUpdatePasswordModalVisible(!updatePasswordModalVisible)
  }

  const handleLogout = async () => {
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
        <Text style={styles.linkText} onPress={() => handleToggleUpdateEmailModal()}>Update Email</Text>
        <Text style={styles.linkText} onPress={() => handleToggleUpdatePasswordModal()}>Update Password</Text>
        <Text style={styles.linkText} onPress={() => handleToggleDeleteModal()}>Delete Account</Text>
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
          onPress={() => handleLogout()}
        >
          <Text style={styles.buttonText}>Log Out</Text>
        </Pressable>

        <UpdatePasswordModal 
            visible={updatePasswordModalVisible}
            handleToggleModal={handleToggleUpdatePasswordModal}
            username={username}
            currentUser={currentUser}
        />

        <UpdateEmailModal 
            visible={updateEmailModalVisible}
            handleToggleModal={handleToggleUpdateEmailModal}
            currentUser={currentUser}
            updateEmail={setEmail}
        />

        <DeleteAccountModal props={{
          visible: deleteModalVisible,
          handleToggleModal: handleToggleDeleteModal,
          currentUser: currentUser
        }}/>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
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
