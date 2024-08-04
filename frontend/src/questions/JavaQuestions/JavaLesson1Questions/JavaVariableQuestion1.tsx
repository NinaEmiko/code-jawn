import Answer from "../../../components/Answer"
import "../../../styling/Question.css"
import "../../../styling/Answer.css"
import Question from "../../../components/Question"
import { generateTabs } from "../../../helpers/TabHelper"
import { useState } from "react"


function JavaVariableQuestion1({props}:{props:any}) {
    const [answer, setAnswer] = useState('');

    const handleAnswer1Click = () => {
        setAnswer("A");
    }

    const handleAnswer2Click = () => {
        setAnswer("B");
    }

    const handleAnswer3Click = () => {
        setAnswer("C");
    }

    const handleAnswer4Click = () => {
        setAnswer("D");
    }

    const endQuestion = () => {
        answer === 'A' ? props.completeQuestion(true) : props.completeQuestion(false);
    }

    return (
        <>
            {answer === '' &&
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
                            line2: `${generateTabs(1)}` + "doSomething();",
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
            }
            {answer === 'A' &&
                <div className="question-container">
                    <div className="question-explanation-correct">You have chosen the correct answer.</div>
                    <div className="answer-jawn">
                        <Answer props={{
                            answerClicked:null,
                            line1: "String name = \"Lola\";"
                            }} />
                    </div>
                    <div className="question-explanation">
                        This is a variable.
                        It declares the data type as String.
                        It declares the name of the variable as name.
                        It assigns the value of the variable as "Lola".
                    </div>
                    <button className="explanation-btn" onClick={endQuestion} >
                        Continue
                    </button>
                </div>
            }
            {answer === 'B' &&
                <div className="question-container">
                    <div className="question-explanation-incorrect">You have chosen an incorrect answer.</div>
                    <div className="answer-jawn">
                        <Answer props={{
                            answerClicked:null,
                            line1: "for(int i = 0; i < 10; i++) {",
                            line2: `${generateTabs(1)}` + "doSomething();",
                            line3: "};"
                            }} />
                    </div>
                    <div className="question-explanation">
                        This is a loop.
                        It will trigger the doSomething method 10 times.
                        A variable assigns a value 
                    </div>
                    <button className="explanation-btn" onClick={endQuestion} >
                        Continue
                    </button>
                </div>
            }
            {answer === 'C' &&
                <div className="question-container">
                    <div className="question-explanation-incorrect">You have chosen an incorrect answer.</div>
                    <div className="answer-jawn">
                        <Answer props={{
                            answerClicked:null,
                            line1: "if (1 < 2) {",
                            line2: `${generateTabs(1)}` + "doSomething();",
                            line3: "};"
                            }} />
                    </div>
                    <div className="question-explanation">
                        This is a conditional statement.
                        If the number 1 is less than 2 it will trigger the doSomething method.
                        If the number 1 is not less than 2 it will not trigger it.
                    </div>
                    <button className="explanation-btn" onClick={endQuestion} >
                        Continue
                    </button>
                </div>
            }
            {answer === 'D' &&
                <div className="question-container">
                        <div className="question-explanation-incorrect">You have chosen an incorrect answer.</div>
                        <div className="answer-jawn">
                            <Answer props={{
                                answerClicked:null,
                                line1: "import java.util.List;"
                                }} />
                        </div>
                        <div className="question-explanation">
                            This is an import statement.
                            It is typically found at the top of a java class file. 
                            By importing java.util.List, the user has the ablilty to create List objects.
                        </div>
                        <button className="explanation-btn" onClick={endQuestion} >
                            Continue
                        </button>
                </div>
            }
        </>
    )
}
  
export default JavaVariableQuestion1
  