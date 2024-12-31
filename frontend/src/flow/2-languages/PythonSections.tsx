import { FC, useState } from "react";
import SelectPythonLesson from "../3-select-lesson/SelectPythonLesson";
import { LanguageProps, LessonsProps } from "../../App";

const SelectPythonLessons: FC<LanguageProps> = ({handleRedirectHome, currentUser}) => {
    const [activeTab, setActiveTab] = useState("Python Lessons");

    const handleRedirectPythonLessons = (component: string) => {
          setActiveTab(component);
      }

    return (
        <>
            {activeTab === "Python Lessons" &&
                <SelectPythonLesson 
                    handleRedirectLanguage={handleRedirectPythonLessons}
                    handleRedirectHome={handleRedirectHome}
                    currentUser={currentUser}
                />
              }
        </>
    )
}

export default SelectPythonLessons
