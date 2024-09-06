import { useState } from "react"
import SelectVariablesLesson from "./SelectJavaLesson/SelectVariablesLesson";
import SelectLoopsLesson from "./SelectJavaLesson/SelectLoopsLesson";
import SelectConditionalsLesson from "./SelectJavaLesson/SelectConditionalsLesson";
import SelectArraysLesson from "./SelectJavaLesson/SelectArraysLesson";
import SelectCollectionsLesson from "./SelectJavaLesson/SelectCollectionsLesson";
import SelectMethodsLesson from "./SelectJavaLesson/SelectMethodsLesson";
import SelectOperatorsLesson from "./SelectJavaLesson/SelectOperatorsLesson";
import LanguageLessonContainer from "../../components/lesson/LanguageLessonContainer";
import SelectDataTypeLesson from "./SelectJavaLesson/SelectDataTypeLesson";
import Display from "../../components/Display";
import BackButton from "../../assets/back-button-icon-accent.png"

function JavaLessons({props}:{props:any}) {
    const [showSection, setShowSection] = useState('');


    const handleButtonClick = (lesson: string) => {
        props.handleRedirectJavaLessons(lesson);
    }

    const handleBackClick = () => {
        props.handleRedirectHome("Select a Language");
        props.handlePageTitle("Select a Language");
    }

    const handleShowSection = (section: string) => {
        showSection === section ? setShowSection('') : setShowSection(section);
    }

  return (
    <>
        <div className="back-btn-container">
            <button className="back-btn-jawn" onClick={handleBackClick}>
                Back
                </button>
        </div>
        <Display>
            <div className="spacer-20" />
            <div className="container-for-language-btn2">
                <div className="language-btn-container2" onClick={() => handleShowSection("Data Types")}>
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
                        <SelectDataTypeLesson props={{
                            handleButtonClick:handleButtonClick,
                            currentUser:props.currentUser,
                            handleShowAppBar:props.handleShowAppBar
                        }} />
                    }
                </div>
            </div>

            <div className="container-for-language-btn2">
                <div className="language-btn-container2" onClick={() => handleShowSection("Variables")}>
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

            <div className="container-for-language-btn2">
                <div className="language-btn-container2" onClick={() => handleShowSection("For Loops")}>
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
            
            <div className="container-for-language-btn2">
                <div className="language-btn-container2" onClick={() => handleShowSection("Conditionals")}>
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
            
            <div className="container-for-language-btn2">
                <div className="language-btn-container2" onClick={() => handleShowSection("Arrays")}>
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
            
            <div className="container-for-language-btn2">
                <div className="language-btn-container2" onClick={() => handleShowSection("Collections")}>
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
            
            <div className="container-for-language-btn2">
                <div className="language-btn-container2" onClick={() => handleShowSection("Methods")}>
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
            
            <div className="container-for-language-btn2">
                <div className="language-btn-container2" onClick={() => handleShowSection("Operators")}>
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
            <div className="spacer-10" />
        </Display>
    </>
  )
}

export default JavaLessons
