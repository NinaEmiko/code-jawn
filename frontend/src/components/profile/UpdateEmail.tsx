import { ChangeEvent, FormEvent, useRef, useState } from "react"
import { updateUserEmail } from "../../api/api";
import Cookies from "js-cookie";
import JustText from "../utility/JustText";

const updateEmail = ({ props }: { props: any; }) => {
    const [newEmail, setNewEmail] = useState('');

    const newEmailFormRef = useRef<HTMLFormElement | null>(null);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setNewEmail(value);
      };

      const onSubmitNewEmail = async (e: FormEvent) => {    
        e.preventDefault();
    
        const data = await updateUserEmail(props.currentUser.id, newEmail);
        Cookies.set('storedEmail', data.newEmail);
        props.handleUpdateEmail(data.newEmail);
        props.handleBackClick()
      };    

    return (
        <div className="update-jawn">
            <br/>

            <form 
                ref={newEmailFormRef}
                onSubmit={onSubmitNewEmail}
                className="form-jawn"
            >   <div className="just-text-jawn">
                    <JustText props={{text: "New Email"}} />
                </div>
                <input 
                onChange={onChangeHandler}
                value={newEmail}
                name="email"
                type="text"
                className="form-control" >
                </input>
                <br/>
                <br/>
                <button className="input-btn" type="submit">Submit</button>
            </form>
        </div>
    )
}
export default updateEmail;