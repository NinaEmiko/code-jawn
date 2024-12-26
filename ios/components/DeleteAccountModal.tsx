import { StyleSheet, Text, Modal, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { STYLES } from '@/assets/styles';
import { deleteAccount } from '@/api/apiService';
import { User } from '@/context/UserContext';

interface DeleteAccountModalProps {
    handleToggleModal: () => void,
    currentUser: User | null,
    visible: boolean,
}

const DeleteAccountModal: React.FC<DeleteAccountModalProps> = ({ handleToggleModal, currentUser, visible }) => {

    const handleConfirmDelete = async () => {
        if (currentUser) {
            const data = await deleteAccount(currentUser.userId);
            handleToggleModal();
        }
    };

    return(

        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <Text style={styles.titleText}>Delete Account</Text>
                    <Text style={styles.modalText}>Are you sure you want to perform this action? This cannot be undone.</Text>
              
                    <View style={styles.modalButtons}>
                        <TouchableOpacity onPress={handleConfirmDelete} style={styles.confirmButton}>
                            <Text style={styles.deleteButtonText}>Delete</Text>
                        </TouchableOpacity>
  
                        <TouchableOpacity onPress={handleToggleModal} style={styles.cancelButton}>
                            <Text style={styles.deleteButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default DeleteAccountModal;

const styles = StyleSheet.create({
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
    modalText: {
        fontSize: STYLES.FONT_SIZE_SUB_TEXT,
        marginBottom: 20,
        color: 'white',
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
    text: {
        color: "white",
        fontSize: STYLES.FONT_SIZE_SUB_TEXT,
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
  