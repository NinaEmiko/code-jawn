import Answer from "../../../../components/Answer"
import "../../../../styling/Question.css"
import "../../../../styling/Answer.css"
import Question from "../../../../components/Question"
import { useState } from "react"


function JavaDataTypesStringsQuestion4({props}:{props:any}) {
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
                        <Question props={{text: "What is missing from this to make it a String value: Lola works at 5."}} />
                    </div>
                    <div className="answer-jawn">
                            
                        <Answer props={{
                            answerClicked:handleAnswer1Click,
                            code: "There are no quotations around Lola."
                            }} />
                        <Answer props={{
                            answerClicked:handleAnswer2Click,
                            code: "There is nothing missing."
                            }} />
                        <Answer props={{
                            answerClicked:handleAnswer3Click,
                            code: "It is missing an ="
                            }} />
                        <Answer props={{
                            answerClicked:handleAnswer4Click,
                            code:  "It contains a 5 and that is an int value"
                            }} />
                    </div>
                </div>
            }
            {answer === 'A' &&
                <div className="question-container">
                    <div className="question-explanation-correct">You have chosen the correct answer.</div>
                    <div className="answer-jawn">
                    <Answer props={{
                            answerClicked:handleAnswer1Click,
                            line1: "There are no quotations around Lola."
                            }} />
                    </div>
                    <div className="question-explanation">
                    Update.
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
                            answerClicked:handleAnswer2Click,
                            line1: "There is nothing missing."
                            }} />
                    </div>
                    <div className="question-explanation">
                    Update.
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
                            answerClicked:handleAnswer3Click,
                            line1: "It is missing an ="
                            }} />
                    </div>
                    <div className="question-explanation">
                        Update.
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
                            line1:  "It contains a 5 and that is an int value"
                            }} />
                        </div>
                        <div className="question-explanation">
                            Update.
                        </div>
                        <button className="explanation-btn" onClick={endQuestion} >
                            Continue
                        </button>
                </div>
            }
        </>
    )
}
  
export default JavaDataTypesStringsQuestion4
  