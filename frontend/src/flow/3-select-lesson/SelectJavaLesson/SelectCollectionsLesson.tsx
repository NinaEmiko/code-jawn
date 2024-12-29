function SelectCollectionsLesson({props}:{props:any}) {

    const handleButtonClick = (lesson: string) => {
        props.handleButtonClick(lesson);
    }

    return (
        <div className="lesson-btn-container">
        <div className="lesson-btn"
            onClick={() => null}>
            {/* onClick={() => handleButtonClick("Java Data Types booleans")} */}
            Coming Soon
        </div>
    </div>
    )
}
export default SelectCollectionsLesson