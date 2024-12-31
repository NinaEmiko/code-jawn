import { FC, useState } from "react"
import useSound from "use-sound";
import correctSoundEffect from "../../../../../public/sounds/achievement-sound-effect.mp3";
import IncorrectSoundEffect from "../../../../../public/sounds/incorrect-answer-sound-effect.mp3";
import { QuestionProps } from "../../../../App";
import { STRINGS_QUESTION_4_ANSWERS, STRINGS_QUESTION_4_EXPLANATIONS, STRINGS_QUESTIONS } from "../../../../helpers/JavaConstants/DataTypesConstants/DataTypeStringsConstants";
import Question from "../../../../components/question/Question";
import AnswerText from "../../../../components/answer/AnswerText";
import DividerJawn from "../../../../components/utility/DividerJawn";
import Modal from "../../../../components/Modal";

const JavaDataTypesStringsQuestion4: FC<QuestionProps> = ({completeQuestion}) => {
    const [playCorrectSoundEffect] = useSound(correctSoundEffect);
    const [playIncorrectSoundEffect] = useSound(IncorrectSoundEffect);
    const [isModalOpenA, setIsModalOpenA] = useState(false);
    const [isModalOpenB, setIsModalOpenB] = useState(false);
    const [isModalOpenC, setIsModalOpenC] = useState(false);
    const [isModalOpenD, setIsModalOpenD] = useState(false);

    const handleAnswer1Click = () => {
        playCorrectSoundEffect();
        setIsModalOpenA(true);
    }
    const handleAnswer2Click = () => { 
        playIncorrectSoundEffect();
        setIsModalOpenB(true);
    }
    const handleAnswer3Click = () => { 
        playIncorrectSoundEffect();
        setIsModalOpenC(true);
    }
    const handleAnswer4Click = () => {
        playIncorrectSoundEffect();
        setIsModalOpenD(true);
    }

    const endQuestion = () => { completeQuestion(true); }

    const retry = () => { 
        setIsModalOpenA(false);
        setIsModalOpenB(false);
        setIsModalOpenC(false);
        setIsModalOpenD(false);
    }

    return (
        <>
            <div className="question-container">
                <Question text={STRINGS_QUESTIONS.STRING_QUESTION_4} />
                <div className="answer-jawn">
                        
                    <AnswerText
                        answerClicked={handleAnswer1Click}
                        text={STRINGS_QUESTION_4_ANSWERS.ANSWER_1}
                    />
                    <DividerJawn />
                    <AnswerText
                        answerClicked={handleAnswer2Click}
                        text={STRINGS_QUESTION_4_ANSWERS.ANSWER_2}
                    />
                    <DividerJawn />
                    <AnswerText
                        answerClicked={handleAnswer3Click}
                        text={STRINGS_QUESTION_4_ANSWERS.ANSWER_3}
                    />
                    <DividerJawn />
                    <AnswerText
                        answerClicked={handleAnswer4Click}
                        text={STRINGS_QUESTION_4_ANSWERS.ANSWER_4}
                    />
                </div>
            </div>
            <Modal isOpen={isModalOpenA}>
                <h2 className="modal-correct">{"Correct!"}</h2>
                <p className="modal-explanation">{STRINGS_QUESTION_4_EXPLANATIONS.ANSWER_1}</p>
                <button className="modal-close-btn" onClick={()=> endQuestion()}>OK</button>
            </Modal>
            <Modal isOpen={isModalOpenB}>
                <h2 className="modal-incorrect">{"Incorrect"}</h2>
                <p className="modal-explanation">{STRINGS_QUESTION_4_EXPLANATIONS.ANSWER_2}</p>
                <button className="modal-close-btn" onClick={()=> retry()}>OK</button>
            </Modal>
            <Modal isOpen={isModalOpenC}>
                <h2 className="modal-incorrect">{"Incorrect"}</h2>
                <p className="modal-explanation">{STRINGS_QUESTION_4_EXPLANATIONS.ANSWER_3}</p>
                <button className="modal-close-btn" onClick={()=> retry()}>OK</button>
            </Modal>
            <Modal isOpen={isModalOpenD}>
                <h2 className="modal-incorrect">{"Incorrect"}</h2>
                <p className="modal-explanation">{STRINGS_QUESTION_4_EXPLANATIONS.ANSWER_4}</p>
                <button className="modal-close-btn" onClick={()=> retry()}>OK</button>
            </Modal>
        </>
    )
}
  
export default JavaDataTypesStringsQuestion4
  