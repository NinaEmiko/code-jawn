import { useState } from "react";
import SelectJavaLesson from "../4-select-lesson/SelectJavaLesson";
import JavaVariables from "../5-lessons/JavaLessons/JavaVariables/JavaVariables";
import JavaDataTypes from "../5-lessons/JavaLessons/JavaDataTypes/JavaDataTypesStrings";
import JavaLesson3 from "../5-lessons/JavaLessons/JavaLesson3";
import JavaDataTypesStrings from "../5-lessons/JavaLessons/JavaDataTypes/JavaDataTypesStrings";
import JavaDataTypesInts from "../5-lessons/JavaLessons/JavaDataTypes/JavaDataTypesInts";

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
        {activeTab === "Java Initializing Variables" &&
            <JavaVariables
              props={{
                handleRedirectJavaLessons:handleRedirectJavaLessons,
                handleRedirectHome:props.handleRedirectHome
              }} />
        }
        {activeTab === "Java Data Types Strings" &&
            <JavaDataTypesStrings
              props={{
                handleRedirectJavaLessons:handleRedirectJavaLessons,
                handleRedirectHome:props.handleRedirectHome
              }} />
        }
        {activeTab === "Java Data Types ints" &&
            <JavaDataTypesInts
                props={{handleRedirectJavaLessons:handleRedirectJavaLessons,
                handleRedirectHome:props.handleRedirectHome
              }} />
        }
   </>
  )
}

export default SelectJavaLessons
