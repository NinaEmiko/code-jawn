function SelectVariablesLesson({props}:{props:any}) {

    const handleButtonClick = (lesson: string) => {
        props.handleButtonClick(lesson);
    }

    return (
        <div className="lesson-btn-container">
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Initializing Variables")} */}
                    Initializing Variables
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("")} */}
                    Naming Variables
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("")} */}
                    Assigning Values
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("")} */}
                    Updating Values
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("")} */}
                    Constants
            </button>
        </div>
    )
}
export default SelectVariablesLesson