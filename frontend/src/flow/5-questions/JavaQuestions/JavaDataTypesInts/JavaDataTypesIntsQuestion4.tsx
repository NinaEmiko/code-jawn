
import { useState } from "react"
import { INTS_QUESTION_4_ANSWERS, INTS_QUESTIONS, INTS_QUESTION_4_EXPLANATIONS } from "../../../../helpers/JavaConstants/DataTypesConstants/DataTypesIntsConstants";
import useSound from "use-sound";
import correctSoundEffect from "../../../../../public/sounds/achievement-sound-effect.mp3";
import IncorrectSoundEffect from "../../../../../public/sounds/incorrect-answer-sound-effect.mp3";
import InputAnswer from "../../../../components/answer/InputAnswer";
import InputQuestion from "../../../../components/question/InputQuestion";


function JavaDataTypesIntsQuestion4({props}:{props:any}) {
    const [showAnswer, setShowAnswer] = useState(false);
    const [value, setValue] = useState('"17"');
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
        }    }

    const handleSubmit = () => {
        if (Object.values(INTS_QUESTION_4_ANSWERS).includes(value)){
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
                    question:INTS_QUESTIONS.INT_QUESTION_4,
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
                            explanation:INTS_QUESTION_4_EXPLANATIONS.CORRECT_ANSWER,
                            endQuestion:endQuestion}} />
                        )
                    :
                        (
                        <InputAnswer props={{
                            type: "template-literal",
                            value:value,
                            correct:false,
                            explanation:INTS_QUESTION_4_EXPLANATIONS.INCORRECT_ANSWER,
                            endQuestion:endQuestion}} />
                        )    
                    }
                </>
            }
        </>
    )
}
  
export default JavaDataTypesIntsQuestion4
  