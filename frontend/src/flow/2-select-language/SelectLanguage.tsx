import LanguageButtonContainer from "../../components/LanguageButtonContainer"
import SubDisplay from "../../components/SubDisplay"
import HeaderDisplay from "../../components/HeaderDisplay"
import Header from "../../components/Header"
import LoginContainer from "../../components/LoginContainer"

function SelectLesson({props}:{props:any}) {

    const handleButtonClick = (lesson: string) => {
        props.handleRedirectHome(lesson);
    }

    const handleLogOut = () =>{
        props.logout()
    }
    
    return (
      <LoginContainer>
        <button onClick={() => handleLogOut()} className="header-btn" >{"Log out"}</button>
        <HeaderDisplay>
            <div className="top-header">
                <Header props={{text: "Select a Language"}} />
            </div>
            <div className="bottom-header">

            </div>
        </HeaderDisplay>
        <SubDisplay>
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
        </SubDisplay>
      </LoginContainer>
    )
  }
  
  export default SelectLesson