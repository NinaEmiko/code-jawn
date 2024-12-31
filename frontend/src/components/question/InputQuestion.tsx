import Question from "./Question";

const InputQuestion = ({props}:{props:any}) => {

    const handleClickSubmit = () => {
        props.handleSubmit()
    }

    return (
        <>
            <div className="question-container">
                <div className="question-jawn">
                    <Question props={{text:props.question}} />
                </div>
                <div className="answer-jawn-input">   
                    <input
                        className="answer-input"
                        value={props.value}
                        onChange={props.handleChange}
                    />
                </div>
            </div>
            <div className="input-question-container">
                <button className="input-question-btn" onClick={() => handleClickSubmit()}>Submit</button>
            </div>
        </>
    )
}
export default InputQuestion;