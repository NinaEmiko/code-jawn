import Container from "../../components/Container"
import Display from "../../components/Display"
import PageName from "../../components/PageName"


function JavaLessons({props}:{props:any}) {

    const handleButtonClick = (lesson: string) => {
        props.handleRedirectJavaLessons(lesson);
    }

    const handleBackClick = () => {
        props.handleRedirectHome("Select a Language");
    }

  return (
    <Container>
        <PageName props={{title: "Java Lessons", handleBackClick:handleBackClick, buttonOneText:"Back"}} />
        <Display>
            <div className="parent-jawn">
                <div className="child-jawn">
                    Variables
                    <div className="lesson-btn-container">
                        <button 
                            className="lesson-btn"
                            onClick={() => handleButtonClick("Java Lesson 1")}
                            >
                                Initializing Variables
                        </button>
                    </div>
                    DataTypes
                    <div className="lesson-btn-container">
                        <button 
                            className="lesson-btn"
                            onClick={() => handleButtonClick("Java Lesson 2")}
                            >
                                Strings
                        </button>
                    </div>
                    <div className="lesson-btn-container">
                        <button 
                            className="lesson-btn"
                            onClick={() => handleButtonClick("Java Lesson 3")}
                            >
                                ints
                        </button>
                    </div>
                </div>
            </div>
        </Display>
    </Container>
  )
}

export default JavaLessons
