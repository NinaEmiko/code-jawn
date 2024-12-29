function SelectOperatorsLesson({props}:{props:any}) {

    const handleButtonClick = (lesson: string) => {
        props.handleButtonClick(lesson);
    }

    return (
        <div className="lesson-btn-container">
            <div className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators &&")}> */}
                    &&
            </div>
            <div className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators ||")} */}
                    ||
            </div>
            <div className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators !")} */}
                    !
            </div>
            <div className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators +")} */}
                    +
            </div>
            <div className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators -")} */}
                    -
            </div>
            <div className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators /") */}
                    /
            </div>
            <div className="lesson-btn"
                onClick={() =>null}>
                {/* onClick={() => handleButtonClick("Java Operators *")} */}
                    *
            </div>
            <div className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators %") */}
                    %
            </div>
            <div className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators ++") */}
                    ++
            </div>
            <div className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators --") */}
                    --
            </div>
            <div className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators <") */}
                    {"<"}
            </div>
            <div className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators >") */}
                    {">"}
            </div>
            <div className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators ==") */}
                    ==
            </div>
            <div className="lesson-btn"
                onClick={() =>null}>
                {/* onClick={() => handleButtonClick("Java Operators <=") */}
                    {"<="}
            </div>
            <div className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators >=") */}
                    {">="}
            </div>
            <div className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators !=") */}
                    !=
            </div>
            <div className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators =") */}
                    =
            </div>
        </div>
    )
}
export default SelectOperatorsLesson