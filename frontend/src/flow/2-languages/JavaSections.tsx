import { useState } from "react";
import SelectJavaLesson from "../3-select-lesson/SelectJavaLesson";
import JavaVariables from "../4-lessons/JavaLessons/JavaVariables/JavaVariables";
import JavaDataTypesStrings from "../4-lessons/JavaLessons/JavaDataTypes/JavaDataTypesStrings";
import JavaDataTypesInts from "../4-lessons/JavaLessons/JavaDataTypes/JavaDataTypesInts";

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
                handleRedirectHome:props.handleRedirectHome,
                currentUser:props.currentUser,
                handlePageTitle:props.handlePageTitle
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
                handleRedirectHome:props.handleRedirectHome,
                currentUser:props.currentUser
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
