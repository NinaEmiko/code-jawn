import Answer from "../../../components/Answer"
import "../../../styling/Question.css"
import "../../../styling/Answer.css"
import Question from "../../../components/Question"
import { useState } from "react"


function JavaVariableQuestion2({props}:{props:any}) {
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
        answer === 'D' ? props.completeQuestion(true) : props.completeQuestion(false);
    }

    return (
        <>
            {answer === '' &&
                <div className="question-container">
                    <div className="question-jawn">
                        <Question props={{text: "Select the correct option."}} />
                    </div>
                    <div className="answer-jawn">
                            
                        <Answer props={{
                            answerClicked:handleAnswer1Click,
                            line1: "String count = 5;"
                            }} />
                        <Answer props={{
                            answerClicked:handleAnswer2Click,
                            line1: "boolean count = \"five\";"
                            }} />
                        <Answer props={{
                            answerClicked:handleAnswer3Click,
                            line1: "int count = \"5\";"
                            }} />
                        <Answer props={{
                            answerClicked:handleAnswer4Click,
                            line1: "int count = 5;"
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
                            line1: "String count = 5;"
                            }} />
                    </div>
                    <div className="question-explanation">
                        This statement is declaring a String variable named count.
                        It is attempting to assign an int value of 5 to count.
                        int values cannot be assigned to String variables.
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
                            line1: "boolean count = \"five\";"
                            }} />
                    </div>
                    <div className="question-explanation">
                        This is declaring a boolean variable named count.
                        It is attempting to assign a String value of "five" to count.
                        String values cannot be assigned to boolean variables.
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
                            line1: "int count = \"5\";"
                            }} />
                    </div>
                    <div className="question-explanation">
                        This is declaring an int variable named count.
                        It is attempting to assign a String value of "5" to count.
                        String values cannot be assigned to int variables.
                    </div>
                    <button className="explanation-btn" onClick={endQuestion} >
                        Continue
                    </button>
                </div>
            }
            {answer === 'D' &&
                <div className="question-container">
                        <div className="question-explanation-correct">You have chosen the correct answer.</div>
                        <div className="answer-jawn">
                            <Answer props={{
                                answerClicked:handleAnswer4Click,
                                line1: "int count = 5;"
                                }} />
                        </div>
                        <div className="question-explanation">
                            This is declaring an int variable named count.
                            It is assigning an int value of 5 to count.
                        </div>
                        <button className="explanation-btn" onClick={endQuestion} >
                            Continue
                        </button>
                </div>
            }
        </>
    )
}
  
export default JavaVariableQuestion2
  