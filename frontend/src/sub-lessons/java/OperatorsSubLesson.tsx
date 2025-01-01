import { FC, useState } from "react"
import { SubLessonsProps } from "../../App"
import LectureWidget from "../../components/LectureWidget"

interface OperatorsLT{
    andLessonIsComplete: boolean,
    orLessonIsComplete: boolean,
    notLessonIsComplete: boolean,
    plusLessonIsComplete: boolean,
    minusLessonIsComplete: boolean,
    divideLessonIsComplete: boolean,
    multiplyLessonIsComplete: boolean,
    modulusLessonIsComplete: boolean,
    incrementLessonIsComplete: boolean,
    decrementessonIsComplete: boolean,
    lessThanLessonIsComplete: boolean,
    greaterThanLessonIsComplete: boolean,
    doubleEqualsLessonIsComplete: boolean,
    lessThanEqualToLessonIsComplete: boolean,
    greaterThanEqualToLessonIsComplete: boolean,
    notEqualLessonIsComplete: boolean,
    equalsLessonIsComplete: boolean,
}

const DefaultOperatorsLT = {
    andLessonIsComplete: false,
    orLessonIsComplete: false,
    notLessonIsComplete: false,
    plusLessonIsComplete: false,
    minusLessonIsComplete: false,
    divideLessonIsComplete: false,
    multiplyLessonIsComplete: false,
    modulusLessonIsComplete: false,
    incrementLessonIsComplete: false,
    decrementessonIsComplete: false,
    lessThanLessonIsComplete: false,
    greaterThanLessonIsComplete: false,
    doubleEqualsLessonIsComplete: false,
    lessThanEqualToLessonIsComplete: false,
    greaterThanEqualToLessonIsComplete: false,
    notEqualLessonIsComplete: false,
    equalsLessonIsComplete: false,
}

const OperatorsSubLesson: FC<SubLessonsProps> = () => {
    const [lessonTracker, setLessonTracker] = useState<OperatorsLT>(DefaultOperatorsLT)

    const handleButtonClickNull = (lesson: string) => {
    }

    return (
        <div className="lesson-btn-container">
            <LectureWidget 
                path={""}
                lesson={"&&"}
                isComplete={lessonTracker.andLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"||"}
                isComplete={lessonTracker.orLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"!"}
                isComplete={lessonTracker.notLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={"Java Data Types Longs"}
                lesson={"+"}
                isComplete={lessonTracker.plusLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"-"}
                isComplete={lessonTracker.minusLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"/"}
                isComplete={lessonTracker.divideLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"*"}
                isComplete={lessonTracker.multiplyLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={"Java Data Types Longs"}
                lesson={"%"}
                isComplete={lessonTracker.modulusLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"++"}
                isComplete={lessonTracker.incrementLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"--"}
                isComplete={lessonTracker.decrementessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"<"}
                isComplete={lessonTracker.lessThanLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={"Java Data Types Longs"}
                lesson={">"}
                isComplete={lessonTracker.greaterThanLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"=="}
                isComplete={lessonTracker.doubleEqualsLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"<="}
                isComplete={lessonTracker.lessThanEqualToLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={">="}
                isComplete={lessonTracker.greaterThanEqualToLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={"Java Data Types Longs"}
                lesson={"!="}
                isComplete={lessonTracker.notEqualLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={"Java Data Types Longs"}
                lesson={"="}
                isComplete={lessonTracker.equalsLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
        </div>
    )
}
export default OperatorsSubLesson