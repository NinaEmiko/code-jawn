import { StyleSheet, Text, View, Dimensions, ImageBackground, Pressable } from 'react-native';

import React from 'react';
import { STRINGS_EXPLANATIONS, STRINGS_QUIZ } from '@/constants/Java/DataTypes/StringsConstants';
import ProgressCircle from '@/components/ProgressCircle';
import TypingDisplayText from '@/components/TypingDisplayText';
import { STYLES } from '@/assets/styles';
import { router } from 'expo-router';
import MultipleChoice from '@/components/MultipleChoice';
import InputAnswer from '@/components/InputAnswer';
import CustomModal from '@/components/CustomModal';
import { getJavaDataTypesLT, updateJavaDataTypesLT } from '@/api/apiService';
import { useUser } from '@/context/UserContext';

const screenHeight = Dimensions.get('window').height;

export default function JavaDataTypesStringsQuiz() {
    const { currentUser, updateJavaLessonTracker } = useUser();
    const [questionNumber, setQuestionNumber] = React.useState(0);
    const [progress, setProgress] = React.useState(0);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalText, setModalText] = React.useState("");
    const [answerIsCorrect, setAnswerIsCorrect]  = React.useState(false);

  const handleSelect = (correct: boolean, answer: number) => {
    setModalText(STRINGS_EXPLANATIONS[questionNumber + 1 as keyof typeof STRINGS_EXPLANATIONS]?.[answer - 1])
    if (correct) {
        setAnswerIsCorrect(true);
        setModalVisible(true);
    } else {
        setModalVisible(true)
    }
  }

  const handleModalClose = () => {
    if (answerIsCorrect) {
        setQuestionNumber(questionNumber + 1)
        setProgress(progress + 20);
        setAnswerIsCorrect(false);
    }
    setModalVisible(false)

  }

  const handleCompleteQuiz = async () => {
    const data = await updateJavaDataTypesLT(currentUser.userId, "Strings");
    const jawn = await getJavaDataTypesLT(currentUser.userId);
    updateJavaLessonTracker(jawn);
    router.push('/(tabs)/(home)');
  }

  return (
    <>
        <View style={styles.headerReplacement} />

        <View style={styles.lessonContainer}>
            <View style={styles.banner}>
                <ProgressCircle props={{percentage:progress, style: {width: 80, height: 80} }} />
            </View>
            <View style={styles.lessonCard}>
                <ImageBackground 
                    source={require('@/assets/images/ComputerScreenOrange.png')}
                    style={styles.image}
                >

                    {questionNumber === 0 &&
                        <TypingDisplayText text={STRINGS_QUIZ.STRING_QUESTION_1} textColor="white" />
                    }
                    {questionNumber === 1 &&
                        <TypingDisplayText text={STRINGS_QUIZ.STRING_QUESTION_2} textColor="white" />
                    }
                    {questionNumber === 2 &&
                        <TypingDisplayText text={STRINGS_QUIZ.STRING_QUESTION_3} textColor="white" />
                    }
                    {questionNumber === 3 &&
                        <TypingDisplayText text={STRINGS_QUIZ.STRING_QUESTION_4} textColor="white" />
                    }
                    {questionNumber === 4 &&
                        <TypingDisplayText text={STRINGS_QUIZ.STRING_QUESTION_5} textColor="white" />
                    }
                    {questionNumber === 5 &&
                        <TypingDisplayText text={"Good job!"} textColor="white" />
                    }

                </ImageBackground>
            </View>
        </View>

        {questionNumber === 0 &&
            <MultipleChoice props={{
                choices: 4,
                answer1: "false",
                answer1Styles: styles.answerBoolean,
                answer2: "5",
                answer2Styles: styles.answerInt,
                answer3: "\"This is a String.\"",
                answer3Styles: styles.answerString,
                answer4: "This is a String.",
                answer4Styles: styles.answerText,
                handleSelect: handleSelect,
                correctAnswer: 3
            }} />
        }
        {questionNumber === 1 &&
            <MultipleChoice props={{
                choices: 4,
                answer1: `five`,
                answer1Styles: styles.answerText,
                answer2: `"5"`,
                answer2Styles: styles.answerString,
                answer3: `"5.5"`,
                answer3Styles: styles.answerString,
                answer4: `"five"`,
                answer4Styles: styles.answerString,
                handleSelect: handleSelect,
                correctAnswer: 1
            }} />
        }
        {questionNumber === 2 &&
            <MultipleChoice props={{
                choices: 4,
                answer1: `"This is my house."`,
                answer1Styles: styles.answerString,
                answer2: `They are all of type String.`,
                answer2Styles: styles.answerText,
                answer3: `'This is my house.'`,
                answer3Styles: styles.answerString,
                answer4: `\`This is my house.\``,
                answer4Styles: styles.answerString,
                handleSelect: handleSelect,
                correctAnswer: 2
            }} />
        }
        {questionNumber === 3 &&
            <MultipleChoice props={{
                choices: 4,
                answer1: `It is missing quotation marks.`,
                answer1Styles: styles.answerText,
                answer2: `There is nothing missing.`,
                answer2Styles: styles.answerText,
                answer3: `It is missing an = sign.`,
                answer3Styles: styles.answerText,
                answer4: `It contains a 5 and that is an int value.`,
                answer4Styles: styles.answerText,
                handleSelect: handleSelect,
                correctAnswer: 1
            }} />
        }
        {questionNumber === 4 &&
            <InputAnswer props={{
                acceptableAnswers: [
                    `“17”`,
                    `‘17’`,
                    `\`17\``,
                    `'17'`,
                    `"17"`
                ],
                placeHolder: "17",
                answer: "17",
                handleSelect: handleSelect,
            }} />
        }

        {questionNumber === 5 &&
            <View style={styles.buttonContainer}>
                <Pressable
                    style={({ pressed }) => [
                        styles.button,
                        pressed && styles.pressed,
                        ]}
                    onPress={() => handleCompleteQuiz()}>
                    <Text style={styles.buttonText}>Complete Lesson</Text>
                </Pressable>
            </View>
        }

        <CustomModal props={{
            text: modalText,
            modalVisible: modalVisible,
            setModalVisible: handleModalClose
        }} />
    </>
  );
}

const styles = StyleSheet.create({
    answerString: {
        color: STYLES.STRINGS,
        fontFamily: STYLES.FONT,
        fontSize: STYLES.FONT_SIZE_SUB_TEXT,
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    answerInt:{
        color: STYLES.INTS,
        fontFamily: STYLES.FONT,
        fontSize: STYLES.FONT_SIZE_SUB_TEXT,
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    answerBoolean: {
        color: STYLES.ORANGE,
        fontFamily: STYLES.FONT,
        fontSize: STYLES.FONT_SIZE_SUB_TEXT,
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    headerReplacement: {
        height: screenHeight * .10,
    },
    answerText: {
    color: "white",
    fontFamily: STYLES.FONT,
    fontSize: STYLES.FONT_SIZE_SUB_TEXT,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  image: {
    height: 260,
    width: 465,
    resizeMode: 'contain',
    paddingRight: 30,

  },
  banner: {
    flexDirection: "row",
    width: 100,
    height: "10%",
    marginLeft: "auto",
  },
  lessonCard: {    
    height: screenHeight * .40,
    marginTop: 25,
    borderRadius: 10,    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lessonContainer: {
    backgroundColor: "#151718",
    height: screenHeight * .50,
  },
  buttonContainer: {
    height: screenHeight * 0.45,
    backgroundColor: "#151718",
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
  buttonText: {
    fontSize: STYLES.FONT_SIZE_BUTTON,
    fontFamily: STYLES.FONT,
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 5,
    marginLeft: 15,
    marginRight: 15
  },
  pressed: {
    opacity: 0.7,
},
});

