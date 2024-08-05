import Container from "../../components/Container"
import Display from "../../components/Display"
import PageName from "../../components/PageName"

function SelectLesson({props}:{props:any}) {

    const handleButtonClick = (lesson: string) => {
        props.handleRedirectHome(lesson);
    }

    return (
      <Container>
        <PageName props={{title: "Select a Language"}} />
        <Display>
            <div className="parent-jawn">
                <div className="child-jawn">
                    <div className="language-btn-container">
                        <button 
                            className="language-btn"
                            onClick={() => handleButtonClick("Java")}
                            >
                                Java
                        </button>
                    </div>
                    <div className="language-btn-container">
                        <button 
                            className="language-btn"
                            onClick={() => handleButtonClick("JavaScript")}
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