import { StyleSheet, Text, View, Dimensions, ImageBackground, Pressable } from 'react-native';
import React, { FC, useState } from 'react';
import { STRINGS_EXPLANATIONS, STRINGS_QUIZ } from '@/constants/Java/DataTypes/StringsConstants';
import ProgressCircle from '@/components/ProgressCircle';
import TypingDisplayText from '@/components/TypingDisplayText';
import { STYLES } from '@/assets/styles';
import MultipleChoice from '@/components/MultipleChoice';
import InputAnswer from '@/components/InputAnswer';
import QuizModal from '@/components/modals/QuizModal';
import { updateJavaDataTypesLT } from '@/api/apiService';
import { useUser } from '@/context/UserContext';

const screenHeight = Dimensions.get('window').height;

interface JavaDataTypesStringsQuizProps {
    handleUpdateComponentProp: (component: string, openComponent: string) => void,
}

const JavaDataTypesStringsQuiz: FC<JavaDataTypesStringsQuizProps> = ({ handleUpdateComponentProp }) => {
    const { currentUser } = useUser();
    const [questionNumber, setQuestionNumber] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);
    const [previousProgress, setPreviousProgress] = useState<number>(0);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [modalText, setModalText] = useState<string>("");
    const [answerIsCorrect, setAnswerIsCorrect] = useState<boolean>(false);

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
            setPreviousProgress(progress);
            setProgress(progress + 20);
            setAnswerIsCorrect(false);
        }
        setModalVisible(false)
    }

    const handleCompleteQuiz = async () => {
        if (currentUser){
            const data = await updateJavaDataTypesLT(currentUser.userId, "Strings");
            handleUpdateComponentProp("Java Lessons", "Data Types")
        }
    }

  return (
        <>
            <View style={styles.headerReplacement} />
            <View style={styles.lessonContainer}>
                <View style={styles.banner}>
                    <ProgressCircle props={{percentage:progress, previousPercentage:previousProgress, style: {width: 80, height: 80} }} />
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
                            <TypingDisplayText text={STRINGS_QUIZ.GOOD_JOB} textColor="white" />
                        }
                    </ImageBackground>
                </View>
            </View>

            {questionNumber === 0 &&
                <MultipleChoice
                    choices={4}
                    answer1={"false"}
                    answer1Styles={styles.answerBoolean}
                    answer2={"5"}
                    answer2Styles={styles.answerInt}
                    answer3={"\"This is a String.\""}
                    answer3Styles={styles.answerString}
                    answer4={"This is a String."}
                    answer4Styles={styles.answerText}
                    handleSelectProp={handleSelect}
                    correctAnswer={3}
                />
            }
            {questionNumber === 1 &&
                <MultipleChoice
                    choices={4}
                    answer1={`five`}
                    answer1Styles={styles.answerText}
                    answer2={`"5"`}
                    answer2Styles={styles.answerString}
                    answer3={`"5.5"`}
                    answer3Styles={styles.answerString}
                    answer4={`"five"`}
                    answer4Styles={styles.answerString}
                    handleSelectProp={handleSelect}
                    correctAnswer={1}
                />
            }
            {questionNumber === 2 &&
                <MultipleChoice
                    choices={4}
                    answer1={`"This is my house."`}
                    answer1Styles={styles.answerString}
                    answer2={`They are all of type String.`}
                    answer2Styles={styles.answerText}
                    answer3={`'This is my house.'`}
                    answer3Styles={styles.answerString}
                    answer4={`\`This is my house.\``}
                    answer4Styles={styles.answerString}
                    handleSelectProp={handleSelect}
                    correctAnswer={2}
                />
            }
            {questionNumber === 3 &&
                <MultipleChoice
                    choices={4}
                    answer1={`It is missing quotation marks.`}
                    answer1Styles={styles.answerText}
                    answer2={`There is nothing missing.`}
                    answer2Styles={styles.answerText}
                    answer3={`It is missing an = sign.`}
                    answer3Styles={styles.answerText}
                    answer4={`It contains a 5 and that is an int value.`}
                    answer4Styles={styles.answerText}
                    handleSelectProp={handleSelect}
                    correctAnswer={1}
                />
            }
            {questionNumber === 4 &&
                <InputAnswer
                    placeHolder={"17"}
                    answerProp={"17"}
                    handleSelect={handleSelect} 
                    acceptableAnswers={[
                        `“17”`,
                        `‘17’`,
                        `\`17\``,
                        `'17'`,
                        `"17"`
                    ]}                
                />
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

            <QuizModal
                text={modalText}
                modalVisible={modalVisible}
                setModalVisible={handleModalClose}
            />
        </>
    );
}

export default JavaDataTypesStringsQuiz;

const styles = StyleSheet.create({
    headerReplacement: {
        height: screenHeight * .10,
    },
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
    pressed: {
        opacity: 0.7,
    },
});

