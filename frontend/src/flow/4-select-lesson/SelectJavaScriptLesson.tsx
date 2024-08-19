import LoginContainer from "../../components/LoginContainer";
import SubDisplay from "../../components/SubDisplay";

function JavaScriptLessons({props}:{props:any}) {

    const handleButtonClick = (lesson: string) => {
        props.handleRedirectJavaScriptLessons(lesson);
    }
    const handleBackClick = () => {
        props.handleRedirectHome("Select a Language");
    }

    return (
        <LoginContainer>
        <button className="back-btn-jawn" onClick={handleBackClick}>{"‹"}</button>
        <SubDisplay>
            <div className="parent-jawn">
                <div className="child-jawn">
                    <div className="lesson-btn-container">
                        <button 
                            className="lesson-btn"
                            onClick={() => handleButtonClick("JavaScript Lesson 1")}
                            >
                                Lesson 1
                        </button>
                    </div>
                    <div className="lesson-btn-container">
                        <button 
                            className="lesson-btn"
                            onClick={() => handleButtonClick("JavaScript Lesson 2")}
                            >
                                Lesson 2
                        </button>
                    </div>
                    <div className="lesson-btn-container">
                        <button 
                            className="lesson-btn"
                            onClick={() => handleButtonClick("JavaScript Lesson 3")}
                            >
                                Lesson 3
                        </button>
                    </div>
                </div>
            </div>
        </SubDisplay>
      </LoginContainer>
    )
  }
  
  export default JavaScriptLessons
  