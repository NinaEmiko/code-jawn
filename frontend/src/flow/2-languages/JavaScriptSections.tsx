import { useState } from "react";
import SelectJavaScriptLesson from "../3-select-lesson/SelectJavaScriptLesson";
import JavaScriptLesson3 from "../4-lessons/JavaScriptLessons/JavaScriptLesson3";
import JavaScriptLesson2 from "../4-lessons/JavaScriptLessons/JavaScriptLesson2";
import JavaScriptLesson1 from "../4-lessons/JavaScriptLessons/JavaScriptLesson1";

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
                        handleRedirectHome:props.handleRedirectHome
                    }} />
            }
            {activeTab === "JavaScript Lesson 1" &&
                <JavaScriptLesson1
                    props={{
                        handleRedirectJavaScriptLessons:handleRedirectJavaScriptLessons,
                        handleRedirectHome:props.handleRedirectHome
                    }} />
            }
            {activeTab === "JavaScript Lesson 2" &&
                <JavaScriptLesson2
                    props={{
                        handleRedirectJavaScriptLessons:handleRedirectJavaScriptLessons,
                        handleRedirectHome:props.handleRedirectHome
                    }} />
            }
            {activeTab === "JavaScript Lesson 3" &&
                <JavaScriptLesson3
                    props={{
                        handleRedirectJavaScriptLessons:handleRedirectJavaScriptLessons,
                        handleRedirectHome:props.handleRedirectHome
                    }} />
            }
        </>
    )
  }
  
  export default SelectJavaScriptLessons
  