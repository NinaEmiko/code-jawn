import LanguageButtonContainer from "../components/LanguageButtonContainer"
import Display from "../components/Display"
import { LANGUAGE_DESCRIPTIONS } from "../helpers/languageDescriptionsHelper"
import { FC } from "react"

interface SelectLessonProps{
    handleRedirectHome: (lesson: string) => void,
}

const SelectLesson: FC<SelectLessonProps> = ({handleRedirectHome}) => {

    const handleButtonClick = (lesson: string) => {
        handleRedirectHome(lesson);
    }
    
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
                  handleButtonClick={handleButtonClick} />
            <LanguageButtonContainer
                iconAltText={"JavaScript Icon"}
                language={"JavaScript"}
                lessonsCompleted={1}
                totalLessons={1}
                description={LANGUAGE_DESCRIPTIONS.JAVASCRIPT}
                handleButtonClick={handleButtonClick} />
            <LanguageButtonContainer
                iconAltText={"Python Icon"}
                language={"Python"}
                lessonsCompleted={1}
                totalLessons={1}
                description={LANGUAGE_DESCRIPTIONS.PYTHON}
                handleButtonClick={handleButtonClick} />
            <LanguageButtonContainer
                iconAltText={"SpringBoot Icon"}
                language={"SpringBoot"}
                lessonsCompleted={1}
                totalLessons={1}
                description={LANGUAGE_DESCRIPTIONS.SPRINGBOOT}
                handleButtonClick={handleButtonClick} />
            <LanguageButtonContainer
                iconAltText={"React Icon"}
                language={"React"}
                lessonsCompleted={1}
                totalLessons={1}
                description={LANGUAGE_DESCRIPTIONS.REACT}
                handleButtonClick={handleButtonClick} />
            </div>
          <div className="spacer-5" />
        </Display>
      </>
    )
  }
  
  export default SelectLesson