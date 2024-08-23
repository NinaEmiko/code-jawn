const Question = ({props}:{props:any}) => {

    return (
        <div className="question-jawn">
            <div className="question-text">
                {props.text}
            </div>
        </div>
    )
}
export default Question;