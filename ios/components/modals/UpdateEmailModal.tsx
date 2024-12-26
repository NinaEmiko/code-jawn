import { StyleSheet, Text, Modal, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { STYLES } from '@/assets/styles';
import { updateUserEmail } from '@/api/apiService';
import { useUser } from '@/context/UserContext';

interface UpdateEmailModalProps {
    handleToggleModal: () => void,
    updateEmail: (newEmail: string) => void,
    visible: boolean,
}

const UpdateEmailModal: React.FC<UpdateEmailModalProps> = ({ handleToggleModal, updateEmail, visible }) => {
    const { currentUser } = useUser();
    const [focus, setFocus] = useState<string>("");
    const [newEmail, setNewEmail] = useState<string>("")
    const [showError, setShowError] = useState<boolean>(false);

    const handleFocus = (input: string) => {
        setFocus(input);
    };
    
    const handleBlur = () => {
        setFocus("");
    };

    const handleCloseModal = () => {
        setShowError(false);
        setNewEmail("")
        handleToggleModal()
    }

    const handleConfirm = async () => {
        if (currentUser) {
            const data = await updateUserEmail(currentUser.userId, newEmail);
            if (data.newEmail != null) {
                console.log(data.newEmail)
                updateEmail(data.newEmail);
                handleCloseModal()
            } else {
                setShowError(true);
            }
        }
    }

    return(
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
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

export default UpdateEmailModal;

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
        fontSize: STYLES.FONT_SIZE_SUB_TEXT,
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
        fontSize: STYLES.TEXT_INPUT_FONT_SIZE,
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
  