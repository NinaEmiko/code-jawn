import { useState } from "react";
import JavaLessons from "../pages/JavaLessons";
import JavaLesson1 from "../lessons/JavaLessons/JavaLesson1";
import JavaLesson2 from "../lessons/JavaLessons/JavaLesson2";
import JavaLesson3 from "../lessons/JavaLessons/JavaLesson3";

function SelectJavaLessons({props}:{props:any}) {
    const [activeTab, setActiveTab] = useState("Java Lessons");

    const handleRedirectJavaLessons = (component: string) => {
        setActiveTab(component);
      }

  return (
   <>
        {activeTab === "Java Lessons" &&
            <JavaLessons 
              props={{
                handleRedirectJavaLessons:handleRedirectJavaLessons,
                handleRedirectHome:props.handleRedirectHome
              }} />
        }
        {activeTab === "Java Lesson 1" &&
            <JavaLesson1
              props={{
                handleRedirectJavaLessons:handleRedirectJavaLessons,
                handleRedirectHome:props.handleRedirectHome
              }} />
        }
        {activeTab === "Java Lesson 2" &&
            <JavaLesson2
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
