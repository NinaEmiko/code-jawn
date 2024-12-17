import { STYLES } from '@/assets/styles';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';

export function Lessons({ props }:{ props: any}) {


  return (
        <View style={styles.cardContainer}>
            {props.lesson.map((item, index) => (
              <View key={index} style={styles.cardWrapper}>
                <Link style={styles.card} href={item.path}>
                  <View style={styles.progress}>
                    <MaterialIcons
                      name="laptop"
                      size={60}
                      color={STYLES.ORANGE}
                      style={styles.icon}
                    />
                    <Text style={styles.text}>{item.name}</Text>
                    {item.completed ? (
                      <Text style={[styles.subText, { color: "green" }]}>Completed!</Text>
                    ) : (
                      <Text style={[styles.subText, { color: "white" }]}>Not Started</Text>
                    )}
                  </View>
                </Link>
              </View>
            ))}
          </View>
  );
}

const styles = StyleSheet.create({
      progress: {
    
      },
      cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
      },
      cardWrapper: {
        width: '48%',
        marginBottom: 15,
      },
      card: {
        backgroundColor: STYLES.DARK_GREY,
        borderRadius: 25,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
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
      icon: {
        marginBottom: 10,
      },
});
