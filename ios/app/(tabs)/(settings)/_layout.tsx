import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
            <Stack.Screen 
      name="index" 
      options={{ headerShown: false }}
      />
            <Stack.Screen 
      name="pages/acknowledgments" 
      options={{
        title: 'Acknowledgments',
        headerBackTitle: 'Back',
      }}
      />
                  <Stack.Screen 
      name="pages/support" 
      options={{
        title: 'Support',
        headerBackTitle: 'Back',
      }}
      />
                  <Stack.Screen 
      name="pages/termsAndConditions" 
      options={{
        title: 'Terms and Conditions',
        headerBackTitle: 'Back',
      }}
      />
    </Stack>
  );
}