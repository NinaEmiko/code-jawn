import JustText from "../utility/JustText";
import AnswerExplanationHeader from "./AnswerExplanationHeader";
import Explanation from "./Explanation";

const InputAnswer = ({props}:{props:any}) => {

    const handleClickContinue = () => {
        props.endQuestion()
    }
    return (
        <>
            <JustText props={{text: "Your answer: " + props.value}} />
            <AnswerExplanationHeader props={{correct: props.correct}} />
            <Explanation props={props.explanation} />
            <button className="input-btn" onClick={() => handleClickContinue()}>Continue</button>
        </>
        
    )
}
export default InputAnswer;