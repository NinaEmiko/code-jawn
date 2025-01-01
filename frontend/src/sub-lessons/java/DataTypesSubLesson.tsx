import { FC, useEffect, useState } from "react";
import { getJavaDataTypesLT } from "../../api/api";
import { SubLessonsProps } from "../../types/components";
import LectureWidget from "../../components/LectureWidget";
import { JAVA_NAVIGATION_PATHS } from "../../helpers/NavigationConstants";

interface DataTypesLT{
    stringsLessonIsComplete: boolean,
    intsLessonIsComplete: boolean,
    booleansLessonIsComplete: boolean,
    longsLessonIsComplete: boolean,
    floatsLessonIsComplete: boolean,
    doublesLessonIsComplete: boolean,
    shortsLessonIsComplete: boolean,
    bytesLessonIsComplete: boolean,
    charsLessonIsComplete: boolean,
    commentsLessonIsComplete: boolean,
}

const DefaultDataTypesLT = {
    stringsLessonIsComplete: false,
    intsLessonIsComplete: false,
    booleansLessonIsComplete: false,
    longsLessonIsComplete: false,
    floatsLessonIsComplete: false,
    doublesLessonIsComplete: false,
    shortsLessonIsComplete: false,
    bytesLessonIsComplete: false,
    charsLessonIsComplete: false,
    commentsLessonIsComplete: false,
}

const DataTypesSubLesson: FC<SubLessonsProps> = ({currentUser, handleRedirectLesson}) => {
    const [lessonTracker, setLessonTracker] = useState<DataTypesLT>(DefaultDataTypesLT)

    const getJavaDataTypesLTCall = async () => {
        const data = await getJavaDataTypesLT(currentUser.id);
            setLessonTracker(data);
    }

    const handleButtonClick = (lesson: string) => {
        handleRedirectLesson(lesson);
    }

    const handleButtonClickNull = (lesson: string) => {
    }

    useEffect(() => {
        getJavaDataTypesLTCall();
    })

    return (
        <div className="lesson-btn-container">
            <LectureWidget 
                path={JAVA_NAVIGATION_PATHS.STRINGS}
                lesson={"Strings"}
                isComplete={lessonTracker.stringsLessonIsComplete}
                handleClickWidget={handleButtonClick}
            />
            <LectureWidget 
                path={JAVA_NAVIGATION_PATHS.INTS}
                lesson={"ints"}
                isComplete={lessonTracker.intsLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={JAVA_NAVIGATION_PATHS.BOOLEANS}
                lesson={"booleans"}
                isComplete={lessonTracker.booleansLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={"Java Data Types Longs"}
                lesson={"Longs"}
                isComplete={lessonTracker.booleansLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={"Java Data Types floats"}
                lesson={"floats"}
                isComplete={lessonTracker.booleansLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={"Java Data Types doubles"}
                lesson={"doubles"}
                isComplete={lessonTracker.booleansLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={"Java Data Types shorts"}
                lesson={"shorts"}
                isComplete={lessonTracker.booleansLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={"Java Data Types bytes"}
                lesson={"bytes"}
                isComplete={lessonTracker.booleansLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={"Java Data Types chars"}
                lesson={"chars"}
                isComplete={lessonTracker.booleansLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={"Java Data Types Comments"}
                lesson={"Comments"}
                isComplete={lessonTracker.booleansLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
        </div>
    )
}
export default DataTypesSubLesson