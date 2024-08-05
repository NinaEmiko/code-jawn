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
                onClick={() => handleButtonClick("Java Methods Parameters")}>
                    Parameters
            </button>
            <button className="lesson-btn"
                onClick={() => handleButtonClick("Java Methods Return Statement")}>
                    Return Statement
            </button>
            <button className="lesson-btn"
                onClick={() => handleButtonClick("Java Methods Break Statement")}>
                    Break Statement
            </button>
            <button className="lesson-btn"
                onClick={() => handleButtonClick("Java Methods Continue Statement")}>
                    Continue Statement
            </button>
            <button className="lesson-btn"
                onClick={() => handleButtonClick("Java Methods Scope")}>
                    Scope
            </button>
        </div>
    )
}
export default SelectMethodsLesson