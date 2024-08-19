import LanguageButtonContainer from "../../components/LanguageButtonContainer"
import Display from "../../components/Display"
import HeaderDisplay from "../../components/HeaderDisplay"
import Header from "../../components/Header"
import Container from "../../components/Container"

function SelectLesson({props}:{props:any}) {

    const handleButtonClick = (lesson: string) => {
        props.handleRedirectHome(lesson);
    }

    const handleLogOut = () =>{
        props.logout()
    }
    
    return (
      <Container>
        <button onClick={() => handleLogOut()} className="header-btn" >{"Log out"}</button>
        <HeaderDisplay>
            <div className="top-header">
                <Header props={{text: "Select a Language"}} />
            </div>
            <div className="bottom-header">

            </div>
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
      </Container>
    )
  }
  
  export default SelectLesson