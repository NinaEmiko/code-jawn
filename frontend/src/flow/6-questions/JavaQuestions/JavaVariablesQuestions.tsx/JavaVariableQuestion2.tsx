import Answer from "../../../../components/Answer"
import "../../../../styling/Question.css"
import "../../../../styling/Answer.css"
import Question from "../../../../components/Question"
import { useEffect, useState } from "react"
import AnswerExplanationHeader from "../../../../components/AnswerExplanationHeader"


function JavaVariableQuestion2({props}:{props:any}) {
    const [question, setQuestion] = useState(``)
    const [codeBlock1, setCodeBlock1] = useState(``);
    const [codeBlock2, setCodeBlock2] = useState(``);
    const [codeBlock3, setCodeBlock3] = useState(``);
    const [codeBlock4, setCodeBlock4] = useState(``);
    const [codeBlock1Explanation, setCodeBlock1Explanation] = useState(``);
    const [codeBlock2Explanation, setCodeBlock2Explanation] = useState(``);
    const [codeBlock3Explanation, setCodeBlock3Explanation] = useState(``);
    const [codeBlock4Explanation, setCodeBlock4Explanation] = useState(``);
    const [answer, setAnswer] = useState('');
    const [answer1Correct, setAnswer1Correct] = useState(false);
    const [answer2Correct, setAnswer2Correct] = useState(false);
    const [answer3Correct, setAnswer3Correct] = useState(false);
    const [answer4Correct, setAnswer4Correct] = useState(false);

useEffect(() => {

if(question === ``){
setQuestion(
`Select the correct option.`
)
}

if(codeBlock1 === ``){
setCodeBlock1(
`String count = 5;`
)
}

if(codeBlock2 === ``){
setCodeBlock2(
`boolean count = \"five\";`
)
}

if(codeBlock3 === ``){
setCodeBlock3(
`int count = \"5\";`
)
}

if(codeBlock4 === ``){
setCodeBlock4(
`int count = 5;`
)
}

if(codeBlock1Explanation === ``){
setCodeBlock1Explanation(
`This statement is declaring a String variable named count.
It is attempting to assign an int value of 5 to count.
int values cannot be assigned to String variables.`
)
}

if(codeBlock2Explanation === ``){
setCodeBlock2Explanation(
`This is declaring a boolean variable named count.
It is attempting to assign a String value of "five" to count.
String values cannot be assigned to boolean variables.`
)
}

if(codeBlock3Explanation === ``){
setCodeBlock3Explanation(
`This is declaring an int variable named count.
It is attempting to assign a String value of "5" to count.
String values cannot be assigned to int variables.`
)
}

if(codeBlock4Explanation === ``){
setCodeBlock4Explanation(
`This is declaring an int variable named count.
It is assigning an int value of 5 to count.`
)
}

if (answer === '') {
    setAnswer1Correct(true);
    setAnswer2Correct(false);
    setAnswer3Correct(false);
    setAnswer4Correct(false);
}
})

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
                    <Question props={{text: question}} />
                </div>
                <div className="answer-jawn">
                    <Answer props={{
                        answerClicked:handleAnswer1Click,
                        code: codeBlock1
                        }} />
                    <Answer props={{
                        answerClicked:handleAnswer2Click,
                        code: codeBlock2
                        }} />
                    <Answer props={{
                        answerClicked:handleAnswer3Click,
                        code: codeBlock3
                        }} />
                    <Answer props={{
                        answerClicked:handleAnswer4Click,
                        code: codeBlock4
                        }} />
                </div>
            </div>
        }
        {answer === 'A' &&
            <div className="question-container">
                <AnswerExplanationHeader props={answer1Correct} />
                <div className="answer-jawn">
                    <Answer props={{
                        answerClicked:null,
                        code: codeBlock1
                        }} />
                </div>
                <div className="question-explanation">
                    {codeBlock1Explanation}
                </div>
                <button className="explanation-btn" onClick={endQuestion} >
                    Continue
                </button>
            </div>
        }
        {answer === 'B' &&
            <div className="question-container">
                <AnswerExplanationHeader props={answer2Correct} />
                <div className="answer-jawn">
                    <Answer props={{
                        answerClicked:null,
                        code: codeBlock2
                        }} />
                </div>
                <div className="question-explanation">
                    {codeBlock2Explanation}
                </div>
                <button className="explanation-btn" onClick={endQuestion} >
                    Continue
                </button>
            </div>
        }
        {answer === 'C' &&
            <div className="question-container">
                <AnswerExplanationHeader props={answer3Correct} />
                <div className="answer-jawn">
                    <Answer props={{
                        answerClicked:null,
                        code: codeBlock3
                        }} />
                </div>
                <div className="question-explanation">
                    {codeBlock3Explanation}
                </div>
                <button className="explanation-btn" onClick={endQuestion} >
                    Continue
                </button>
            </div>
        }
        {answer === 'D' &&
            <div className="question-container">
                <AnswerExplanationHeader props={answer4Correct} />
                <div className="answer-jawn">
                        <Answer props={{
                            answerClicked:null,
                            code: codeBlock4
                            }} />
                    </div>
                    <div className="question-explanation">
                        {codeBlock4Explanation}
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
  