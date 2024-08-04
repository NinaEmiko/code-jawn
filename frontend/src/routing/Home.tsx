import { useState } from "react";
import SelectLesson from "../pages/SelectLesson"
import SelectJavaScriptLessons from "./SelectJavaScriptLessons";
import SelectJavaLessons from "./SelectJavaLessons";

function Home() {
    const [activeTab, setActiveTab] = useState("Select a Lesson");

    const handleRedirectHome = (component: string) => {
        setActiveTab(component);
      }

  return (
    <>
        {activeTab === "Select a Lesson" &&
            <SelectLesson props={{handleRedirectHome:handleRedirectHome}} />
        }
        {activeTab === "Java Lessons" &&
            <SelectJavaLessons props={{handleRedirectHome:handleRedirectHome}} />
        }
        {activeTab === "JavaScript Lessons" &&
            <SelectJavaScriptLessons props={{handleRedirectHome:handleRedirectHome}} />
        }
    </>
  )
}

export default Home
