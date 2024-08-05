import { useState } from "react";
import SelectJavaLesson from "../4-select-lesson/SelectJavaLesson";
import JavaVariables from "../5-lessons/JavaLessons/JavaVariables";
import JavaDataTypes from "../5-lessons/JavaLessons/JavaDataTypes";
import JavaLesson3 from "../5-lessons/JavaLessons/JavaLesson3";

function SelectJavaLessons({props}:{props:any}) {
    const [activeTab, setActiveTab] = useState("Java Lessons");

    const handleRedirectJavaLessons = (component: string) => {
        setActiveTab(component);
      }

  return (
   <>
        {activeTab === "Java Lessons" &&
            <SelectJavaLesson 
              props={{
                handleRedirectJavaLessons:handleRedirectJavaLessons,
                handleRedirectHome:props.handleRedirectHome
              }} />
        }
        {activeTab === "Java Lesson 1" &&
            <JavaVariables
              props={{
                handleRedirectJavaLessons:handleRedirectJavaLessons,
                handleRedirectHome:props.handleRedirectHome
              }} />
        }
        {activeTab === "Java Lesson 2" &&
            <JavaDataTypes
              props={{
                handleRedirectJavaLessons:handleRedirectJavaLessons,
                handleRedirectHome:props.handleRedirectHome
              }} />
        }
        {activeTab === "Java Lesson 3" &&
            <JavaLesson3
                props={{handleRedirectJavaLessons:handleRedirectJavaLessons,
                handleRedirectHome:props.handleRedirectHome
              }} />
        }
   </>
  )
}

export default SelectJavaLessons
