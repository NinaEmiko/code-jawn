import LanguageButtonContainer from "../../components/language/LanguageButtonContainer"
import Display from "../../components/Display"
import HeaderDisplay from "../../components/HeaderDisplay"
import Header from "../../components/Header"
import { LANGUAGE_DESCRIPTIONS } from "../../helpers/languageDescriptionsHelper"

function SelectLesson({props}:{props:any}) {

    const handleButtonClick = (lesson: string) => {
        props.handleRedirectHome(lesson);
    }
    
    return (
      <>
        <Display>
          <div className="spacer-15" />
          <div className="language-btn-container-scroll">
            <LanguageButtonContainer props={{
                  iconAltText: "Java Icon",
                  language: "Java",
                  lessonsCompleted: 0,
                  totalLessons: 1,
                  description: LANGUAGE_DESCRIPTIONS.JAVA,
                  handleButtonClick:handleButtonClick}} />
            <LanguageButtonContainer props={{
                iconAltText: "JavaScript Icon",
                language: "JavaScript",
                lessonsCompleted: 1,
                totalLessons: 1,
                description: LANGUAGE_DESCRIPTIONS.JAVASCRIPT,
                handleButtonClick:handleButtonClick}} />
            <LanguageButtonContainer props={{
                iconAltText: "Python Icon",
                language: "Python",
                lessonsCompleted: 1,
                totalLessons: 1,
                description: LANGUAGE_DESCRIPTIONS.PYTHON,
                handleButtonClick:handleButtonClick}} />
            <LanguageButtonContainer props={{
                iconAltText: "SpringBoot Icon",
                language: "SpringBoot",
                lessonsCompleted: 1,
                totalLessons: 1,
                description: LANGUAGE_DESCRIPTIONS.SPRINGBOOT,
                handleButtonClick:handleButtonClick}} />
            <LanguageButtonContainer props={{
                iconAltText: "React Icon",
                language: "React",
                lessonsCompleted: 1,
                totalLessons: 1,
                description: LANGUAGE_DESCRIPTIONS.REACT,
                handleButtonClick:handleButtonClick}} />
            </div>
          <div className="spacer-5" />
        </Display>
      </>
    )
  }
  
  export default SelectLesson