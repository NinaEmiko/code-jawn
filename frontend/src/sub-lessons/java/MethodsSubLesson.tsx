import { FC } from "react"
import { SubLessonsProps } from "../../types/components"
import LectureWidget from "../../components/LectureWidget"

const MethodsSubLesson: FC<SubLessonsProps> = ({lessonTracker}) => {

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