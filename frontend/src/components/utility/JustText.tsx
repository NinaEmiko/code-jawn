import { FC } from "react";

interface JustTextProps{
    text: string
}

const JustText: FC<JustTextProps> = ({text}) => {

    return (
        <div className="text">
            {text}
        </div>
    )
}
export default JustText;