import Question from "../../../../components/question/Question"
import { useState } from "react"
import { STRINGS_QUESTION_5_ANSWERS, STRINGS_QUESTION_5_EXPLANATIONS, STRINGS_QUESTIONS } from "../../../../helpers/JavaConstants/DataTypesConstants/DataTypeStringsConstants"
import AnswerExplanationHeader from "../../../../components/answer/AnswerExplanationHeader"
import Explanation from "../../../../components/answer/Explanation"


const JavaDataTypesStringsPostLesson = ({props}:{props:any}) => {
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

    const handleClickContinue = () => {
        props.handleCompleteLesson()
    }


    return (

        <>
            <div className="spacer-20" />
            <div className="question-container">
                <div className="question-jawn">
                    <Question props={{text: "Good job!!"}} />
                </div>
                <div className="answer-jawn-input">   

                </div>
            </div>
            {props.restCallSuccessful &&
            <button className="input-btn" onClick={() => handleClickContinue()}>Continue</button>
            }
            </>         
    )
}
export default JavaDataTypesStringsPostLesson;