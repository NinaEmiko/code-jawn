import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import Cookies from 'js-cookie';
import JustText from '../../components/utility/JustText';
import LoginDisplay from '../../components/LoginDisplay';


interface LoginFormProps {
  handlePageTitle: (title: string) => void;
  onLogin: (e: FormEvent, username: string, password: string) => void;
  onRegister: (e: FormEvent, username: string, password: string, email: string) => void;
  currentUser: {username: string, id: number, loggedIn: boolean};
  logout: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onRegister, currentUser, logout, handlePageTitle }) => {
  const [activeButton, setActiveButton] = useState('Sign In');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const loginFormRef = useRef<HTMLFormElement | null>(null);
  const registerFormRef = useRef<HTMLFormElement | null>(null);

  const handleTabClick = (button: string) => {
    if (button === "Sign In") {
      setActiveButton(button);
      handlePageTitle("Welcome Back!");
    } else if (button === "Sign Up") {
      setActiveButton(button);
      handlePageTitle("Welcome!");
    }
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

  return (
    <div className="login-background">
      <LoginDisplay>
      
        {activeButton === 'Sign In' && (
          <form 
          className="form-jawn" 
          onSubmit={onSubmitLogin}
          ref={loginFormRef}
          >

            <JustText props={{text: "Login"}} />
            <div className="spacer-25" />
            
            <input
              type="text"
              value={username}
              name="username"
              className="form-control"
              onChange={onChangeHandler}
              placeholder='Username'
            />
            <br/>
            <input
              type="password"
              value={password}
              name="password"
              className="form-control"
              onChange={onChangeHandler}
              placeholder='Password'
            />
            <div className="sub-text2">
              <a className="jawnski" href="">Forgot Password</a>
            </div>
            <br/>
            <br/>
            <button className="input-btn" type="submit">Sign In</button>

            <div className="sub-text">
              Not a member? <a className="link" onClick={() => handleTabClick('Sign Up')} >Sign up</a>
            </div>

          </form>
        )}

        {activeButton === 'Sign Up' && (
          <form 
          className="form-jawn" 
          onSubmit={onSubmitRegister}
          ref={registerFormRef}
          >

            <JustText props={{text: "Register"}} />
            <br/>
            <input
              type="text"
              value={username}
              name="username"
              className="form-control"
              onChange={onChangeHandler}
              placeholder='Username'
            />
            <br/>
            <input
              type="text"
              value={email}
              name="email"
              className="form-control"
              onChange={onChangeHandler}
              placeholder='Email'
            />
            <br/>
            <input
              type="password"
              value={password}
              name="password"
              className="form-control"
              onChange={onChangeHandler}
              placeholder='Password'
            />
                
            <p style={{color: "red"}}>{message}</p>
            <br/>
            <button className="input-btn" type="submit">Sign Up</button>

            <div className="sub-text">
              Already a member? <a className="link" onClick={() => handleTabClick('Sign In')}>Sign in</a>
            </div>
            
          </form>
        )}
      </LoginDisplay>
    </div>
  );
};

export default LoginForm;
