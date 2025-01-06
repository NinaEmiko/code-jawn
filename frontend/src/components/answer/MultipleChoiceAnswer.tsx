import { FC } from "react";
import AnswerCodeBlock from "./AnswerCodeBlock";
import AnswerExplanationHeader from "./AnswerExplanationHeader";
import Explanation from "./Explanation";

interface MultipleChoiceAnswerProps{
    answer: string,
    answerClicked: ()=>void,
    endQuestion: ()=>void
    correct: boolean,
    type: string,
    explanation: string,
}

const MultipleChoiceAnswer: FC<MultipleChoiceAnswerProps> = ({answer, answerClicked, endQuestion, correct, type, explanation}) => {

    const handleNull = () => {

    }

    const handleAnswerClick = () => {
        answerClicked();
    }

    const handleClickContinue = () => {
        endQuestion()
    }
    return (
        <div className="question-explanation-container">
        <AnswerExplanationHeader correct={correct} />
        <div className="answer-jawn">
            {type === "text" &&
                <div onClick={() => handleAnswerClick()} className="answer-text">
                    {answer}
                </div>
            }
            {type === "template-literal" &&
                <div onClick={() => handleAnswerClick()} className="answer-text-template-literal">
                    {answer}
                </div>
            }
            {type === "boolean" &&
                <div onClick={() => handleAnswerClick()} className="answer-text-boolean">
                    {answer}
                </div>
            }
            {type === "int" &&
                <div onClick={() => handleAnswerClick()} className="answer-text-int">
                    {answer}
                </div>
            }
            {type === "code" &&
                <AnswerCodeBlock 
                    answerClicked={handleNull}
                    code={answer}
                    />
            }
        </div>
        <Explanation explanation={explanation} />
        <button className="input-btn" onClick={() => handleClickContinue()} >
            Continue
        </button>
    </div>
        
    )
}
export default MultipleChoiceAnswer;