function SelectOperatorsLesson({props}:{props:any}) {

    const handleButtonClick = (lesson: string) => {
        props.handleButtonClick(lesson);
    }

    return (
        <div className="lesson-btn-container">
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators &&")}> */}

                    &&
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators ||")} */}
                    ||
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators !")} */}
                    !
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators +")} */}
                    +
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators -")} */}
                    -
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators /") */}
                    /
            </button>
            <button className="lesson-btn"
                onClick={() =>null}>
                {/* onClick={() => handleButtonClick("Java Operators *")} */}
                    *
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators %") */}
                    %
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators ++") */}
                    ++
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators --") */}
                    --
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators <") */}
                    {"<"}
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators >") */}
                    {">"}
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators ==") */}
                    ==
            </button>
            <button className="lesson-btn"
                onClick={() =>null}>
                {/* onClick={() => handleButtonClick("Java Operators <=") */}
                    {"<="}
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators >=") */}
                    {">="}
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators !=") */}
                    !=
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Operators =") */}
                    =
            </button>
        </div>
    )
}
export default SelectOperatorsLesson