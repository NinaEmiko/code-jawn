import { FC, useEffect, useState } from "react"
import { getJavaDataTypesLT } from "../api/api";
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
    const [lessonsCompleted, setLessonsCompleted] = useState(0)

    const getJavaDataTypesLTCall = async () => {
        let completed = 0;
        const data = await getJavaDataTypesLT(currentUser.id);
            if (data.stringsLessonIsComplete){
                completed += 1;
            };
            setLessonsCompleted(completed);
    }

    useEffect(() => {
        getJavaDataTypesLTCall();
    })

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
                    {showSection === 'Data Types' &&
                        <DataTypesSubLesson
                            handleRedirectLesson={handleButtonClick}
                            currentUser={currentUser}
                        />
                    }

                    {showSection === 'Variables' &&
                        <VariablesSubLesson />
                    }

                    {showSection === 'For Loops' &&
                        <ForLoopsSubLesson />
                    }
            
                    {showSection === 'Conditionals' &&
                        <ConditionalsSubLesson />
                    }
            
                    {showSection === 'Arrays' &&
                        <ArraysSubLesson />
                    }

                    {showSection === 'Collections' &&
                        <CollectionsSubLesson />
                    }

                    {showSection === 'Methods' &&
                        <MethodsSubLesson />
                    }

                    {showSection === 'Operators' &&
                        <OperatorsSubLesson />
                    }
                    <div className="spacer-10" />
                </div>
            </div>
        </Display>
    </>
  )
}

export default JavaLesson
