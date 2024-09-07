import { useState } from "react";
import DividerJawn from "../../components/utility/DividerJawn";
import DeleteAccount from "../../components/profile/DeleteAccount";
import UpdateEmail from "../../components/profile/UpdateEmail";
import UpdatePassword from "../../components/profile/UpdatePassword";
import TermsAndConditions from "../../components/profile/other/TermsAndConditions";

const Profile = ({props}:{props:any}) => {
    const [activeComponent, setActiveComponent] = useState("");

    const handleUpdateActiveComponent = (component: string) => {
        setActiveComponent(component)
    }

    const handleBackClick = () => {
        setActiveComponent("")
    }

    const handleLogOut = () => {
        props.logout();
    }

    return (
        
        <div className="profile-jawn2">
            <div className="parent-jawn">
                <div className="child-jawn2">
                    <div className="spacer-15"/>
                    {activeComponent === "" &&
                        <>
                            <div className="text2">
                                Account
                            </div>
                            <div className="sub-text3">
                                <div className="">{props.currentUser.username}</div>
                            </div>
                            <div className="sub-text3">
                                <div className="">{props.currentUser.email}</div>
                            </div>
                            <br/>
                            <DividerJawn />
                            <div className="text2">
                                Security
                            </div>
                            <div className="">
                                <a onClick={() => handleUpdateActiveComponent("Update Email") } className="profile-link">Update Email</a>
                            </div>
                            <br/>
                            <div className="">
                                <a onClick={() => handleUpdateActiveComponent("Update Password") } className="profile-link">Update Password</a>
                            </div>
                            <br/>
                                <a onClick={() => handleUpdateActiveComponent("Delete Account") } className="profile-link">Delete Account</a>
                            <br/>
                            <br/>
                            <DividerJawn />
                            <div className="text2">
                                Other
                            </div>
                            <a onClick={() => handleUpdateActiveComponent("Terms and Conditions") } className="profile-link">Terms and Conditions</a>
                            <div className="sub-text3">
                                Acknowledgments
                            </div>
                            <div className="sub-text3">
                                Support
                            </div>
                            <br/>
                            <div>
                                <button onClick={() => handleLogOut()} className="sign-out-btn" >{"Sign Out"}</button>
                            </div>
                            <div className="spacer-15"/>
                        </>
                    }

                    {activeComponent === "Update Password" && 
                        <>
                            <div className="spacer-5"/>
                            <UpdatePassword props={{
                                handleBackClick:handleBackClick,
                                currentUser:props.currentUser
                            }} />
                        </>
                    }

                    {activeComponent === "Update Email" && 
                        <>
                            <div className="spacer-5"/>
                            <UpdateEmail props={{
                                handleBackClick:handleBackClick,
                                currentUser:props.currentUser,
                                handleUpdateEmail:props.handleUpdateEmail
                            }} />
                        </>
                    }

                    {activeComponent === "Delete Account" &&
                        <>
                            <div className="spacer-10"/>
                            <DeleteAccount props={{
                                    handleBackClick:handleBackClick,
                                    currentUser:props.currentUser,
                                    logout:props.logout
                            }} />
                        </>
                    }

                    {activeComponent === "Terms and Conditions" &&
                        <>
                            <div className="spacer-10"/>
                            <TermsAndConditions props={{
                                    handleBackClick:handleBackClick,
                            }} />
                        </>
                    }
                </div>
            </div>
      </div>
    )
}
  
  export default Profile