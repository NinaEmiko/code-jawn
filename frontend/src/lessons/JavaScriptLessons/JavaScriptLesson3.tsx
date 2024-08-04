import Container from "../../components/Container"
import Controls from "../../components/Controls"
import Display from "../../components/Display"
import PageName from "../../components/PageName"

function JavaScriptLesson3({props}:{props:any}) {


    const handleBackClick = () => {
        props.handleRedirectJavaScriptLessons("JavaScript Lessons");
    }

  return (
    <Container>
        <PageName props={{title: "JavaScript Lesson 3"}} />
        <Display>
            <div className="parent-jawn">
                <div className="child-jawn">
                    
                </div>
            </div>
        </Display>
        <Controls 
            leftBtnTopText="-"
            leftBtnMiddleText="-"
            handleClickLeftBtnBottom={() => handleBackClick()}
            leftBtnBottomText="Back"
            rightBtnLeftText="-"
            rightBtnRightText="-"
            rightBtnTopText="-"
            rightBtnBottomText="-"
        />
    </Container>
  )
}

export default JavaScriptLesson3