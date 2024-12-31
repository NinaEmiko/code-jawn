import { FC, useState } from "react";
import SelectPythonLesson from "../3-select-lesson/SelectPythonLesson";
import { LessonsProps } from "../../App";

const SelectPythonLessons: FC<LessonsProps> = ({handleRedirectHome, currentUser}) => {
    const [activeTab, setActiveTab] = useState("Python Lessons");

    const handleRedirectPythonLessons = (component: string) => {
          setActiveTab(component);
      }

    return (
        <>
            {activeTab === "Python Lessons" &&
                <SelectPythonLesson 
                    handleRedirectLanguageLessons={handleRedirectPythonLessons}
                    handleRedirectHome={handleRedirectHome}
                    currentUser={currentUser}
                />
              }
        </>
    )
}

export default SelectPythonLessons
