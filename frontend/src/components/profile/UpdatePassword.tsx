import Cookies from "js-cookie";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { updateUserPassword } from "../../api/api";
import JustText from "../utility/JustText";

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

    return (
        <div className="update-jawn">
            <br/>
            <br/>
            <form 
            ref={newPasswordFormRef}
            onSubmit={onSubmitNewPassword}
            className="form-jawn">
                <div className="just-text-jawn">
                    <JustText props={{text: "Old Password"}} />
                </div>
                <input 
                onChange={onChangeHandler}
                value={oldPassword}
                name="oldPassword"
                type="password"
                className="form-control">
                </input>
                <div className="just-text-jawn">
                    <JustText props={{text: "New Password"}} />
                </div>
                <input 
                onChange={onChangeHandler}
                value={newPassword}
                name="newPassword"
                type="password"
                className="form-control">
                </input>
                <br/>
                <br/>
                <button className="input-btn" type="submit">Submit</button>
            </form>
        </div>
    )
}
export default updatePassword;