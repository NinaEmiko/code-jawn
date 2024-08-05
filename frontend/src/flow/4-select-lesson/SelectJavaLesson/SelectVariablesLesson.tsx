function SelectVariablesLesson({props}:{props:any}) {

    const handleButtonClick = (lesson: string) => {
        props.handleButtonClick(lesson);
    }

    return (
        <div className="lesson-btn-container">
            <button 
                className="lesson-btn"
                onClick={() => handleButtonClick("Java Initializing Variables")}
                >
                    Initializing Variables
            </button>
            <button 
                className="lesson-btn"
                onClick={() => handleButtonClick("")}
                >
                    Naming Variables
            </button>
            <button 
                className="lesson-btn"
                onClick={() => handleButtonClick("")}
                >
                    Assigning Values
            </button>
            <button 
                className="lesson-btn"
                onClick={() => handleButtonClick("")}
                >
                    Updating Values
            </button>
            <button 
                className="lesson-btn"
                onClick={() => handleButtonClick("")}
                >
                    Constants
            </button>
        </div>
    )
}
export default SelectVariablesLesson