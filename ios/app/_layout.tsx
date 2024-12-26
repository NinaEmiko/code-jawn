import { UserProvider } from '@/context/UserContext';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { Stack } from 'expo-router';

export default function RootLayout() {

    const colorScheme = useColorScheme();
        const [loaded] = useFonts({
            SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        });
    
    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);
  
    if (!loaded) {
        return null;
    }
    
    return (
        <UserProvider>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <Stack>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen name="+not-found" />
                </Stack>
                <StatusBar style="auto" />
            </ThemeProvider>
        </UserProvider>
    );
}
