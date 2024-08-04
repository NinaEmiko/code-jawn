import Answer from "../../../components/Answer"
import "../../../styling/Question.css"
import "../../../styling/Answer.css"
import Question from "../../../components/Question"
import { generateTabs } from "../../../helpers/TabHelper"


function JavaVariableQuestion1({props}:{props:any}) {

    const handleAnswer1Click = () => {
    }

    const handleAnswer2Click = () => {
    }

    const handleAnswer3Click = () => {
    }

    const handleAnswer4Click = () => {
    }

    return (
        <div className="question-container">
            <div className="question-jawn">
                <Question props={{text: "Select the option that displays the use of variables."}} />
            </div>
            <div className="answer-jawn">
                <Answer props={{
                    answerClicked:handleAnswer1Click,
                    line1: "String name = \"Lola\";"
                    }} />
                <Answer props={{
                    answerClicked:handleAnswer2Click,
                    line1: "for(int i = 0; i < 10; i++) {",
                    line2: " ",
                    line3: "};"
                    }} />
                <Answer props={{
                    answerClicked:handleAnswer3Click,
                    line1: "if (1 < 2) {",
                    line2: `${generateTabs(1)}` + "doSomething();",
                    line3: "};"
                    }} />
                <Answer props={{
                    answerClicked:handleAnswer4Click,
                    line1: "import java.util.List;"
                    }} />
            </div>
        </div>
    )
  }
  
  export default JavaVariableQuestion1
  