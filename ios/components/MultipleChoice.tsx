import { StyleSheet, Text, View, Dimensions, Pressable, StyleProp, TextStyle } from 'react-native';
import React, { FC } from 'react';

const screenHeight = Dimensions.get('window').height;

interface MultipleChoiceProps {
    correctAnswer: number,
    handleSelectProp: (correct: boolean, answer: number) => void,
    choices: number,
    answer1: string,
    answer2: string,
    answer3?: string,
    answer4?: string,
    answer1Styles?: StyleProp<TextStyle>,
    answer2Styles?: StyleProp<TextStyle>,
    answer3Styles?: StyleProp<TextStyle>,
    answer4Styles?: StyleProp<TextStyle>,
}

const MultipleChoice: FC<MultipleChoiceProps> = ({ 
    correctAnswer,
    handleSelectProp,
    choices,
    answer1,
    answer2,
    answer3,
    answer4,
    answer1Styles,
    answer2Styles,
    answer3Styles,
    answer4Styles
}) => {

    const handleSelect = (answer: number) => {
        correctAnswer === answer ? handleSelectProp(true, answer) : handleSelectProp(false, answer);
    }

    return (
        <>
            {choices === 2 &&
                <View style={styles.buttonContainer}>
                    <Pressable onPress={() => handleSelect(1)}>
                        <Text style={answer1Styles}>{answer1}</Text>
                    </Pressable>
                    <View style={styles.divider} />
                    <Pressable onPress={() => handleSelect(2)}>
                        <Text style={answer2Styles}>{answer2}</Text>
                    </Pressable>
                </View>
            }

            {choices === 3 &&
                <View style={styles.buttonContainer}>
                    <Pressable onPress={() => handleSelect(1)}>
                        <Text style={answer1Styles}>{answer1}</Text>
                    </Pressable>
                    <View style={styles.divider} />
                    <Pressable onPress={() => handleSelect(2)}>
                        <Text style={answer2Styles}>{answer2}</Text>
                    </Pressable>
                    <View style={styles.divider} />
                    <Pressable onPress={() => handleSelect(3)}>
                        <Text style={answer3Styles}>{answer3}</Text>
                    </Pressable>
                </View>
            }

            {choices === 4 &&
                <View style={styles.buttonContainer}>
                    <Pressable onPress={() => handleSelect(1)}>
                        <Text style={answer1Styles}>{answer1}</Text>
                    </Pressable>
                    <View style={styles.divider} />
                    <Pressable onPress={() => handleSelect(2)}>
                        <Text style={answer2Styles}>{answer2}</Text>
                    </Pressable>
                    <View style={styles.divider} />
                    <Pressable onPress={() => handleSelect(3)}>
                        <Text style={answer3Styles}>{answer3}</Text>
                    </Pressable>
                    <View style={styles.divider} />
                    <Pressable onPress={() => handleSelect(4)}>
                        <Text style={answer4Styles}>{answer4}</Text>
                    </Pressable>
                </View>
            }
        </>
    );
}

export default MultipleChoice;

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
