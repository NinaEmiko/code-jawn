import Answer from "../../../components/Answer"
import "../../../styling/Question.css"
import "../../../styling/Answer.css"
import Question from "../../../components/Question"
import { useState } from "react"


function JavaVariableQuestion4({props}:{props:any}) {
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
        answer === 'C' ? props.completeQuestion(true) : props.completeQuestion(false);
    }

    return (
        <>
            {answer === '' &&
                <div className="question-container">
                    <div className="question-jawn">
                        <Question props={{text: "Select the best variable name."}} />
                    </div>
                    <div className="answer-jawn">
                            
                        <Answer props={{
                            answerClicked:handleAnswer1Click,
                            line1: "int spv = 50;"
                            }} />
                        <Answer props={{
                            answerClicked:handleAnswer2Click,
                            line1: "int SpeedPerVehicle = 50;"
                            }} />
                        <Answer props={{
                            answerClicked:handleAnswer3Click,
                            line1: "int speedPerVehicle = 50;"
                            }} />
                        <Answer props={{
                            answerClicked:handleAnswer4Click,
                            line1: "int speed per vehicle = 50;"
                            }} />
                    </div>
                </div>
            }
            {answer === 'A' &&
                <div className="question-container">
                    <div className="question-explanation-incorrect">You have chosen an incorrect answer.</div>
                    <div className="answer-jawn">
                    <Answer props={{
                            answerClicked:null,
                            line1: "int spv = 50;"
                            }} />
                    </div>
                    <div className="question-explanation">
                        spv is not clear enough of a name for a variable.
                        What spv stands for is not immediately apparent.
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
                            line1: "int SpeedPerVehicle = 50;"
                            }} />
                    </div>
                    <div className="question-explanation">
                        Variable names should be in camel case.
                        For example: milesPerHour, timesWeWentToTheStore, daysWorked.
                    </div>
                    <button className="explanation-btn" onClick={endQuestion} >
                        Continue
                    </button>
                </div>
            }
            {answer === 'C' &&
                <div className="question-container">
                    <div className="question-explanation-correct">You have chosen the correct answer.</div>
                    <div className="answer-jawn">
                        <Answer props={{
                            answerClicked:null,
                            line1: "int speedPerVehicle = 50;"
                            }} />
                    </div>
                    <div className="question-explanation">
                        This variable is in camel case.
                        It is clear what the variable represents.
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
                                line1: "int speed per vehicle = 50;"
                                }} />
                        </div>
                        <div className="question-explanation">
                            Variable names should be one word.
                            milesPerHour is correct.
                            miles per hour is incorrect.
                        </div>
                        <button className="explanation-btn" onClick={endQuestion} >
                            Continue
                        </button>
                </div>
            }
        </>
    )
}
  
export default JavaVariableQuestion4
  