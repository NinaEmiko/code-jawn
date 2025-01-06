import { FC } from "react";

interface QuestionProps{
    text: string
}

const Question: FC<QuestionProps> = ({text}) => {

    return (
        <div className="question-jawn">
            <div className="question-text">
                {text}
            </div>
        </div>
    )
}
export default Question;