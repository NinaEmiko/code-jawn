import Answer from "../../../../components/Answer"
import "../../../../styling/Question.css"
import "../../../../styling/Answer.css"
import Question from "../../../../components/Question"
import { useState } from "react"


function JavaVariableQuestion5({props}:{props:any}) {
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
                        <Question props={{text: "Select the option that is correct."}} />
                    </div>
                    <div className="answer-jawn">
                            
                        <Answer props={{
                            answerClicked:handleAnswer1Click,
                            line1: "String isHappy = false;"
                            }} />
                        <Answer props={{
                            answerClicked:handleAnswer2Click,
                            line1: "boolean isHappy = \"false\";"
                            }} />
                        <Answer props={{
                            answerClicked:handleAnswer3Click,
                            line1: "boolean isHappy = true;"
                            }} />
                        <Answer props={{
                            answerClicked:handleAnswer4Click,
                            line1: "boolean isHappy = yes;"
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
                            line1: "String isHappy = false;"
                            }} />
                    </div>
                    <div className="question-explanation">
                        This statement is declaring a String variable named isHappy.
                        It is attempting to assign it a value of false.
                        false is a boolean data type and cannot be assigned to a String variable.
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
                            line1: "boolean isHappy = \"false\";"
                            }} />
                    </div>
                    <div className="question-explanation">
                        This statement is declaring a variable named isHappy.
                        It is attempting to assign it a value of "false".
                        "false" is a String data type and cannot be assigned to a boolean variable.
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
                            line1: "boolean isHappy = true;"
                            }} />
                    </div>
                    <div className="question-explanation">
                        This statement is declaring a boolean variable named isHappy.
                        It is assigning it a value of true.
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
                                answerClicked:handleAnswer4Click,
                                line1: "boolean isHappy = yes;"
                                }} />
                        </div>
                        <div className="question-explanation">
                            This statement is declaring a boolean variable named isHappy.
                            It is attempting to assign it a value of yes.
                            yes is not a keyword or a value assignable to a boolean variable.
                        </div>
                        <button className="explanation-btn" onClick={endQuestion} >
                            Continue
                        </button>
                </div>
            }
        </>
    )
}
  
export default JavaVariableQuestion5
  