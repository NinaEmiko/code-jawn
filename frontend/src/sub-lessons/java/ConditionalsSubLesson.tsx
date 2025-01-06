import { FC } from "react"
import LectureWidget from "../../components/LectureWidget"
import { SubLessonsProps } from "../../types/components"

const ConditionalsSubLesson: FC<SubLessonsProps> = ({lessonTracker}) => {

    const handleButtonClickNull = (lesson: string) => {
    }

    return (
        <div className="lesson-btn-container">
            <LectureWidget 
                path={""}
                lesson={"If"}
                isComplete={lessonTracker.ifLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"Else"}
                isComplete={lessonTracker.elseLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"Elseif"}
                isComplete={lessonTracker.elseifLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"Multiple Ifs"}
                isComplete={lessonTracker.multipleIfsLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"Multiple Elseifs"}
                isComplete={lessonTracker.multipleElseifsLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"If/Else Nesting"}
                isComplete={lessonTracker.ifElseNestingLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"Ternary"}
                isComplete={lessonTracker.ternaryLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"Switch Syntax"}
                isComplete={lessonTracker.switchSyntaxLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"Switch Expression"}
                isComplete={lessonTracker.switchExpressionsLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"Switch Cases"}
                isComplete={lessonTracker.switchCasesLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"Break Statement"}
                isComplete={lessonTracker.breakStatementLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"Continue Statement"}
                isComplete={lessonTracker.continueStatementLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
        </div>
    )
}
export default ConditionalsSubLesson