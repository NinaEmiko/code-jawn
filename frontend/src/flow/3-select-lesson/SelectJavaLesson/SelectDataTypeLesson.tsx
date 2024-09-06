import { useEffect, useState } from "react";
import { getJavaDataTypesLT } from "../../../api/api";

function SelectDataTypeLesson({props}:{props:any}) {
    const [stringsComplete, setStringsComplete] = useState(false);

    const getJavaDataTypesLTCall = async () => {
        const data = await getJavaDataTypesLT(props.currentUser.id);
            setStringsComplete(data.stringsLessonIsComplete);
    }

    const handleButtonClick = (lesson: string) => {
        props.handleShowAppBar(false);
        props.handleButtonClick(lesson);
        props.handleUpdateHeader("Java Data Types", true)
    }

    useEffect(() => {
        getJavaDataTypesLTCall();
    })

    return (
        <div className="lesson-btn-container">
            {stringsComplete ?
                <button className="lesson-btn-complete"
                    onClick={() => handleButtonClick("Java Data Types Strings")}>
                        Strings →
                </button>
            :
                <button className="lesson-btn"
                    onClick={() => handleButtonClick("Java Data Types Strings")}>
                        Strings →
                </button>
            }       
            <button className="lesson-btn"
                // onClick={() => handleButtonClick("Java Data Types ints")}>
                    onClick={() => null}>
                    ints →
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Data Types booleans")} */}
                    booleans →
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Data Types Longs")} */}
                    Longs →
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Data Types floats")} */}
                    floats →
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Data Types doubles")} */}
                    doubles →
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Data Types shorts")} */}
                    shorts →
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Data Types bytes")} */}
                    bytes →
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Data Types chars")} */}
                    chars →
            </button>
            <button className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Data Types Comments")} */}
                    Comments →
            </button>
        </div>
    )
}
export default SelectDataTypeLesson