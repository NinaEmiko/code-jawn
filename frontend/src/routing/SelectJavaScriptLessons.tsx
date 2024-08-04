import { useState } from "react";
import JavaScriptLessons from "../pages/JavaScriptLessons";
import JavaScriptLesson3 from "../lessons/JavaScriptLessons/JavaScriptLesson3";
import JavaScriptLesson2 from "../lessons/JavaScriptLessons/JavaScriptLesson2";
import JavaScriptLesson1 from "../lessons/JavaScriptLessons/JavaScriptLesson1";

function SelectJavaScriptLessons({props}:{props:any}) {
    const [activeTab, setActiveTab] = useState("JavaScript Lessons");

    const handleRedirectJavaScriptLessons = (component: string) => {
        setActiveTab(component);
      }

    return (
        <>
            {activeTab === "JavaScript Lessons" &&
                <JavaScriptLessons 
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
  