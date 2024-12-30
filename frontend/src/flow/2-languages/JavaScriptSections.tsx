import { useState } from "react";
import SelectPythonLesson from "../3-select-lesson/SelectPythonLesson";
import SelectJavaScriptLesson from "../3-select-lesson/SelectJavaScriptLesson";

function SelectJavaScriptLessons({props}:{props:any}) {
    const [activeTab, setActiveTab] = useState("JavaScript Lessons");

    const handleRedirectJavaScriptLessons = (component: string) => {
        setActiveTab(component);
      }

  return (
   <>
      {activeTab === "JavaScript Lessons" &&
            <SelectJavaScriptLesson 
              props={{
                handleRedirectJavaScriptLessons:handleRedirectJavaScriptLessons,
                handleRedirectHome:props.handleRedirectHome,
                currentUser:props.currentUser,
                handleShowAppBar:props.handleShowAppBar
              }} />
        }
   </>
  )
}

export default SelectJavaScriptLessons
