import Answer from "../../../components/Answer"
import "../../../styling/Question.css"
import "../../../styling/Answer.css"
import Question from "../../../components/Question"
import { useState } from "react"


function JavaVariableQuestion3({props}:{props:any}) {
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
        answer === 'B' ? props.completeQuestion(true) : props.completeQuestion(false);
    }

    return (
        <>
            {answer === '' &&
                <div className="question-container">
                    <div className="question-jawn">
                        <Question props={{text: "Select the option that is incorrect"}} />
                    </div>
                    <div className="answer-jawn">
                            
                        <Answer props={{
                            answerClicked:handleAnswer1Click,
                            line1: "String number = \"5\";"
                            }} />
                        <Answer props={{
                            answerClicked:handleAnswer2Click,
                            line1: "int 5 = number;"
                            }} />
                        <Answer props={{
                            answerClicked:handleAnswer3Click,
                            line1: "int number = 5;"
                            }} />
                        <Answer props={{
                            answerClicked:handleAnswer4Click,
                            line1: "number = 5;"
                            }} />
                    </div>
                </div>
            }
            {answer === 'A' &&
                <div className="question-container">
                    <div className="question-explanation-correct">You have chosen an incorrect answer.</div>
                    <div className="answer-jawn">
                        <Answer props={{
                            answerClicked:null,
                            line1: "String number = \"5\";"
                            }} />
                    </div>
                    <div className="question-explanation">
                        This statment is declaring a String variable named number and assigning it a value of "5".
                        Values wrapped in double quotes are of type String.
                        false is a boolean value, but "false" is a String value.
                        5 is an int value, but "5" is a String value.
                    </div>
                    <button className="explanation-btn" onClick={endQuestion} >
                        Continue
                    </button>
                </div>
            }
            {answer === 'B' &&
                <div className="question-container">
                    <div className="question-explanation-correct">You have chosen the correct answer.</div>
                    <div className="answer-jawn">
                    <Answer props={{
                            answerClicked:null,
                            line1: "int 5 = number;"
                            }} />
                    </div>
                    <div className="question-explanation">
                        This statement is declaring an int variable named 5.
                        It is attempting to assign it a value of number.
                        Variable names cannot begin with a number.
                        int variables cannot be assigned the value of number.
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
                            line1: "int number = 5;"
                            }} />
                    </div>
                    <div className="question-explanation">
                        This statment is declaring an int variable named number and assigning it a value of 5.
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
                                line1: "number = 5;"
                                }} />
                        </div>
                        <div className="question-explanation">
                            This statement is updating the value of a variable to the value of 5.
                            Once a variable is declared, it's value can be changed using the above syntax.
                        </div>
                        <button className="explanation-btn" onClick={endQuestion} >
                            Continue
                        </button>
                </div>
            }
        </>
    )
}
  
export default JavaVariableQuestion3
  