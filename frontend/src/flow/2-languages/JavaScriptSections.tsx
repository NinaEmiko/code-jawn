import { FC, useState } from "react";
import SelectJavaScriptLesson from "../3-select-lesson/SelectJavaScriptLesson";
import { LanguageProps, LessonsProps } from "../../App";

const SelectJavaScriptLessons: FC<LanguageProps> = ({handleRedirectHome, currentUser}) => {
    const [activeTab, setActiveTab] = useState("JavaScript Lessons");

    const handleRedirectJavaScriptLessons = (component: string) => {
          setActiveTab(component);
    }

    return (
        <>
            {activeTab === "JavaScript Lessons" &&
                <SelectJavaScriptLesson 
                    handleRedirectLanguage={handleRedirectJavaScriptLessons}
                    handleRedirectHome={handleRedirectHome}
                    currentUser={currentUser}
                />
              }
        </>
    )
}

export default SelectJavaScriptLessons
