import { FC, useState } from "react";
import SelectReactLesson from "../lessons/ReactLesson";
import { LanguageProps } from "../types/components";

const ReactLanguage: FC<LanguageProps> = ({handleRedirectHome, currentUser}) => {
    const [activeTab, setActiveTab] = useState("React Lessons");

    const handleRedirectReactLessons = (component: string) => {
        setActiveTab(component);
    }

    return (
        <>
            {activeTab === "React Lessons" &&
                <SelectReactLesson 
                    handleRedirectLanguage={handleRedirectReactLessons}
                    handleRedirectHome={handleRedirectHome}
                    currentUser={currentUser}
                />
              }
        </>
    )
}

export default ReactLanguage
