import Answer from "../../../components/Answer"
import "../../../styling/Question.css"
import "../../../styling/Answer.css"
import Question from "../../../components/Question"
import { generateTabs } from "../../../helpers/TabHelper"


function JavaVariableQuestion1({props}:{props:any}) {

    return (
        <div className="question-container">
            <div className="question-jawn">
                <Question props={{text: "Select the option that displays the use of variables."}} />
            </div>
            <div className="answer-jawn">
                <Answer props={{
                    line1: "String name = \"Lola\";"
                    }} />
                <Answer props={{
                    line1: "for(int i = 0; i < 10; i++) {",
                    line2: " ",
                    line3: "};"
                    }} />
                <Answer props={{
                    line1: "if (1 < 2) {",
                    line2: `${generateTabs(1)}` + "doSomething();",
                    line3: "};"
                    }} />
                <Answer props={{
                    line1: "import java.util.List;"
                    }} />
            </div>
        </div>
    )
  }
  
  export default JavaVariableQuestion1
  