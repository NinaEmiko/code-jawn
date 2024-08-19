import { useState } from "react";
import JavaDataTypesIntsQuestion1 from "../../../5-questions/JavaQuestions/JavaDataTypesInts/JavaDataTypesIntsQuestion1";
import JavaDataTypesIntsQuestion4 from "../../../5-questions/JavaQuestions/JavaDataTypesInts/JavaDataTypesIntsQuestion4";
import ProgressTracker from "../../../../components/utility/ProgressTracker";

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
    <>
        <button className="back-btn-jawn" onClick={handleBackClick}>{"‹"}</button>
        <ProgressTracker props={{questionsAnswered:questionsAnswered,totalQuestions:2}}/>
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
                {questionsAnswered === 2 &&
                    <div className="question-explanation">
                        Score: {correctAnswers}/2
                    </div>
                }
            </div>
        </div>
    </>
  )
}

export default JavaDataTypesInts