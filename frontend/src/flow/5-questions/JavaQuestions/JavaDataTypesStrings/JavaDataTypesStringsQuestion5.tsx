import { useState } from "react"
import InputQuestion from "../../../../components/question/InputQuestion"
import InputAnswer from "../../../../components/answer/InputAnswer"
import { STRINGS_QUESTION_5_ANSWERS,
    STRINGS_QUESTION_5_EXPLANATIONS,
    STRINGS_QUESTIONS } from "../../../../helpers/JavaConstants/DataTypesConstants/DataTypeStringsConstants"
import useSound from "use-sound";
import correctSoundEffect from "../../../../../public/sounds/achievement-sound-effect.mp3";
import IncorrectSoundEffect from "../../../../../public/sounds/incorrect-answer-sound-effect.mp3";

function JavaDataTypesStringsQuestion5({props}:{props:any}) {
    const [showAnswer, setShowAnswer] = useState(false);
    const [value, setValue] = useState(`17`);
    const [correct, setCorrect] = useState(false);
    const [playCorrectSoundEffect] = useSound(correctSoundEffect);
    const [playIncorrectSoundEffect] = useSound(IncorrectSoundEffect);

    const handleChange = (event: any) => {
        setValue(event.target.value);
      };

    const endQuestion = () => {
        if (correct){
            props.completeQuestion(true);
            props.updateLessonTracker();

        } else {
            setShowAnswer(false);
        }
    }

    const handleSubmit = () => {
        if (Object.values(STRINGS_QUESTION_5_ANSWERS).includes(value)){
                setCorrect(true);
                playCorrectSoundEffect();
            } else {
                playIncorrectSoundEffect();
            }
        setShowAnswer(true);
    }

    return (
        <>
            {!showAnswer ? 
                <InputQuestion props={{
                    question:STRINGS_QUESTIONS.STRING_QUESTION_5,
                    value:value,
                    handleChange:handleChange,
                    handleSubmit:handleSubmit}} />   
            :
                <>
                    {correct ?
                        (
                        <InputAnswer props={{
                            type: "template-literal",
                            value:value,
                            correct:true,
                            explanation:STRINGS_QUESTION_5_EXPLANATIONS.CORRECT_ANSWER,
                            endQuestion:endQuestion}} />
                        )
                    :
                        (
                        <InputAnswer props={{
                            type: "template-literal",
                            value:value,
                            correct:false,
                            explanation:STRINGS_QUESTION_5_EXPLANATIONS.INCORRECT_ANSWER,
                            endQuestion:endQuestion}} />
                        )    
                    }
                </>
            }
        </>
    )
}
  
export default JavaDataTypesStringsQuestion5
  