import { FC, useState } from "react"
import { SubLessonsProps } from "../../App"
import LectureWidget from "../../components/LectureWidget"

interface MethodsLT{
    methodSignaturesLessonIsComplete: boolean,
    returnTypesLessonIsComplete: boolean,
    parametersLessonIsComplete: boolean,
    returnStatementIsComplete: boolean,
    scopeLessonIsComplete: boolean,
    namingMethodsLessonIsComplete: boolean,
    overLoadingLessonIsComplete: boolean,
}

const DefaultMethodsLT = {
    methodSignaturesLessonIsComplete: false,
    returnTypesLessonIsComplete: false,
    parametersLessonIsComplete: false,
    returnStatementIsComplete: false,
    scopeLessonIsComplete: false,
    namingMethodsLessonIsComplete: false,
    overLoadingLessonIsComplete: false,
}

const MethodsSubLesson: FC<SubLessonsProps> = () => {
    const [lessonTracker, setLessonTracker] = useState<MethodsLT>(DefaultMethodsLT)

    const handleButtonClickNull = (lesson: string) => {
    }

    return (
        <div className="lesson-btn-container">
            <LectureWidget 
                path={""}
                lesson={"Method Signatures"}
                isComplete={lessonTracker.methodSignaturesLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"Return Types"}
                isComplete={lessonTracker.returnTypesLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"Parameters"}
                isComplete={lessonTracker.parametersLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={"Java Data Types Longs"}
                lesson={"Return Statement"}
                isComplete={lessonTracker.returnStatementIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={"Java Data Types floats"}
                lesson={"Scope"}
                isComplete={lessonTracker.scopeLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={"Java Data Types floats"}
                lesson={"Naming Methods"}
                isComplete={lessonTracker.namingMethodsLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={"Java Data Types floats"}
                lesson={"Overloading"}
                isComplete={lessonTracker.overLoadingLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
        </div>
    )
}
export default MethodsSubLesson