import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import '../../styling/LoginForm.css';
import Cookies from 'js-cookie';
import Header from '../../components/Header';
import HeaderDisplay from '../../components/HeaderDisplay';

interface LoginFormProps {
  onLogin: (e: FormEvent, username: string, password: string) => void;
  onRegister: (e: FormEvent, username: string, password: string, email: string) => void;
  currentUser: {username: string, id: number, loggedIn: boolean};
  logout: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onRegister, currentUser, logout }) => {
  const [activeButton, setActiveButton] = useState('Sign In');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const loginFormRef = useRef<HTMLFormElement | null>(null);
  const registerFormRef = useRef<HTMLFormElement | null>(null);
  
  const submitForm = () => {
    if (activeButton === "Sign Up" && registerFormRef.current) {
      registerFormRef.current.requestSubmit();
    } else if (activeButton === "Sign In" && loginFormRef.current) {
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

      <HeaderDisplay>
        {activeButton ==="Sign In" ?
          <Header props={{text: "Welcome back"}} />
          :
          <Header props={{text: "Welcome"}} />
        }
        <Header props={{text: activeButton}} />
      </HeaderDisplay>

      <div className="display-jawn2">
        <div className="parent-jawn2">
          <div className="child-jawn2">
            {activeButton === 'Sign In' && (
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
                  <button className="input-btn" type="submit">Sign In</button>
                </form>
                <div className="sub-text">
                  Not a member? <a className="link" onClick={() => handleTabClick('Sign Up')} >Sign up</a>
                </div>
              </>
            )}

            {activeButton === 'Sign Up' && (
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
                    <p style={{color: "red"}}>{message}</p>
                  </div>
                  <div className="spacer"> </div>
                  <button className="input-btn" type="submit">Sign Up</button>
                </form>
                <div className="sub-text">
                  Already a member? <a className="link" onClick={() => handleTabClick('Sign In')}>Sign in</a>
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
