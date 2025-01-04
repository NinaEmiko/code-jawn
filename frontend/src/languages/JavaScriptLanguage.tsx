import { FC, useState } from "react";
import SelectJavaScriptLesson from "../lessons/JavaScriptLesson";
import { LanguageProps } from "../types/components";

const JavaScriptLanguage: FC<LanguageProps> = ({handleRedirectHome, currentUser}) => {
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

export default JavaScriptLanguage
