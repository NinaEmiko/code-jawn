import AnswerExplanationHeader from "./AnswerExplanationHeader";
import AnswerText from "./AnswerTemplateLiteral";
import Explanation from "./Explanation";

const MultipleChoiceAnswer = ({props}:{props:any}) => {

    const handleClickContinue = () => {
        props.endQuestion()
    }
    return (
        <div className="question-explanation-container">
        <AnswerExplanationHeader props={{correct: props.correct}} />
        <div className="answer-jawn">
        <AnswerText props={{
                answerClicked:null,
                text: props.answer
                }} />
        </div>
        <Explanation props={props.explanation} />
        <button className="input-btn" onClick={() => handleClickContinue()} >
            Continue
        </button>
    </div>
        
    )
}
export default MultipleChoiceAnswer;