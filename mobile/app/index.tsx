import { Image, StyleSheet, TextInput, Button, Pressable, Text } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView2';
import React, { useState } from 'react';
import GetStartedScreen from './getStarted';
import { Link } from 'expo-router';
import { STYLES } from '@/assets/styles';

export default function LoginScreen() {
    const [getStarted, setGetStarted] = React.useState(true);
    const [tab, setTab] = React.useState('Login')
    const [onLogin, setOnLogin] = React.useState(true)
    const [focus, setFocus] = useState<string | null>(null);
    const [email, setEmail] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleTab = () => {
        setOnLogin(!onLogin)
        if (tab === 'Login') {
            setTab("Register")
        } else {
            setTab("Login")
        }
    }

    const handleFocus = (input: string) => {
        setFocus(input);
    };

    const handleBlur = () => {
        setFocus(null);
    };

    return (
        <>
            {getStarted ?
                <GetStartedScreen props={{setGetStarted:setGetStarted}} />
            :
                <ParallaxScrollView
                    headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
                    headerImage={
                    <Image
                        source={require('@/assets/images/HomeScreen2.png')}
                        style={styles.pageImage}
                    />
                }>
                    <Text style={styles.titleText}>{tab}</Text>

                    {tab === 'Register' &&
                        <>
                            <TextInput
                                style={[styles.textInput, focus === 'Email' ? styles.inputFocused : styles.inputUnfocused]}
                                onFocus={() => handleFocus('Email')}
                                onBlur={handleBlur}
                                value={email}
                                onChangeText={setEmail} 
                                placeholder='Email'
                            />
                        </>
                    }

                    <TextInput
                        style={[styles.textInput, focus === 'Username' ? styles.inputFocused : styles.inputUnfocused]}
                        onFocus={() => handleFocus('Username')}
                        onBlur={handleBlur}
                        value={username}
                        onChangeText={setUsername}
                        placeholder='Username'
                    />

                    <TextInput
                        style={[styles.textInput, focus === 'Password' ? styles.inputFocused : styles.inputUnfocused]}
                        onFocus={() => handleFocus('Password')}
                        onBlur={handleBlur}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                        placeholder='Password'
                    />

                    <Pressable
                        style={({ pressed }) => [
                        styles.button,
                        pressed && styles.pressed,
                        ]}
                        onPress={null}
                    >
                        {/* <Text style={styles.buttonText}>Submit</Text> */}
                        <Link style={styles.buttonText} href="/(tabs)/(home)">Submit</Link>
                    </Pressable>

                    {onLogin ?
                        <Button
                            title="New here? Create an account." 
                            onPress={() => handleTab()}
                        />
                        :
                        <Button
                            title="Already have an account? Log in here." 
                            onPress={() => handleTab()}
                        />
                    }

                </ParallaxScrollView>
            }
        </>
    );
}

const styles = StyleSheet.create({
    pageImage: {
        height: 250,
        width: 430,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
    textInput: {
        height: 40,
        borderBottomWidth: 1,
        fontSize: STYLES.TEXT_INPUT_FONT_SIZE,
        color: STYLES.ORANGE,
        borderColor: "grey",
        fontFamily: STYLES.FONT,
        marginBottom: 15,
    },
    text: {
        color: "white",
        fontSize: STYLES.FONT_SIZE_TEXT,
        fontFamily: STYLES.FONT,
    },
    button: {
        backgroundColor: STYLES.BLUE,
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressed: {
        opacity: 0.7,
    },
    buttonText: {
        fontSize: STYLES.FONT_SIZE_BUTTON,
        fontFamily: STYLES.FONT,
    },
    inputFocused: {
        borderColor: STYLES.ORANGE,
    },
    inputUnfocused: {
        borderColor: 'gray',
    },
    titleText: {
        color: STYLES.ORANGE,
        fontSize: STYLES.FONT_SIZE_TITLE,
        fontWeight: "bold",
        marginBottom: 25,
        fontFamily: STYLES.FONT,
    },
});
