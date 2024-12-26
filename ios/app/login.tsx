import { Image, StyleSheet, TextInput, Button, Pressable, Text } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView2';
import React, { useState } from 'react';
import GetStartedScreen from './getStarted';
import { STYLES } from '@/assets/styles';
import { loginApiCall, register } from '@/api/apiService';
import { useUser } from '@/context/UserContext';

export default function LoginScreen() {
    const [getStarted, setGetStarted] = useState<boolean>(true);
    const [tab, setTab] = useState<string>('Login')
    const [onLogin, setOnLogin] = useState<boolean>(true)
    const [focus, setFocus] = useState<string | null>(null);
    const [email, setEmail] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { login } = useUser();

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

    const handleLogin = async () => {
        const data = await loginApiCall(username, password);
        console.log('login data:' + data);
        try {
            const userData = {
                username: data.username,
                email: data.email,
                userId: data.userId
            }
            login(userData)
        } catch (error) {
            console.log('error while loggin in: ' + error);
        }
    }

    const handleRegister = async () => {
        const data = await register(username, email, password);

        try {
            login(data)
        } catch (error) {
            console.log('error while registering user: ' + error);
        }
    }

    const handleNavigation = async () => {
        if (tab === "Login" ){
            handleLogin();
        } else if (tab === "Register") {
            handleRegister();
        }
    }

    return (
        <>
            {getStarted ?
                <GetStartedScreen setGetStarted={setGetStarted} />
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
                        onPress={() => handleNavigation()}
                    >
                        <Text style={styles.buttonText}>Submit</Text>
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
