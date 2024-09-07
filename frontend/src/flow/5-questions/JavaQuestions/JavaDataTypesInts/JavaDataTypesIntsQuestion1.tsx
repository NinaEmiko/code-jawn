import AnswerCodeBlock from "../../../../components/answer/AnswerCodeBlock"
import Question from "../../../../components/question/Question"
import { useState } from "react"
import { 
        INTS_QUESTIONS,
        INTS_QUESTION_1_ANSWERS,
        INTS_QUESTION_1_BOOLEANS,
        INTS_QUESTION_1_EXPLANATIONS
    } from "../../../../helpers/JavaConstants/DataTypesConstants/DataTypesIntsConstants"
import DividerJawn from "../../../../components/utility/DividerJawn"
import useSound from "use-sound";
import correctSoundEffect from "../../../../../public/sounds/achievement-sound-effect.mp3";
import IncorrectSoundEffect from "../../../../../public/sounds/incorrect-answer-sound-effect.mp3";
import MultipleChoiceAnswer from "../../../../components/answer/MultipleChoiceAnswer"

function JavaDataTypesIntsQuestion1({props}:{props:any}) {
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

    const endQuestion = () => {
        props.completeQuestion(true);
    }

    const retry = () => { setAnswer(''); }

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
                        <DividerJawn />
                        <AnswerCodeBlock props={{
                            answerClicked:handleAnswer2Click,
                            code: INTS_QUESTION_1_ANSWERS.ANSWER_2
                            }} />
                        <DividerJawn />
                        <AnswerCodeBlock props={{
                            answerClicked:handleAnswer3Click,
                            code: INTS_QUESTION_1_ANSWERS.ANSWER_3
                            }} />
                        <DividerJawn />
                        <AnswerCodeBlock props={{
                            answerClicked:handleAnswer4Click,
                            code: INTS_QUESTION_1_ANSWERS.ANSWER_4
                            }} />
                    </div>
                </div>
            }
            {answer === 'A' &&
                <MultipleChoiceAnswer props={{
                    type: "code",
                    correct: INTS_QUESTION_1_BOOLEANS.ANSWER_1,
                    answer: INTS_QUESTION_1_ANSWERS.ANSWER_1,
                    explanation: INTS_QUESTION_1_EXPLANATIONS.ANSWER_1,
                    endQuestion: retry
                }} />
            }
            {answer === 'B' &&
                <MultipleChoiceAnswer props={{
                    type: "code",
                    correct: INTS_QUESTION_1_BOOLEANS.ANSWER_2,
                    answer: INTS_QUESTION_1_ANSWERS.ANSWER_2,
                    explanation: INTS_QUESTION_1_EXPLANATIONS.ANSWER_2,
                    endQuestion: retry
                }} />
            }
            {answer === 'C' &&
                <MultipleChoiceAnswer props={{
                    type: "code",
                    correct: INTS_QUESTION_1_BOOLEANS.ANSWER_3,
                    answer: INTS_QUESTION_1_ANSWERS.ANSWER_3,
                    explanation: INTS_QUESTION_1_EXPLANATIONS.ANSWER_3,
                    endQuestion: endQuestion
                }} />
            }
            {answer === 'D' &&
                <MultipleChoiceAnswer props={{
                    type: "code",
                    correct: INTS_QUESTION_1_BOOLEANS.ANSWER_4,
                    answer: INTS_QUESTION_1_ANSWERS.ANSWER_4,
                    explanation: INTS_QUESTION_1_EXPLANATIONS.ANSWER_4,
                    endQuestion: retry
                }} />
            }
        </>
    )
}
  
export default JavaDataTypesIntsQuestion1
  