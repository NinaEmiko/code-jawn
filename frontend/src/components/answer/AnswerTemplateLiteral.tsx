const AnswerText = ({props}:{props:any}) => {
    
    const handleAnswerClick = () => {
        props.answerClicked();
    }

    return (
        <div onClick={() => handleAnswerClick()} className="answer-text-template-literal">
            {props.text}
        </div>
    )
}
export default AnswerText;