import { useState } from "react";
import JavaDataTypesStringsQuestion1 from "../../../6-questions/JavaQuestions/JavaDataTypesStrings/JavaDataTypesStringsQuestion1";
import JavaDataTypesStringsQuestion2 from "../../../6-questions/JavaQuestions/JavaDataTypesStrings/JavaDataTypesStringsQuestion2";
import JavaDataTypesStringsQuestion3 from "../../../6-questions/JavaQuestions/JavaDataTypesStrings/JavaDataTypesStringsQuestion3";
import JavaDataTypesStringsQuestion4 from "../../../6-questions/JavaQuestions/JavaDataTypesStrings/JavaDataTypesStringsQuestion4";
import ProgressTracker from "../../../../components/ProgressTracker";
import JavaDataTypesStringsQuestion5 from "../../../6-questions/JavaQuestions/JavaDataTypesStrings/JavaDataTypesStringsQuestion5";
import JavaDataTypesStringsLecture1 from "../../../6-questions/JavaQuestions/JavaDataTypesStrings/JavaDataTypesStringsLecture1";
import JavaDataTypesStringsLecture2 from "../../../6-questions/JavaQuestions/JavaDataTypesStrings/JavaDataTypesStringsLecture2";

function JavaDataTypesStrings({props}:{props:any}) {
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const [questionsAnswered, setQuestionsAnswered] = useState(0);
    const [lecturesCompleted, setLecturesCompleted] = useState(0);

    const handleBackClick = () => {
        props.handleRedirectJavaLessons("Java Lessons");
    }

    const completeLecture = () => {
        setLecturesCompleted(lecturesCompleted + 1);
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
        <ProgressTracker props={{questionsAnswered:questionsAnswered,totalQuestions:4}}/>
        <div className="parent-jawn">
            <div className="child-jawn">

                {lecturesCompleted < 2 &&
                    <>
                        {lecturesCompleted === 0 &&
                            <JavaDataTypesStringsLecture1 props={{completeLecture:completeLecture}} />
                        }
                        {lecturesCompleted === 1 &&
                            <JavaDataTypesStringsLecture2 props={{completeLecture:completeLecture}} />
                        }
                    </>
                }
                
                {lecturesCompleted === 2 &&
                    <>
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
                        {questionsAnswered === 4 &&
                            <JavaDataTypesStringsQuestion5 props={{completeQuestion:completeQuestion}} />
                        }
                        {questionsAnswered === 5 &&
                            <div className="question-explanation">
                                Score: {correctAnswers}/5
                            </div>
                        }
                    </>
                }
            </div>
        </div>
    </>
  )
}

export default JavaDataTypesStrings