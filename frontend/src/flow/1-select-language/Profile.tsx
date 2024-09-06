import { useState } from "react";
import DividerJawn from "../../components/utility/DividerJawn";
import DeleteAccount from "../../components/profile/DeleteAccount";
import UpdateEmail from "../../components/profile/UpdateEmail";
import UpdatePassword from "../../components/profile/UpdatePassword";

const Profile = ({props}:{props:any}) => {
    const [showUpdateEmail, setShowUpdateEmail] = useState(false);
    const [showUpdatePassword, setShowUpdatePassword] = useState(false);
    const [showDeleteAccount, setShowDeleteAccount] = useState(false);

    const handleClickUpdateEmail = () => {
        if (showUpdateEmail) {
            setShowUpdateEmail(false);
        } else {
        setShowUpdateEmail(true);
        setShowUpdatePassword(false);
        setShowDeleteAccount(false);
        }
    }

    const handleBackClick = () => {
        setShowUpdateEmail(false);
        setShowUpdatePassword(false);
        setShowDeleteAccount(false);
    }

    const handleClickUpdatePassword = () => {
        if(showUpdatePassword) {
            setShowUpdatePassword(false);
        } else{
            setShowUpdatePassword(true);
            setShowUpdateEmail(false);
            setShowDeleteAccount(false);
        }
    }

    const handleClickDeleteAccount = () => {
        if(showUpdatePassword) {
            setShowDeleteAccount(false);
        } else{
            setShowDeleteAccount(true);
            setShowUpdateEmail(false);
            setShowUpdatePassword(false);
        }
    }

    const handleLogOut = () => {
        props.logout();
    }

    return (
        
        <div className="profile-jawn2">
            <div className="parent-jawn">
                <div className="child-jawn2">
                    <div className="spacer-20"/>
                    {!showUpdateEmail && !showUpdatePassword && !showDeleteAccount &&
                        <>
                            <div className="text2">
                                Account
                            </div>
                            <div className="profile-table-jawn">
                                <div className="profile-row-jawn">
                                    <div className="profile-cell-jawn-label">Username:</div>
                                    <div className="profile-cell-jawn">{props.currentUser.username}</div>
                                </div>
                                <div className="profile-row-jawn">
                                    <div className="profile-cell-jawn-label">Email:</div>
                                    <div className="profile-cell-jawn">{props.currentUser.email}</div>
                                </div>
                            </div>
                            <br/>
                            <DividerJawn />
                            <div className="text2">
                                Security
                            </div>
                            <div className="">
                                <a onClick={() => handleClickUpdateEmail() } className="profile-link">Update Email</a>
                            </div>
                            <br/>
                            <div className="">
                                <a onClick={() => handleClickUpdatePassword() } className="profile-link">Update Password</a>
                            </div>
                            <br/>
                                <a onClick={() => handleClickDeleteAccount() } className="profile-link">Delete Account</a>
                            <br/>
                            <br/>
                            <DividerJawn />
                            <div className="text2">
                                Other
                            </div>
                            <div className="sub-text3">
                                Terms
                            </div>
                            <div className="sub-text3">
                                Policy
                            </div>
                            <div className="sub-text3">
                                Acknowledgments
                            </div>
                            <div className="sub-text3">
                                Support
                            </div>
                            <br/>
                            <div>
                                <button onClick={() => handleLogOut()} className="input-btn" >{"Sign Out"}</button>
                            </div>
                            <div className="spacer-15"/>
                        </>
                    }

                    {showUpdatePassword && 
                        <>
                            <div className="spacer-5"/>
                            <UpdatePassword props={{
                                handleBackClick:handleBackClick,
                                currentUser:props.currentUser
                            }} />
                        </>
                    }

                    {showUpdateEmail && 
                        <>
                            <div className="spacer-5"/>
                            <UpdateEmail props={{
                                handleBackClick:handleBackClick,
                                currentUser:props.currentUser,
                                handleUpdateEmail:props.handleUpdateEmail
                            }} />
                        </>
                    }

                    {showDeleteAccount &&
                        <>
                            <div className="spacer-10"/>
                            <DeleteAccount props={{
                                    handleBackClick:handleBackClick,
                                    currentUser:props.currentUser,
                                    logout:props.logout
                            }} />
                        </>
                    }
                </div>
            </div>
      </div>
    )
}
  
  export default Profile