import { FC } from "react"
import { SubLessonsProps } from "../../types/components"
import LectureWidget from "../../components/LectureWidget"

const ForLoopsSubLesson: FC<SubLessonsProps> = ({lessonTracker}) => {

    const handleButtonClickNull = (lesson: string) => {
    }
        
    return (
        <div className="lesson-btn-container">

            <LectureWidget 
                path={""}
                lesson={"For Loops Syntax"}
                isComplete={lessonTracker.forLoopsSyntaxLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"For Loops Condition"}
                isComplete={lessonTracker.forLoopsConditionLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"For Loops Increment Decrement"}
                isComplete={lessonTracker.forLoopsIncrementDecrementLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={"Nested For Loops"}
                lesson={"Nested For Loops"}
                isComplete={lessonTracker.nestedForLoopsLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={"Java Data Types floats"}
                lesson={"While Loops Syntax"}
                isComplete={lessonTracker.whileLoopsSyntaxLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"While Loops Condition"}
                isComplete={lessonTracker.whileLoopsConditionLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={"Java Data Types Longs"}
                lesson={"Do While Loops Syntax"}
                isComplete={lessonTracker.doWhileLoopsSyntaxLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={"Java Data Types floats"}
                lesson={"For Each Syntax"}
                isComplete={lessonTracker.forEachSyntaxLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
        </div>
    )
}
export default ForLoopsSubLesson