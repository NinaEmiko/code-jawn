const AnswerBoolean = ({props}:{props:any}) => {
    
    const handleAnswerClick = () => {
        props.answerClicked();
    }

    return (
        <div onClick={() => handleAnswerClick()} className="answer-text-boolean">
            {props.text}
        </div>
    )
}
export default AnswerBoolean;