import { useState } from "react";
import Container from "../../../../components/Container"
import Display from "../../../../components/Display"
import JavaDataTypesIntsQuestion1 from "../../../6-questions/JavaQuestions/JavaDataTypesInts/JavaDataTypesIntsQuestion1";
import JavaDataTypesIntsQuestion4 from "../../../6-questions/JavaQuestions/JavaDataTypesInts/JavaDataTypesIntsQuestion4";

function JavaDataTypesInts({props}:{props:any}) {
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
        <button className="back-btn-jawn" onClick={handleBackClick}>{"‹"}</button>
        <Display>
            <div className="parent-jawn">
                <div className="child-jawn">
                {questionsAnswered === 0 &&
                        <JavaDataTypesIntsQuestion1 props={{completeQuestion:completeQuestion}} />
                    }
                    {questionsAnswered === 1 &&
                        <JavaDataTypesIntsQuestion4 props={{completeQuestion:completeQuestion}} />
                    }
    
                    {/* {questionsAnswered === 4 &&
                        <JavaDataTypesStringsQuestion5 props={{completeQuestion:completeQuestion}} />
                    } */}
                    {questionsAnswered === 4 &&
                        <div className="question-explanation">
                            Score: {correctAnswers}/4
                        </div>
                    }
                </div>
            </div>
        </Display>
    </Container>
  )
}

export default JavaDataTypesInts