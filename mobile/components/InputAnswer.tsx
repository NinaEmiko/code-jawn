import { StyleSheet, Text, Pressable, TextInput, View, Dimensions } from 'react-native';

import React from 'react';
import { STYLES } from '@/assets/styles';

const screenHeight = Dimensions.get('window').height;

export default function InputAnswer({ props }:{ props: any}) {
    const [focus, setFocus] = React.useState<string | null>(null);
    const [answer, setAnswer] = React.useState<any | null>(props.answer);

    const handleFocus = (input: string) => {
        setFocus(input);
    };

    const handleBlur = () => {
        setFocus(null);
    };

    const handleSubmit = () => {
        if (props.acceptableAnswers.includes(answer)) {
            props.handleSelect(true, 1)
        } else {
            props.handleSelect(false, 2)
        }
    }

  return (
    <View style={styles.buttonContainer}>
        <TextInput
            style={[styles.textInput, focus === 'Answer' ? styles.inputFocused : styles.inputUnfocused]}
            onFocus={() => handleFocus('Answer')}
            onBlur={handleBlur}
            value={answer}
            onChangeText={setAnswer}
            placeholder={props.placeHolder}
        />

        <Pressable
            style={({ pressed }) => [
                styles.button,
                pressed && styles.pressed,
                ]}
            onPress={() => handleSubmit()}>
                <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
    </View>
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
  inputFocused: {
    borderColor: STYLES.ORANGE,
    },
    inputUnfocused: {
        borderColor: 'gray',
    },
    textInput: {
        height: 40,
        borderBottomWidth: 1,
        fontSize: STYLES.TEXT_INPUT_FONT_SIZE,
        color: "white",
        borderColor: "grey",
        fontFamily: STYLES.FONT,
        marginBottom: 15,
        margin: 30,
        textAlign: "right",
    },
    button: {
        backgroundColor: STYLES.BLUE,
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30
    },
    pressed: {
        opacity: 0.7,
    },
    buttonText: {
        fontSize: STYLES.FONT_SIZE_BUTTON,
        fontFamily: STYLES.FONT,
    },
});
