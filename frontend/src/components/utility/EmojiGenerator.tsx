import { progressConstants } from "../helpers/ProgressConstants";

const EmojiGenerator = ({props}:{props:any}) => {

    return (
        <div className="question-text">
            {props.lessonsCompleted === 0 &&
            progressConstants.NOT_STARTED
            }
            {props.lessonsCompleted <= props.totalLessons *.33 &&
            props.lessonsCompleted > 0 &&
            progressConstants.STARTED
            }
            {props.lessonsCompleted > props.totalLessons *.33 && 
            props.lessonsCompleted <= props.totalLessons *.66 &&
            progressConstants.IN_PROGRESS
            }
            {props.lessonsCompleted > props.totalLessons *.66 &&
            props.lessonsCompleted < props.totalLessons &&
            progressConstants.NEAR_COMPLETED
            }
            {props.lessonsCompleted === props.totalLessons &&
            progressConstants.COMPLETED
            }
        </div>
    )
}
export default EmojiGenerator;