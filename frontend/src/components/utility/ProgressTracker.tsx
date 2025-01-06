import { FC } from "react";

interface ProgressTrackerProps{
    questionsAnswered: number,
    totalQuestions: number
}

const ProgressTracker: FC<ProgressTrackerProps> = ({questionsAnswered, totalQuestions}) => {
const progress = (questionsAnswered/totalQuestions) * 100;
    return (
        <>
            <div className="progress-container">
                <div className="progress-tracker" style={{ width: `${progress}%` }}></div>
            </div>
        </>
    )
}
export default ProgressTracker ;