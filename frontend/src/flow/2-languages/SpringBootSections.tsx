import { useState } from "react";
import SelectSpringBootLesson from "../3-select-lesson/SelectSpringBootLesson";

function SelectSpringBootLessons({props}:{props:any}) {
    const [activeTab, setActiveTab] = useState("SpringBoot Lessons");

    const handleRedirectSpringBootLessons = (component: string) => {
        setActiveTab(component);
      }

  return (
   <>
      {activeTab === "SpringBoot Lessons" &&
            <SelectSpringBootLesson 
              props={{
                handleRedirectSpringBootLessons:handleRedirectSpringBootLessons,
                handleRedirectHome:props.handleRedirectHome,
                currentUser:props.currentUser,
                handleShowAppBar:props.handleShowAppBar
              }} />
        }
   </>
  )
}

export default SelectSpringBootLessons
