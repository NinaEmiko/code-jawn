import AnswerExplanationHeader from "./AnswerExplanationHeader";
import Explanation from "./Explanation";

const InputAnswer = ({props}:{props:any}) => {

    const handleClickContinue = () => {
        props.endQuestion()
    }
    return (
        <div className="input-question-container">
            <AnswerExplanationHeader props={{correct: props.correct}} />
            {props.type === "template-literal" &&
                <div className="answer-text-template-literal">
                    {props.value}
                </div>
            }
            <Explanation props={props.explanation} />
            <button className="input-question-btn" onClick={() => handleClickContinue()}>Continue</button>
        </div>
        
    )
}
export default InputAnswer;