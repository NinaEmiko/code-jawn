import React, { useEffect } from 'react';
import JavaLessonsScreen from './javaLessons';
import JavaDataTypesStrings from './lessons/java/dataTypes/strings';
import JavaDataTypesStringsQuiz from './quizzes/java/dataTypes/strings';
import { useNavigation } from '@react-navigation/native';

export default function JavaLessonsNavigator() {
    const [componentToShow, setComponentToShow] = React.useState("Java Lessons");
    const navigation = useNavigation();

    const handleUpdateComponent = (component: string) => {
        setComponentToShow(component);
    }

    useEffect(() => {
        if (componentToShow === "Java Lessons") {
            navigation.setOptions({
                title: 'Java Lessons',
                headerBackTitle: 'Back',
                headerShown: true,
              });
        } else {
            navigation.setOptions({
                title: '',
                headerBackTitle: '',
                headerShown: false,
              });
        }
    },[componentToShow, navigation])
  
    return (
        <>
            {componentToShow === "Java Lessons" &&
                <JavaLessonsScreen props={{handleUpdateComponent:handleUpdateComponent}} />
            }
            {componentToShow === "Strings Lesson" &&
                <JavaDataTypesStrings props={{handleUpdateComponent:handleUpdateComponent}} />
            }
            {componentToShow === "Strings Quiz" &&
                <JavaDataTypesStringsQuiz props={{handleUpdateComponent:handleUpdateComponent}} />
            }
        </>
    );
}