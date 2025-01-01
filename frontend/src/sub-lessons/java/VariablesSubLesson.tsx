import { FC, useState } from "react"
import { SubLessonsProps } from "../../App"
import LectureWidget from "../../components/LectureWidget"

interface VariablesLT{
    initializingVariablesLessonIsComplete: boolean,
    namingVariablesLessonIsComplete: boolean,
    assigningValuesLessonIsComplete: boolean,
    updatingValuesLessonIsComplete: boolean,
    constantsLessonIsComplete: boolean,
}

const DefaultVariablesLT = {
    initializingVariablesLessonIsComplete: false,
    namingVariablesLessonIsComplete: false,
    assigningValuesLessonIsComplete: false,
    updatingValuesLessonIsComplete: false,
    constantsLessonIsComplete: false,
}

const VariablesSubLesson: FC<SubLessonsProps> = () => {
    const [lessonTracker, setLessonTracker] = useState<VariablesLT>(DefaultVariablesLT)

    const handleButtonClickNull = (lesson: string) => {
    }
    
    return (
        <div className="lesson-btn-container">
            <LectureWidget 
                path={""}
                lesson={"Initializing Arrays"}
                isComplete={lessonTracker.initializingVariablesLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"Assigning Values"}
                isComplete={lessonTracker.namingVariablesLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"Array Indexes"}
                isComplete={lessonTracker.assigningValuesLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={"Java Data Types Longs"}
                lesson={"Updating Values"}
                isComplete={lessonTracker.updatingValuesLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={"Java Data Types floats"}
                lesson={"Length Method"}
                isComplete={lessonTracker.constantsLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
        </div>
    )
}
export default VariablesSubLesson