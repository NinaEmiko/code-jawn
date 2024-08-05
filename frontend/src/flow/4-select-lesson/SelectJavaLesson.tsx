import { useState } from "react"
import Container from "../../components/Container"
import Display from "../../components/Display"
import PageName from "../../components/PageName"
import SelectDataTypeLesson from "./SelectJavaLesson/SelectDataTypeLession";
import SelectVariablesLesson from "./SelectJavaLesson/SelectVariablesLesson";
import SelectForLoopsLesson from "./SelectJavaLesson/SelectForLoopsLesson";
import SelectWhileLoopsLesson from "./SelectJavaLesson/SelectWhileLoopsLesson";


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
                    <div className="lesson-section-jawn">While Loops</div>
                    <div className="lesson-section-jawn">If/Else</div>
                    <div className="lesson-section-jawn">Switch</div>
                    <div className="lesson-section-jawn">Comments</div>
                    <div className="lesson-section-jawn">Arrays</div>
                    <div className="lesson-section-jawn">Collections</div>
                    <div className="lesson-section-jawn">Try/Catch</div>
                    <div className="lesson-section-jawn">Methods</div>
                    <div className="lesson-section-jawn">Operators</div>
                </div>
            </div>
        </Display>
    </Container>
  )
}

export default JavaLessons
