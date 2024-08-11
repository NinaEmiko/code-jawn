function SelectCollectionsLesson({props}:{props:any}) {

    const handleButtonClick = (lesson: string) => {
        props.handleButtonClick(lesson);
    }

    return (
        <div className="lesson-btn-container">
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("")} */}
                    Coming Soon
            </button>
        </div>
    )
}
export default SelectCollectionsLesson