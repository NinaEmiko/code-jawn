const AnswerInt = ({props}:{props:any}) => {
    
    const handleAnswerClick = () => {
        props.answerClicked();
    }

    return (
        <div onClick={() => handleAnswerClick()} className="answer-text-int">
            {props.text}
        </div>
    )
}
export default AnswerInt;