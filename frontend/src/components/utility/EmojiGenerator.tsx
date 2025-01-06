import { FC } from "react";
import { progressConstants } from "../../helpers/ProgressConstants";

interface EmojiGeneratorProps{
    lessonsCompleted: number,
    totalLessons: number,
}

const EmojiGenerator: FC<EmojiGeneratorProps> = ({lessonsCompleted, totalLessons}) => {

    return (
        <div className="progress-emoji">
            {lessonsCompleted === 0 &&
            progressConstants.NOT_STARTED
            }
            {lessonsCompleted <= totalLessons *.33 &&
            lessonsCompleted > 0 &&
            progressConstants.STARTED
            }
            {lessonsCompleted > totalLessons *.33 && 
            lessonsCompleted <= totalLessons *.66 &&
            progressConstants.IN_PROGRESS
            }
            {lessonsCompleted > totalLessons *.66 &&
            lessonsCompleted < totalLessons &&
            progressConstants.NEAR_COMPLETED
            }
            {lessonsCompleted === totalLessons &&
            progressConstants.COMPLETED
            }
        </div>
    )
}
export default EmojiGenerator;