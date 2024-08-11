import AnswerCodeBlock from "../../../../components/AnswerCodeBlock"
import "../../../../styling/Question.css"
import "../../../../styling/Answer.css"
import Question from "../../../../components/Question"
import { useState } from "react"
import AnswerExplanationHeader from "../../../../components/AnswerExplanationHeader"
import Explanation from "../../../../components/Explanation"
import { INTS_QUESTIONS, INTS_QUESTION_1_ANSWERS, INTS_QUESTION_1_BOOLEANS, INTS_QUESTION_1_EXPLANATIONS } from "../../../../helpers/JavaConstants/DataTypesConstants/DataTypesIntsConstants"

function JavaDataTypesIntsQuestion1({props}:{props:any}) {
    const [answer, setAnswer] = useState('');

    const handleAnswer1Click = () => {
        setAnswer("A");
    }

    const handleAnswer2Click = () => {
        setAnswer("B");
    }

    const handleAnswer3Click = () => {
        setAnswer("C");
    }

    const handleAnswer4Click = () => {
        setAnswer("D");
    }

    const endQuestion = () => {
        answer === 'C' ? props.completeQuestion(true) : props.completeQuestion(false);
    }

    return (
        <>
            {answer === '' &&
                <div className="question-container">
                    <div className="question-jawn">
                        <Question props={{text: INTS_QUESTIONS.INT_QUESTION_1}} />
                    </div>
                    <div className="answer-jawn">
                        <AnswerCodeBlock props={{
                            answerClicked:handleAnswer1Click,
                            code: INTS_QUESTION_1_ANSWERS.ANSWER_1
                            }} />
                        <AnswerCodeBlock props={{
                            answerClicked:handleAnswer2Click,
                            code: INTS_QUESTION_1_ANSWERS.ANSWER_2
                            }} />
                        <AnswerCodeBlock props={{
                            answerClicked:handleAnswer3Click,
                            code: INTS_QUESTION_1_ANSWERS.ANSWER_3
                            }} />
                        <AnswerCodeBlock props={{
                            answerClicked:handleAnswer4Click,
                            code: INTS_QUESTION_1_ANSWERS.ANSWER_4
                            }} />
                    </div>
                </div>
            }
            {answer === 'A' &&
                <div className="question-explanation-container">
                <AnswerExplanationHeader props={{correct: INTS_QUESTION_1_BOOLEANS.ANSWER_1}} />
                <div className="answer-jawn">
                    <AnswerCodeBlock props={{
                            answerClicked:null,
                            code: INTS_QUESTION_1_ANSWERS.ANSWER_1
                            }} />
                    </div>
                    <Explanation props={INTS_QUESTION_1_EXPLANATIONS.ANSWER_1} />
                    <button className="explanation-btn" onClick={endQuestion} >Continue</button>
                </div>
            }
            {answer === 'B' &&
                <div className="question-explanation-container">
                <AnswerExplanationHeader props={{correct: INTS_QUESTION_1_BOOLEANS.ANSWER_2}} />
                <div className="answer-jawn">
                    <AnswerCodeBlock props={{
                            answerClicked:null,
                            line1: INTS_QUESTION_1_ANSWERS.ANSWER_2
                            }} />
                    </div>
                    <Explanation props={INTS_QUESTION_1_EXPLANATIONS.ANSWER_2} />
                    <button className="explanation-btn" onClick={endQuestion} >Continue</button>
                </div>
            }
            {answer === 'C' &&
                <div className="question-explanation-container">
                <AnswerExplanationHeader props={{correct: INTS_QUESTION_1_BOOLEANS.ANSWER_3}} />
                <div className="answer-jawn">
                    <AnswerCodeBlock props={{
                            answerClicked:null,
                            code: INTS_QUESTION_1_ANSWERS.ANSWER_3
                            }} />
                    </div>
                    <Explanation props={INTS_QUESTION_1_EXPLANATIONS.ANSWER_3} />
                    <button className="explanation-btn" onClick={endQuestion} >Continue</button>
                </div>
            }
            {answer === 'D' &&
                <div className="question-explanation-container">
                <AnswerExplanationHeader props={{correct: INTS_QUESTION_1_BOOLEANS.ANSWER_4}} />
                <div className="answer-jawn">
                    <AnswerCodeBlock props={{
                        answerClicked:null,
                        code: INTS_QUESTION_1_ANSWERS.ANSWER_4
                        }} />
                </div>
                <Explanation props={INTS_QUESTION_1_EXPLANATIONS.ANSWER_4} />
                <button className="explanation-btn" onClick={endQuestion} >Continue</button>
                </div>
            }
        </>
    )
}
  
export default JavaDataTypesIntsQuestion1
  