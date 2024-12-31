import { FC, useState } from "react";
import SelectReactLesson from "../3-select-lesson/SelectReactLesson";
import { LanguageProps, LessonsProps } from "../../App";

const SelectReactLessons: FC<LanguageProps> = ({handleRedirectHome, currentUser}) => {
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

export default SelectReactLessons
