const ProgressTracker = ({props}:{props:any}) => {
const progress = props.questionsAnswered/props.totalQuestions;
    return (
        <div className="progress-tracker">
        
            <progress value={progress} />

        </div>
    )
}
export default ProgressTracker ;