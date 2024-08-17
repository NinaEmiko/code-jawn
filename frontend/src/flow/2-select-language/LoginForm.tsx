import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import Container from '../../components/Container';
import Display from '../../components/Display';
import '../../styling/LoginForm.css';
import '../../styling/Tabs.css';
import Cookies from 'js-cookie';

interface LoginFormProps {
  onLogin: (e: FormEvent, username: string, password: string) => void;
  onRegister: (e: FormEvent, username: string, password: string, email: string) => void;
  currentUser: {username: string, id: number, loggedIn: boolean};
  logout: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onRegister, currentUser, logout }) => {
  const [activeButton, setActiveButton] = useState('Login');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const loginFormRef = useRef<HTMLFormElement | null>(null);
  const registerFormRef = useRef<HTMLFormElement | null>(null);
  
  const submitForm = () => {
    if (activeButton === "Register" && registerFormRef.current) {
      registerFormRef.current.requestSubmit();
    } else if (activeButton === "Login" && loginFormRef.current) {
      loginFormRef.current.requestSubmit();
    }
  };

  const handleTabClick = (button: string) => {
    setActiveButton(button);
    Cookies.set('LoginFormTab', button);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'username') setUsername(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
  };

  const onSubmitLogin = (e: FormEvent) => {
    
    e.preventDefault();

    onLogin(e, username, password);
    setMessage("Username or password is incorrect.")
  };

  const onSubmitRegister = (e: FormEvent) => {

    e.preventDefault();
    
    if (username.length < 4 || username.length > 16) {
      setMessage("Username must be 4-16 characters.")
    } else if(password.length < 7 || password.length > 16) {
      setMessage("Passwords must be 8-16 characters.")
    } else {
      onRegister(e, username, email, password);
    }
  };

  useEffect(() => {
    const storedTab = Cookies.get('LoginFormTab');
    if (storedTab) {
      setActiveButton(storedTab);
    }
  }, []);

  return (
    <div className="container-jawn2">
      <div className="top-display">
        <div className="header">
          Welcome
        </div>
        <div className="header">
          {activeButton}
        </div>
      </div>

      <div className="display-jawn2">
        <div className="parent-jawn2">
          <div className="child-jawn2">
              {activeButton === 'Login' && (
                <>
                  <form 
                  className="form-jawn" 
                  onSubmit={onSubmitLogin}
                  ref={loginFormRef}
                  >
                    <div className="username-jawn">
                      <div className="text">
                        Username
                      </div>
                      <input
                        type="text"
                        value={username}
                        name="username"
                        className="form-control"
                        onChange={onChangeHandler}
                      />
                    </div>
                    <div className="password-jawn">
                      <div className="text">
                        Password
                      </div>
                      <input
                        type="password"
                        value={password}
                        name="password"
                        className="form-control"
                        onChange={onChangeHandler}
                      />
                    </div>
                    <div className="sub-text2">
                      <a href="">Forgot Password</a>
                    </div>
                    <button className="input-btn" type="submit">Login</button>
                  </form>
                  <div>
                    <div className="sub-text">
                      Not a member? <a className="link" onClick={() => handleTabClick('Register')} >Sign up</a>
                    </div>
                  </div>
                </>
              )}

              {activeButton === 'Register' && (
                <div>
                <form 
                className="form-jawn" 
                onSubmit={onSubmitRegister}
                ref={registerFormRef}
                >
                  <div className="username-jawn">
                  <div className="text">
                      Username
                    </div>
                    <input
                      type="text"
                      value={username}
                      name="username"
                      className="form-control"
                      placeholder="Username"
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="username-jawn">
                  <div className="text">
                      Email
                    </div>
                    <input
                      type="text"
                      value={email}
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="password-jawn">
                  <div className="text">
                      Password
                    </div>
                    <input
                      type="password"
                      value={password}
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={onChangeHandler}
                    />
                    <p style={{color: "red"}}>{message}</p>
                  </div>
                  <div className="spacer"> </div>
                  <button className="input-btn" type="submit">Register</button>

                </form>
                <div>
                    <div className="sub-text">
                      Already a member? <a className="link" onClick={() => handleTabClick('Login')} >Sign in</a>
                    </div>
                  </div>
                </div>
              )}
          </div>
        </div>
        </div>
    </div>
  );
};

export default LoginForm;
