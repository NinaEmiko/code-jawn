import { useState } from "react";
import JavaDataTypesIntsQuestion1 from "../../../5-questions/JavaQuestions/JavaDataTypesInts/JavaDataTypesIntsQuestion1";
import JavaDataTypesIntsQuestion4 from "../../../5-questions/JavaQuestions/JavaDataTypesInts/JavaDataTypesIntsQuestion4";
import ProgressTracker from "../../../../components/utility/ProgressTracker";
import { updateJavaDataTypesLT } from "../../../../api/api";
import Display from "../../../../components/Display";
import JavaDataTypesIntsLecture from "../../../5-questions/JavaQuestions/JavaDataTypesInts/JavaDataTypesIntsLecture";
import JavaDataTypesIntsPostLesson from "../../../5-questions/JavaQuestions/JavaDataTypesInts/JavaDataTypesIntsPostLesson";

function JavaDataTypesInts({props}:{props:any}) {
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
        const data = await updateJavaDataTypesLT(props.currentUser.id, "ints");
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

  return (
    <>
        <Display>
            <div className="spacer-15" />
            {lecturesCompleted === false &&
                <JavaDataTypesIntsLecture props={{completeLecture:completeLecture}} />
            }
            
            {lecturesCompleted === true &&
                <>
                    {questionsAnswered === 0 &&
                        <JavaDataTypesIntsQuestion1 props={{completeQuestion:completeQuestion}} />
                    }
                    {questionsAnswered === 1 &&
                        <JavaDataTypesIntsQuestion4 props={{completeQuestion:completeQuestion, updateLessonTracker:updateLessonTracker}} />
                    }
                    {questionsAnswered === 2 &&
                        <JavaDataTypesIntsPostLesson props={{handleCompleteLesson:handleCompleteLesson, restCallSuccessful:restCallSuccessful}} />
                    }
                </>
            }
            <div className="spacer-5" />
            <ProgressTracker props={{questionsAnswered:questionsAnswered,totalQuestions:2}}/>
        </Display>
    </>
  )
}

export default JavaDataTypesInts