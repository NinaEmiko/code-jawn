import { ChangeEvent, FC, FormEvent, useRef, useState } from "react"
import { updateUserEmail } from "../../api/api";
import Cookies from "js-cookie";
import JustText from "../utility/JustText";
import { User } from "../../App";

interface UpdateEmailProps{
    handleUpdateEmail: (newEmail: string) => void,
    handleUpdateEmailModal: ()=>void,
    currentUser: User,
}

const UpdateEmail: FC<UpdateEmailProps> = ({ handleUpdateEmail, handleUpdateEmailModal, currentUser }) => {
    const [newEmail, setNewEmail] = useState('');

    const newEmailFormRef = useRef<HTMLFormElement | null>(null);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setNewEmail(value);
      };

      const onSubmitNewEmail = async (e: FormEvent) => {    
        e.preventDefault();
    
        const data = await updateUserEmail(currentUser.id, newEmail);
        Cookies.set('storedEmail', data.newEmail);
        handleUpdateEmail(data.newEmail);
        handleUpdateEmailModal()
      };    

    return (
        <div className="update-jawn">
            <form 
                ref={newEmailFormRef}
                onSubmit={onSubmitNewEmail}
                className="form-jawn"
            >   <div className="just-text-jawn">
                    <JustText text={"Update Email"} />
                </div>
                <br/>
                <input 
                onChange={onChangeHandler}
                value={newEmail}
                name="email"
                type="text"
                placeholder="New Email"
                className="form-control" >
                </input>
                <br/>
                <br/>
                <br/>
                <div className="modal-btn-container">
                    <button className="input-btn" type="submit">Submit</button>
                    <button className="input-btn" onClick={()=> handleUpdateEmailModal()}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
export default UpdateEmail;