import { FormEvent, useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { setAuthHeader } from "./helpers/axiosHelper";
import LoginForm from "./flow/1-select-language/LoginForm";
import { register, login } from "./api/api"
import AppBar from "./components/AppBar";
import "./styling/Answer.css"
import "./styling/Container.css"
import "./styling/Controls.css"
import "./styling/Display.css"
import "./styling/Language.css"
import "./styling/Lecture.css"
import "./styling/Lesson.css"
import "./styling/LoginForm.css"
import "./styling/Question.css"
import "./styling/Profile.css"
import JavaScriptSections from "./flow/2-languages/JavaScriptSections";
import JavaSections from "./flow/2-languages/JavaSections";
import SelectLanguage from "./flow/1-select-language/SelectLanguage";
import Container from "./components/Container";
import Profile from "./flow/1-select-language/Profile";
import HeaderDisplay from "./components/HeaderDisplay";
import Header from "./components/Header";
import ProfileHeaderDisplay from "./components/ProfileHeaderDisplay";

function App() {
  const [activeTab, setActiveTab] = useState("Select a Language");
  const [showProfile, setShowProfile] = useState(false);
  const [pageTitle, setPageTitle] = useState("Welcome Back!");
  const [currentUser, setCurrentUser] = useState({
    username: '',
    email: '',
    id: 0,
    loggedIn: false,
  });

  const handleUpdateEmail = (newEmail: string) => {
    setCurrentUser((prev) => ({
      ...prev,
      email: newEmail,
    }));
  }
  const handlePageTitle = (title: string) => { setPageTitle(title); }
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
    setPageTitle("Welcome Back!");
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
    setPageTitle("Select a Language");
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
    setPageTitle("Select a Language");
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
      <HeaderDisplay>
        <Header props={{ text: pageTitle }} />
      </HeaderDisplay>

      {!currentUser.loggedIn &&
        <LoginForm onLogin={loginCall} onRegister={registerCall} currentUser={currentUser} logout={(logout)} handlePageTitle={(handlePageTitle)} />
      }
      {currentUser.loggedIn &&
      <>
          {activeTab === "Select a Language" &&
            <SelectLanguage props={{handleRedirectHome:handleRedirectHome, handlePageTitle:handlePageTitle, currentUser:currentUser}} />
          }
          {activeTab === "Java" &&
            <JavaSections props={{handleRedirectHome:handleRedirectHome, currentUser:currentUser, handlePageTitle:handlePageTitle}} />
          }
          {activeTab === "JavaScript" &&
            <JavaScriptSections props={{handleRedirectHome:handleRedirectHome, handlePageTitle:handlePageTitle}} />
          } 

          {showProfile && 
            <>
              <ProfileHeaderDisplay>
                <Header props={{text: "Profile"}} />
              </ProfileHeaderDisplay>
              <Profile props={{logout:logout,
                currentUser:currentUser,
                handleUpdateEmail:handleUpdateEmail,
                }} />
            </>
          }
          <AppBar props={{handleClickProfile:handleClickProfile, handleClickLearn:handleClickLearn}} />
        </>
      }
    </Container>
  )
}

export default App