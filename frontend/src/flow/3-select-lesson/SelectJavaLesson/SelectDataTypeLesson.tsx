import { FC, useEffect, useState } from "react";
import { getJavaDataTypesLT } from "../../../api/api";
import { SubLessonsProps } from "../../../App";

const SelectDataTypeLesson: FC<SubLessonsProps> = ({currentUser, handleRedirectLesson}) => {
    const [stringsComplete, setStringsComplete] = useState(false);
    const [intsComplete, setIntsComplete] = useState(false);

    const getJavaDataTypesLTCall = async () => {
        const data = await getJavaDataTypesLT(currentUser.id);
            setStringsComplete(data.stringsLessonIsComplete);
            setIntsComplete(data.intsLessonIsComplete);
    }

    const handleButtonClick = (lesson: string) => {
        handleRedirectLesson(lesson);
    }

    useEffect(() => {
        getJavaDataTypesLTCall();
    })

    return (
        <div className="lesson-btn-container">
            <div className="lesson-btn"
                onClick={() => handleButtonClick("Java Data Types Strings")}>
                    Strings
                    {stringsComplete ? (
                        <div className="lesson-complete">Lesson complete!</div>
                    ): (
                        <div className="lesson-incomplete">Not started</div>
                    )}
            </div>

            <div className="lesson-btn"
                onClick={() => handleButtonClick("Java Data Types ints")}>
                    ints
                    {intsComplete ? (
                        <div className="lesson-complete">Lesson complete!</div>
                    ): (
                        <div className="lesson-incomplete">Not started</div>
                    )}
            </div>
            <div className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Data Types booleans")} */}
                    booleans
            </div>
            <div className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Data Types Longs")} */}
                    Longs
            </div>
            <div className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Data Types floats")} */}
                    floats
            </div>
            <div className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Data Types doubles")} */}
                    doubles
            </div>
            <div className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Data Types shorts")} */}
                    shorts
            </div>
            <div className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Data Types bytes")} */}
                    bytes
            </div>
            <div className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Data Types chars")} */}
                    chars
            </div>
            <div className="lesson-btn"
                onClick={() => null}>
                {/* onClick={() => handleButtonClick("Java Data Types Comments")} */}
                    Comments
            </div>
        </div>
    )
}
export default SelectDataTypeLesson