import AnswerCodeBlock from "../../../../components/answer/AnswerCodeBlock"
import Question from "../../../../components/question/Question"
import { useState } from "react"
import AnswerTemplateLiteral from "../../../../components/answer/AnswerTemplateLiteral"
import DividerJawn from "../../../../components/utility/DividerJawn"
import AnswerBoolean from "../../../../components/answer/AnswerBoolean"
import { STRINGS_QUESTION_1_ANSWERS,
    STRINGS_QUESTION_1_EXPLANATIONS,
    STRINGS_QUESTIONS } from "../../../../helpers/JavaConstants/DataTypesConstants/DataTypeStringsConstants"
import useSound from "use-sound";
import correctSoundEffect from "../../../../../public/sounds/achievement-sound-effect.mp3";
import IncorrectSoundEffect from "../../../../../public/sounds/incorrect-answer-sound-effect.mp3";
import Modal from "../../../../components/Modal"

function JavaDataTypesStringsQuestion1({props}:{props:any}) {
    const [playCorrectSoundEffect] = useSound(correctSoundEffect);
    const [playIncorrectSoundEffect] = useSound(IncorrectSoundEffect);
    const [isModalOpenA, setIsModalOpenA] = useState(false);
    const [isModalOpenB, setIsModalOpenB] = useState(false);
    const [isModalOpenC, setIsModalOpenC] = useState(false);
    const [isModalOpenD, setIsModalOpenD] = useState(false);

    const handleAnswer1Click = () => {
        playIncorrectSoundEffect();
        setIsModalOpenA(true);
    }
    const handleAnswer2Click = () => { 
        playIncorrectSoundEffect();
        setIsModalOpenB(true);
    }
    const handleAnswer3Click = () => { 
        playCorrectSoundEffect();
        setIsModalOpenC(true);
    }
    const handleAnswer4Click = () => {
        playIncorrectSoundEffect();
        setIsModalOpenD(true);
    }

    const endQuestion = () => { props.completeQuestion(true); }

    const retry = () => { 
        setIsModalOpenA(false);
        setIsModalOpenB(false);
        setIsModalOpenC(false);
        setIsModalOpenD(false);
    }

    return (
        <>
            <div className="question-container">
                <Question text={STRINGS_QUESTIONS.STRING_QUESTION_1} />
                <div className="answer-jawn">
                    <AnswerBoolean
                        answerClicked={handleAnswer1Click}
                        text={STRINGS_QUESTION_1_ANSWERS.ANSWER_1}
                    />
                    <DividerJawn />
                    <AnswerCodeBlock
                        answerClicked={handleAnswer2Click}
                        code={STRINGS_QUESTION_1_ANSWERS.ANSWER_2}
                    />
                    <DividerJawn />
                    <AnswerCodeBlock
                        answerClicked={handleAnswer3Click}
                        code={STRINGS_QUESTION_1_ANSWERS.ANSWER_3}
                    />
                    <DividerJawn />
                    <AnswerTemplateLiteral
                        answerClicked={handleAnswer4Click}
                        text={STRINGS_QUESTION_1_ANSWERS.ANSWER_4}
                    />
                </div>
            </div>
            <Modal isOpen={isModalOpenA}>
                <h2 className="modal-incorrect">{"Incorrect"}</h2>
                <p className="modal-explanation">{STRINGS_QUESTION_1_EXPLANATIONS.ANSWER_1}</p>
                <button className="modal-close-btn" onClick={()=> retry()}>OK</button>
            </Modal>
            <Modal isOpen={isModalOpenB}>
                <h2 className="modal-incorrect">{"Incorrect"}</h2>
                <p className="modal-explanation">{STRINGS_QUESTION_1_EXPLANATIONS.ANSWER_2}</p>
                <button className="modal-close-btn" onClick={()=> retry()}>OK</button>
            </Modal>
            <Modal isOpen={isModalOpenC}>
                <h2 className="modal-correct">{"Correct!"}</h2>
                <p className="modal-explanation">{STRINGS_QUESTION_1_EXPLANATIONS.ANSWER_3}</p>
                <button className="modal-close-btn" onClick={()=> endQuestion()}>OK</button>
            </Modal>
            <Modal isOpen={isModalOpenD}>
                <h2 className="modal-incorrect">{"Incorrect"}</h2>
                <p className="modal-explanation">{STRINGS_QUESTION_1_EXPLANATIONS.ANSWER_4}</p>
                <button className="modal-close-btn" onClick={()=> retry()}>OK</button>
            </Modal>
        </>
    )
}
  
export default JavaDataTypesStringsQuestion1
  