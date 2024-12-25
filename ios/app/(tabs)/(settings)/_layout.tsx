import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
            <Stack.Screen 
      name="index" 
      options={{
        title: 'Settings',
        headerBackTitle: 'Back',
      }}
      />
            <Stack.Screen 
      name="pages/acknowledgments" 
      options={{
        title: 'Acknowledgments',
        headerBackTitle: 'Back',
      }}
      />
            <Stack.Screen 
      name="pages/deleteAccount" 
      options={{
        title: 'Delete Account',
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
                  <Stack.Screen 
      name="pages/updateEmail" 
      options={{
        title: 'Update Email',
        headerBackTitle: 'Back',
      }}
      />
                  <Stack.Screen 
      name="pages/updatePassword" 
      options={{
        title: 'Update Password',
        headerBackTitle: 'Back',
      }}
      />
    </Stack>
  );
}