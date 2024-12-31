import { FormEvent, useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { setAuthHeader } from "./helpers/axiosHelper";
import LoginForm from "./pages/LoginForm";
import { register, login } from "./api/api"
import "./styling/Answer.css"
import "./styling/Container.css"
import "./styling/Display.css"
import "./styling/Language.css"
import "./styling/Lecture.css"
import "./styling/Lesson.css"
import "./styling/LoginForm.css"
import "./styling/Question.css"
import "./styling/Profile.css"
import "./styling/Button.css"
import "./styling/Spacer.css"
import "./styling/GetStarted.css"
import './styling/GlowingButton.css';
import './styling/Header.css';
import './styling/Modal.css';
import JavaSections from "./languages/JavaLanguage";
import SelectLanguage from "./pages/SelectLanguage";
import Container from "./components/Container";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import GetStarted from "./pages/GetStarted";
import PythonSections from "./languages/PythonLanguage";

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

function App() {
  const [getStarted, setGetStarted] = useState(false);
  const [activeTab, setActiveTab] = useState("Select a Language");
  const [showProfile, setShowProfile] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    username: '',
    email: '',
    id: 0,
    loggedIn: false,
  });

  const handleGetStarted = () => {
    setGetStarted(true)
  }

  const handleUpdateEmail = (newEmail: string) => {
    setCurrentUser((prev) => ({
      ...prev,
      email: newEmail,
    }));
  }

  const handleClickProfile = () => { setShowProfile(true); }
  const handleClickLearn = () => { setShowProfile(false); }
  const handleRedirectHome = (component: string) => { setActiveTab(component); }

  const logout = () => {
    setCurrentUser((prev) => ({
      ...prev,
      loggedIn: false,
    }));
    setAuthHeader(null);
    Cookies.set('storedId', "");
    Cookies.set('storedUsername', "");
    Cookies.set("storedEmail", "")
    Cookies.set('authHeader', "");
  };

  const loginCall = async (e: FormEvent, username: string, password: string) => {
    e.preventDefault();
    const data = await login(username, password);
        Cookies.set('storedId', data.userId);
        Cookies.set('storedUsername', data.username);
        Cookies.set('storedEmail', data.email);
        Cookies.set('authHeader', data.token);
        setAuthHeader(data.token);
        setCurrentUser({
          id: data.userId,
          username: data.username,
          email: data.email,
          loggedIn: true,
        });
}

  const registerCall = async (e: FormEvent, username: string, email: string, password: string) => {
    e.preventDefault();
    const data = await register(username, email, password);
        Cookies.set('storedId', data.userId);
        Cookies.set('storedUsername', data.username);
        Cookies.set('storedEmail', data.email);
        Cookies.set('authHeader', data.token);
        setAuthHeader(data.token);
        setCurrentUser({
          id: data.userId,
          username: data.username,
          email: data.email,
          loggedIn: true,
        });
  };

  useEffect(() => {
    const auth = Cookies.get('authHeader');
    const storedId = Cookies.get('storedId');
    const storedUsername = Cookies.get('storedUsername');
    const storedEmail = Cookies.get('storedEmail');
    if (storedId && storedUsername && auth && storedEmail) {
      setAuthHeader(auth);
      setCurrentUser({
        id: Number(storedId),
        username: storedUsername,
        email: storedEmail,
        loggedIn: true,
      });
    }
  }, []);

  return (
    <Container>

      {!getStarted ? (
        <GetStarted
          handleGetStarted={handleGetStarted}
        />
      ) : (
    <>

      {!currentUser.loggedIn &&
        <LoginForm
          onLogin={loginCall}
          onRegister={registerCall}
        />
      }

      {currentUser.loggedIn &&
      <>
        <Header handleClickProfile={handleClickProfile} handleClickLearn={handleClickLearn} handleClickLogout={logout} />
          {activeTab === "Select a Language" &&
            <SelectLanguage
              handleRedirectHome={handleRedirectHome}
            />
          }
          {activeTab === "Java" &&
            <JavaSections
              handleRedirectHome={handleRedirectHome}
              currentUser={currentUser}
            />
          }
          {activeTab === "JavaScript" &&
            <PythonSections
              handleRedirectHome={handleRedirectHome}
              currentUser={currentUser}
            />
          } 
          {activeTab === "Python" &&
            <PythonSections
              handleRedirectHome={handleRedirectHome}
              currentUser={currentUser}
            />
          } 
          {activeTab === "SpringBoot" &&
            <PythonSections
              handleRedirectHome={handleRedirectHome}
              currentUser={currentUser}
            />
          } 
          {activeTab === "React" &&
            <PythonSections
              handleRedirectHome={handleRedirectHome}
              currentUser={currentUser}
            />
          } 

          {showProfile && 
            <>
              <Profile props={{
                logout:logout,
                currentUser:currentUser,
                handleUpdateEmail:handleUpdateEmail,
                }} />
            </>
          }
        </>
      }
      </>
      )}
    </Container>
  )
}

export default App