import { useState } from "react"
import Container from "../../components/Container"
import Display from "../../components/Display"
import PageName from "../../components/PageName"
import SelectDataTypeLesson from "./SelectJavaLesson/SelectDataTypeLession";
import SelectVariablesLesson from "./SelectJavaLesson/SelectVariablesLesson";
import SelectForLoopsLesson from "./SelectJavaLesson/SelectForLoopsLesson";
import SelectWhileLoopsLesson from "./SelectJavaLesson/SelectWhileLoopsLesson";
import SelectIfElseLesson from "./SelectJavaLesson/SelectIfElseLesson";
import SelectSwitchLesson from "./SelectJavaLesson/SelectSwitchLesson";
import SelectArraysLesson from "./SelectJavaLesson/SelectArraysLesson";
import SelectCollectionsLesson from "./SelectJavaLesson/SelectCollectionsLesson";
import SelectMethodsLesson from "./SelectJavaLesson/SelectMethodsLesson";
import SelectOperatorsLesson from "./SelectJavaLesson/SelectOperatorsLesson";


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
        <PageName props={{title: "Java Lessons", handleBackClick:handleBackClick, buttonOneText:"Back"}} />
        <Display>
            <div className="parent-jawn-lessons">
                <div className="child-jawn-lessons">

                    <div onClick={() => handleShowSection('Variables')} className="lesson-section-jawn">Variables</div>
                    {showSection === 'Variables' &&
                        <SelectVariablesLesson props={{handleButtonClick:handleButtonClick}} />
                    }

                    <div onClick={() => handleShowSection('Data Types')} className="lesson-section-jawn">Data Types</div>
                    {showSection === 'Data Types' &&
                        <SelectDataTypeLesson props={{handleButtonClick:handleButtonClick}} />
                    }

                    <div onClick={() => handleShowSection('For Loops')} className="lesson-section-jawn">For Loops</div>
                    {showSection === 'For Loops' &&
                        <SelectForLoopsLesson props={{handleButtonClick:handleButtonClick}} />
                    }

                    <div onClick={() => handleShowSection('While Loops')} className="lesson-section-jawn">While Loops</div>
                    {showSection === 'While Loops' &&
                        <SelectWhileLoopsLesson props={{handleButtonClick:handleButtonClick}} />
                    }
                    
                    <div onClick={() => handleShowSection('If/Else')} className="lesson-section-jawn">If/Else</div>
                    {showSection === 'If/Else' &&
                        <SelectIfElseLesson props={{handleButtonClick:handleButtonClick}} />
                    }

                    <div onClick={() => handleShowSection('Switch')} className="lesson-section-jawn">Switch</div>
                    {showSection === 'Switch' &&
                        <SelectSwitchLesson props={{handleButtonClick:handleButtonClick}} />
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
