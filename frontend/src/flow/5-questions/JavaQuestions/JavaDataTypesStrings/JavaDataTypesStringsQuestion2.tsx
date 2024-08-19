import AnswerCodeBlock from "../../../../components/answer/AnswerCodeBlock"
import Question from "../../../../components/question/Question"
import { useState } from "react"
import { STRINGS_QUESTION_2_ANSWERS, STRINGS_QUESTION_2_BOOLEANS, STRINGS_QUESTION_2_EXPLANATIONS, STRINGS_QUESTIONS } from "../../../../helpers/JavaConstants/DataTypesConstants/DataTypeStringsConstants"
import Explanation from "../../../../components/answer/Explanation"
import AnswerExplanationHeader from "../../../../components/answer/AnswerExplanationHeader"
import DividerJawn from "../../../../components/utility/DividerJawn"


function JavaDataTypesStringsQuestion2({props}:{props:any}) {
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
        answer === 'A' ? props.completeQuestion(true) : props.completeQuestion(false);
    }

    return (
        <>
            {answer === '' &&
                <div className="question-container">
                    <div className="question-jawn">
                        <Question props={{text: STRINGS_QUESTIONS.STRING_QUESTION_2}} />
                    </div>
                    <div className="answer-jawn">
                            
                        <AnswerCodeBlock props={{
                            answerClicked:handleAnswer1Click,
                            code: STRINGS_QUESTION_2_ANSWERS.ANSWER_1
                            }} />
                            <DividerJawn />
                        <AnswerCodeBlock props={{
                            answerClicked:handleAnswer2Click,
                            code: STRINGS_QUESTION_2_ANSWERS.ANSWER_2
                            }} />
                            <DividerJawn />
                        <AnswerCodeBlock props={{
                            answerClicked:handleAnswer3Click,
                            code: STRINGS_QUESTION_2_ANSWERS.ANSWER_3
                            }} />
                            <DividerJawn />
                        <AnswerCodeBlock props={{
                            answerClicked:handleAnswer4Click,
                            code: STRINGS_QUESTION_2_ANSWERS.ANSWER_4
                            }} />
                    </div>
                </div>
            }
            {answer === 'A' &&
                <div className="question-explanation-container">
                    <AnswerExplanationHeader props={{correct: STRINGS_QUESTION_2_BOOLEANS.ANSWER_1}} />
                <div className="answer-jawn">
                    <AnswerCodeBlock props={{
                            answerClicked:null,
                            code: STRINGS_QUESTION_2_ANSWERS.ANSWER_1
                            }} />
                    </div>
                    <Explanation props={STRINGS_QUESTION_2_EXPLANATIONS.ANSWER_1} />
                    <button className="input-btn" onClick={() => endQuestion()} >
                        Continue
                    </button>
                </div>
            }
            {answer === 'B' &&
                <div className="-question-explanation-container">
                    <AnswerExplanationHeader props={{correct: STRINGS_QUESTION_2_BOOLEANS.ANSWER_2}} />
                    <div className="answer-jawn">
                    <AnswerCodeBlock props={{
                            answerClicked:null,
                            code: STRINGS_QUESTION_2_ANSWERS.ANSWER_2
                            }} />
                    </div>
                    <Explanation props={STRINGS_QUESTION_2_EXPLANATIONS.ANSWER_2} />
                    <button className="input-btn" onClick={() => endQuestion()} >
                        Continue
                    </button>
                </div>
            }
            {answer === 'C' &&
                <div className="question-explanation-container">
                    <AnswerExplanationHeader props={{correct: STRINGS_QUESTION_2_BOOLEANS.ANSWER_3}} />
                    <div className="answer-jawn">
                    <AnswerCodeBlock props={{
                            answerClicked:null,
                            code: STRINGS_QUESTION_2_ANSWERS.ANSWER_3
                            }} />
                    </div>
                    <Explanation props={STRINGS_QUESTION_2_EXPLANATIONS.ANSWER_3} />
                    <button className="input-btn" onClick={() => endQuestion()} >
                        Continue
                    </button>
                </div>
            }
            {answer === 'D' &&
                <div className="question-explanation-container">
                    <AnswerExplanationHeader props={{correct: STRINGS_QUESTION_2_BOOLEANS.ANSWER_4}} />
                    <div className="answer-jawn">
                        <AnswerCodeBlock props={{
                            answerClicked:null,
                            code: STRINGS_QUESTION_2_ANSWERS.ANSWER_4
                            }} />
                        </div>
                        <Explanation props={STRINGS_QUESTION_2_EXPLANATIONS.ANSWER_4} />
                        <button className="input-btn" onClick={() => endQuestion()} >
                            Continue
                        </button>
                </div>
            }
        </>
    )
}
  
export default JavaDataTypesStringsQuestion2
  