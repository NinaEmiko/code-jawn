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
import Controls from "../../components/Controls";
import { progressConstants } from "../../helpers/ProgressConstants";


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
        <div className="back-btn-container">
            <button className="back-btn-jawn" onClick={handleBackClick}>{"‹"}</button>
        </div>
        <Display>
            <div className="parent-jawn">
                <div className="child-jawn">

                    <div className="container-for-language-btn">
                        <div className="language-btn-container" onClick={() => handleShowSection("Data Types")}>
                            <LanguageLessonContainer props={{
                                lesson: "Data Types",
                                handleShowSection:handleShowSection,
                                lessonsCompleted: 0,
                                totalLessons: 1,
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
                                iconAltText:"Operators Icon"}} />
                        </div>
                        <div>
                            {showSection === 'Operators' &&
                                <SelectOperatorsLesson props={{handleButtonClick:handleButtonClick}} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Display>
        {/* <Controls children={undefined} /> */}
    </Container>
  )
}

export default JavaLessons
