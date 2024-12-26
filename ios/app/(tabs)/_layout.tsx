import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useUser } from '@/context/UserContext';
import LoginScreen from '../login';

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const { isAuthenticated } = useUser();

    return (
        <>
            {isAuthenticated === false &&
                <LoginScreen />
            }
            {isAuthenticated === true &&
                <Tabs
                    screenOptions={{
                        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                        headerShown: false,
                        tabBarButton: HapticTab,
                        tabBarBackground: TabBarBackground,
                        tabBarStyle: Platform.select({
                            ios: {
                                // Use a transparent background on iOS to show the blur effect
                                position: 'absolute',
                            },
                            default: {},
                      }),
                  }}>
                      <Tabs.Screen
                          name="(home)"
                          options={{
                              // href: null, //Removes the tab on the tab bar, can tweak to hide bar on ccertain screens when not tired.
                              title: 'Home',
                              tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
                          }}
                      />
                      <Tabs.Screen
                          name="(settings)"
                          options={{
                              title: 'Settings',
                              tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
                          }}
                      />
                </Tabs>
            }
        </>
    );
}
