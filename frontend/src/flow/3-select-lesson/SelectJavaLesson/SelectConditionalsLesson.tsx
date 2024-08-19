function SelectIfElseLesson({props}:{props:any}) {

    const handleButtonClick = (lesson: string) => {
        props.handleButtonClick(lesson);
    }

    return (
        <div className="lesson-btn-container">
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Conditionals If")} */}
                    If
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Conditionals Else")} */}
                    Else
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Conditionals Elseif")} */}
                    Elseif
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Conditionals Multiple Ifs")} */}
                    Multiple Ifs
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Conditionals Multiple Elseifs")} */}
                    Multiple Elseifs
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Conditionals If/Else Nesting")} */}
                    If/Else Nesting
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Conditionals Ternary")} */}
                    Ternary
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Switch Syntax")} */}
                    Switch Syntax
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Switch Expressions")} */}
                    Switch Expressions
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Switch Cases")} */}
                    Switch Cases
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Methods Break Statement")} */}
                    Break Statement
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Methods Continue Statement")} */}
                    Continue Statement
            </button>
        </div>
    )
}
export default SelectIfElseLesson