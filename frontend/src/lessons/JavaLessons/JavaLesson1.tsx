import Container from "../../components/Container"
import Controls from "../../components/Controls"
import Display from "../../components/Display"
import PageName from "../../components/PageName"
import JavaVariableQuestion1 from "../../questions/JavaQuestions/JavaLesson1Questions/JavaVariableQuestion1"

function JavaLesson1({props}:{props:any}) {


    const handleBackClick = () => {
        props.handleRedirectJavaLessons("Java Lessons");
    }

  return (
    <Container>
        <PageName props={{title: "Java Lesson 1"}} />
        <Display>
            <div className="parent-jawn">
                <div className="child-jawn">
                    <JavaVariableQuestion1 props={undefined} />
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

export default JavaLesson1
