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

  const onLogin = (e: FormEvent, username: string, password: string) => {

    e.preventDefault();
    login(username, password)
      .then((response) => {
        Cookies.set('storedId', response.data.id);
        Cookies.set('storedUsername', response.data.username);
        Cookies.set('authHeader', response.data.token);
        setAuthHeader(response.data.token);
        setCurrentUser({
          id: response.data.id,
          username: response.data.username,
          loggedIn: true,
        });
      })
      .catch((error) => {
        setAuthHeader(null);
      });
      console.log(Cookies.get('storedId'))
  };

  const onRegister = (username: string, email: string, password: string) => {

    register(username, email, password)
      .then((response) => {
        Cookies.set('storedId', response.data.id);
        Cookies.set('storedUsername', response.data.username);
        Cookies.set('authHeader', response.data.token);
        setAuthHeader(response.data.token);
        setCurrentUser({
          id: response.data.id,
          username: response.data.username,
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
        <LoginForm onLogin={onLogin} onRegister={onRegister} currentUser={currentUser} logout={(logout)} />
      }
      {currentUser.loggedIn &&
        <Home />
      }
    </>
  )
}

export default App