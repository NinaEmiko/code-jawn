import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
    <Stack.Screen 
      name="index" 
      options={{ headerShown: false }}
    />
    <Stack.Screen 
      name="javaLessonsNavigator" 
      options={{
        title: 'Java Lessons',
        headerBackTitle: 'Back',
      }}
    />
    <Stack.Screen 
      name="javaScriptLessons" 
      options={{
        title: 'JavaScript Lessons',
        headerBackTitle: 'Back',
      }}
    />
    <Stack.Screen 
      name="pythonLessons" 
      options={{
        title: 'Python Lessons',
        headerBackTitle: 'Back',
      }}
    />
    </Stack>
  );
}