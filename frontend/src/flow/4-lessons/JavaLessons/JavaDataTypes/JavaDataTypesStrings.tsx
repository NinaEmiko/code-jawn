import { useState } from "react";
import JavaDataTypesStringsQuestion1 from "../../../5-questions/JavaQuestions/JavaDataTypesStrings/JavaDataTypesStringsQuestion1";
import JavaDataTypesStringsQuestion2 from "../../../5-questions/JavaQuestions/JavaDataTypesStrings/JavaDataTypesStringsQuestion2";
import JavaDataTypesStringsQuestion3 from "../../../5-questions/JavaQuestions/JavaDataTypesStrings/JavaDataTypesStringsQuestion3";
import JavaDataTypesStringsQuestion4 from "../../../5-questions/JavaQuestions/JavaDataTypesStrings/JavaDataTypesStringsQuestion4";
import ProgressTracker from "../../../../components/utility/ProgressTracker";
import JavaDataTypesStringsQuestion5 from "../../../5-questions/JavaQuestions/JavaDataTypesStrings/JavaDataTypesStringsQuestion5";
import Display from "../../../../components/Display";
import JavaDataTypesStringsLecture from "../../../5-questions/JavaQuestions/JavaDataTypesStrings/JavaDataTypesStringsLecture";
import JavaDataTypesStringsPostLesson from "../../../5-questions/JavaQuestions/JavaDataTypesStrings/JavaDataTypesStringsPostLesson";
import { updateJavaDataTypesLT } from "../../../../api/api";
import BackButton from "../../../../assets/back-button-icon-accent.png"

function JavaDataTypesStrings({props}:{props:any}) {
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const [questionsAnswered, setQuestionsAnswered] = useState(0);
    const [lecturesCompleted, setLecturesCompleted] = useState(false);
    const [restCallSuccessful, setRestCallSuccessful] = useState(false);

    const handleBackClick = () => {
        props.handleShowAppBar(true);
        props.handleRedirectJavaLessons("Java Lessons");
    }

    const handleCompleteLesson = () => {
        props.handleShowAppBar(true);
        props.handleRedirectJavaLessons("Java Lessons");
    }

    const updateLessonTracker = async () => {
        const data = await updateJavaDataTypesLT(props.currentUser.id, "Strings");
        if (data === "SUCCESS"){
            setRestCallSuccessful(true);
        }
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

    console.log()

  return (
    <>
        <div className="back-btn-container">
            <button className="back-btn-jawn" onClick={handleBackClick}>
                Back
                </button>
        </div>
        <Display>
            <div className="spacer-20" />
            <ProgressTracker props={{questionsAnswered:questionsAnswered,totalQuestions:5}}/>
            <div className="spacer-5" />
            {lecturesCompleted === false &&
                <JavaDataTypesStringsLecture props={{completeLecture:completeLecture}} />
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
                        <JavaDataTypesStringsQuestion5 props={{completeQuestion:completeQuestion, updateLessonTracker:updateLessonTracker}} />
                    }
                    {questionsAnswered === 5 &&
                        <JavaDataTypesStringsPostLesson props={{handleCompleteLesson:handleCompleteLesson, restCallSuccessful:restCallSuccessful}} />
                    }
                </>
            }
        </Display>
    </>
  )
}

export default JavaDataTypesStrings