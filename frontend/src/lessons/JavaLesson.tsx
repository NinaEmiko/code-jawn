import { FC, useState } from "react"
import Display from "../components/Display";
import { LessonsProps } from "../App";
import DataTypesSubLesson from "../sub-lessons/java/DataTypesSubLesson";
import OperatorsSubLesson from "../sub-lessons/java/OperatorsSubLesson";
import MethodsSubLesson from "../sub-lessons/java/MethodsSubLesson";
import CollectionsSubLesson from "../sub-lessons/java/CollectionsSubLesson";
import ArraysSubLesson from "../sub-lessons/java/ArraysSubLesson";
import ConditionalsSubLesson from "../sub-lessons/java/ConditionalsSubLesson";
import VariablesSubLesson from "../sub-lessons/java/VariablesSubLesson";
import ForLoopsSubLesson from "../sub-lessons/java/ForLoopsSubLesson";

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
                        <div className="lesson-jawnski" onClick={() => handleShowSection("Data Types")}>Data Types</div>
                        <div className="lesson-jawnski" onClick={() => handleShowSection("Variables")}>Variables</div>
                        <div className="lesson-jawnski" onClick={() => handleShowSection("For Loops")}>For Loops</div>
                        <div className="lesson-jawnski" onClick={() => handleShowSection("Conditionals")}>Conditionals</div>
                        <div className="lesson-jawnski" onClick={() => handleShowSection("Arrays")}>Arrays</div>
                        <div className="lesson-jawnski" onClick={() => handleShowSection("Collections")}>Collections</div>
                        <div className="lesson-jawnski" onClick={() => handleShowSection("Methods")}>Methods</div>
                        <div className="lesson-jawnski" onClick={() => handleShowSection("Operators")}>Operators</div>
                    </ul>
                </div>
                <div className="right-section">
                    <h2 className="lesson-title">{showSection}</h2>

                    {showSection === 'Data Types' && <DataTypesSubLesson handleRedirectLesson={handleButtonClick} currentUser={currentUser} /> }
                    {showSection === 'Variables' && <VariablesSubLesson handleRedirectLesson={handleButtonClick} currentUser={currentUser} /> }
                    {showSection === 'For Loops' && <ForLoopsSubLesson handleRedirectLesson={handleButtonClick} currentUser={currentUser} /> }
                    {showSection === 'Conditionals' && <ConditionalsSubLesson /> }
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
