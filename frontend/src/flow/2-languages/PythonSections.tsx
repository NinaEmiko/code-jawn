import { useState } from "react";
import SelectPythonLesson from "../3-select-lesson/SelectPythonLesson";

function SelectPythonLessons({props}:{props:any}) {
    const [activeTab, setActiveTab] = useState("Python Lessons");

    const handleRedirectPythonLessons = (component: string) => {
        setActiveTab(component);
      }

  return (
   <>
      {activeTab === "Python Lessons" &&
            <SelectPythonLesson 
              props={{
                handleRedirectPythonLessons:handleRedirectPythonLessons,
                handleRedirectHome:props.handleRedirectHome,
                currentUser:props.currentUser,
                handleShowAppBar:props.handleShowAppBar
              }} />
        }
   </>
  )
}

export default SelectPythonLessons
