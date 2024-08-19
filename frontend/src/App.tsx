import { FormEvent, useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { setAuthHeader } from "./helpers/axiosHelper";
import LoginForm from "./flow/1-select-language/LoginForm";
import { register, login } from "./api/api"
import AppBar from "./components/AppBar";
import "./styling/Language.css"
import JavaScriptSections from "./flow/2-languages/JavaScriptSections";
import JavaSections from "./flow/2-languages/JavaSections";
import SelectLanguage from "./flow/1-select-language/SelectLanguage";

function App() {
  const [activeTab, setActiveTab] = useState("Select a Language");
  const [currentUser, setCurrentUser] = useState({
    username: '',
    id: 0,
    loggedIn: false,
  });

  const handleRedirectHome = (component: string) => {
    setActiveTab(component);
  }

  const logout = () => {
    setCurrentUser((prev) => ({
      ...prev,
      loggedIn: false,
    }));
    setAuthHeader(null);
    Cookies.set('storedId', "");
    Cookies.set('storedUsername', "");
    Cookies.set('authHeader', "");
  };

  const loginCall = async (e: FormEvent, username: string, password: string) => {
    e.preventDefault();
    const data = await login(username, password);
        Cookies.set('storedId', data.id);
        Cookies.set('storedUsername', data.username);
        Cookies.set('authHeader', data.token);
        setAuthHeader(data.token);
        setCurrentUser({
          id: data.id,
          username: data.username,
          loggedIn: true,
        });
}

  const registerCall = async (e: FormEvent, username: string, email: string, password: string) => {
    e.preventDefault();
    const data = await register(username, email, password);
        Cookies.set('storedId', data.id);
        Cookies.set('storedUsername', data.username);
        Cookies.set('authHeader', data.token);
        setAuthHeader(data.token);
        setCurrentUser({
          id: data.id,
          username: data.username,
          loggedIn: true,
        });
  };

  useEffect(() => {
    const auth = Cookies.get('authHeader');
    const storedId = Cookies.get('storedId');
    const storedUsername = Cookies.get('storedUsername');
    if (storedId && storedUsername && auth) {
      setAuthHeader(auth);
      setCurrentUser({
        id: Number(storedId),
        username: storedUsername,
        loggedIn: true,
      });
    }
  }, []);

  return (
    <>
      {!currentUser.loggedIn &&
        <LoginForm onLogin={loginCall} onRegister={registerCall} currentUser={currentUser} logout={(logout)} />
      }
      {currentUser.loggedIn &&
      <>
          {activeTab === "Select a Language" &&
            <SelectLanguage props={{handleRedirectHome:handleRedirectHome, logout:logout}} />
          }
          {activeTab === "Java" &&
            <JavaSections props={{handleRedirectHome:handleRedirectHome}} />
          }
          {activeTab === "JavaScript" &&
            <JavaScriptSections props={{handleRedirectHome:handleRedirectHome}} />
          } 
        </>
      }
    </>
  )
}

export default App