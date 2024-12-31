import { FC, useState } from "react"
import InputQuestion from "../../../../components/question/InputQuestion"
import { STRINGS_QUESTION_5_ANSWERS,
    STRINGS_QUESTION_5_EXPLANATIONS,
    STRINGS_QUESTIONS } from "../../../../helpers/JavaConstants/DataTypesConstants/DataTypeStringsConstants"
import useSound from "use-sound";
import correctSoundEffect from "../../../../../public/sounds/achievement-sound-effect.mp3";
import IncorrectSoundEffect from "../../../../../public/sounds/incorrect-answer-sound-effect.mp3";
import Modal from "../../../../components/Modal";
import { QuestionProps } from "../../../../App";

const JavaDataTypesStringsQuestion5: FC<QuestionProps> = ({completeQuestion}) => {
    const [value, setValue] = useState(`17`);
    const [playCorrectSoundEffect] = useSound(correctSoundEffect);
    const [playIncorrectSoundEffect] = useSound(IncorrectSoundEffect);
    const [isModalOpenCorrect, setIsModalOpenCorrect] = useState(false);
    const [isModalOpenIncorrect, setIsModalOpenIncorrect] = useState(false);

    const handleChange = (event: any) => {
        setValue(event.target.value);
      };

    const endQuestion = () => {
        completeQuestion(true);
    }

    const handleSubmit = () => {
        if (Object.values(STRINGS_QUESTION_5_ANSWERS).includes(value)){
                playCorrectSoundEffect();
                setIsModalOpenCorrect(true)
            } else {
                playIncorrectSoundEffect();
                setIsModalOpenIncorrect(true)
            }
    }

    const retry = () => {
        setIsModalOpenIncorrect(false)
    }

    return (
        <>
            <InputQuestion
                question={STRINGS_QUESTIONS.STRING_QUESTION_5}
                value={value}
                handleChange={handleChange}
                handleSubmit={handleSubmit} />
            <>
                <Modal isOpen={isModalOpenCorrect}>
                    <h2 className="modal-correct">{"Correct!"}</h2>
                    <p className="modal-explanation">{STRINGS_QUESTION_5_EXPLANATIONS.CORRECT_ANSWER}</p>
                    <button className="modal-close-btn" onClick={()=> endQuestion()}>OK</button>
                </Modal>
                <Modal isOpen={isModalOpenIncorrect}>
                    <h2 className="modal-incorrect">{"Incorrect"}</h2>
                    <p className="modal-explanation">{STRINGS_QUESTION_5_EXPLANATIONS.INCORRECT_ANSWER}</p>
                    <button className="modal-close-btn" onClick={()=> retry()}>OK</button>
                </Modal>
            </>
        </>
    )
}
  
export default JavaDataTypesStringsQuestion5
  