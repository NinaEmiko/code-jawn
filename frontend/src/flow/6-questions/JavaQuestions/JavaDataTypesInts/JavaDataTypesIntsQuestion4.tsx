import "../../../../styling/Question.css"
import "../../../../styling/Answer.css"
import Question from "../../../../components/Question"
import { useState } from "react"
import { DATA_TYPES_QUESTIONS } from "../../../../helpers/JavaConstants";


function JavaDataTypesIntsQuestion4({props}:{props:any}) {
    const [showAnswer, setShowAnswer] = useState(false);
    const [value, setValue] = useState('"17"');

    const handleChange = (event: any) => {
        setValue(event.target.value);
      };

    const endQuestion = () => {
        value === '17' ? props.completeQuestion(true) : props.completeQuestion(false);
    }
    const handleSubmit = () => {
        setShowAnswer(true);
    }

    return (
        <>
            {!showAnswer ?
                <div className="question-container">
                    <div className="question-jawn">
                        <Question props={{text: DATA_TYPES_QUESTIONS.INT_QUESTION_4}} />
                    </div>
                    <div className="answer-jawn">   
                        <input
                            className="answer-input"
                            value={value}
                            onChange={handleChange}
                        />
                    </div>
                    <button className="input-btn" onClick={() => handleSubmit()}>Submit</button>
                </div>
                :
                <>
                    {value != "17" ?
                        <>
                            <div className="question-explanation-incorrect">Your answer: {value} is incorrect.</div>
                            <div className="question-explanation">Correct answer: 17</div>
                            <div className="question-explanation">"17" is a String value. By removing the quotation marks, it becomes an int value.</div>
                            <button className="explanation-btn" onClick={() => endQuestion}>Continue</button>
                        </>
                    :
                        <>
                            <div className="question-explanation-correct">You are correct!</div>
                            <div className="question-explanation">By removing the quotation marks from "17", you changed it from a String value to an int value.</div>
                            <button className="explanation-btn" onClick={() => endQuestion}>Continue</button>
                        </>    
                    }
                </>
            }
        </>
    )
}
  
export default JavaDataTypesIntsQuestion4
  