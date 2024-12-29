function SelectVariablesLesson({props}:{props:any}) {

    const handleButtonClick = (lesson: string) => {
        props.handleButtonClick(lesson);
    }

    return (
        <div className="lesson-btn-container">
            <div className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Initializing Variables")} */}
                    Initializing Variables
            </div>
            <div className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("")} */}
                    Naming Variables
            </div>
            <div className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("")} */}
                    Assigning Values
            </div>
            <div className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("")} */}
                    Updating Values
            </div>
            <div className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("")} */}
                    Constants
            </div>
        </div>
    )
}
export default SelectVariablesLesson