import { useState } from "react";
import Container from "../../../../components/Container"
import Display from "../../../../components/Display"
import JavaDataTypesStringsQuestion1 from "../../../6-questions/JavaQuestions/JavaDataTypesStrings/JavaDataTypesStringsQuestion1";
import JavaDataTypesStringsQuestion2 from "../../../6-questions/JavaQuestions/JavaDataTypesStrings/JavaDataTypesStringsQuestion2";
import JavaDataTypesStringsQuestion3 from "../../../6-questions/JavaQuestions/JavaDataTypesStrings/JavaDataTypesStringsQuestion3";
import JavaDataTypesStringsQuestion4 from "../../../6-questions/JavaQuestions/JavaDataTypesStrings/JavaDataTypesStringsQuestion4";

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
        <button className="back-btn-jawn" onClick={handleBackClick}>{"‹"}</button>
        <Display>
            <div className="parent-jawn">
                <div className="child-jawn">
                {questionsAnswered === 0 &&
                        <JavaDataTypesStringsQuestion1 props={{completeQuestion:completeQuestion}} />
                    }
                    {questionsAnswered === 1 &&
                        <JavaDataTypesStringsQuestion2 props={{completeQuestion:completeQuestion}} />
                    }
                    {questionsAnswered === 2 &&
                        <JavaDataTypesStringsQuestion3 props={{completeQuestion:completeQuestion}} />
                    }
                    {questionsAnswered === 3 &&
                        <JavaDataTypesStringsQuestion4 props={{completeQuestion:completeQuestion}} />
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

export default JavaLesson2