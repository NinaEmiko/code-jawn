import { FC, useState } from "react";
import SelectJavaLesson from "../lessons/JavaLesson";
import JavaDataTypesStrings from "../lectures/java/data-types/JavaDataTypesStringsLecture";
import { LanguageProps } from "../App";
import { JAVA_NAVIGATION_PATHS } from "../helpers/NavigationConstants";

const JavaLanguage: FC<LanguageProps> = ({handleRedirectHome, currentUser}) => {
    const [activeTab, setActiveTab] = useState(JAVA_NAVIGATION_PATHS.DEFAULT);

    const handleRedirectJavaLessons = (component: string) => {
        setActiveTab(component);
    }

    return (
        <>
            {activeTab === JAVA_NAVIGATION_PATHS.DEFAULT &&
                <SelectJavaLesson 
                    handleRedirectLanguage={handleRedirectJavaLessons}
                    handleRedirectHome={handleRedirectHome}
                    currentUser={currentUser}
                />
              }
              {activeTab === JAVA_NAVIGATION_PATHS.STRINGS &&
                  <JavaDataTypesStrings
                        handleRedirectLesson={handleRedirectJavaLessons}
                        currentUser={currentUser}
                    />
              }
        </>
    )
}

export default JavaLanguage
