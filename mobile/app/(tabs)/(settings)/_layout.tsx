import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      
      <Stack.Screen 
      name="index" 
      options={{ headerShown: false }}
      />
      <Stack.Screen 
      name="termsAndConditions" 
      options={{
        title: 'Terms and Conditions',
        headerBackTitle: 'Back',
      }}
      />
      <Stack.Screen 
      name="acknowledgments" 
      options={{
        title: 'Acknowledgments',
        headerBackTitle: 'Back',
      }}
      />
            <Stack.Screen 
      name="support" 
      options={{
        title: 'Support',
        headerBackTitle: 'Back',
      }}
      />
                  <Stack.Screen 
      name="deleteAccount" 
      options={{
        title: 'Delete Account',
        headerBackTitle: 'Back',
      }}
      />
                  <Stack.Screen 
      name="updatePassword" 
      options={{
        title: 'Update Password',
        headerBackTitle: 'Back',
      }}
      />
                  <Stack.Screen 
      name="updateEmail" 
      options={{
        title: 'Update Email',
        headerBackTitle: 'Back',
      }}
      />
    </Stack>
  );
}