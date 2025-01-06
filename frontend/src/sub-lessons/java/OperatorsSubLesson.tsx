import { FC } from "react"
import { SubLessonsProps } from "../../types/components"
import LectureWidget from "../../components/LectureWidget"

const OperatorsSubLesson: FC<SubLessonsProps> = ({lessonTracker}) => {

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