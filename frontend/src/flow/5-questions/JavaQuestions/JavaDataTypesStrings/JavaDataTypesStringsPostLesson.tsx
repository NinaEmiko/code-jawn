const JavaDataTypesStringsPostLesson = ({props}:{props:any}) => {

    const handleClickContinue = () => {
        props.handleCompleteLesson()
    }

    return (
        <>
            <div className="question-container">
                <div className="question-jawn">
                    <div className="lesson-congratulations">
                    Good job!!
                    </div>
                </div>
                <div className="answer-jawn-input">   

                </div>
            </div>
            {props.restCallSuccessful &&
            <div className="input-question-container">
                <button className="input-question-btn" onClick={() => handleClickContinue()}>Complete Lesson</button>
            </div>
            }
            </>         
    )
}
export default JavaDataTypesStringsPostLesson;