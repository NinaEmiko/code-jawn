import { FC, useState } from "react";
import { updateJavaDataTypesLT } from "../../../api/api";
import Display from "../../../components/Display";
import { SubLessonsProps } from "../../../types/components"
import PostLesson from "../../../components/PostLesson";
import GlowingButton from "../../../components/GlowingButton";
import JavaDataTypesStringsLecture1 from "../../../questions/java/data-types/strings/JavaDataTypesStringsLecture1";
import JavaDataTypesStringsLecture2 from "../../../questions/java/data-types/strings/JavaDataTypesStringsLecture2";
import JavaDataTypesStringsQuestion1 from "../../../questions/java/data-types/strings/JavaDataTypesStringsQuestion1";
import JavaDataTypesStringsQuestion2 from "../../../questions/java/data-types/strings/JavaDataTypesStringsQuestion2";
import JavaDataTypesStringsQuestion3 from "../../../questions/java/data-types/strings/JavaDataTypesStringsQuestion3";
import JavaDataTypesStringsQuestion4 from "../../../questions/java/data-types/strings/JavaDataTypesStringsQuestion4";
import JavaDataTypesStringsQuestion5 from "../../../questions/java/data-types/strings/JavaDataTypesStringsQuestion5";
import { JAVA_NAVIGATION_PATHS } from "../../../helpers/NavigationConstants";
import ProgressCircle from "../../../components/ProgressCircle";

const JavaDataTypesStringsLecture: FC<SubLessonsProps> = ({handleRedirectLesson, currentUser}) => {
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const [questionsAnswered, setQuestionsAnswered] = useState(0);
    const [lecturesCompleted, setLecturesCompleted] = useState(false);
    const [restCallSuccessful, setRestCallSuccessful] = useState(false);
    const [buttonText, setButtonText] = useState('Next');
    const [activeLecture, setActiveLecture] = useState(0)
    const [progress, setProgress] = useState<number>(0);
    const [previousProgress, setPreviousProgress] = useState<number>(0);

    const handleClickButton = () =>{
        if (activeLecture === 0) {
            setButtonText('Begin')
            setActiveLecture(1)
        } else {
            completeLecture()
        }
    }

    const handleCompleteLesson = () => {
        handleRedirectLesson(JAVA_NAVIGATION_PATHS.DEFAULT);
    }

    const updateLessonTracker = async () => {
        const data = await updateJavaDataTypesLT(currentUser.id, "Strings");
        if (data === "SUCCESS"){
            setRestCallSuccessful(true);
        }
    }

    const completeLecture = () => {
        setLecturesCompleted(true);
    }

    const completeQuestion = (correct: boolean) => {
        if (correct) {
            setCorrectAnswers(correctAnswers + 1)
            if (questionsAnswered === 4){
                updateLessonTracker()
            }
            setPreviousProgress(progress);
            setProgress(progress + 20);
            setQuestionsAnswered(questionsAnswered + 1);
        } else {
            setIncorrectAnswers(incorrectAnswers + 1);
        }
    }

  return (
    <>
        <Display>
            <div className="spacer-10" />
            <div className="progress-circle-container">
                <ProgressCircle percentage={progress} previousPercentage={previousProgress} style={{width: 80, height: 80} } />
            </div>
            {lecturesCompleted === false &&
                <>
                    <div className="lecture-container2">
                        {activeLecture === 0 ? (
                            <JavaDataTypesStringsLecture1 />
                        ) : (
                            <JavaDataTypesStringsLecture2 />
                        )}
                    </div>
                    <GlowingButton buttonText={buttonText} buttonColor={'#12edd8'} buttonPress={handleClickButton} />
                </>
            }
            
            {lecturesCompleted === true &&
                <>
                    {questionsAnswered === 0 &&
                        <JavaDataTypesStringsQuestion1 completeQuestion={completeQuestion} />
                    }
                    {questionsAnswered === 1 &&
                        <JavaDataTypesStringsQuestion2 completeQuestion={completeQuestion} />
                    }
                    {questionsAnswered === 2 &&
                        <JavaDataTypesStringsQuestion3 completeQuestion={completeQuestion} />
                    }
                    {questionsAnswered === 3 &&
                        <JavaDataTypesStringsQuestion4 completeQuestion={completeQuestion} />
                    }
                    {questionsAnswered === 4 &&
                        <JavaDataTypesStringsQuestion5 completeQuestion={completeQuestion} />
                    }
                    {questionsAnswered === 5 &&
                        <PostLesson 
                            handleCompleteLesson={handleCompleteLesson}
                            restCallSuccessful={restCallSuccessful}
                        />
                    }
                </>
            }
        </Display>
    </>
  )
}

export default JavaDataTypesStringsLecture