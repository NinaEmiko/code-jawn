import Answer from "../../../../components/Answer"
import "../../../../styling/Question.css"
import "../../../../styling/Answer.css"
import Question from "../../../../components/Question"
import { useState } from "react"


function JavaDataTypesIntsQuestion4({props}:{props:any}) {
    const [value, setValue] = useState('"17"');

    const handleChange = (event: any) => {
        setValue(event.target.value);
      };

    const endQuestion = () => {
        value === '17' ? props.completeQuestion(true) : props.completeQuestion(false);
    }

    return (
        <>
            <div className="question-container">
                <div className="question-jawn">
                    <Question props={{text: "Fix this value to make it into a valid int."}} />
                </div>
                <div className="answer-jawn">   
                    <input
                        className="answer-input"
                        value={value}
                        onChange={handleChange}
                    />
                </div>
                <button className="input-btn">Submit</button>
            </div>
        </>
    )
}
  
export default JavaDataTypesIntsQuestion4
  