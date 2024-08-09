const AnswerExplanationHeader = ({props}:{props:any}) => {

    return (
        <div>
            {props.correct ?
            <div className="question-explanation-correct">You have chosen the correct answer!</div>
            :
            <div className="question-explanation-incorrect">You have chosen an incorrect answer.</div>
            }
        </div>
    )
}
export default AnswerExplanationHeader;