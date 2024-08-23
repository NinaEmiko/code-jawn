import LanguageButtonContainer from "../../components/language/LanguageButtonContainer"
import Display from "../../components/Display"
import HeaderDisplay from "../../components/HeaderDisplay"
import Header from "../../components/Header"

function SelectLesson({props}:{props:any}) {

    const handleButtonClick = (lesson: string) => {
        props.handleRedirectHome(lesson);
    }
    
    return (
      <>
        <Display>
          <div className="spacer-20" />
            <LanguageButtonContainer props={{
                    iconAltText: "Java Icon",
                    language: "Java",
                    lessonsCompleted: 0,
                    totalLessons: 1,
                    handleButtonClick:handleButtonClick,
                    handlePageTitle:props.handlePageTitle}} />
            <LanguageButtonContainer props={{
                iconAltText: "JavaScript Icon",
                language: "JavaScript",
                lessonsCompleted: 1,
                totalLessons: 1,
                handleButtonClick:null,
                handlePageTitle:null}} />
        </Display>
      </>
    )
  }
  
  export default SelectLesson