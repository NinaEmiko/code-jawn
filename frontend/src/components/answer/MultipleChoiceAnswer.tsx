import AnswerExplanationHeader from "./AnswerExplanationHeader";
import AnswerText from "./AnswerTemplateLiteral";
import Explanation from "./Explanation";

const MultipleChoiceAnswer = ({props}:{props:any}) => {

    const handleAnswerClick = () => {
        props.answerClicked();
    }

    const handleClickContinue = () => {
        props.endQuestion()
    }
    return (
        <div className="question-explanation-container">
        <AnswerExplanationHeader props={{correct: props.correct}} />
        <div className="answer-jawn">
            {props.type === "text" &&
                <div onClick={() => handleAnswerClick()} className="answer-text">
                    {props.answer}
                </div>
            }
            {props.type === "template-literal" &&
                <div onClick={() => handleAnswerClick()} className="answer-text-template-literal">
                    {props.answer}
                </div>
            }
            {props.type === "boolean" &&
                <div onClick={() => handleAnswerClick()} className="answer-text-boolean">
                    {props.answer}
                </div>
            }
        </div>
        <Explanation props={props.explanation} />
        <button className="input-btn" onClick={() => handleClickContinue()} >
            Continue
        </button>
    </div>
        
    )
}
export default MultipleChoiceAnswer;