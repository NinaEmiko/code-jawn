import { STYLES } from '@/assets/styles';
import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface TypingDisplayTextProps {
    text: string;
    delay?: number;
    textColor: string;
}

const TypingDisplayText: React.FC<TypingDisplayTextProps> = ({ text, delay = 100, textColor }) => {
    const [displayedText, setDisplayedText] = useState<string>('');
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const speed = 30;
        if (!text) return;

        const intervalId = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayedText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            } else {
                clearInterval(intervalId)
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, currentIndex, delay]);

    return (
        <View style={styles.container}>
            <Text style={[styles.text, {color: textColor}]}>{displayedText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: STYLES.FONT,
        fontSize: STYLES.FONT_SIZE_SUB_TEXT,
        paddingTop: 20,
        paddingLeft: 60,
        paddingRight: 40,
        textAlign: 'center',
    },
});

export default TypingDisplayText;
