import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import JustText from '../components/utility/JustText';
import LoginDisplay from '../components/LoginDisplay';


interface VerificationFormProps {
    onVerify: (e: FormEvent, code: string) => void;
    onRefreshVerificaton: (e: FormEvent) => void;
}

const VerificationForm: React.FC<VerificationFormProps> = ({ onVerify, onRefreshVerificaton }) => {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');

  const verificationFormRef = useRef<HTMLFormElement | null>(null);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCode(value);
  };

  const onSubmitVerify = async (e: FormEvent) => {
    e.preventDefault();
    setMessage('');
    try {
      await onVerify(e, code);
    } catch (error) {
      setMessage("Code entered is incorrect.")
    }
  };

  const onSubmitRefreshVerify = async (e: FormEvent) => {
    e.preventDefault();
    setMessage('');
    onRefreshVerificaton(e);
  }

  return (
    <div className="login-background">
      <LoginDisplay>
      
          <form 
          className="form-jawn" 
          onSubmit={onSubmitVerify}
          ref={verificationFormRef}
          >

            <JustText text={"Verification Code:"} />
            
            <input
              type="text"
              value={code}
              name="code"
              className="form-control"
              onChange={onChangeHandler}
            />

            <p style={{color: "red"}}>{message}</p>

            <div className="forgot-password">
              <a className="jawnski" onClick={()=>onSubmitRefreshVerify}>Refresh verification code</a>
            </div>

            <button className="input-btn" type="submit">Submit</button>

          </form>

      </LoginDisplay>
    </div>
  );
};

export default VerificationForm;
