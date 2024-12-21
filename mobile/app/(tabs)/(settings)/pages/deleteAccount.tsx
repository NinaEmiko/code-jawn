import { StyleSheet, Text, Image, Modal, View, TouchableOpacity, Pressable } from 'react-native';
import React, { useState } from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { STYLES } from '@/assets/styles';
import { useUser } from '@/context/UserContext';
import { deleteAccount } from '@/api/apiService';

export default function DeleteAccountScreen() {
  const {currentUser, setCurrentUser} = useUser(); 
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  }

  const handleConfirm = async () => {
    try {
      const data = await deleteAccount(currentUser.id);
    } catch (error) {
      console.log("error while deleting account: ", error)
    }
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
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

        <Text style={styles.titleText}>Delete Account</Text>
        <Pressable 
          style={({ pressed }) => [
            styles.button,
            pressed && styles.pressed,
            ]}
            onPress={() => handlePress()}
        >
          <Text style={styles.buttonText}>Delete Account</Text>
        </Pressable>

        <Text style={styles.subTitleText}></Text>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCancel}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Are you sure you want to perform this action? This cannot be undone.</Text>
            
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={handleConfirm} style={styles.confirmButton}>
                <Text style={styles.buttonText}>Confirm</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    pageImage: {
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
    titleText: {
      color: STYLES.ORANGE,
      fontSize: STYLES.FONT_SIZE_TITLE,
      fontWeight: "bold",
    },
    subTitleText: {
      color: STYLES.ORANGE,
      fontSize: STYLES.FONT_SIZE_TEXT,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalBackground: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark background
    },
    modalContainer: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      width: '80%',
      alignItems: 'center',
    },
    modalText: {
      fontSize: 18,
      marginBottom: 20,
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
    },
    confirmButton: {
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 5,
      width: '40%',
      alignItems: 'center',
    },
    cancelButton: {
      backgroundColor: STYLES.BLUE,
      padding: 10,
      borderRadius: 5,
      width: '40%',
      alignItems: 'center',
    },
    buttonText: {
      color: 'black',
      fontWeight: "bold",
      fontSize: 16,
      fontFamily: STYLES.FONT,
    },
    button: {
      backgroundColor: "red",
      height: 50,
      borderWidth: 1,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
  },
  pressed: {
      opacity: 0.7,
  },
  });
  