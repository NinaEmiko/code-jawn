import LanguageButtonContainer from "../components/LanguageButtonContainer"
import Display from "../components/Display"
import { LANGUAGE_DESCRIPTIONS } from "../helpers/languageDescriptionsHelper"
import { FC, useEffect, useState } from "react"
import { getDefaultLessonTracker, LessonTracker } from "../types/LessonTracker"
import { getLT } from "../api/api"
import { User } from "../types/components"
import { javaProgressCalculator } from "../helpers/ProgressCalculator"
import { getDefaultJavaLT } from "../types/java/JavaLT"

interface SelectLessonProps{
    handleRedirectHome: (lesson: string) => void,
    currentUser: User
}

const SelectLesson: FC<SelectLessonProps> = ({handleRedirectHome, currentUser}) => {
    const [javaProgress, setJavaProgress] = useState<number>(Math.round(0))

    const handleButtonClick = (lesson: string) => {
        handleRedirectHome(lesson);
    }

    const getLTCall = async () => {
        const data = await getLT(currentUser.id)
        setJavaProgress(Math.round(javaProgressCalculator(data.javaLT)))
        console.log("Thing: " + Math.round(javaProgressCalculator(data.javaLT)))
    }

    useEffect(() => {
        getLTCall()
    },[])
    
    return (
      <>
        <Display>
          <div className="spacer-15" />
          <div className="language-btn-container-scroll">
            <LanguageButtonContainer 
                  iconAltText={"Java Icon"}
                  language={"Java"}
                  lessonsCompleted={0}
                  totalLessons={1}
                  description={LANGUAGE_DESCRIPTIONS.JAVA}
                  handleButtonClick={handleButtonClick} 
                  progress={javaProgress}
                  />
            <LanguageButtonContainer
                iconAltText={"JavaScript Icon"}
                language={"JavaScript"}
                lessonsCompleted={1}
                totalLessons={1}
                description={LANGUAGE_DESCRIPTIONS.JAVASCRIPT}
                handleButtonClick={handleButtonClick}
                progress={0}
                />
            <LanguageButtonContainer
                iconAltText={"Python Icon"}
                language={"Python"}
                lessonsCompleted={1}
                totalLessons={1}
                description={LANGUAGE_DESCRIPTIONS.PYTHON}
                handleButtonClick={handleButtonClick}
                progress={0}
                />
            <LanguageButtonContainer
                iconAltText={"SpringBoot Icon"}
                language={"SpringBoot"}
                lessonsCompleted={1}
                totalLessons={1}
                description={LANGUAGE_DESCRIPTIONS.SPRINGBOOT}
                handleButtonClick={handleButtonClick}
                progress={0}
                />
            <LanguageButtonContainer
                iconAltText={"React Icon"}
                language={"React"}
                lessonsCompleted={1}
                totalLessons={1}
                description={LANGUAGE_DESCRIPTIONS.REACT}
                handleButtonClick={handleButtonClick}
                progress={0}
                />
            </div>
          <div className="spacer-5" />
        </Display>
      </>
    )
  }
  
  export default SelectLesson