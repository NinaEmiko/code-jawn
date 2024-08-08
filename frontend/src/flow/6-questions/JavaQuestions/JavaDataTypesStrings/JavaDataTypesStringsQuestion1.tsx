import Answer from "../../../../components/Answer"
import "../../../../styling/Question.css"
import "../../../../styling/Answer.css"
import Question from "../../../../components/Question"
import { generateTabs } from "../../../../helpers/TabHelper"
import { useState } from "react"


function JavaDataTypesStringsQuestion1({props}:{props:any}) {
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
                        <Question props={{text: "Select value that is of type String."}} />
                    </div>
                    <div className="answer-jawn">
                            
                        <Answer props={{
                            answerClicked:handleAnswer1Click,
                            line1: "false"
                            }} />
                        <Answer props={{
                            answerClicked:handleAnswer2Click,
                            line1: "5"
                            }} />
                         <Answer props={{
                             answerClicked:handleAnswer3Click,
                             line1: "\"This is a String.\""
                             }} />
                         <Answer props={{
                             answerClicked:handleAnswer4Click,
                             line1: "This is a String."
                             }} />
                    </div>
                </div>
            }
            {answer === 'A' &&
                <div className="question-container">
                    <div className="question-explanation-incorrect">You have chosen an incorrect answer.</div>
                    <div className="answer-jawn">
                    <Answer props={{
                            answerClicked:handleAnswer1Click,
                            line1: "false"
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
                            line1: "5"
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
                    <div className="question-explanation-correct">You have chosen the correct answer.</div>
                    <div className="answer-jawn">
                    <Answer props={{
                            answerClicked:handleAnswer3Click,
                            line1: "\"This is a String.\""
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
                            line1: "This is a String."
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
  
export default JavaDataTypesStringsQuestion1
  