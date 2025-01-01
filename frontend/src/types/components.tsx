export interface User{
    username: string,
    email: string,
    id: number,
    loggedIn: boolean,
  }
  
  export interface LessonsProps{
    handleRedirectLanguage:(component: string)=>void,
    handleRedirectHome:(component: string)=>void,
    currentUser:User,
  }
  
  export interface LanguageProps{
    handleRedirectHome:(component: string)=>void,
    currentUser:User,
  }
  
  export interface SubLessonsProps{
    handleRedirectLesson:(component: string)=>void,
    currentUser:User,
  }
  
  export interface LectureProps{
    completeLecture: ()=>void;
  }
  
  export interface PostLessonProps{
    handleCompleteLesson: ()=>void;
    restCallSuccessful: boolean;
  }
  
  export interface QuestionProps{
    completeQuestion: (isComplete: boolean)=>void;
  }
  
  export interface LectureWidgetProps{
    isComplete: boolean,
    handleClickWidget: (lecture: string)=>void,
    lesson: string,
    path: string,
  }