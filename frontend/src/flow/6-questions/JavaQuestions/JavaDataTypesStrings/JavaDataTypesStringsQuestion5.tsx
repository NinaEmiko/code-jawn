import "../../../../styling/Question.css"
import "../../../../styling/Answer.css"
import Question from "../../../../components/Question"
import { useState } from "react"
import { STRINGS_QUESTION_5_ANSWERS, STRINGS_QUESTION_5_EXPLANATIONS, STRINGS_QUESTIONS } from "../../../../helpers/JavaConstants/DataTypesConstants/DataTypeStringsConstants"
import AnswerExplanationHeader from "../../../../components/AnswerExplanationHeader"
import Explanation from "../../../../components/Explanation"


function JavaDataTypesStringsQuestion5({props}:{props:any}) {
    const [showAnswer, setShowAnswer] = useState(false);
    const [value, setValue] = useState(`17`);
    const [correct, setCorrect] = useState(false);

    const handleChange = (event: any) => {
        setValue(event.target.value);
      };

    const endQuestion = () => {
        if (value === STRINGS_QUESTION_5_ANSWERS.CORRECT_ANSWER_1 ||
            value === STRINGS_QUESTION_5_ANSWERS.CORRECT_ANSWER_2 ||
            value === STRINGS_QUESTION_5_ANSWERS.CORRECT_ANSWER_3 ){
                props.completeQuestion(true);

            } else {
                props.completeQuestion(false);
            }
    }

    const handleSubmit = () => {
        if (value === STRINGS_QUESTION_5_ANSWERS.CORRECT_ANSWER_1 ||
            value === STRINGS_QUESTION_5_ANSWERS.CORRECT_ANSWER_2 ||
            value === STRINGS_QUESTION_5_ANSWERS.CORRECT_ANSWER_3 ){
                setCorrect(true);
            } else {
                setCorrect(false);
            }
        setShowAnswer(true);
    }

    return (
        <>
            {!showAnswer ?
                <div className="question-container">
                    <div className="question-jawn">
                        <Question props={{text: STRINGS_QUESTIONS.STRING_QUESTION_5}} />
                    </div>
                    <div className="answer-jawn-input">   
                        <input
                            className="answer-input"
                            value={value}
                            onChange={handleChange}
                        />
                    </div>
                    <button className="explanation-btn" onClick={() => handleSubmit()}>Submit</button>
                </div>
                :
                <>
                    {correct
                    ?
                    (
                        <>
                            <AnswerExplanationHeader props={{correct: true}} />
                            <Explanation props={{text: STRINGS_QUESTION_5_EXPLANATIONS.CORRECT_ANSWER}} />
                            <button className="explanation-btn" onClick={() => endQuestion()}>Continue</button>
                        </>    
                    ) : (
                        <>
                            <AnswerExplanationHeader props={{correct: false}} />
                            <Explanation props={{text: STRINGS_QUESTION_5_EXPLANATIONS.INCORRECT_ANSWER}} />
                            <button className="explanation-btn" onClick={() => endQuestion()}>Continue</button>
                        </>
                    )    
                }
                </>
            }
        </>
    )
}
  
export default JavaDataTypesStringsQuestion5
  