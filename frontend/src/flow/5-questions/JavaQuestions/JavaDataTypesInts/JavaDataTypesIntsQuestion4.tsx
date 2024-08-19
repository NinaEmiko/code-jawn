import "../../../../styling/Question.css"
import "../../../../styling/Answer.css"
import Question from "../../../../components/question/Question"
import { useState } from "react"
import Explanation from "../../../../components/answer/Explanation";
import AnswerExplanationHeader from "../../../../components/answer/AnswerExplanationHeader";
import { INTS_QUESTION_4_ANSWERS, INTS_QUESTIONS, INTS_QUESTION_4_EXPLANATIONS } from "../../../../helpers/JavaConstants/DataTypesConstants/DataTypesIntsConstants";


function JavaDataTypesIntsQuestion4({props}:{props:any}) {
    const [showAnswer, setShowAnswer] = useState(false);
    const [value, setValue] = useState('"17"');

    const handleChange = (event: any) => {
        setValue(event.target.value);
      };

    const endQuestion = () => {
        value === INTS_QUESTION_4_ANSWERS.CORRECT_ANSWER ? props.completeQuestion(true) : props.completeQuestion(false);
    }

    const handleSubmit = () => {
        setShowAnswer(true);
    }

    return (
        <>
            {!showAnswer ?
                <div className="question-container">
                    <div className="question-jawn">
                        <Question props={{text: INTS_QUESTIONS.INT_QUESTION_4}} />
                    </div>
                    <div className="answer-jawn-input">   
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
                    {value != INTS_QUESTION_4_ANSWERS.CORRECT_ANSWER ?
                        <>
                            <AnswerExplanationHeader props={{correct: false}} />
                            <Explanation props={INTS_QUESTION_4_EXPLANATIONS.INCORRECT_ANSWER} />
                            <button className="input-btn" onClick={() => endQuestion()}>Continue</button>
                        </>
                    :
                        <>
                            <AnswerExplanationHeader props={{correct: true}} />
                            <Explanation props={INTS_QUESTION_4_EXPLANATIONS.CORRECT_ANSWER} />
                            <button className="input-btn" onClick={() => endQuestion()}>Continue</button>
                        </>    
                    }
                </>
            }
        </>
    )
}
  
export default JavaDataTypesIntsQuestion4
  