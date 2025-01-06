import { FC } from "react";

interface AnswerTextProps{
    text: string,
    answerClicked: ()=>void
}

const AnswerText: FC<AnswerTextProps> = ({text, answerClicked}) => {
    
    const handleAnswerClick = () => {
        answerClicked();
    }

    return (
        <div onClick={() => handleAnswerClick()} className="answer-text-template-literal">
            {text}
        </div>
    )
}
export default AnswerText;