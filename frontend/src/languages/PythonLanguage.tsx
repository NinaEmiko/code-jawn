import { FC, useState } from "react";
import SelectPythonLesson from "../lessons/PythonLesson";
import { LanguageProps } from "../types/components";

const PythonLanguage: FC<LanguageProps> = ({handleRedirectHome, currentUser}) => {
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

export default PythonLanguage
