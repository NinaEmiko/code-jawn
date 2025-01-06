import { StyleSheet, Text, View, Dimensions, ImageBackground, Pressable } from 'react-native';
import React, { FC, useState } from 'react';
import ProgressCircle from '@/components/ProgressCircle';
import TypingDisplayText from '@/components/TypingDisplayText';
import { STYLES } from '@/assets/styles';
import MultipleChoice from '@/components/MultipleChoice';
import InputAnswer from '@/components/InputAnswer';
import QuizModal from '@/components/modals/QuizModal';
import { updateJavaDataTypesLT } from '@/api/apiService';
import { useUser } from '@/context/UserContext';
import { INTS_EXPLANATIONS, INTS_QUIZ } from '@/constants/Java/DataTypes/IntsConstants';

const screenHeight = Dimensions.get('window').height;

interface JavaDataTypesIntsQuizProps {
    handleUpdateComponentProp: (component: string, openComponent: string) => void,
}

const JavaDataTypesIntsQuiz: FC<JavaDataTypesIntsQuizProps> = ({ handleUpdateComponentProp }) => {
    const { currentUser } = useUser();
    const [questionNumber, setQuestionNumber] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [modalText, setModalText] = useState<string>("");
    const [answerIsCorrect, setAnswerIsCorrect] = useState<boolean>(false);

    const handleSelect = (correct: boolean, answer: number) => {
        setModalText(INTS_EXPLANATIONS[questionNumber + 1 as keyof typeof INTS_EXPLANATIONS]?.[answer - 1])
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
        if (currentUser){
            const data = await updateJavaDataTypesLT(currentUser.userId, "ints");
            handleUpdateComponentProp("Java Lessons", "Data Types")
        }
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
                            <TypingDisplayText text={INTS_QUIZ.INT_QUESTION_1} textColor="white" />
                        }
                        {questionNumber === 1 &&
                            <TypingDisplayText text={INTS_QUIZ.INT_QUESTION_2} textColor="white" />
                        }
                        {questionNumber === 2 &&
                            <TypingDisplayText text={INTS_QUIZ.INT_QUESTION_3} textColor="white" />
                        }
                        {questionNumber === 3 &&
                            <TypingDisplayText text={INTS_QUIZ.INT_QUESTION_4} textColor="white" />
                        }
                        {questionNumber === 4 &&
                            <TypingDisplayText text={INTS_QUIZ.INT_QUESTION_5} textColor="white" />
                        }
                        {questionNumber === 5 &&
                            <TypingDisplayText text={INTS_QUIZ.GOOD_JOB} textColor="white" />
                        }
                    </ImageBackground>
                </View>
            </View>

            {questionNumber === 0 &&
                <MultipleChoice
                    choices={4}
                    answer1={"\"57\""}
                    answer1Styles={styles.answerString}
                    answer2={"true"}
                    answer2Styles={styles.answerInt}
                    answer3={"-17"}
                    answer3Styles={styles.answerString}
                    answer4={"None of the above."}
                    answer4Styles={styles.answerText}
                    handleSelectProp={handleSelect}
                    correctAnswer={3}
                />
            }
            {questionNumber === 1 &&
                <MultipleChoice
                    choices={4}
                    answer1={`-5`}
                    answer1Styles={styles.answerInt}
                    answer2={`0`}
                    answer2Styles={styles.answerInt}
                    answer3={`5.5`}
                    answer3Styles={styles.answerInt}
                    answer4={`1000000`}
                    answer4Styles={styles.answerInt}
                    handleSelectProp={handleSelect}
                    correctAnswer={3}
                />
            }
            {questionNumber === 2 &&
                <MultipleChoice
                    choices={2}
                    answer1={`True`}
                    answer1Styles={styles.answerText}
                    answer2={`False`}
                    answer2Styles={styles.answerText}
                    handleSelectProp={handleSelect}
                    correctAnswer={1}
                />
            }
            {questionNumber === 3 &&
                <MultipleChoice
                    choices={4}
                    answer1={`A users email address.`}
                    answer1Styles={styles.answerText}
                    answer2={`Whether or not a user is 30 years old.`}
                    answer2Styles={styles.answerText}
                    answer3={`The value of PI.`}
                    answer3Styles={styles.answerText}
                    answer4={`The amount of wins a user has in a game.`}
                    answer4Styles={styles.answerText}
                    handleSelectProp={handleSelect}
                    correctAnswer={4}
                />
            }
            {questionNumber === 4 &&
                <InputAnswer
                    placeHolder={`\"17\"`}
                    answerProp={"17"}
                    handleSelect={handleSelect} 
                    acceptableAnswers={[
                        `17`,
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

export default JavaDataTypesIntsQuiz;

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

