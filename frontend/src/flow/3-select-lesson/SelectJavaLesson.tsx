import { useEffect, useState } from "react"
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
import { getJavaDataTypesLT } from "../../api/api";
import Display2 from "../../components/Display2";

function JavaLessons({props}:{props:any}) {
    const [showSection, setShowSection] = useState('Data Types');
    const [lessonsCompleted, setLessonsCompleted] = useState(0)

    const getJavaDataTypesLTCall = async () => {
        let completed = 0;
        const data = await getJavaDataTypesLT(props.currentUser.id);
            if (data.stringsLessonIsComplete){
                completed += 1;
            };
            setLessonsCompleted(completed);
    }

    useEffect(() => {
        getJavaDataTypesLTCall();
    })

    const handleButtonClick = (lesson: string) => {
        props.handleRedirectJavaLessons(lesson);
    }

    const handleBackClick = () => {
        props.handleRedirectHome("Select a Language");
        props.handlePageTitle("Select a Language");
    }

    const handleShowSection = (section: string) => {
        setShowSection(section);
    }

  return (
    <>
        {/* <div className="back-btn-container">
            <button className="back-btn-jawn" onClick={handleBackClick}>
                ←
            </button>
        </div> */}
        <Display2>
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
                        <SelectDataTypeLesson props={{
                            handleButtonClick:handleButtonClick,
                            currentUser:props.currentUser,
                            handleShowAppBar:props.handleShowAppBar
                        }} />
                    }

                    {showSection === 'Variables' &&
                        <SelectVariablesLesson props={{handleButtonClick:handleButtonClick}} />
                    }

                    {showSection === 'For Loops' &&
                        <SelectLoopsLesson props={{handleButtonClick:handleButtonClick}} />
                    }
            
                    {showSection === 'Conditionals' &&
                        <SelectConditionalsLesson props={{handleButtonClick:handleButtonClick}} />
                    }
            
                    {showSection === 'Arrays' &&
                        <SelectArraysLesson props={{handleButtonClick:handleButtonClick}} />
                    }

                    {showSection === 'Collections' &&
                        <SelectCollectionsLesson props={{handleButtonClick:handleButtonClick}} />
                    }

                    {showSection === 'Methods' &&
                        <SelectMethodsLesson props={{handleButtonClick:handleButtonClick}} />
                    }

                    {showSection === 'Operators' &&
                        <SelectOperatorsLesson props={{handleButtonClick:handleButtonClick}} />
                    }
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        </Display2>
    </>
  )
}

export default JavaLessons
