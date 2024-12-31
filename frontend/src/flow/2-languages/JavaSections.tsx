import { FC, useState } from "react";
import SelectJavaLesson from "../3-select-lesson/SelectJavaLesson";
import JavaVariables from "../4-lessons/JavaLessons/JavaVariables/JavaVariables";
import JavaDataTypesStrings from "../4-lessons/JavaLessons/JavaDataTypes/JavaDataTypesStrings";
import JavaDataTypesInts from "../4-lessons/JavaLessons/JavaDataTypes/JavaDataTypesInts";
import { LanguageProps, LessonsProps } from "../../App";

const SelectJavaLessons: FC<LanguageProps> = ({handleRedirectHome, currentUser}) => {
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
              {activeTab === "Java Initializing Variables" &&
                  <JavaVariables

                    />
              }
              {activeTab === "Java Data Types Strings" &&
                  <JavaDataTypesStrings
                        handleRedirectLesson={handleRedirectJavaLessons}
                        currentUser={currentUser}
                    />
              }
              {activeTab === "Java Data Types ints" &&
                  <JavaDataTypesInts
                        handleRedirectLesson={handleRedirectJavaLessons}
                        currentUser={currentUser}
                    />
              }
        </>
    )
}

export default SelectJavaLessons
