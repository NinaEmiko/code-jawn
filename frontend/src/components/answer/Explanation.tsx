import { FC } from "react";

interface ExplanationProps{
    explanation: string
}

const Explanation: FC<ExplanationProps> = ({explanation}) => {

    return (
        <div className="question-explanation">
            {explanation}
        </div>
        
    )
}
export default Explanation;