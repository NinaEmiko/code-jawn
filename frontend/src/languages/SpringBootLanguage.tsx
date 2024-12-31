import { FC, useState } from "react";
import SelectSpringBootLesson from "../lessons/SpringBootLesson";
import { LanguageProps } from "../App";

const SpringBootLanguage: FC<LanguageProps> = ({handleRedirectHome, currentUser}) => {
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

export default SpringBootLanguage
