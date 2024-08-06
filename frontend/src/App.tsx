import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./flow/1-home/Home"
import Controls from "./components/Controls"
import { FormEvent, useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { request, setAuthHeader } from "./helpers/axiosHelper";
import LoginForm from "./flow/2-select-language/LoginForm";

function App() {
  const [currentUser, setCurrentUser] = useState({
    userName: '',
    id: 0,
    loggedIn: false,
  });

  const logout = () => {
    setCurrentUser((prev) => ({
      ...prev,
      loggedIn: false,
    }));
    setAuthHeader(null);
    Cookies.set('storedId', "");
    Cookies.set('storedUserName', "");
    Cookies.set('authHeader', "");
  };

  const onLogin = (e: FormEvent, username: string, password: string) => {
    e.preventDefault();
    request('POST', `${import.meta.env.VITE_REACT_APP_URL}/login`, {
      login: username,
      password: password,
    })
      .then((response) => {
        Cookies.set('storedId', response.data.id);
        Cookies.set('storedUserName', response.data.userName);
        Cookies.set('authHeader', response.data.token);
        setAuthHeader(response.data.token);
        setCurrentUser({
          id: response.data.id,
          userName: response.data.userName,
          loggedIn: true,
        });
      })
      .catch((error) => {
        setAuthHeader(null);
      });
  };

  const onRegister = (username: string, password: string) => {
    request('POST', `${import.meta.env.VITE_REACT_APP_URL}/register`, {
      login: username,
      password: password,
    })
      .then((response) => {
        Cookies.set('storedId', response.data.id);
        Cookies.set('storedUserName', response.data.userName);
        Cookies.set('authHeader', response.data.token);
        setAuthHeader(response.data.token);
        setCurrentUser({
          id: response.data.id,
          userName: response.data.userName,
          loggedIn: true,
        });
      })
      .catch((error) => {
        setAuthHeader(null);
      });
  };

  useEffect(() => {
    const auth = Cookies.get('authHeader');
    const storedId = Cookies.get('storedId');
    const storedUserName = Cookies.get('storedUserName');
    if (storedId && storedUserName && auth) {
      setAuthHeader(auth);
      setCurrentUser({
        id: Number(storedId),
        userName: storedUserName,
        loggedIn: true,
      });
    }
  }, []);

  return (
    <>
      {/* {!currentUser.loggedIn &&
        <LoginForm onLogin={onLogin} onRegister={onRegister} currentUser={currentUser} logout={(logout)} />
      } */}
      {!currentUser.loggedIn &&
        <Home />
      }
    </>
  )
}

export default App