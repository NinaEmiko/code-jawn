import { FC } from "react";
import AnswerExplanationHeader from "./AnswerExplanationHeader";
import Explanation from "./Explanation";

interface InputAnswerProps{
    endQuestion: ()=>void,
    correct: boolean,
    explanation: string,
    type: string,
    value: string
}

const InputAnswer: FC<InputAnswerProps> = ({endQuestion, correct, explanation, type, value}) => {

    const handleClickContinue = () => {
        endQuestion()
    }
    return (
        <div className="input-question-container">
            <AnswerExplanationHeader correct={correct} />
            {type === "template-literal" &&
                <div className="answer-text-template-literal">
                    {value}
                </div>
            }
            <Explanation explanation={explanation} />
            <button className="input-question-btn" onClick={() => handleClickContinue()}>Continue</button>
        </div>
        
    )
}
export default InputAnswer;