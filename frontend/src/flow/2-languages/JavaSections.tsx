import { FC, useState } from "react";
import SelectJavaLesson from "../3-select-lesson/SelectJavaLesson";
import JavaVariables from "../4-lessons/JavaLessons/JavaVariables/JavaVariables";
import JavaDataTypesStrings from "../4-lessons/JavaLessons/JavaDataTypes/JavaDataTypesStrings";
import JavaDataTypesInts from "../4-lessons/JavaLessons/JavaDataTypes/JavaDataTypesInts";
import { LessonsProps } from "../../App";

const SelectJavaLessons: FC<LessonsProps> = ({handleRedirectHome, currentUser}) => {
    const [activeTab, setActiveTab] = useState("Java Lessons");

    const handleRedirectJavaLessons = (component: string) => {
        setActiveTab(component);
    }

    return (
        <>
            {activeTab === "Java Lessons" &&
                <SelectJavaLesson 
                        handleRedirectLanguageLessons={handleRedirectJavaLessons}
                        handleRedirectHome={handleRedirectHome}
                        currentUser={currentUser}
                />
              }
              {activeTab === "Java Initializing Variables" &&
                  <JavaVariables
                      props={{
                          handleRedirectJavaLessons:handleRedirectJavaLessons,
                          handleRedirectHome:handleRedirectHome
                    }} />
              }
              {activeTab === "Java Data Types Strings" &&
                  <JavaDataTypesStrings
                      props={{
                          handleRedirectJavaLessons:handleRedirectJavaLessons,
                          handleRedirectHome:handleRedirectHome,
                          currentUser:currentUser,
                    }} />
              }
              {activeTab === "Java Data Types ints" &&
                  <JavaDataTypesInts
                      props={{
                          handleRedirectJavaLessons:handleRedirectJavaLessons,
                          handleRedirectHome:handleRedirectHome,
                          currentUser:currentUser,
                    }} />
              }
        </>
    )
}

export default SelectJavaLessons
