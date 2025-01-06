import { FC } from "react";
import { PostLessonProps } from "../App";

const PostLesson: FC<PostLessonProps> = ({handleCompleteLesson, restCallSuccessful}) => {

    const handleClickContinue = () => {
        handleCompleteLesson()
    }

    return (
        <>
            <div className="question-container">
                <div className="question-jawn">
                    <div className="lesson-congratulations">
                    Good job!!
                    </div>
                </div>
                <div className="answer-jawn-input">   

                </div>
            </div>
            {restCallSuccessful &&
            <div className="input-question-container">
                <button className="input-question-btn" onClick={() => handleClickContinue()}>Complete Lesson</button>
            </div>
            }
            </>         
    )
}
export default PostLesson;