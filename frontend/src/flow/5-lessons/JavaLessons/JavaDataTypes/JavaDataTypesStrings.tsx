import { useState } from "react";
import JavaDataTypesStringsQuestion1 from "../../../6-questions/JavaQuestions/JavaDataTypesStrings/JavaDataTypesStringsQuestion1";
import JavaDataTypesStringsQuestion2 from "../../../6-questions/JavaQuestions/JavaDataTypesStrings/JavaDataTypesStringsQuestion2";
import JavaDataTypesStringsQuestion3 from "../../../6-questions/JavaQuestions/JavaDataTypesStrings/JavaDataTypesStringsQuestion3";
import JavaDataTypesStringsQuestion4 from "../../../6-questions/JavaQuestions/JavaDataTypesStrings/JavaDataTypesStringsQuestion4";
import ProgressTracker from "../../../../components/ProgressTracker";
import JavaDataTypesStringsQuestion5 from "../../../6-questions/JavaQuestions/JavaDataTypesStrings/JavaDataTypesStringsQuestion5";
import JavaDataTypesStringsLecture1 from "../../../6-questions/JavaQuestions/JavaDataTypesStrings/JavaDataTypesStringsLecture1";
import JavaDataTypesStringsLecture2 from "../../../6-questions/JavaQuestions/JavaDataTypesStrings/JavaDataTypesStringsLecture2";
import LoginContainer from "../../../../components/LoginContainer";
import HeaderDisplay from "../../../../components/HeaderDisplay";
import SubDisplay from "../../../../components/SubDisplay";
import Header from "../../../../components/Header";
import JavaDataTypesStringsLecture from "../../../6-questions/JavaQuestions/JavaDataTypesStrings/JavaDataTypesStringsLecture";

function JavaDataTypesStrings({props}:{props:any}) {
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const [questionsAnswered, setQuestionsAnswered] = useState(0);
    const [lecturesCompleted, setLecturesCompleted] = useState(false);

    const handleBackClick = () => {
        props.handleRedirectJavaLessons("Java Lessons");
    }

    const completeLecture = () => {
        setLecturesCompleted(true);
    }

    const completeQuestion = (correct: boolean) => {
        correct ? 
            setCorrectAnswers(correctAnswers + 1)
            : 
            setIncorrectAnswers(incorrectAnswers + 1);

        setQuestionsAnswered(questionsAnswered + 1);
    }

  return (
    <LoginContainer>
        <button className="back-btn-jawn" onClick={handleBackClick}>{"‹"}</button>
        <HeaderDisplay>
        <div className="top-header">
            {/* <Header props={{text: "Strings"}} /> */}
            <ProgressTracker props={{questionsAnswered:questionsAnswered,totalQuestions:5}}/>
        </div>
        <div className="bottom-header">

        </div>
      </HeaderDisplay>
        <SubDisplay>

                {lecturesCompleted === false &&
                    <>
                        <JavaDataTypesStringsLecture props={{completeLecture:completeLecture}} />
                    </>
                }
                
                {lecturesCompleted === true &&
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
        </SubDisplay>
    </LoginContainer>
  )
}

export default JavaDataTypesStrings