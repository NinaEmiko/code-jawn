import { deleteAccount } from "../../api/api";

const DeleteAccount = ({props}:{props:any}) => {

    const handleDeleteAccount = async () => {
        console.log("click")
        const data = await deleteAccount(props.currentUser.id);
        if (data === "SUCCESS") props.logout();
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

            <div onClick={() => handleDeleteAccount()} className="warning-btn">
                Delete Account
            </div>
        </div>
    )
}
export default DeleteAccount;