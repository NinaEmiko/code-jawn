import { FC } from "react";

interface AnswerBooleanProps{
    text: string,
    answerClicked: ()=>void
}

const AnswerBoolean: FC<AnswerBooleanProps> = ({text, answerClicked}) => {
    
    const handleAnswerClick = () => {
        answerClicked();
    }

    return (
        <div onClick={() => handleAnswerClick()} className="answer-text-boolean">
            {text}
        </div>
    )
}
export default AnswerBoolean;