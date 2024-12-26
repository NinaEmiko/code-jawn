import { StyleSheet, Text, Modal, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { STYLES } from '@/assets/styles';

interface QuizModalProps {
    setModalVisible: (visible: boolean) => void,
    modalVisible: boolean,
    text: string,
}

const QuizModal: React.FC<QuizModalProps> = ({ setModalVisible, modalVisible, text }) => {

    const handleConfirm = () => {
        setModalVisible(false);
    };

    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={handleConfirm}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalText}>{text}</Text>
            
                    <View style={styles.modalButtons}>
                        <TouchableOpacity onPress={handleConfirm} style={styles.cancelButton}>
                            <Text style={styles.buttonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default QuizModal;

const styles = StyleSheet.create({
    text: {
        color: "white",
        fontSize: STYLES.FONT_SIZE_SUB_TEXT,
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
        backgroundColor: STYLES.DARK_GREY,
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
        borderColor: "gold",
        borderWidth: 1,
    },
    modalText: {
        fontSize: STYLES.FONT_SIZE_SUB_TEXT,
        marginBottom: 20,
        color: "white",
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    cancelButton: {
        backgroundColor: STYLES.BLUE,
        padding: 10,
        borderRadius: 5,
        width: '95%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontWeight: "bold",
        fontSize: STYLES.FONT_SIZE_SUB_TEXT,
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
});
  