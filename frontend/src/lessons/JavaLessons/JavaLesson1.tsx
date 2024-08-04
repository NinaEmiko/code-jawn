import { useState } from "react"
import Container from "../../components/Container"
import Display from "../../components/Display"
import PageName from "../../components/PageName"
import JavaVariableQuestion1 from "../../questions/JavaQuestions/JavaLesson1Questions/JavaVariableQuestion1"
import JavaVariableQuestion2 from "../../questions/JavaQuestions/JavaLesson1Questions/JavaVariableQuestion2"

function JavaLesson1({props}:{props:any}) {
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const [questionsAnswered, setQuestionsAnswered] = useState(0);


    const handleBackClick = () => {
        props.handleRedirectJavaLessons("Java Lessons");
    }

    const completeQuestion = (correct: boolean) => {
        correct ? 
            setCorrectAnswers(correctAnswers + 1)
            : 
            setIncorrectAnswers(incorrectAnswers + 1);

        setQuestionsAnswered(questionsAnswered + 1);
    }



  return (
    <Container>
        <PageName props={{title: "Java Lesson 1", handleBackClick:handleBackClick, buttonOneText:"Exit"}} />
        <Display>
            <div className="parent-jawn">
                <div className="child-jawn">
                    {questionsAnswered === 0 &&
                        <JavaVariableQuestion1 props={{completeQuestion:completeQuestion}} />
                    }
                    {questionsAnswered === 1 &&
                    <>
                        <JavaVariableQuestion2 props={{completeQuestion:completeQuestion}} />
                    </>
                    }
                    {questionsAnswered === 2 &&
                    <>
                        Out of questions.
                    </>
                    }
                </div>
            </div>
        </Display>
    </Container>
  )
}

export default JavaLesson1
