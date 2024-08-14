import { useState } from "react";
import SelectLanguage from "../2-select-language/SelectLanguage"
import JavaScriptSections from "../3-languages/JavaScriptSections";
import JavaSections from "../3-languages/JavaSections";
import "../../styling/Language.css"

function Home({props}:{props:any}) {
    const [activeTab, setActiveTab] = useState("Select a Language");

    const handleRedirectHome = (component: string) => {
        setActiveTab(component);
      }

  return (
    <>
        {activeTab === "Select a Language" &&
            <SelectLanguage props={{handleRedirectHome:handleRedirectHome, logout:props.logout}} />
        }
        {activeTab === "Java" &&
            <JavaSections props={{handleRedirectHome:handleRedirectHome}} />
        }
        {activeTab === "JavaScript" &&
            <JavaScriptSections props={{handleRedirectHome:handleRedirectHome}} />
        }
    </>
  )
}

export default Home
