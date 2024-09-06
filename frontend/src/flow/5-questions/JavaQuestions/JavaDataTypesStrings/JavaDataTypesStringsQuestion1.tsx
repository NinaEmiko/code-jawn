import AnswerCodeBlock from "../../../../components/answer/AnswerCodeBlock"
import Question from "../../../../components/question/Question"
import { useState } from "react"
import useSound from "use-sound";
import correctSoundEffect from "../../../../../public/sounds/achievement-sound-effect.mp3";
import IncorrectSoundEffect from "../../../../../public/sounds/incorrect-answer-sound-effect.mp3";
import AnswerTemplateLiteral from "../../../../components/answer/AnswerTemplateLiteral"
import DividerJawn from "../../../../components/utility/DividerJawn"
import MultipleChoiceAnswer from "../../../../components/answer/MultipleChoiceAnswer"
import AnswerBoolean from "../../../../components/answer/AnswerBoolean"
import { STRINGS_QUESTION_1_ANSWERS,
    STRINGS_QUESTION_1_BOOLEANS,
    STRINGS_QUESTION_1_EXPLANATIONS,
    STRINGS_QUESTIONS } from "../../../../helpers/JavaConstants/DataTypesConstants/DataTypeStringsConstants"

function JavaDataTypesStringsQuestion1({props}:{props:any}) {
    const [answer, setAnswer] = useState('');
    const [playCorrectSoundEffect] = useSound(correctSoundEffect);
    const [playIncorrectSoundEffect] = useSound(IncorrectSoundEffect);

    const handleAnswer1Click = () => {
        setAnswer("A"); 
        playIncorrectSoundEffect();
    }
    const handleAnswer2Click = () => { 
        setAnswer("B"); 
        playIncorrectSoundEffect();
    }
    const handleAnswer3Click = () => { 
        setAnswer("C"); 
        playCorrectSoundEffect();
    }
    const handleAnswer4Click = () => {
        setAnswer("D");
        playIncorrectSoundEffect();
    }

    const endQuestion = () => { props.completeQuestion(true); }

    const retry = () => { setAnswer(''); }

    return (
        <>
            {answer === '' &&
                <div className="question-container">
                    <Question props={{text: STRINGS_QUESTIONS.STRING_QUESTION_1}} />
                    <div className="answer-jawn">
                        <AnswerBoolean props={{
                            answerClicked:handleAnswer1Click,
                            text: STRINGS_QUESTION_1_ANSWERS.ANSWER_1
                        }} />
                        <DividerJawn />
                        <AnswerCodeBlock props={{
                            answerClicked:handleAnswer2Click,
                            code: STRINGS_QUESTION_1_ANSWERS.ANSWER_2
                            }} />
                        <DividerJawn />
                        <AnswerCodeBlock props={{
                            answerClicked:handleAnswer3Click,
                            code: STRINGS_QUESTION_1_ANSWERS.ANSWER_3
                            }} />
                        <DividerJawn />
                        <AnswerTemplateLiteral props={{
                            answerClicked:handleAnswer4Click,
                            text: STRINGS_QUESTION_1_ANSWERS.ANSWER_4
                            }} />
                    </div>
                </div>
            }
            {answer === 'A' &&
                <MultipleChoiceAnswer props={{
                    type: "boolean",
                    correct: STRINGS_QUESTION_1_BOOLEANS.ANSWER_1,
                    answer: STRINGS_QUESTION_1_ANSWERS.ANSWER_1,
                    explanation: STRINGS_QUESTION_1_EXPLANATIONS.ANSWER_1,
                    endQuestion: retry
                }} />
            }
            {answer === 'B' &&
                <MultipleChoiceAnswer props={{
                    type: "code",
                    correct: STRINGS_QUESTION_1_BOOLEANS.ANSWER_2,
                    answer: STRINGS_QUESTION_1_ANSWERS.ANSWER_2,
                    explanation: STRINGS_QUESTION_1_EXPLANATIONS.ANSWER_2,
                    endQuestion: retry
                }} />
            }
            {answer === 'C' &&
                <MultipleChoiceAnswer props={{
                    type: "code",
                    correct: STRINGS_QUESTION_1_BOOLEANS.ANSWER_3,
                    answer: STRINGS_QUESTION_1_ANSWERS.ANSWER_3,
                    explanation: STRINGS_QUESTION_1_EXPLANATIONS.ANSWER_3,
                    endQuestion: endQuestion
                }} />
            }
            {answer === 'D' &&
                <MultipleChoiceAnswer props={{
                    type: "template-literal",
                    correct: STRINGS_QUESTION_1_BOOLEANS.ANSWER_4,
                    answer: STRINGS_QUESTION_1_ANSWERS.ANSWER_4,
                    explanation: STRINGS_QUESTION_1_EXPLANATIONS.ANSWER_4,
                    endQuestion: retry
                }} />
            }
        </>
    )
}
  
export default JavaDataTypesStringsQuestion1
  