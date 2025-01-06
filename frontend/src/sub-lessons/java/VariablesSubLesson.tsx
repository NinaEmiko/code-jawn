import { FC } from "react"
import { SubLessonsProps } from "../../types/components"
import LectureWidget from "../../components/LectureWidget"

const VariablesSubLesson: FC<SubLessonsProps> = ({lessonTracker}) => {

    const handleButtonClickNull = (lesson: string) => {
    }

    return (
        
        <div className="lesson-btn-container">
            <LectureWidget 
                path={""}
                lesson={"Initializing Variables"}
                isComplete={lessonTracker.initializingVariablesLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"Naming Variables"}
                isComplete={lessonTracker.namingVariablesLessonIsComplete}
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
                lesson={"Updating Values"}
                isComplete={lessonTracker.updatingValuesLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
            <LectureWidget 
                path={""}
                lesson={"Constants"}
                isComplete={lessonTracker.constantsLessonIsComplete}
                handleClickWidget={handleButtonClickNull}
            />
        </div>
    )
}
export default VariablesSubLesson