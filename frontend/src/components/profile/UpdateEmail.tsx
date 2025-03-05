import { ChangeEvent, FC, FormEvent, useRef, useState } from "react"
import { updateUserEmail } from "../../api/api";
import JustText from "../utility/JustText";
import { User } from "../../types/components";

interface UpdateEmailProps{
    handleUpdateEmailRequest: (newEmail: string) => void,
    handleUpdateEmailModal: ()=>void,
    currentUser: User,
}

const UpdateEmail: FC<UpdateEmailProps> = ({ handleUpdateEmailRequest, handleUpdateEmailModal, currentUser }) => {
    const [newEmail, setNewEmail] = useState('');
    const [message, setMessage] = useState('');

    const newEmailFormRef = useRef<HTMLFormElement | null>(null);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setNewEmail(value);
      };

      const onSubmitNewEmail = async (e: FormEvent) => {    
        e.preventDefault();
        setMessage('');
        console.log("currentUser.id: " + currentUser.id)
        const data = await updateUserEmail(currentUser.id, newEmail);
        if (data == "SUCCESS"){
            handleUpdateEmailRequest(newEmail);
        } else {
            setMessage("There was an issue processing your request. Please try again later.")
        }
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
                <p style={{color: "red"}}>{message}</p>
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