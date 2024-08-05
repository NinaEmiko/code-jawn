function SelectDataTypeLesson({props}:{props:any}) {

    const handleButtonClick = (lesson: string) => {
        props.handleButtonClick(lesson);
    }

    return (
        <div className="lesson-btn-container">
            <button className="lesson-btn"
                onClick={() => handleButtonClick("Java Data Types Strings")}>
                    Strings
            </button>
            <button className="lesson-btn"
                onClick={() => handleButtonClick("Java Data Types ints")}>
                    ints
            </button>
            <button className="lesson-btn"
                onClick={() => handleButtonClick("Java Data Types booleans")}>
                    booleans
            </button>
            <button className="lesson-btn"
                onClick={() => handleButtonClick("Java Data Types Longs")}>
                    Longs
            </button>
            <button className="lesson-btn"
                onClick={() => handleButtonClick("Java Data Types floats")}>
                    floats
            </button>
            <button className="lesson-btn"
                onClick={() => handleButtonClick("Java Data Types doubles")}>
                    doubles
            </button>
            <button className="lesson-btn"
                onClick={() => handleButtonClick("Java Data Types shorts")}>
                    shorts
            </button>
            <button className="lesson-btn"
                onClick={() => handleButtonClick("Java Data Types bytes")}>
                    bytes
            </button>
            <button className="lesson-btn"
                onClick={() => handleButtonClick("Java Data Types chars")}>
                    chars
            </button>
            <button className="lesson-btn"
                onClick={() => handleButtonClick("Java Data Types Comments")}>
                    Comments
            </button>
        </div>
    )
}
export default SelectDataTypeLesson