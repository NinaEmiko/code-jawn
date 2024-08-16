import AnswerCodeBlock from "../../../../components/AnswerCodeBlock"
import "../../../../styling/Question.css"
import "../../../../styling/Answer.css"
import Question from "../../../../components/Question"
import { useState } from "react"
import AnswerExplanationHeader from "../../../../components/AnswerExplanationHeader"
import { STRINGS_QUESTIONS, STRINGS_QUESTION_3_ANSWERS, STRINGS_QUESTION_3_BOOLEANS, STRINGS_QUESTION_3_EXPLANATIONS } from "../../../../helpers/JavaConstants/DataTypesConstants/DataTypeStringsConstants"
import Explanation from "../../../../components/Explanation"
import AnswerText from "../../../../components/AnswerText"
import AnswerTemplateLiteral from "../../../../components/AnswerTemplateLiteral"


function JavaDataTypesStringsQuestion3({props}:{props:any}) {
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
        answer === 'B' ? props.completeQuestion(true) : props.completeQuestion(false);
    }

    return (
        <>
            {answer === '' &&
                <div className="question-container">
                    <div className="question-jawn">
                    <Question props={{text: STRINGS_QUESTIONS.STRING_QUESTION_3}} />
                    </div>
                    <div className="answer-jawn">
                            
                        <AnswerCodeBlock props={{
                            answerClicked:handleAnswer1Click,
                            code: STRINGS_QUESTION_3_ANSWERS.ANSWER_1
                            }} />
                        <AnswerText props={{
                            answerClicked:handleAnswer2Click,
                            text: STRINGS_QUESTION_3_ANSWERS.ANSWER_2
                            }} />
                        <AnswerTemplateLiteral props={{
                            answerClicked:handleAnswer3Click,
                            text: STRINGS_QUESTION_3_ANSWERS.ANSWER_3
                            }} />
                        <AnswerTemplateLiteral props={{
                            answerClicked:handleAnswer4Click,
                            text: STRINGS_QUESTION_3_ANSWERS.ANSWER_4
                            }} />
                    </div>
                </div>
            }
            {answer === 'A' &&
                <div className="question-explanation-container">
                    <AnswerExplanationHeader props={{correct: STRINGS_QUESTION_3_BOOLEANS.ANSWER_1}} />
                    <div className="answer-jawn">
                    <AnswerCodeBlock props={{
                            answerClicked:null,
                            code: STRINGS_QUESTION_3_ANSWERS.ANSWER_1
                            }} />
                    </div>
                    <Explanation props={STRINGS_QUESTION_3_EXPLANATIONS.ANSWER_1} />
                    <button className="explanation-btn" onClick={() => endQuestion()} >
                        Continue
                    </button>
                </div>
            }
            {answer === 'B' &&
                <div className="question-explanation-container">
                    <AnswerExplanationHeader props={{correct: STRINGS_QUESTION_3_BOOLEANS.ANSWER_2}} />
                    <div className="answer-jawn">
                    <AnswerText props={{
                            answerClicked:null,
                            text: STRINGS_QUESTION_3_ANSWERS.ANSWER_2
                            }} />
                    </div>
                    <Explanation props={STRINGS_QUESTION_3_EXPLANATIONS.ANSWER_2} />
                    <button className="explanation-btn" onClick={() => endQuestion()} >
                        Continue
                    </button>
                </div>
            }
            {answer === 'C' &&
                <div className="question-explanation-container">
                    <AnswerExplanationHeader props={{correct: STRINGS_QUESTION_3_BOOLEANS.ANSWER_3}} />
                    <div className="answer-jawn">
                    <AnswerTemplateLiteral props={{
                            answerClicked:null,
                            text: STRINGS_QUESTION_3_ANSWERS.ANSWER_3
                            }} />
                    </div>
                    <Explanation props={STRINGS_QUESTION_3_EXPLANATIONS.ANSWER_3} />
                    <button className="explanation-btn" onClick={() => endQuestion()} >
                        Continue
                    </button>
                </div>
            }
            {answer === 'D' &&
                <div className="question-explanation-container">
                    <AnswerExplanationHeader props={{correct: STRINGS_QUESTION_3_BOOLEANS.ANSWER_4}} />
                    <div className="answer-jawn">
                        <AnswerTemplateLiteral props={{
                            answerClicked:null,
                            text: STRINGS_QUESTION_3_ANSWERS.ANSWER_4
                            }} />
                        </div>
                        <Explanation props={STRINGS_QUESTION_3_EXPLANATIONS.ANSWER_4} />
                        <button className="explanation-btn" onClick={() => endQuestion()} >
                            Continue
                        </button>
                </div>
            }
        </>
    )
}
  
export default JavaDataTypesStringsQuestion3
  