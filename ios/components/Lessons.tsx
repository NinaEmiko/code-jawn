import { STYLES } from '@/assets/styles';
import { MaterialIcons } from '@expo/vector-icons';
import { FC } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

interface LessonsProps {
    handleUpdateComponent: (path: string) => void,
    path: string,
    lesson: string,
    isComplete: boolean
}

const Lessons: FC<LessonsProps> = ({ handleUpdateComponent, path, lesson, isComplete }) => {

    const handleNavigation = () => {
        handleUpdateComponent(path);
    }

    return (
        <View style={styles.cardWrapper}>
            <Pressable style={styles.card} onPress={() => handleNavigation()}>
                <View>

                    <MaterialIcons
                        name="laptop"
                        size={60}
                        color={STYLES.ORANGE}
                    />

                    <Text style={styles.text}>{lesson}</Text>

                    {isComplete ? (
                        <Text style={[styles.subText, { color: "green" }]}>Completed!</Text>
                    ) : (
                        <Text style={[styles.subText, { color: "white" }]}>Not Started</Text>
                    )}
                    
                </View>
            </Pressable>
        </View>
    );
}

export default Lessons;

const styles = StyleSheet.create({
    cardWrapper: {
        width: '48%',
        marginBottom: 10,
    },
    card: {
        backgroundColor: STYLES.DARK_GREY,
        borderRadius: 25,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: STYLES.FONT,
        color: "white",
        fontSize: STYLES.FONT_SIZE_SUB_TEXT,
        fontWeight: "bold",
    },
    subText: {
        fontFamily: STYLES.FONT,
        fontSize: STYLES.FONT_SIZE_SUB_TEXT,
    },
});
