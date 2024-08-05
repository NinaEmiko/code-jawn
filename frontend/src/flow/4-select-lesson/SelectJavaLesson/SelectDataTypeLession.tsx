function SelectDataTypeLesson({props}:{props:any}) {

    const handleButtonClick = (lesson: string) => {
        props.handleButtonClick(lesson);
    }

    return (
        <div className="lesson-btn-container">
            <button 
                className="lesson-btn"
                onClick={() => handleButtonClick("Java Data Types Strings")}
                >
                    Strings
            </button>
            <button 
                className="lesson-btn"
                onClick={() => handleButtonClick("Java Data Types ints")}
                >
                    ints
            </button>
            <button 
                className="lesson-btn"
                onClick={() => handleButtonClick("Java Data Types ints")}
                >
                    booleans
            </button>
            <button 
                className="lesson-btn"
                onClick={() => handleButtonClick("Java Data Types ints")}
                >
                    Longs
            </button>
            <button 
                className="lesson-btn"
                onClick={() => handleButtonClick("Java Data Types ints")}
                >
                    floats
            </button>
            <button 
                className="lesson-btn"
                onClick={() => handleButtonClick("Java Data Types ints")}
                >
                    doubles
            </button>
            <button 
                className="lesson-btn"
                onClick={() => handleButtonClick("Java Data Types ints")}
                >
                    shorts
            </button>
            <button 
                className="lesson-btn"
                onClick={() => handleButtonClick("Java Data Types ints")}
                >
                    bytes
            </button>
            <button 
                className="lesson-btn"
                onClick={() => handleButtonClick("Java Data Types ints")}
                >
                    chars
            </button>
        </div>
    )
}
export default SelectDataTypeLesson