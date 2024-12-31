import { FC, useState } from "react";
import SelectSpringBootLesson from "../3-select-lesson/SelectSpringBootLesson";
import { LanguageProps, LessonsProps } from "../../App";

const SelectSpringBootLessons: FC<LanguageProps> = ({handleRedirectHome, currentUser}) => {
    const [activeTab, setActiveTab] = useState("SpringBoot Lessons");

    const handleRedirectSpringBootLessons = (component: string) => {
          setActiveTab(component);
      }

    return (
        <>
            {activeTab === "SpringBoot Lessons" &&
                <SelectSpringBootLesson 
                    handleRedirectLanguage={handleRedirectSpringBootLessons}
                    handleRedirectHome={handleRedirectHome}
                    currentUser={currentUser}
                />
              }
        </>
    )
}

export default SelectSpringBootLessons
