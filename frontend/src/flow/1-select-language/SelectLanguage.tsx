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
          <div className="spacer-25" />
            <LanguageButtonContainer props={{
                    iconAltText: "Java Icon",
                    language: "Java",
                    lessonsCompleted: 0,
                    totalLessons: 1,
                    description: LANGUAGE_DESCRIPTIONS.JAVA,
                    handleButtonClick:handleButtonClick,
                    handlePageTitle:props.handlePageTitle}} />
            <LanguageButtonContainer props={{
                iconAltText: "JavaScript Icon",
                language: "JavaScript",
                lessonsCompleted: 1,
                totalLessons: 1,
                description: LANGUAGE_DESCRIPTIONS.JAVASCRIPT,
                handleButtonClick:null,
                handlePageTitle:null}} />
          <div className="spacer-10" />
        </Display>
      </>
    )
  }
  
  export default SelectLesson