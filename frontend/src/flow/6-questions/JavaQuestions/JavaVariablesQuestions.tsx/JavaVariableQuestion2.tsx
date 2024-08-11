import AnswerCodeBlock from "../../../../components/AnswerCodeBlock"
import "../../../../styling/Question.css"
import "../../../../styling/Answer.css"
import Question from "../../../../components/Question"
import { useState } from "react"
import AnswerExplanationHeader from "../../../../components/AnswerExplanationHeader"
import { INITIALIZING_VARIABLES_QUESTIONS, INITIALIZING_VARIABLES_QUESTION_2_ANSWERS, INITIALIZING_VARIABLES_QUESTION_2_BOOLEANS, INITIALIZING_VARIABLES_QUESTION_2_EXPLANATIONS } from "../../../../helpers/JavaConstants/VariablesConstants/InitializingVariablesConstants"


function JavaVariableQuestion2({props}:{props:any}) {
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
    answer === 'D' ? props.completeQuestion(true) : props.completeQuestion(false);
}

    return (
        <>
            {answer === '' &&
                <div className="question-container">
                    <div className="question-jawn">
                        <Question props={{text: INITIALIZING_VARIABLES_QUESTIONS.INITIALIZATION_QUESTION_2}} />
                    </div>
                    <div className="answer-jawn">
                        <AnswerCodeBlock props={{
                            answerClicked:handleAnswer1Click,
                            code: INITIALIZING_VARIABLES_QUESTION_2_ANSWERS.ANSWER_1
                            }} />
                        <AnswerCodeBlock props={{
                            answerClicked:handleAnswer2Click,
                            code: INITIALIZING_VARIABLES_QUESTION_2_ANSWERS.ANSWER_2
                            }} />
                        <AnswerCodeBlock props={{
                            answerClicked:handleAnswer3Click,
                            code: INITIALIZING_VARIABLES_QUESTION_2_ANSWERS.ANSWER_3
                            }} />
                        <AnswerCodeBlock props={{
                            answerClicked:handleAnswer4Click,
                            code: INITIALIZING_VARIABLES_QUESTION_2_ANSWERS.ANSWER_4
                            }} />
                    </div>
                </div>
            }
            {answer === 'A' &&
                <div className="question-explanation-container">
                    <AnswerExplanationHeader props={INITIALIZING_VARIABLES_QUESTION_2_BOOLEANS.ANSWER_1} />
                    <div className="answer-jawn">
                        <AnswerCodeBlock props={{
                            answerClicked:null,
                            code: INITIALIZING_VARIABLES_QUESTION_2_ANSWERS.ANSWER_1
                            }} />
                    </div>
                    {INITIALIZING_VARIABLES_QUESTION_2_EXPLANATIONS.ANSWER_1}
                    <button className="explanation-btn" onClick={endQuestion} >
                        Continue
                    </button>
                </div>
            }
            {answer === 'B' &&
                <div className="question-explanation-container">
                    <AnswerExplanationHeader props={INITIALIZING_VARIABLES_QUESTION_2_BOOLEANS.ANSWER_2} />
                    <div className="answer-jawn">
                        <AnswerCodeBlock props={{
                            answerClicked:null,
                            code: INITIALIZING_VARIABLES_QUESTION_2_ANSWERS.ANSWER_2
                            }} />
                    </div>
                    {INITIALIZING_VARIABLES_QUESTION_2_EXPLANATIONS.ANSWER_2}
                    <button className="explanation-btn" onClick={endQuestion} >
                        Continue
                    </button>
                </div>
            }
            {answer === 'C' &&
                <div className="question-explanation-container">
                    <AnswerExplanationHeader props={INITIALIZING_VARIABLES_QUESTION_2_BOOLEANS.ANSWER_3} />
                    <div className="answer-jawn">
                        <AnswerCodeBlock props={{
                            answerClicked:null,
                            code: INITIALIZING_VARIABLES_QUESTION_2_ANSWERS.ANSWER_3
                            }} />
                    </div>
                    {INITIALIZING_VARIABLES_QUESTION_2_EXPLANATIONS.ANSWER_3}
                    <button className="explanation-btn" onClick={endQuestion} >
                        Continue
                    </button>
                </div>
            }
            {answer === 'D' &&
                <div className="question-explanation-container">
                    <AnswerExplanationHeader props={INITIALIZING_VARIABLES_QUESTION_2_EXPLANATIONS.ANSWER_4} />
                    <div className="answer-jawn">
                        <AnswerCodeBlock props={{
                            answerClicked:null,
                            code: INITIALIZING_VARIABLES_QUESTION_2_ANSWERS.ANSWER_4
                            }} />
                    </div>
                    {INITIALIZING_VARIABLES_QUESTION_2_EXPLANATIONS.ANSWER_4}
                    <button className="explanation-btn" onClick={endQuestion} >
                        Continue
                    </button>
                </div>
            }
        </>
    )
}
  
export default JavaVariableQuestion2
  