import Container from "../components/Container"
import Display from "../components/Display"
import PageName from "../components/PageName"

function SelectLesson({props}:{props:any}) {

    const handleButtonClick = (lesson: string) => {
        props.handleRedirectHome(lesson);
    }

    return (
      <Container>
        <PageName props={{title: "Select a Lesson"}} />
        <Display>
            <div className="parent-jawn">
                <div className="child-jawn">
                    <div className="lesson-btn-container">
                        <button 
                            className="lesson-btn"
                            onClick={() => handleButtonClick("Java Lessons")}
                            >
                                Java
                        </button>
                    </div>
                    <div className="lesson-btn-container">
                        <button 
                            className="lesson-btn"
                            onClick={() => handleButtonClick("JavaScript Lessons")}
                            >
                                JavaScript
                        </button>
                    </div>
                </div>
            </div>
        </Display>
      </Container>
    )
  }
  
  export default SelectLesson