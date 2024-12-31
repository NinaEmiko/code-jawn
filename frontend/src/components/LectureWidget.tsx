import { FC } from "react";
import { LectureWidgetProps } from "../App";



const LectureWidget: FC<LectureWidgetProps> = ({isComplete, handleClickWidget, lesson, path}) => {

    return (
        <div className="lesson-btn"
        onClick={() => handleClickWidget(path)}>
            {lesson}
            {isComplete ? (
                <div className="lesson-complete">Lesson complete!</div>
            ): (
                <div className="lesson-incomplete">Not started</div>
            )}
        </div>    
    )
}
export default LectureWidget;