import { StyleSheet, Image, Text } from 'react-native';
import React from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useUser } from '@/context/UserContext';
import { STYLES } from '@/assets/styles';

export default function PythonLessonsScreen() {
    const { currentUser } = useUser();

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Image
                    source={require('@/assets/images/WP1.jpeg')}
                    style={styles.pageImage}
                />
        }>
            <Text style={styles.languageButtonText}>
                Coming Soon
            </Text>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    pageImage: {
        height: 250,
        width: 430,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    languageButtonText: {
        fontSize: STYLES.FONT_SIZE_BUTTON,
        fontFamily: STYLES.FONT,
        color: STYLES.ORANGE
    },
});