import { StyleSheet, Text, Modal, View, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { STYLES } from '@/assets/styles';
import { updateUserEmail } from '@/api/apiService';

export default function CustomModal({ props }:{ props: any}) {
    const [focus, setFocus] = React.useState<string | null>(null);
    const [newEmail, setNewEmail] = React.useState("")
    const [showError, setShowError] = React.useState(false);

    const handleFocus = (input: string) => {
        setFocus(input);
      };
    
      const handleBlur = () => {
        setFocus(null);
      };

      const handleCloseModal = () => {
        setShowError(false);
        props.handleToggleModal()
      }

    const handleConfirm = async () => {
        if (props.currentUser){
            const data = await updateUserEmail(props.currentUser.userId, newEmail);
            if (data.email != null) {
                setShowError(false);
                setNewEmail("")
                console.log(data.email)
                props.updateEmail(data.email);
                props.handleToggleModal()
            } else {
                setShowError(true);
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
              <Text style={styles.errorText}>Currently unable to update email.</Text>
              }
              <View style={styles.modalButtons}>
                <TouchableOpacity onPress={handleConfirm} style={styles.submitButton}>
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
      buttonText: {
        fontSize: STYLES.FONT_SIZE_BUTTON,
        fontFamily: STYLES.FONT,
      },
  });
  