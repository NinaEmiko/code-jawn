import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native';

import React from 'react';

const screenHeight = Dimensions.get('window').height;

export default function MultipleChoice({ props }:{ props: any}) {

  const handleSelect = (answer: number) => {
    props.correctAnswer === answer ? props.handleSelect(true, answer) :props.handleSelect(false, answer);
  }

  return (
    <>
        {props.choices === 2 &&
            <View style={styles.buttonContainer}>
                <Pressable onPress={() => handleSelect(1)}>
                    <Text style={props.answer1Styles}>{props.answer1}</Text>
                </Pressable>
                <View style={styles.divider} />
                <Pressable onPress={() => handleSelect(2)}>
                    <Text style={props.answer2Styles}>{props.answer2}</Text>
                </Pressable>
            </View>
        }

        {props.choices === 3 &&
            <View style={styles.buttonContainer}>
                <Pressable onPress={() => handleSelect(1)}>
                    <Text style={props.answer1Styles}>{props.answer1}</Text>
                </Pressable>
                <View style={styles.divider} />
                <Pressable onPress={() => handleSelect(2)}>
                    <Text style={props.answer2Styles}>{props.answer2}</Text>
                </Pressable>
                <View style={styles.divider} />
                <Pressable onPress={() => handleSelect(3)}>
                    <Text style={props.answer3Styles}>{props.answer3}</Text>
                </Pressable>
            </View>
        }

        {props.choices === 4 &&
            <View style={styles.buttonContainer}>
                <Pressable onPress={() => handleSelect(1)}>
                    <Text style={props.answer1Styles}>{props.answer1}</Text>
                </Pressable>
                <View style={styles.divider} />
                <Pressable onPress={() => handleSelect(2)}>
                    <Text style={props.answer2Styles}>{props.answer2}</Text>
                </Pressable>
                <View style={styles.divider} />
                <Pressable onPress={() => handleSelect(3)}>
                    <Text style={props.answer3Styles}>{props.answer3}</Text>
                </Pressable>
                <View style={styles.divider} />
                <Pressable onPress={() => handleSelect(4)}>
                    <Text style={props.answer4Styles}>{props.answer4}</Text>
                </Pressable>
            </View>
        }
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: screenHeight * 0.45,
    backgroundColor: "#151718",
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 5,
    marginLeft: 15,
    marginRight: 15
  },
});
