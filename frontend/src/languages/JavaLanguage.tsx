import { FC, useState } from "react";
import SelectJavaLesson from "../lessons/JavaLesson";
import JavaDataTypesStrings from "../lectures/java/data-types/JavaDataTypesStringsLecture";
import { LanguageProps } from "../App";

const JavaLanguage: FC<LanguageProps> = ({handleRedirectHome, currentUser}) => {
    const [activeTab, setActiveTab] = useState("Java Lessons");

    const handleRedirectJavaLessons = (component: string) => {
        setActiveTab(component);
    }

    return (
        <>
            {activeTab === "Java Lessons" &&
                <SelectJavaLesson 
                    handleRedirectLanguage={handleRedirectJavaLessons}
                    handleRedirectHome={handleRedirectHome}
                    currentUser={currentUser}
                />
              }
              {activeTab === "Java Data Types Strings" &&
                  <JavaDataTypesStrings
                        handleRedirectLesson={handleRedirectJavaLessons}
                        currentUser={currentUser}
                    />
              }
        </>
    )
}

export default JavaLanguage
