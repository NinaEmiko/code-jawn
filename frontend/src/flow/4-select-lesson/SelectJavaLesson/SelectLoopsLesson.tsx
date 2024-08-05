function SelectForLoopsLesson({props}:{props:any}) {

    const handleButtonClick = (lesson: string) => {
        props.handleButtonClick(lesson);
    }

    return (
        <div className="lesson-btn-container">
            <button className="lesson-btn"
                onClick={() => handleButtonClick("Java For Loops Syntax")}>
                    For Loops Syntax
            </button>
            <button className="lesson-btn"
                onClick={() => handleButtonClick("Java For Loops Condition")}>
                    For Loops Condition
            </button>
            <button className="lesson-btn"
                onClick={() => handleButtonClick("Java For Loops Incrementing/Decrementing")}>
                    For Loops Incrementing/Decrementing
            </button>
            <button className="lesson-btn"
                onClick={() => handleButtonClick("Java For Loops Nested")}>
                    Nested For Loops
            </button>
            <button className="lesson-btn"
                onClick={() => handleButtonClick("Java While Loops Syntax")}>
                    While Loops Syntax
            </button>
            <button className="lesson-btn"
                onClick={() => handleButtonClick("Java While Loops Condition")}>
                    While Loops Condition
            </button>
            <button className="lesson-btn"
                onClick={() => handleButtonClick("Java Do While Loops Syntax")}>
                    Do While Loops Syntax
            </button>
        </div>
    )
}
export default SelectForLoopsLesson