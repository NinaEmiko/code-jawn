import JustText from "../utility/JustText";
import AnswerExplanationHeader from "./AnswerExplanationHeader";
import Explanation from "./Explanation";

const InputAnswer = ({props}:{props:any}) => {

    const handleClickContinue = () => {
        props.endQuestion()
    }
    return (
        <>
            <AnswerExplanationHeader props={{correct: props.correct}} />
            {props.type === "template-literal" &&
                <div className="answer-text-template-literal">
                    {props.value}
                </div>
            }
            <Explanation props={props.explanation} />
            <button className="input-btn" onClick={() => handleClickContinue()}>Continue</button>
        </>
        
    )
}
export default InputAnswer;