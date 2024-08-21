import AnswerCodeBlock from "../../../../components/answer/AnswerCodeBlock"
import Question from "../../../../components/question/Question"
import { useState } from "react"
import AnswerExplanationHeader from "../../../../components/answer/AnswerExplanationHeader"
import { STRINGS_QUESTIONS, STRINGS_QUESTION_3_ANSWERS, STRINGS_QUESTION_3_BOOLEANS, STRINGS_QUESTION_3_EXPLANATIONS } from "../../../../helpers/JavaConstants/DataTypesConstants/DataTypeStringsConstants"
import Explanation from "../../../../components/answer/Explanation"
import AnswerText from "../../../../components/answer/AnswerText"
import AnswerTemplateLiteral from "../../../../components/answer/AnswerTemplateLiteral"
import DividerJawn from "../../../../components/utility/DividerJawn"


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
        props.completeQuestion(true);
    }

    const retry = () => {
        setAnswer('');
    }

    return (
        <>
        <div className="spacer-20" />
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
                            <DividerJawn />
                        <AnswerText props={{
                            answerClicked:handleAnswer2Click,
                            text: STRINGS_QUESTION_3_ANSWERS.ANSWER_2
                            }} />
                            <DividerJawn />
                        <AnswerTemplateLiteral props={{
                            answerClicked:handleAnswer3Click,
                            text: STRINGS_QUESTION_3_ANSWERS.ANSWER_3
                            }} />
                            <DividerJawn />
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
                    <button className="input-btn" onClick={() => retry()} >
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
                    <button className="input-btn" onClick={() => endQuestion()} >
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
                    <button className="input-btn" onClick={() => retry()} >
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
                        <button className="input-btn" onClick={() => retry()} >
                            Continue
                        </button>
                </div>
            }
        </>
    )
}
  
export default JavaDataTypesStringsQuestion3
  