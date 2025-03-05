import { ChangeEvent, FC, FormEvent, useRef, useState } from "react"
import { cancelVerificationCode, updateUserEmail, verifyEmailUpdated } from "../../api/api";
import Cookies from "js-cookie";
import JustText from "../utility/JustText";
import { User } from "../../types/components";

interface VerifyEmailProps{
    handleCancelVerifyEmailModal: () => void,
    handleSubmitVerifyEmailModal: (newEmail: string)=>void,
    updateEmail: string,
    currentUser: User
}

const VerifyEmail: FC<VerifyEmailProps> = ({ handleCancelVerifyEmailModal, handleSubmitVerifyEmailModal, currentUser, updateEmail }) => {
    const [code, setCode] = useState('');
    const [message, setMessage] = useState('');

    const newEmailFormRef = useRef<HTMLFormElement | null>(null);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setCode(value);
      };

      const onSubmitNewEmail = async (e: FormEvent) => {    
        e.preventDefault();
    
        const data = await verifyEmailUpdated(currentUser.id, updateEmail, code);

        if (data != null){
            handleSubmitVerifyEmailModal(data.email)
        } else {
            setMessage("Invalid verification code");
        }

        Cookies.set('storedEmail', data.newEmail);
        handleCancelVerifyEmailModal();
        handleSubmitVerifyEmailModal(data.newEmail)
      };    

      const closeModal = async () => {
        setMessage("");
        const data = await cancelVerificationCode(updateEmail);
        if (data == "SUCCESS") {
            handleCancelVerifyEmailModal();
        } else {
            setMessage("An error occured. Please try again.");
        }
      }

    return (
        <div className="update-jawn">
            <form 
                ref={newEmailFormRef}
                onSubmit={onSubmitNewEmail}
                className="form-jawn"
            >   <div className="just-text-jawn">
                    <JustText text={"Please enter verification code:"} />
                </div>
                <br/>
                <input 
                onChange={onChangeHandler}
                value={code}
                name="email"
                type="text"
                className="form-control" >
                </input>
                <br/>
                <br/>
                <br/>
                <div className="modal-btn-container">
                    <button className="input-btn" type="submit">Submit</button>
                    <button className="input-btn" type="button" onClick={()=> closeModal()}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
export default VerifyEmail;