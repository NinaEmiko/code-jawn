const AnswerExplanationHeader = ({props}:{props:any}) => {

    return (
        <div>
            {props.correct ?
            <div className="question-explanation-correct">Correct!</div>
            :
            <div className="question-explanation-incorrect">Incorrect.</div>
            }
        </div>
    )
}
export default AnswerExplanationHeader;