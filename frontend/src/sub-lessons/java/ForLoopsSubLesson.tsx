import { FC, useState } from "react"
import { SubLessonsProps } from "../../App"
import LectureWidget from "../../components/LectureWidget"

interface ForLoopsLT{
    forLoopsSyntaxLessonIsComplete: boolean,
    forLoopsConditionLessonIsComplete: boolean,
    forLoopsIncrementDecrementLessonIsComplete: boolean,
    nestedForLoopsLessonIsComplete: boolean,
    whileLoopsSyntaxLessonIsComplete: boolean,
    whileLoopsConditionLessonIsComplete: boolean,
    doWhileLoopsSyntaxLessonIsComplete: boolean,
    forEachSyntaxLessonIsComplete: boolean,
}

const DefaultForLoopsLT = {
    forLoopsSyntaxLessonIsComplete: false,
    forLoopsConditionLessonIsComplete: false,
    forLoopsIncrementDecrementLessonIsComplete: false,
    nestedForLoopsLessonIsComplete: false,
    whileLoopsSyntaxLessonIsComplete: false,
    whileLoopsConditionLessonIsComplete: false,
    doWhileLoopsSyntaxLessonIsComplete: false,
    forEachSyntaxLessonIsComplete: false,
}

const ForLoopsSubLesson: FC<SubLessonsProps> = () => {
    const [lessonTracker, setLessonTracker] = useState<ForLoopsLT>(DefaultForLoopsLT)

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
                lesson={"For Loops Increment/Decrement"}
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