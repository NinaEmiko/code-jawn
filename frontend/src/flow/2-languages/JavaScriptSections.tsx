import { useState } from "react";
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
                        handleRedirectLanguageLessons={handleRedirectJavaScriptLessons}
                        handleRedirectHome={props.handleRedirectHome}
                        currentUser={props.currentUser}
                />
              }
        </>
    )
}

export default SelectJavaScriptLessons
