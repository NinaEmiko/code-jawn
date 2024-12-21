import { useFocusEffect } from 'expo-router';
import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext<any>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<any>(null);

  useFocusEffect(
    React.useCallback(() => {
      console.log('Screen is focused');
    }, [])
  );

  const updateJavaLessonTracker = (javaLessonTracker: any) => {
    console.log("Inside updateJavaLessonTracker")
    setCurrentUser((prevUser: any) => ({
      ...prevUser,
      lessonTracker: {
        ...prevUser.lessonTracker,
        javaLT: {
          ...prevUser.lessonTracker.javaLT,
          javaDataTypesLT: {
            ...prevUser.lessonTracker.javaLT.javaDataTypesLT,
            ...javaLessonTracker,
          },
        },
      },
    }));
  };

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, updateJavaLessonTracker }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};