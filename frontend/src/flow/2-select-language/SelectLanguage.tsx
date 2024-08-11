import Container from "../../components/Container"
import Display from "../../components/Display"
import LolaIcon from '../../assets/lola-icon.jpg'
import Controls from "../../components/Controls"
import LanguageButtonContainer from "../../components/LanguageButtonContainer"

function SelectLesson({props}:{props:any}) {

    const handleButtonClick = (lesson: string) => {
        props.handleRedirectHome(lesson);
    }

    return (
      <Container>
                {/* <button className="back-btn-jawn" >{" "}</button> */}
        <Display>
            <div className="parent-jawn">
                <div className="child-jawn">

                    <div className="code-jawn-icon-container">
                        <img className="code-jawn-icon"
                            src={LolaIcon}
                            alt="Code Jawn Icon" />
                    </div>

                    <div className="select-language-sub-text">
                        Please select the language you wish to learn.
                    </div>
                    <div className="container-for-language-btn">
                        <LanguageButtonContainer props={{
                            iconAltText: "Java Icon",
                            language: "Java",
                            percentageComplete: "0",
                            handleButtonClick:handleButtonClick}} />
                    </div>
                    <div className="container-for-language-btn">
                    <LanguageButtonContainer props={{
                        iconAltText: "JavaScript Icon",
                        language: "JavaScript",
                        percentageComplete: "100",
                        handleButtonClick:handleButtonClick}} />
                    </div>
                </div>
            </div>
        </Display>
        {/* <Controls children={undefined} /> */}
      </Container>
    )
  }
  
  export default SelectLesson