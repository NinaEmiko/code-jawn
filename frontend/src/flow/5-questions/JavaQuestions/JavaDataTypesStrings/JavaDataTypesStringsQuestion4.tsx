import Question from "../../../../components/question/Question"
import { useState } from "react"
import AnswerText from "../../../../components/answer/AnswerText"
import DividerJawn from "../../../../components/utility/DividerJawn"
import MultipleChoiceAnswer from "../../../../components/answer/MultipleChoiceAnswer"
import { STRINGS_QUESTION_4_ANSWERS,
    STRINGS_QUESTION_4_BOOLEANS,
    STRINGS_QUESTION_4_EXPLANATIONS,
    STRINGS_QUESTIONS } from "../../../../helpers/JavaConstants/DataTypesConstants/DataTypeStringsConstants"

function JavaDataTypesStringsQuestion4({props}:{props:any}) {
    const [answer, setAnswer] = useState('');

    const handleAnswer1Click = () => { setAnswer("A"); }
    const handleAnswer2Click = () => { setAnswer("B"); }
    const handleAnswer3Click = () => { setAnswer("C"); }
    const handleAnswer4Click = () => { setAnswer("D"); }

    const endQuestion = () => { props.completeQuestion(true); }

    const retry = () => { setAnswer(''); }

    return (
        <>
            {answer === '' &&
                <div className="question-container">
                    <Question props={{text: STRINGS_QUESTIONS.STRING_QUESTION_4}} />
                    <div className="answer-jawn">
                            
                        <AnswerText props={{
                            answerClicked:handleAnswer1Click,
                            text: STRINGS_QUESTION_4_ANSWERS.ANSWER_1
                            }} />
                            <DividerJawn />
                        <AnswerText props={{
                            answerClicked:handleAnswer2Click,
                            text: STRINGS_QUESTION_4_ANSWERS.ANSWER_2
                            }} />
                            <DividerJawn />
                        <AnswerText props={{
                            answerClicked:handleAnswer3Click,
                            text: STRINGS_QUESTION_4_ANSWERS.ANSWER_3
                            }} />
                            <DividerJawn />
                        <AnswerText props={{
                            answerClicked:handleAnswer4Click,
                            text: STRINGS_QUESTION_4_ANSWERS.ANSWER_4
                            }} />
                    </div>
                </div>
            }
            {answer === 'A' &&
                <MultipleChoiceAnswer props={{
                    type: "text",
                    correct:STRINGS_QUESTION_4_BOOLEANS.ANSWER_1,
                    answer:STRINGS_QUESTION_4_ANSWERS.ANSWER_1,
                    explanation:STRINGS_QUESTION_4_EXPLANATIONS.ANSWER_1,
                    endQuestion:endQuestion}} />
            }
            {answer === 'B' &&
                <MultipleChoiceAnswer props={{
                    type: "text",
                    correct:STRINGS_QUESTION_4_BOOLEANS.ANSWER_2,
                    answer:STRINGS_QUESTION_4_ANSWERS.ANSWER_2,
                    explanation:STRINGS_QUESTION_4_EXPLANATIONS.ANSWER_2,
                    endQuestion:retry}} />
            }
            {answer === 'C' &&
                <MultipleChoiceAnswer props={{
                    type: "text",
                    correct:STRINGS_QUESTION_4_BOOLEANS.ANSWER_3,
                    answer:STRINGS_QUESTION_4_ANSWERS.ANSWER_3,
                    explanation:STRINGS_QUESTION_4_EXPLANATIONS.ANSWER_3,
                    endQuestion:retry}} />
            }
            {answer === 'D' &&
                <MultipleChoiceAnswer props={{
                    type: "text",
                    correct:STRINGS_QUESTION_4_BOOLEANS.ANSWER_4,
                    answer:STRINGS_QUESTION_4_ANSWERS.ANSWER_4,
                    explanation:STRINGS_QUESTION_4_EXPLANATIONS.ANSWER_4,
                    endQuestion:retry}} />
            }
        </>
    )
}
  
export default JavaDataTypesStringsQuestion4
  