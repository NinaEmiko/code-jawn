import { useState } from "react";
import SelectReactLesson from "../3-select-lesson/SelectReactLesson";

function SelectReactLessons({props}:{props:any}) {
    const [activeTab, setActiveTab] = useState("React Lessons");

    const handleRedirectReactLessons = (component: string) => {
        setActiveTab(component);
      }

  return (
   <>
      {activeTab === "React Lessons" &&
            <SelectReactLesson 
              props={{
                handleRedirectReactLessons:handleRedirectReactLessons,
                handleRedirectHome:props.handleRedirectHome,
                currentUser:props.currentUser,
                handleShowAppBar:props.handleShowAppBar
              }} />
        }
   </>
  )
}

export default SelectReactLessons
