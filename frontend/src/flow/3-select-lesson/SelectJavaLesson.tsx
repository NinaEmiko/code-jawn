import { FC, useEffect, useState } from "react"
import SelectVariablesLesson from "./SelectJavaLesson/SelectVariablesLesson";
import SelectLoopsLesson from "./SelectJavaLesson/SelectLoopsLesson";
import SelectConditionalsLesson from "./SelectJavaLesson/SelectConditionalsLesson";
import SelectArraysLesson from "./SelectJavaLesson/SelectArraysLesson";
import SelectCollectionsLesson from "./SelectJavaLesson/SelectCollectionsLesson";
import SelectMethodsLesson from "./SelectJavaLesson/SelectMethodsLesson";
import SelectOperatorsLesson from "./SelectJavaLesson/SelectOperatorsLesson";
import SelectDataTypeLesson from "./SelectJavaLesson/SelectDataTypeLesson";
import { getJavaDataTypesLT } from "../../api/api";
import Display from "../../components/Display";
import { LessonsProps } from "../../App";

const JavaLessons: FC<LessonsProps> = ({currentUser, handleRedirectHome, handleRedirectLanguage}) => {
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
                        <SelectDataTypeLesson
                            handleRedirectLesson={handleButtonClick}
                            currentUser={currentUser}
                        />
                    }

                    {showSection === 'Variables' &&
                        <SelectVariablesLesson />
                    }

                    {showSection === 'For Loops' &&
                        <SelectLoopsLesson />
                    }
            
                    {showSection === 'Conditionals' &&
                        <SelectConditionalsLesson />
                    }
            
                    {showSection === 'Arrays' &&
                        <SelectArraysLesson />
                    }

                    {showSection === 'Collections' &&
                        <SelectCollectionsLesson />
                    }

                    {showSection === 'Methods' &&
                        <SelectMethodsLesson />
                    }

                    {showSection === 'Operators' &&
                        <SelectOperatorsLesson />
                    }
                    <div className="spacer-10" />
                </div>
            </div>
        </Display>
    </>
  )
}

export default JavaLessons
