function SelectMethodsLesson({props}:{props:any}) {

    const handleButtonClick = (lesson: string) => {
        props.handleButtonClick(lesson);
    }

    return (
        <div className="lesson-btn-container">
            <button className="lesson-btn"
                onClick={() => handleButtonClick("Java Methods Signatures")}>
                    Method Signatures
            </button>
            <button className="lesson-btn"
                onClick={() => handleButtonClick("Java Methods Return Types")}>
                    Return Types
            </button>
            <button className="lesson-btn"
                onClick={() => handleButtonClick("Java Methods Parameters")}>
                    Parameters
            </button>
            <button className="lesson-btn"
                onClick={() => handleButtonClick("Java Methods Return Statement")}>
                    Return Statement
            </button>
            <button className="lesson-btn"
                onClick={() => handleButtonClick("Java Methods Scope")}>
                    Scope
            </button>
            <button className="lesson-btn"
                onClick={() => handleButtonClick("Java Methods Naming")}>
                    Naming Methods
            </button>
            <button className="lesson-btn"
                onClick={() => handleButtonClick("Java Methods Overloading")}>
                    Overloading Methods
            </button>
        </div>
    )
}
export default SelectMethodsLesson