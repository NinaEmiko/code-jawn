import Container from "../../../components/Container";
import Display from "../../../components/Display";

function JavaScriptLesson3({props}:{props:any}) {


    const handleBackClick = () => {
        props.handleRedirectJavaScriptLessons("JavaScript Lessons");
    }

  return (
    <Container>
        <button className="back-btn-jawn" onClick={handleBackClick}>{""}</button>
        <Display>
            <div className="parent-jawn">
                <div className="child-jawn">
                    
                </div>
            </div>
        </Display>
    </Container>
  )
}

export default JavaScriptLesson3