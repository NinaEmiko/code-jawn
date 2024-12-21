import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
      name="javaLessons" 
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
    <Stack.Screen 
      name="lessons/java/dataTypes/strings" 
      options={{
        title: 'Strings',
        headerBackTitle: 'Exit',
      }}
      />
    <Stack.Screen 
      name="quizzes/java/dataTypes/strings" 
      options={{ headerShown: false }}
      />
    </Stack>
  );
}