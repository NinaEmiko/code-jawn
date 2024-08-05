import Container from "../../components/Container"
import Display from "../../components/Display"
import PageName from "../../components/PageName"
import JavaIcon from '../../assets/java-icon.png'
import JavaScriptIcon from '../../assets/javascript-icon.png'
import LolaIcon from '../../assets/lola-icon.jpg'
import Controls from "../../components/Controls"

function SelectLesson({props}:{props:any}) {

    const handleButtonClick = (lesson: string) => {
        props.handleRedirectHome(lesson);
    }

    return (
      <Container>
        <PageName props={{title: "Select a Language"}} />
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

                    <div className="language-btn-container">
                        <img className="language-icon"
                            onClick={() => handleButtonClick("Java")}
                            src={JavaIcon}
                            alt="Java Icon" />
                        <button className="language-btn"
                            onClick={() => handleButtonClick("Java")}
                            >
                                Java
                        </button>
                        <div className="additional-text">
                            0%
                        </div>
                    </div>
                    <div className="language-btn-container">
                        <img className="language-icon"
                            onClick={() => handleButtonClick("JavaScript")}
                            src={JavaScriptIcon}
                            alt="JavaScript Icon" />
                        <button className="language-btn"
                            onClick={() => handleButtonClick("JavaScript")}>
                                JavaScript
                        </button>
                        <div className="additional-text">
                            100%
                        </div>
                    </div>
                </div>
            </div>
        </Display>
        <Controls children={undefined} />
      </Container>
    )
  }
  
  export default SelectLesson