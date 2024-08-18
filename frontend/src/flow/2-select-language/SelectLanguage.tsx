import Container from "../../components/Container"
import Display from "../../components/Display"
import LolaIcon from '../../assets/lola-icon.jpg'
import Controls from "../../components/Controls"
import LanguageButtonContainer from "../../components/LanguageButtonContainer"
import { progressConstants } from "../../helpers/ProgressConstants"
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
                <div className="code-jawn-icon-container">
                    <img className="code-jawn-icon"
                        src={LolaIcon}
                        alt="Code Jawn Icon" />
                </div>
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
                handleButtonClick:handleButtonClick}} />
        </SubDisplay>
      </LoginContainer>
    )
  }
  
  export default SelectLesson