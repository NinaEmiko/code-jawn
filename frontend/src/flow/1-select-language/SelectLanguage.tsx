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
        <HeaderDisplay>
            <Header props={{text: "Select a Language"}} />
        </HeaderDisplay>
        <Display>
            <LanguageButtonContainer props={{
                    iconAltText: "Java Icon",
                    language: "Java",
                    lessonsCompleted: 0,
                    totalLessons: 1,
                    handleButtonClick:handleButtonClick}} />
            <LanguageButtonContainer props={{
                iconAltText: "JavaScript Icon",
                language: "JavaScript",
                lessonsCompleted: 1,
                totalLessons: 1,
                handleButtonClick:null}} />
        </Display>
      </>
    )
  }
  
  export default SelectLesson