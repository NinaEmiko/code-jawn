import { FC } from "react";
import { deleteAccount } from "../../api/api";
import { User } from "../../types/components";

interface DeleteAccountProps{
    logout: ()=>void,
    handleDeleteModal: ()=>void,
    currentUser: User
}

const DeleteAccount: FC<DeleteAccountProps> = ({logout, handleDeleteModal, currentUser}) => {

    const handleDeleteAccount = async () => {
        console.log("click")
        const data = await deleteAccount(currentUser.id);
        if (data === "SUCCESS") logout();
        console.log(data);
    }

    return (
        <div className="update-jawn">

            <div className="warning-txt">
                WARNING: You are about to delete your account. This action cannot be undone. Do you wish to continue?
            </div>

            <br/>
            <br/>
            <br/>

            <div className="modal-btn-container">
                <button className="input-btn-warning" onClick={()=> handleDeleteAccount()}>Delete</button>
                <button className="input-btn" onClick={()=> handleDeleteModal()}>Cancel</button>
            </div>
        </div>
    )
}
export default DeleteAccount;