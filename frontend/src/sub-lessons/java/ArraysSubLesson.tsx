import { FC, useState } from "react"
import { SubLessonsProps } from "../../App"
import LectureWidget from "../../components/LectureWidget"

interface ArraysLT{
    initializingArraysLessonIsComplete: boolean,
    assigningValuesLessonIsComplete: boolean,
    arrayIndexesLessonIsComplete: boolean,
    updatingValuesLessonIsComplete: boolean,
    lengthMethodLessonIsComplete: boolean,
    loopingThroughAnArrayLessonIsComplete: boolean,
}

const DefaultArraysLT = {
    initializingArraysLessonIsComplete: false,
    assigningValuesLessonIsComplete: false,
    arrayIndexesLessonIsComplete: false,
    updatingValuesLessonIsComplete: false,
    lengthMethodLessonIsComplete: false,
    loopingThroughAnArrayLessonIsComplete: false,
}

const ArraysSubLesson: FC<SubLessonsProps> = () => {
    const [lessonTracker, setLessonTracker] = useState<ArraysLT>(DefaultArraysLT)

    const handleButtonClickNull = (lesson: string) => {
    }

    return (
        <div className="lesson-btn-container">
        <LectureWidget 
            path={""}
            lesson={"Initializing Arrays"}
            isComplete={lessonTracker.initializingArraysLessonIsComplete}
            handleClickWidget={handleButtonClickNull}
        />
        <LectureWidget 
            path={""}
            lesson={"Assigning Values"}
            isComplete={lessonTracker.assigningValuesLessonIsComplete}
            handleClickWidget={handleButtonClickNull}
        />
        <LectureWidget 
            path={""}
            lesson={"Array Indexes"}
            isComplete={lessonTracker.arrayIndexesLessonIsComplete}
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
            isComplete={lessonTracker.lengthMethodLessonIsComplete}
            handleClickWidget={handleButtonClickNull}
        />
        <LectureWidget 
            path={"Java Data Types doubles"}
            lesson={"Looping Through Arrays"}
            isComplete={lessonTracker.loopingThroughAnArrayLessonIsComplete}
            handleClickWidget={handleButtonClickNull}
        />
    </div>
    )
}
export default ArraysSubLesson