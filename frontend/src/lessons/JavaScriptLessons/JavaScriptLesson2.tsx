import Container from "../../components/Container"
import Display from "../../components/Display"
import PageName from "../../components/PageName"

function JavaScriptLesson2({props}:{props:any}) {


    const handleBackClick = () => {
        props.handleRedirectJavaScriptLessons("JavaScript Lessons");
    }

  return (
    <Container>
        <PageName props={{title: "JavaScript Lesson 1", handleBackClick:handleBackClick}} />
        <Display>
            <div className="parent-jawn">
                <div className="child-jawn">
                    
                </div>
            </div>
        </Display>
    </Container>
  )
}

export default JavaScriptLesson2