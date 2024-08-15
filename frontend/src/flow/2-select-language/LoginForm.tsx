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
  const [confirmationPassword, setConfirmationPassword] = useState('');
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
    else if (name === 'confirmation-password') setConfirmationPassword(value);
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
    } else if (password != confirmationPassword) {
      setMessage("Passwords must match.")
    }  else {
      onRegister(e, username, email, password);
      // setMessage("Username taken.")
    }
  };

  useEffect(() => {
    const storedTab = Cookies.get('LoginFormTab');
    if (storedTab) {
      setActiveButton(storedTab);
    }
  }, []);

  return (
    <Container>
      <Display>
        <div className="parent-jawn">
          <div className="child-jawn">
            <div className="tab-jawn">
              {activeButton === 'Login' && (
                <form 
                className="form-jawn" 
                onSubmit={onSubmitLogin}
                ref={loginFormRef}
                >
                  <div className="username-jawn">
                    <input
                      type="text"
                      value={username}
                      name="username"
                      className="form-control"
                      placeholder="Username"
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="password-jawn">
                    <input
                      type="password"
                      value={password}
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={onChangeHandler}
                    />
                  </div>
                  <button className="input-btn" onClick={() => submitForm()}>Login</button>
                </form>
              )}

              {activeButton === 'Register' && (
                <form 
                className="form-jawn" 
                onSubmit={onSubmitRegister}
                ref={registerFormRef}
                >
                  <div className="username-jawn">
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
                    <input
                      type="password"
                      value={password}
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={onChangeHandler}
                    />
                    <input
                      type="password"
                      value={confirmationPassword}
                      name="confirmation-password"
                      className="form-control"
                      placeholder="Confirm Password"
                      onChange={onChangeHandler}
                    />
                    <p style={{color: "red"}}>{message}</p>
                  </div>
                  <button className="input-btn" onClick={() => submitForm()}>Register</button>
                </form>
              )}
            </div>
          </div>
          <div className="display-tabs-top-2">
            <button
              className={activeButton === 'Login' ? 'active' : ''}
              onClick={() => handleTabClick('Login')}
            >
              Login
            </button>
            <button
              className={activeButton === 'Register' ? 'active' : ''}
              onClick={() => handleTabClick('Register')}
            >
              Register
            </button>
          </div>
        </div>
      </Display>
      {/* <Controls children={undefined} /> */}
    </Container>
  );
};

export default LoginForm;
