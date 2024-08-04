import Container from "../components/Container"
import Display from "../components/Display"
import PageName from "../components/PageName"

function JavaLessons({props}:{props:any}) {

    const handleButtonClick = (lesson: string) => {
        props.handleRedirectJavaLessons(lesson);
    }

    const handleBackClick = () => {
        props.handleRedirectHome("Select a Lesson");
    }

  return (
    <Container>
        <PageName props={{title: "Java Lessons", handleBackClick:handleBackClick}} />
        <Display>
            <div className="parent-jawn">
                <div className="child-jawn">
                    <div className="lesson-btn">
                        <button 
                            className="lesson-btn"
                            onClick={() => handleButtonClick("Java Lesson 1")}
                            >
                                Lesson 1
                        </button>
                    </div>
                    <div className="lesson-btn">
                        <button 
                            className="lesson-btn"
                            onClick={() => handleButtonClick("Java Lesson 2")}
                            >
                                Lesson 2
                        </button>
                    </div>
                    <div className="lesson-btn">
                        <button 
                            className="lesson-btn"
                            onClick={() => handleButtonClick("Java Lesson 3")}
                            >
                                Lesson 3
                        </button>
                    </div>
                </div>
            </div>
        </Display>
    </Container>
  )
}

export default JavaLessons
