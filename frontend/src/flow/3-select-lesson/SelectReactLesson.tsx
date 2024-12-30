import { useState } from "react"
import Display2 from "../../components/Display2";

function ReactLessons({props}:{props:any}) {
    const [showSection, setShowSection] = useState('Coming Soon');

    const handleBackClick = () => {
        props.handleRedirectHome("Select a Language");
        props.handlePageTitle("Select a Language");
    }

  return (
    <>
        <Display2>
            <div className="container">
                <div className="left-section">
                    <div className="language-btn-link2" onClick={() => handleBackClick()}>
                        « Back to Languages
                    </div>
                    <h2 className="text">Lessons</h2>
                    <ul>
                    </ul>
                </div>
                <div className="right-section">
                    <h2 className="lesson-title">{showSection}</h2>

                </div>
            </div>
        </Display2>
    </>
  )
}

export default ReactLessons
