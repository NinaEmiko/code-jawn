import LoginContainer from "../../../components/LoginContainer";
import SubDisplay from "../../../components/SubDisplay";

function JavaScriptLesson2({props}:{props:any}) {


    const handleBackClick = () => {
        props.handleRedirectJavaScriptLessons("JavaScript Lessons");
    }

  return (
    <LoginContainer>
        <button className="back-btn-jawn" onClick={handleBackClick}>{"‹"}</button>
        <SubDisplay>
            <div className="parent-jawn">
                <div className="child-jawn">
                    
                </div>
            </div>
        </SubDisplay>
    </LoginContainer>
  )
}

export default JavaScriptLesson2