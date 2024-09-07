const JavaDataTypesIntsPostLesson = ({props}:{props:any}) => {

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
            <button className="input-btn" onClick={() => handleClickContinue()}>Continue</button>
            }
        </>         
    )
}
export default JavaDataTypesIntsPostLesson;