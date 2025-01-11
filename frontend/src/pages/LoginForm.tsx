import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import JustText from '../components/utility/JustText';
import LoginDisplay from '../components/LoginDisplay';
import { validCharacters, validEmail } from '../helpers/validCharacters';


interface LoginFormProps {
  onLogin: (e: FormEvent, username: string, password: string) => void;
  onRegister: (e: FormEvent, username: string, password: string, email: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onRegister }) => {
  const [activeButton, setActiveButton] = useState('Sign In');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const loginFormRef = useRef<HTMLFormElement | null>(null);
  const registerFormRef = useRef<HTMLFormElement | null>(null);

  const invalidCharacterCheck = (jawn: string) => {
      const charList = jawn.split("")
      const isValid = charList.every(char => validCharacters.includes(char));
      return isValid;
  }

  const handleTabClick = (button: string) => {
    setMessage('');
    if (button === "Sign In") {
      setActiveButton(button);
    } else if (button === "Sign Up") {
      setActiveButton(button);
    }
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'username') setUsername(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
  };

  const onSubmitLogin = async (e: FormEvent) => {
    e.preventDefault();
    setMessage('');
    try {
      await onLogin(e, username, password);
    } catch (error) {
      setMessage("Username or password is incorrect.")
    }
  };

  const onSubmitRegister = async (e: FormEvent) => {
    e.preventDefault();
    setMessage('');

  if (password.length < 8 || password.length > 16) {
    setMessage("Passwords must be between 8-16 characters.")
  } else if (!invalidCharacterCheck(password)) {
    setMessage("Password contains invalid characters.")
  } else if (!/[A-Z]/.test(password)){
    setMessage("Password must contain a capital letter.")
  } else if (!/[a-z]/.test(password)){
    setMessage("Password must contain a lower case letter.")
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    setMessage("Password must contain at least one special character (ie: !, @, #, $, %, &).")
  } else if (password === username){
    setMessage("Passwords cannot match usernames.")
  } else if (username.length < 4 || username.length > 16) {
    setMessage("Username must be 4-16 characters.")
  } else if (!invalidCharacterCheck(username)) {
    setMessage("Username contains invalid characters.")
  } else if (!validEmail(email)) {
    setMessage("Email is invalid.")
  } else {
      try {
         await onRegister(e, username, email, password);
      } catch (error) {
        setMessage("Issue occured while attempting to register new account. Please try again later.")
      }
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

            <JustText text={"Login"} />
            
            <input
              type="text"
              value={username}
              name="username"
              className="form-control"
              onChange={onChangeHandler}
              placeholder='Username'
            />

            <input
              type="password"
              value={password}
              name="password"
              className="form-control"
              onChange={onChangeHandler}
              placeholder='Password'
            />

            <p style={{color: "red"}}>{message}</p>

            <div className="forgot-password">
              <a className="jawnski" href="">Forgot Password</a>
            </div>

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

            <JustText text={"Register"} />

            <input
              type="text"
              value={username}
              name="username"
              className="form-control"
              onChange={onChangeHandler}
              placeholder='Username'
            />

            <input
              type="text"
              value={email}
              name="email"
              className="form-control"
              onChange={onChangeHandler}
              placeholder='Email'
            />
            
            <input
              type="password"
              value={password}
              name="password"
              className="form-control"
              onChange={onChangeHandler}
              placeholder='Password'
            />
                
            <p style={{color: "red"}}>{message}</p>
            
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
