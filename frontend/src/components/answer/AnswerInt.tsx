import { FC } from "react";

interface AnswerIntProps{
    text: string,
    answerClicked: ()=>void
}

const AnswerInt: FC<AnswerIntProps> = ({text, answerClicked}) => {
    
    const handleAnswerClick = () => {
        answerClicked();
    }

    return (
        <div onClick={() => handleAnswerClick()} className="answer-text-int">
            {text}
        </div>
    )
}
export default AnswerInt;