import { useState } from "react"
import Container from "../../components/Container"
import Display from "../../components/Display"
import SelectDataTypeLesson from "./SelectJavaLesson/SelectDataTypeLession";
import SelectVariablesLesson from "./SelectJavaLesson/SelectVariablesLesson";
import SelectLoopsLesson from "./SelectJavaLesson/SelectLoopsLesson";
import SelectConditionalsLesson from "./SelectJavaLesson/SelectConditionalsLesson";
import SelectArraysLesson from "./SelectJavaLesson/SelectArraysLesson";
import SelectCollectionsLesson from "./SelectJavaLesson/SelectCollectionsLesson";
import SelectMethodsLesson from "./SelectJavaLesson/SelectMethodsLesson";
import SelectOperatorsLesson from "./SelectJavaLesson/SelectOperatorsLesson";
import LanguageLessonContainer from "../../components/LanguageLessonContainer";


function JavaLessons({props}:{props:any}) {
    const [showSection, setShowSection] = useState('');


    const handleButtonClick = (lesson: string) => {
        props.handleRedirectJavaLessons(lesson);
    }

    const handleBackClick = () => {
        props.handleRedirectHome("Select a Language");
    }

    const handleShowSection = (section: string) => {
        showSection === section ? setShowSection('') : setShowSection(section);
    }

  return (
    <Container>
        <button className="back-btn-jawn" onClick={handleBackClick}>{"‹"}</button>
        <Display>
            <div className="parent-jawn-lessons">
                <div className="child-jawn-lessons">
                    <div className="language-btn-container" onClick={() => handleShowSection("Data Types")}>
                        <LanguageLessonContainer props={{
                            lesson: "Data Types",
                            handleShowSection:handleShowSection,
                            percentageComplete:"0",
                            iconAltText:"Data Types Icon"}} />
                    </div>
                    {showSection === 'Data Types' &&
                        <SelectDataTypeLesson props={{handleButtonClick:handleButtonClick}} />
                    }
                    <div className="language-btn-container" onClick={() => handleShowSection("Variables")}>
                        <LanguageLessonContainer props={{
                            lesson: "Variables",
                            handleShowSection:handleShowSection,
                            percentageComplete:"0",
                            iconAltText:"Variables Icon"}} />
                    </div>
                    {showSection === 'Variables' &&
                        <SelectVariablesLesson props={{handleButtonClick:handleButtonClick}} />
                    }

                    <div onClick={() => handleShowSection('For Loops')} className="lesson-section-jawn">For Loops</div>
                    {showSection === 'For Loops' &&
                        <SelectLoopsLesson props={{handleButtonClick:handleButtonClick}} />
                    }
                    
                    <div onClick={() => handleShowSection('Conditionals')} className="lesson-section-jawn">Conditionals</div>
                    {showSection === 'Conditionals' &&
                        <SelectConditionalsLesson props={{handleButtonClick:handleButtonClick}} />
                    }
                    
                    <div onClick={() => handleShowSection('Arrays')} className="lesson-section-jawn">Arrays</div>
                    {showSection === 'Arrays' &&
                        <SelectArraysLesson props={{handleButtonClick:handleButtonClick}} />
                    }
                    
                    <div onClick={() => handleShowSection('Collections')} className="lesson-section-jawn">Collections</div>
                    {showSection === 'Collections' &&
                        <SelectCollectionsLesson props={{handleButtonClick:handleButtonClick}} />
                    }
                    
                    <div onClick={() => handleShowSection('Methods')} className="lesson-section-jawn">Methods</div>
                    {showSection === 'Methods' &&
                        <SelectMethodsLesson props={{handleButtonClick:handleButtonClick}} />
                    }
                    
                    <div onClick={() => handleShowSection('Operators')} className="lesson-section-jawn">Operators</div>
                    {showSection === 'Operators' &&
                        <SelectOperatorsLesson props={{handleButtonClick:handleButtonClick}} />
                    }
                </div>
            </div>
        </Display>
    </Container>
  )
}

export default JavaLessons
