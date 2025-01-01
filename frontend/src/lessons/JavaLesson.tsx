import { FC, useState } from "react"
import Display from "../components/Display";
import { LessonsProps } from "../types/components";
import DataTypesSubLesson from "../sub-lessons/java/DataTypesSubLesson";
import OperatorsSubLesson from "../sub-lessons/java/OperatorsSubLesson";
import MethodsSubLesson from "../sub-lessons/java/MethodsSubLesson";
import CollectionsSubLesson from "../sub-lessons/java/CollectionsSubLesson";
import ArraysSubLesson from "../sub-lessons/java/ArraysSubLesson";
import ConditionalsSubLesson from "../sub-lessons/java/ConditionalsSubLesson";
import VariablesSubLesson from "../sub-lessons/java/VariablesSubLesson";
import ForLoopsSubLesson from "../sub-lessons/java/ForLoopsSubLesson";

const lessons = [
    "Data Types",
    "Variables",
    "For Loops",
    "Conditionals",
    "Arrays",
    "Collections",
    "Methods",
    "Operators"
]

const JavaLesson: FC<LessonsProps> = ({currentUser, handleRedirectHome, handleRedirectLanguage}) => {
    const [showSection, setShowSection] = useState('Data Types');

    const handleButtonClick = (lesson: string) => {
        handleRedirectLanguage(lesson);
    }

    const handleBackClick = () => {
        handleRedirectHome("Select a Language");
    }

    const handleShowSection = (section: string) => {
        setShowSection(section);
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
                        {lessons.map((item, index) => (
                            <div className="lesson-jawnski" onClick={() => handleShowSection(item)}>{item}</div>
                        ))}
                    </ul>
                </div>
                <div className="right-section">
                    <h2 className="lesson-title">{showSection}</h2>

                    {showSection === 'Data Types' && <DataTypesSubLesson handleRedirectLesson={handleButtonClick} currentUser={currentUser} /> }
                    {showSection === 'Variables' && <VariablesSubLesson handleRedirectLesson={handleButtonClick} currentUser={currentUser} /> }
                    {showSection === 'For Loops' && <ForLoopsSubLesson handleRedirectLesson={handleButtonClick} currentUser={currentUser} /> }
                    {showSection === 'Conditionals' && <ConditionalsSubLesson handleRedirectLesson={handleButtonClick} currentUser={currentUser} /> }
                    {showSection === 'Arrays' && <ArraysSubLesson handleRedirectLesson={handleButtonClick} currentUser={currentUser} /> }
                    {showSection === 'Collections' && <CollectionsSubLesson /> }
                    {showSection === 'Methods' && <MethodsSubLesson handleRedirectLesson={handleButtonClick} currentUser={currentUser} /> }
                    {showSection === 'Operators' && <OperatorsSubLesson handleRedirectLesson={handleButtonClick} currentUser={currentUser} /> }

                    <div className="spacer-10" />
                </div>
            </div>
        </Display>
    </>
  )
}

export default JavaLesson
