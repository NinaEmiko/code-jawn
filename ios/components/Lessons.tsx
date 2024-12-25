import { STYLES } from '@/assets/styles';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StyleSheet, View, Text, Pressable } from 'react-native';

export function Lessons({ props }:{ props: any}) {

    const handleNavigation = () => {
        props.handleUpdateComponent(props.path);
    }

    return (
        <View style={styles.cardWrapper}>
            <Pressable style={styles.card} onPress={() => handleNavigation()}>
                <View style={styles.progress}>
                    <MaterialIcons
                        name="laptop"
                        size={60}
                        color={STYLES.ORANGE}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>{props.lesson}</Text>
                    {props.isComplete ? (
                        <Text style={[styles.subText, { color: "green" }]}>Completed!</Text>
                    ) : (
                        <Text style={[styles.subText, { color: "white" }]}>Not Started</Text>
                    )}
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
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
        fontSize: 15,
      },
      progress: {

      },
      icon: {

      },
});
