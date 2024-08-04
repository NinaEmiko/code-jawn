import Container from "../../components/Container"
import Display from "../../components/Display"
import PageName from "../../components/PageName"

function JavaLesson2({props}:{props:any}) {


    const handleBackClick = () => {
        props.handleRedirectJavaLessons("Java Lessons");
    }

  return (
    <Container>
        <PageName props={{title: "Java Lesson 2", handleBackClick:handleBackClick}} />
        <Display>
            <div className="parent-jawn">
                <div className="child-jawn">
                    
                </div>
            </div>
        </Display>
    </Container>
  )
}

export default JavaLesson2