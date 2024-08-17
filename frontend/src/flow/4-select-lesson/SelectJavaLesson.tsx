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
import LoginContainer from "../../components/LoginContainer";
import SubDisplay from "../../components/SubDisplay";
import HeaderDisplay from "../../components/HeaderDisplay";
import Header from "../../components/Header";

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
    <LoginContainer>
        <HeaderDisplay>
            <div className="back-btn-container">
                <button className="back-btn-jawn" onClick={handleBackClick}>{"‹"}</button>
            </div>
            <Header props={{text: "Java Lessons"}} />
        </HeaderDisplay>
        <SubDisplay>
            <div className="container-for-language-btn">
                <div className="language-btn-container" onClick={() => handleShowSection("Data Types")}>
                    <LanguageLessonContainer props={{
                        lesson: "Data Types",
                        handleShowSection:handleShowSection,
                        lessonsCompleted: 0,
                        totalLessons: 1,
                        expanded: showSection === "Data Types",
                        iconAltText:"Data Types Icon"}} />
                </div>
                <div>
                    {showSection === 'Data Types' &&
                        <SelectDataTypeLesson props={{handleButtonClick:handleButtonClick}} />
                    }
                </div>
            </div>

            <div className="container-for-language-btn">
                <div className="language-btn-container" onClick={() => handleShowSection("Variables")}>
                    <LanguageLessonContainer props={{
                        lesson: "Variables",
                        handleShowSection:handleShowSection,
                        lessonsCompleted: 0,
                        totalLessons: 1,
                        expanded: showSection === "Variables",
                        iconAltText:"Variables Icon"}} />
                </div>
                <div>
                    {showSection === 'Variables' &&
                        <SelectVariablesLesson props={{handleButtonClick:handleButtonClick}} />
                    }
                </div>
            </div>

            <div className="container-for-language-btn">
                <div className="language-btn-container" onClick={() => handleShowSection("For Loops")}>
                    <LanguageLessonContainer props={{
                        lesson: "For Loops",
                        handleShowSection:handleShowSection,
                        lessonsCompleted: 0,
                        totalLessons: 1,
                        expanded: showSection === "For Loops",
                        iconAltText:"For Loops Icon"}} />
                </div>
                <div>
                    {showSection === 'For Loops' &&
                        <SelectLoopsLesson props={{handleButtonClick:handleButtonClick}} />
                    }
                </div>
            </div>
            
            <div className="container-for-language-btn">
                <div className="language-btn-container" onClick={() => handleShowSection("Conditionals")}>
                    <LanguageLessonContainer props={{
                        lesson: "Conditionals",
                        handleShowSection:handleShowSection,
                        lessonsCompleted: 0,
                        totalLessons: 1,
                        expanded: showSection === "Conditionals",
                        iconAltText:"Conditionals Icon"}} />
                </div>
                <div>
                    {showSection === 'Conditionals' &&
                        <SelectConditionalsLesson props={{handleButtonClick:handleButtonClick}} />
                    }
                </div>
            </div>
            
            <div className="container-for-language-btn">
                <div className="language-btn-container" onClick={() => handleShowSection("Arrays")}>
                    <LanguageLessonContainer props={{
                        lesson: "Arrays",
                        handleShowSection:handleShowSection,
                        lessonsCompleted: 0,
                        totalLessons: 1,
                        expanded: showSection === "Arrays",
                        iconAltText:"Arrays Icon"}} />
                </div>
                <div>
                    {showSection === 'Arrays' &&
                        <SelectArraysLesson props={{handleButtonClick:handleButtonClick}} />
                    }
                </div>
            </div>
            
            <div className="container-for-language-btn">
                <div className="language-btn-container" onClick={() => handleShowSection("Collections")}>
                    <LanguageLessonContainer props={{
                        lesson: "Collections",
                        handleShowSection:handleShowSection,
                        lessonsCompleted: 0,
                        totalLessons: 1,
                        expanded: showSection === "Collections",
                        iconAltText:"Collections Icon"}} />
                </div>
                <div>
                    {showSection === 'Collections' &&
                        <SelectCollectionsLesson props={{handleButtonClick:handleButtonClick}} />
                    }
                </div>
            </div>
            
            <div className="container-for-language-btn">
                <div className="language-btn-container" onClick={() => handleShowSection("Methods")}>
                    <LanguageLessonContainer props={{
                        lesson: "Methods",
                        handleShowSection:handleShowSection,
                        lessonsCompleted: 0,
                        totalLessons: 1,
                        expanded: showSection === "Methods",
                        iconAltText:"Methods Icon"}} />
                </div>
                <div>
                    {showSection === 'Methods' &&
                        <SelectMethodsLesson props={{handleButtonClick:handleButtonClick}} />
                    }
                </div>
            </div>
            
            <div className="container-for-language-btn">
                <div className="language-btn-container" onClick={() => handleShowSection("Operators")}>
                    <LanguageLessonContainer props={{
                        lesson: "Operators",
                        handleShowSection:handleShowSection,
                        lessonsCompleted: 0,
                        totalLessons: 1,
                        expanded: showSection === "Operators",
                        iconAltText:"Operators Icon"}} />
                </div>
                <div>
                    {showSection === 'Operators' &&
                        <SelectOperatorsLesson props={{handleButtonClick:handleButtonClick}} />
                    }
                </div>
            </div>
        </SubDisplay>
    </LoginContainer>
  )
}

export default JavaLessons
