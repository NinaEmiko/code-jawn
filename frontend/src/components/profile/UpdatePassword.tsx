import Cookies from "js-cookie";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { updateUserPassword } from "../../api/api";

const updatePassword = ({props}:{props:any}) => {
    const [newPassword, setNewPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    
    const newPasswordFormRef = useRef<HTMLFormElement | null>(null);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === "oldPassword") setOldPassword(value);
        else if (name === "newPassword") setNewPassword(value);
      };

      const onSubmitNewPassword = async (e: FormEvent) => {    
        e.preventDefault();
    
        const data = await updateUserPassword(props.currentUser.id, oldPassword, newPassword);
        Cookies.set('storedPassword', data.newPassword);
        props.handleBackClick()
      };   

    const handleClickBack = () => {
        props.handleBackClick()
    }

    return (
        <div>
            <div className="profile-back" onClick={() => handleClickBack()}>{"Back"}</div>
            <br/>
            <br/>
            <form 
            ref={newPasswordFormRef}
            onSubmit={onSubmitNewPassword}
            className="form-jawn">
                <div className="text">Old Password</div>
                <br/>
                <input 
                onChange={onChangeHandler}
                value={oldPassword}
                name="oldPassword"
                type="password"
                className="form-control">
                </input>
                <div className="text">New Password</div>
                <br/>
                <input 
                onChange={onChangeHandler}
                value={newPassword}
                name="newPassword"
                type="password"
                className="form-control">
                </input>
                <br/>
                <br/>
                <br/>
                <button className="input-btn" type="submit">Submit</button>
            </form>
        </div>
    )
}
export default updatePassword;