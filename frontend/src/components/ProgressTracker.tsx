const ProgressTracker = ({props}:{props:any}) => {
const progress = (props.questionsAnswered/props.totalQuestions) * 100;
    return (
        <>
            <div className="spacer"></div>
            <div className="progress-container">
                <div className="progress-tracker" style={{ width: `${progress}%` }}></div>
            </div>
        </>
    )
}
export default ProgressTracker ;