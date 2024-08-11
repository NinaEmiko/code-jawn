import { useState } from "react"
import Container from "../../components/Container"
import Display from "../../components/Display"
import SelectVariablesLesson from "./SelectJavaLesson/SelectVariablesLesson";
import SelectLoopsLesson from "./SelectJavaLesson/SelectLoopsLesson";
import SelectConditionalsLesson from "./SelectJavaLesson/SelectConditionalsLesson";
import SelectArraysLesson from "./SelectJavaLesson/SelectArraysLesson";
import SelectCollectionsLesson from "./SelectJavaLesson/SelectCollectionsLesson";
import SelectMethodsLesson from "./SelectJavaLesson/SelectMethodsLesson";
import SelectOperatorsLesson from "./SelectJavaLesson/SelectOperatorsLesson";
import LanguageLessonContainer from "../../components/LanguageLessonContainer";
import SelectDataTypeLesson from "./SelectJavaLesson/SelectDataTypeLesson";


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

                    <div className="language-btn-container" onClick={() => handleShowSection("For Loops")}>
                        <LanguageLessonContainer props={{
                            lesson: "For Loops",
                            handleShowSection:handleShowSection,
                            percentageComplete:"0",
                            iconAltText:"For Loops Icon"}} />
                    </div>
                    {showSection === 'For Loops' &&
                        <SelectLoopsLesson props={{handleButtonClick:handleButtonClick}} />
                    }
                    
                    <div className="language-btn-container" onClick={() => handleShowSection("Conditionals")}>
                        <LanguageLessonContainer props={{
                            lesson: "Conditionals",
                            handleShowSection:handleShowSection,
                            percentageComplete:"0",
                            iconAltText:"Conditionals Icon"}} />
                    </div>
                    {showSection === 'Conditionals' &&
                        <SelectConditionalsLesson props={{handleButtonClick:handleButtonClick}} />
                    }
                    
                    <div className="language-btn-container" onClick={() => handleShowSection("Arrays")}>
                        <LanguageLessonContainer props={{
                            lesson: "Arrays",
                            handleShowSection:handleShowSection,
                            percentageComplete:"0",
                            iconAltText:"Arrays Icon"}} />
                    </div>
                    {showSection === 'Arrays' &&
                        <SelectArraysLesson props={{handleButtonClick:handleButtonClick}} />
                    }
                    
                    <div className="language-btn-container" onClick={() => handleShowSection("Collections")}>
                        <LanguageLessonContainer props={{
                            lesson: "Collections",
                            handleShowSection:handleShowSection,
                            percentageComplete:"0",
                            iconAltText:"Collections Icon"}} />
                    </div>
                    {showSection === 'Collections' &&
                        <SelectCollectionsLesson props={{handleButtonClick:handleButtonClick}} />
                    }
                    
                    <div className="language-btn-container" onClick={() => handleShowSection("Methods")}>
                        <LanguageLessonContainer props={{
                            lesson: "Methods",
                            handleShowSection:handleShowSection,
                            percentageComplete:"0",
                            iconAltText:"Methods Icon"}} />
                    </div>
                    {showSection === 'Methods' &&
                        <SelectMethodsLesson props={{handleButtonClick:handleButtonClick}} />
                    }
                    
                    <div className="language-btn-container" onClick={() => handleShowSection("Operators")}>
                        <LanguageLessonContainer props={{
                            lesson: "Operators",
                            handleShowSection:handleShowSection,
                            percentageComplete:"0",
                            iconAltText:"Operators Icon"}} />
                    </div>
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
