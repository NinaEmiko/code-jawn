import { useState } from "react";
import SelectLanguage from "../2-select-language/SelectLanguage"
import JavaScriptSections from "../3-languages/JavaScriptSections";
import JavaLessonsSections from "../3-languages/JavaLessonsSections";

function Home() {
    const [activeTab, setActiveTab] = useState("Select a Language");

    const handleRedirectHome = (component: string) => {
        setActiveTab(component);
      }

  return (
    <>
        {activeTab === "Select a Language" &&
            <SelectLanguage props={{handleRedirectHome:handleRedirectHome}} />
        }
        {activeTab === "Java" &&
            <JavaLessonsSections props={{handleRedirectHome:handleRedirectHome}} />
        }
        {activeTab === "JavaScript" &&
            <JavaScriptSections props={{handleRedirectHome:handleRedirectHome}} />
        }
    </>
  )
}

export default Home
