import AnswerCodeBlock from "../../../../components/answer/AnswerCodeBlock"
import Question from "../../../../components/question/Question"
import { useState } from "react"
import DividerJawn from "../../../../components/utility/DividerJawn"
import AnswerTemplateLiteral from "../../../../components/answer/AnswerTemplateLiteral"
import MultipleChoiceAnswer from "../../../../components/answer/MultipleChoiceAnswer"
import { STRINGS_QUESTION_2_ANSWERS,
    STRINGS_QUESTION_2_BOOLEANS,
    STRINGS_QUESTION_2_EXPLANATIONS,
    STRINGS_QUESTIONS } from "../../../../helpers/JavaConstants/DataTypesConstants/DataTypeStringsConstants"

function JavaDataTypesStringsQuestion2({props}:{props:any}) {
    const [answer, setAnswer] = useState('');

    const handleAnswer1Click = () => { setAnswer("A"); }
    const handleAnswer2Click = () => { setAnswer("B"); }
    const handleAnswer3Click = () => { setAnswer("C"); }
    const handleAnswer4Click = () => { setAnswer("D"); }

    const endQuestion = () => { props.completeQuestion(true); }

    const retry = () => { setAnswer(''); }

    return (
        <>
            <div className="spacer-20" />
            {answer === '' &&
                <div className="question-container">
                    <Question props={{text: STRINGS_QUESTIONS.STRING_QUESTION_2}} />
                    <div className="answer-jawn">
                        <AnswerTemplateLiteral props={{
                            answerClicked:handleAnswer1Click,
                            text: STRINGS_QUESTION_2_ANSWERS.ANSWER_1
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
                <MultipleChoiceAnswer props={{
                    type: "template-literal",
                    correct: STRINGS_QUESTION_2_BOOLEANS.ANSWER_1,
                    answer: STRINGS_QUESTION_2_ANSWERS.ANSWER_1,
                    explanation: STRINGS_QUESTION_2_EXPLANATIONS.ANSWER_1,
                    endQuestion: endQuestion
            }} />
            }
            {answer === 'B' &&
                <MultipleChoiceAnswer props={{
                    type: "code",
                    correct: STRINGS_QUESTION_2_BOOLEANS.ANSWER_2,
                    answer: STRINGS_QUESTION_2_ANSWERS.ANSWER_2,
                    explanation: STRINGS_QUESTION_2_EXPLANATIONS.ANSWER_2,
                    endQuestion: retry
                }} />
            }
            {answer === 'C' &&
                <MultipleChoiceAnswer props={{
                    type: "code",
                    correct: STRINGS_QUESTION_2_BOOLEANS.ANSWER_3,
                    answer: STRINGS_QUESTION_2_ANSWERS.ANSWER_3,
                    explanation: STRINGS_QUESTION_2_EXPLANATIONS.ANSWER_3,
                    endQuestion: retry
                }} />
            }
            {answer === 'D' &&
                <MultipleChoiceAnswer props={{
                    type: "code",
                    correct: STRINGS_QUESTION_2_BOOLEANS.ANSWER_4,
                    answer: STRINGS_QUESTION_2_ANSWERS.ANSWER_4,
                    explanation: STRINGS_QUESTION_2_EXPLANATIONS.ANSWER_4,
                    endQuestion: retry
                }} />
            }
        </>
    )
}
  
export default JavaDataTypesStringsQuestion2
  