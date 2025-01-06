import { FC } from "react";
import { LectureWidgetProps } from "../types/components";
import { FaLaptop } from 'react-icons/fa';

const LectureWidget: FC<LectureWidgetProps> = ({isComplete, handleClickWidget, lesson, path}) => {

    return (
        <div className="lesson-btn"
        onClick={() => handleClickWidget(path)}>
            <FaLaptop size={40} />
            <div className="lecture-widget-lesson">
                {lesson}
            </div>
            {isComplete ? (
                <div className="lesson-complete">Lesson complete!</div>
            ): (
                <div className="lesson-incomplete">Not started</div>
            )}
        </div>    
    )
}
export default LectureWidget;