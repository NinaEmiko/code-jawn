import Cookies from "js-cookie";
import { ChangeEvent, FC, FormEvent, useRef, useState } from "react";
import { updateUserPassword } from "../../api/api";
import JustText from "../utility/JustText";
import { validCharacters } from "../../helpers/validCharacters";

export interface User {
    userId: number;
    username: string;
}

interface UpdatePasswordProps{
    handleUpdatePasswordModal: ()=> void,
    currentUser: User,
}

const UpdatePassword: FC<UpdatePasswordProps> = ({handleUpdatePasswordModal, currentUser}) => {
    const [newPassword, setNewPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showError, setShowError] = useState<boolean>(false);
    const [errorText, setErrorText] = useState<string>("");
    
    const newPasswordFormRef = useRef<HTMLFormElement | null>(null);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === "oldPassword") setOldPassword(value);
        else if (name === "newPassword") setNewPassword(value);
        else if (name === "confirmPassword") setConfirmPassword(value);
      };

      const onSubmitNewPassword = async (e: FormEvent) => {    
        e.preventDefault();

        if (newPassword != confirmPassword) {
            setErrorText("New passwords do not match.")
            setShowError(true);
        } else if (newPassword.length < 8 || newPassword.length > 16) {
            setErrorText("Passwords must be between 8-16 character.")
            setShowError(true);
        } else if (!invalidCharacterCheck()) {
            setErrorText("Password contains invalid characters.")
            setShowError(true);
        } else if (!/[A-Z]/.test(newPassword)){
            setErrorText("Password must contain a capital letter.")
            setShowError(true);
        } else if (!/[a-z]/.test(newPassword)){
            setErrorText("Password must contain a lower case letter.")
            setShowError(true);
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)) {
            setErrorText("Password must contain at least one special character (ie: !, @, #, $, %, &).")
            setShowError(true);
        } else if (newPassword === currentUser.username){
            setErrorText("Passwords cannot match usernames.")
            setShowError(true);
        } else {
            const data = await updateUserPassword(currentUser.userId, oldPassword, newPassword);
            Cookies.set('storedPassword', data.newPassword);
            handleUpdatePasswordModal()
        }
    };   

    const invalidCharacterCheck = () => {
        const charList = newPassword.split("")
        const isValid = charList.every(char => validCharacters.includes(char));
        return isValid;
    }


    return (
        <div className="update-jawn">
            <form 
            ref={newPasswordFormRef}
            onSubmit={onSubmitNewPassword}
            className="form-jawn">
                <div className="just-text-jawn">
                    <JustText props={{text: "Update Password"}} />
                </div>
                <br />
                <input 
                onChange={onChangeHandler}
                value={oldPassword}
                name="oldPassword"
                type="password"
                placeholder="Old Password"
                className="form-control">
                </input>
                <br />
                <input 
                onChange={onChangeHandler}
                value={newPassword}
                name="newPassword"
                type="password"
                placeholder="New Password"
                className="form-control">
                </input>
                <br />
                <input 
                onChange={onChangeHandler}
                value={confirmPassword}
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                className="form-control">
                </input>
                <br/>
                {showError && 
                    <JustText props={{text: {errorText}}} />
                }
                <br/>
                <br/>
                <div className="modal-btn-container">
                    <button className="input-btn" type="submit">Submit</button>
                    <button className="input-btn" onClick={()=> handleUpdatePasswordModal()}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
export default UpdatePassword;