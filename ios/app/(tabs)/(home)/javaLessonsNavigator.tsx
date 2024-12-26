import React, { useEffect, useState } from 'react';
import JavaLessonsScreen from './javaLessons';
import JavaDataTypesStrings from './lessons/java/dataTypes/strings';
import JavaDataTypesStringsQuiz from './quizzes/java/dataTypes/strings';
import { useNavigation } from '@react-navigation/native';

export default function JavaLessonsNavigator() {
    const [componentToShow, setComponentToShow] = useState<string>("Java Lessons");
    const [openComponent, setOpenComponent] = useState<string>("");
    const navigation = useNavigation();

    const handleUpdateComponent = (componentToShowParam: string, openComponentParam: string) => {
        setOpenComponent(openComponentParam)
        setComponentToShow(componentToShowParam);
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
                <JavaLessonsScreen
                    handleUpdateComponentProp={handleUpdateComponent}
                    openComponent={openComponent}
                />
            }
            {componentToShow === "Strings Lesson" &&
                <JavaDataTypesStrings
                    handleUpdateComponentProp={handleUpdateComponent}
                />
            }
            {componentToShow === "Strings Quiz" &&
                <JavaDataTypesStringsQuiz
                    handleUpdateComponentProp={handleUpdateComponent}
                />
            }
        </>
    );
}