import { useState } from "react";
import Container from "../../../../components/Container"
import Display from "../../../../components/Display"
import PageName from "../../../../components/PageName"

function JavaLesson2({props}:{props:any}) {
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
        <PageName props={{title: "Java Lesson 2", handleBackClick:handleBackClick, buttonOneText:"Exit"}} />
        <Display>
            <div className="parent-jawn">
                <div className="child-jawn">
                    
                </div>
            </div>
        </Display>
    </Container>
  )
}

export default JavaLesson2