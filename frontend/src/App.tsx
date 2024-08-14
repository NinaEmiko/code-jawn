import Home from "./flow/1-home/Home"
import { FormEvent, useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { setAuthHeader } from "./helpers/axiosHelper";
import LoginForm from "./flow/2-select-language/LoginForm";
import { register, login } from "./api/api"

function App() {
  const [currentUser, setCurrentUser] = useState({
    username: '',
    id: 0,
    loggedIn: false,
  });

  console.log(currentUser)

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

  const registerCall = async (username: string, email: string, password: string) => {

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
        <Home props={{logout:logout}} />
      }
    </>
  )
}

export default App