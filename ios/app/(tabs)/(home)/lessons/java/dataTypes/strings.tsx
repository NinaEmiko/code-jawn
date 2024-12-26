import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { STRINGS_EXAMPLES, STRINGS_LESSONS } from '@/constants/Java/DataTypes/StringsConstants';
import GlowingButton from '@/components/GlowingButton';
import ProgressCircle from '@/components/ProgressCircle';
import TypingDisplayText from '@/components/TypingDisplayText';
import { STYLES } from '@/assets/styles';

const screenHeight = Dimensions.get('window').height;

interface JavaDataTypesStringsLessonProps {
    handleUpdateComponentProp: (component: string, openComponent: string) => void,
}

const JavaDataTypesStringsLesson: React.FC<JavaDataTypesStringsLessonProps> = ({ handleUpdateComponentProp }) => {
    const [buttonText, setButtonText] = useState<string>('Next');
    const [tab, setTab] = useState<number>(0);

    const handlePress = () => {
        if (tab <= 2) {
            setTab(tab + 1)
        } else if (tab == 3) {
            setTab(tab + 1)
            setButtonText('Begin')
        } else {
            handleUpdateComponentProp("Strings Quiz", "")
        }
    }

    return (
        <>
            <View style={styles.headerReplacement} />
            <View style={styles.lessonContainer}>
                <View style={styles.banner}>
                    <ProgressCircle props={{percentage:0, style: {width: 80, height: 80} }} />
                </View>
                <View style={styles.lessonCard}>
                    <ImageBackground 
                      source={require('@/assets/images/ComputerScreenOrange.png')}
                      style={styles.image}
                    >

                        {tab === 0 &&
                            <TypingDisplayText text={STRINGS_LESSONS.EXPLANATION_1} textColor="white" />
                        }

                        {tab === 1 &&
                            <>
                                <Text style={styles.stringTitle}>
                                    Strings
                                </Text>
                                <TypingDisplayText text={STRINGS_EXAMPLES.STRING_EXAMPLE_1} textColor={STYLES.STRINGS}/>
                                <TypingDisplayText text={STRINGS_EXAMPLES.STRING_EXAMPLE_2} textColor={STYLES.STRINGS} />
                                <TypingDisplayText text={STRINGS_EXAMPLES.STRING_EXAMPLE_3} textColor={STYLES.STRINGS} />
                            </>
                        }

                        {tab === 2 &&
                            <>
                                <Text style={styles.stringTitle}>
                                    Not Strings
                                </Text>
                                <TypingDisplayText text={STRINGS_EXAMPLES.NOT_STRING_EXAMPLE_1} textColor={STYLES.STRINGS} />
                                <TypingDisplayText text={STRINGS_EXAMPLES.NOT_STRING_EXAMPLE_2} textColor={STYLES.STRINGS} />
                            </>
                        }
                        {tab === 3 &&
                            <TypingDisplayText text={STRINGS_LESSONS.EXPLANATION_2} textColor="white" />
                        }
                        {tab === 4 &&
                            <>
                                <Text style={styles.stringTitle}>
                                    String
                                </Text>
                                <TypingDisplayText text={STRINGS_EXAMPLES.STRING_EXAMPLE_4} textColor={STYLES.STRINGS} />
                                <TypingDisplayText text={STRINGS_EXAMPLES.STRING_EXAMPLE_5} textColor={STYLES.STRINGS} />
                                <TypingDisplayText text={STRINGS_EXAMPLES.STRING_EXAMPLE_6} textColor={STYLES.STRINGS} />
                            </>
                        }

                    </ImageBackground>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <GlowingButton
                    buttonColor={STYLES.BLUE}
                    buttonPress={handlePress}
                    buttonText={buttonText} 
                />
            </View>
        </>
    );
}

export default JavaDataTypesStringsLesson;

const styles = StyleSheet.create({
    stringTitle: {
        color: STYLES.ORANGE,
        fontFamily: STYLES.FONT,
        fontSize: STYLES.FONT_SIZE_TITLE,
        paddingTop: 20,
        paddingLeft: 60,
        paddingRight: 40,
        textAlign: 'center',
        fontWeight: "bold",
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
    },
    buttonText: {
        fontSize: STYLES.FONT_SIZE_BUTTON,
        fontFamily: STYLES.FONT,
    },
    headerReplacement: {
        height: screenHeight * .10,
    },
});
