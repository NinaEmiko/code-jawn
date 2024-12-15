import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { STYLES } from '@/assets/styles';

export const TemporaryLessons = ({ props }:{ props: any}) => {
    return (
        <View style={styles.container}>

            <Link style={styles.card} href={props.path}>
              <View style={styles.progress}>
                <MaterialIcons
                  name="laptop"
                  size={60}
                  color={STYLES.ORANGE}
                  style={styles.icon}
                />
                <Text style={styles.text}>{props.lesson}</Text>
                {props.completed ? (
                  <Text style={[styles.subText, { color: "green" }]}>Completed!</Text>
                ) : (
                  <Text style={[styles.subText, { color: "white" }]}>Not Started</Text>
                )}
              </View>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    progress: {
    },
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      width: "100%",
    },
    card: {
      width: '48%',
      marginBottom: 10,
      backgroundColor: STYLES.DARK_GREY,
      borderRadius: 25,
      padding: 15,
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
    },
  });
  