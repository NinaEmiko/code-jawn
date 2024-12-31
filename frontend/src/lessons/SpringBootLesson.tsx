import { FC, useState } from "react"
import Display from "../components/Display";
import { LessonsProps } from "../App";

const SpringBootLesson: FC<LessonsProps> = ({handleRedirectHome}) => {
    const [showSection, setShowSection] = useState('Coming Soon');

    const handleBackClick = () => {
        handleRedirectHome("Select a Language");
    }

    return (
        <>
            <Display>
                <div className="container">
                    <div className="left-section">
                        <div className="language-btn-link2" onClick={() => handleBackClick()}>
                            « Back to Languages
                        </div>
                        <h2 className="text">Lessons</h2>
                        <ul>
                        </ul>
                    </div>
                    <div className="right-section">
                        <h2 className="lesson-title">{showSection}</h2>

                    </div>
                </div>
            </Display>
        </>
    )
}

export default SpringBootLesson
