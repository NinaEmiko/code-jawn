import Answer from "../../../../components/Answer"
import "../../../../styling/Question.css"
import "../../../../styling/Answer.css"
import Question from "../../../../components/Question"
import AnswerExplanationHeader from "../../../../components/AnswerExplanationHeader"
import { VARIABLES_QUESTION_1_ANSWERS, VARIABLES_QUESTION_1_BOOLEANS, VARIABLES_QUESTION_1_EXPLANATIONS, VARIABLES_QUESTIONS } from "../../../../helpers/JavaConstants"
import { useState } from "react"

function JavaVariableQuestion1({props}:{props:any}) {
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
        answer === "A" ? props.completeQuestion(true) : props.completeQuestion(false);
    }

    return (
        <>
            {answer === '' &&
                <div className="question-container">
                    <div className="question-jawn">
                        <Question props={{text: VARIABLES_QUESTIONS.INITIALIZATION_QUESTION_1}} />
                    </div>
                    <div className="answer-jawn">
                        <Answer props={{
                            answerClicked:handleAnswer1Click,
                            code: VARIABLES_QUESTION_1_ANSWERS.ANSWER_1
                            }} />
                        <Answer props={{
                            answerClicked:handleAnswer2Click,
                            code: VARIABLES_QUESTION_1_ANSWERS.ANSWER_2
                            }} />
                        <Answer props={{
                            answerClicked:handleAnswer3Click,
                            code: VARIABLES_QUESTION_1_ANSWERS.ANSWER_3
                            }} />
                        <Answer props={{
                            answerClicked:handleAnswer4Click,
                            code: VARIABLES_QUESTION_1_ANSWERS.ANSWER_4
                            }} />
                    </div>
                </div>
            }
            {answer === 'A' &&
                <div className="question-container">
                    <AnswerExplanationHeader props={VARIABLES_QUESTION_1_BOOLEANS.ANSWER_1} />
                    <div className="answer-jawn">
                        <Answer props={{
                            answerClicked:null,
                            code: VARIABLES_QUESTION_1_ANSWERS.ANSWER_1
                            }} />
                    </div>
                    <div className="question-explanation">
                        {VARIABLES_QUESTION_1_EXPLANATIONS.ANSWER_1}
                    </div>
                    <button className="explanation-btn" onClick={endQuestion} >
                        Continue
                    </button>
                </div>
            }
            {answer === 'B' &&
                <div className="question-container">
                    <AnswerExplanationHeader props={VARIABLES_QUESTION_1_BOOLEANS.ANSWER_2} />
                    <div className="answer-jawn">
                        <Answer props={{
                            answerClicked:null,
                            code: VARIABLES_QUESTION_1_ANSWERS.ANSWER_2
                            }} />
                    </div>
                    <div className="question-explanation">
                        {VARIABLES_QUESTION_1_EXPLANATIONS.ANSWER_2}
                    </div>
                    <button className="explanation-btn" onClick={endQuestion} >
                        Continue
                    </button>
                </div>
            }
            {answer === 'C' &&
                <div className="question-container">
                    <AnswerExplanationHeader props={VARIABLES_QUESTION_1_BOOLEANS.ANSWER_3} />
                    <div className="answer-jawn">
                        <Answer props={{
                            answerClicked:null,
                            code: VARIABLES_QUESTION_1_ANSWERS.ANSWER_3
                            }} />
                    </div>
                    <div className="question-explanation">
                        {VARIABLES_QUESTION_1_EXPLANATIONS.ANSWER_3}
                    </div>
                    <button className="explanation-btn" onClick={endQuestion} >
                        Continue
                    </button>
                </div>
            }
            {answer === 'D' &&
                <div className="question-container">
                    <AnswerExplanationHeader props={VARIABLES_QUESTION_1_EXPLANATIONS.ANSWER_4} />
                    <div className="answer-jawn">
                            <Answer props={{
                                answerClicked:null,
                                code: VARIABLES_QUESTION_1_ANSWERS.ANSWER_4
                                }} />
                        </div>
                        <div className="question-explanation">
                            {VARIABLES_QUESTION_1_EXPLANATIONS.ANSWER_4}
                        </div>
                        <button className="explanation-btn" onClick={endQuestion} >
                            Continue
                        </button>
                </div>
            }
        </>
    )
}
  
export default JavaVariableQuestion1
  