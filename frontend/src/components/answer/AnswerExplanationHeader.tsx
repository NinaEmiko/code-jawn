import { FC } from "react";

interface AnswerExplanationHeaderProps{
    correct: boolean
}

const AnswerExplanationHeader: FC<AnswerExplanationHeaderProps> = (correct) => {

    return (
        <div>
            {correct ?
            <div className="question-explanation-correct">Correct!</div>
            :
            <div className="question-explanation-incorrect">Incorrect.</div>
            }
        </div>
    )
}
export default AnswerExplanationHeader;