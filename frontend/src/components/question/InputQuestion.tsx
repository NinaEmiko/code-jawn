import { FC } from "react";
import Question from "./Question";

interface InputQuestionProps{
    handleSubmit: ()=>void,
    question: string,
    value: string,
    handleChange: (event: any) => void,
}

const InputQuestion: FC<InputQuestionProps> = ({handleSubmit, question, value, handleChange}) => {

    const handleClickSubmit = () => {
        handleSubmit()
    }

    return (
        <>
            <div className="question-container">
                <div className="question-jawn">
                    <Question text={question} />
                </div>
                <div className="answer-jawn-input">   
                    <input
                        className="answer-input"
                        value={value}
                        onChange={handleChange}
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