import { useState } from "react";
import DividerJawn from "../../components/utility/DividerJawn";
import DeleteAccount from "../../components/profile/DeleteAccount";
import UpdateEmail from "../../components/profile/UpdateEmail";
import UpdatePassword from "../../components/profile/UpdatePassword";
import TermsAndConditions from "../../components/profile/other/TermsAndConditions";
import ProfileHeaderDisplay from "../../components/ProfileHeaderDisplay";
import Header from "../../components/Header";
import Support from "../../components/profile/other/Support";
import Acknowledgments from "../../components/profile/other/Acknowledgments";

const Profile = ({props}:{props:any}) => {
    const [activeComponent, setActiveComponent] = useState("");
    const [showBackBtn, setShowBackBtn] = useState(false);

    const handleUpdateActiveComponent = (component: string) => {
        setActiveComponent(component)
        setShowBackBtn(true)
    }

    const handleBackClick = () => {
        setActiveComponent("")
        setShowBackBtn(false)
    }

    const handleLogOut = () => {
        props.logout();
    }

    return (
        <>
            <ProfileHeaderDisplay>
                <Header props={{text: "Profile"}} />
            </ProfileHeaderDisplay>
            {showBackBtn &&
                <div className="back-btn-container">
                  <button className="back-btn-jawn" onClick={() => handleBackClick()} >
                  ←
                  </button>
                </div>
            }
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
                                <div className="">
                                    <a onClick={() => handleUpdateActiveComponent("Delete Account") } className="profile-link">Delete Account</a>
                                </div>
                                <br/>
                                <DividerJawn />
                                <div className="text2">
                                    Other
                                </div>
                                <div className="">
                                <a onClick={() => handleUpdateActiveComponent("Terms and Conditions") } className="profile-link">Terms and Conditions</a>
                                </div>
                                <br/>
                                <div className="">
                                <a onClick={() => handleUpdateActiveComponent("Acknowledgments") } className="profile-link">Acknowledgments</a>
                                </div>
                                <br/>
                                <div className="">
                                <a onClick={() => handleUpdateActiveComponent("Support") } className="profile-link">Support</a>
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
                                <UpdatePassword props={{
                                    currentUser:props.currentUser
                                }} />
                            </>
                        }

                        {activeComponent === "Update Email" && 
                            <>
                                <UpdateEmail props={{
                                    currentUser:props.currentUser,
                                    handleUpdateEmail:props.handleUpdateEmail
                                }} />
                            </>
                        }

                        {activeComponent === "Delete Account" &&
                            <>
                                <DeleteAccount props={{
                                        currentUser:props.currentUser,
                                        logout:props.logout
                                }} />
                            </>
                        }

                        {activeComponent === "Terms and Conditions" &&
                            <>
                                <TermsAndConditions props={{

                                }} />
                            </>
                        }

                        {activeComponent === "Support" &&
                            <>
                                <Support props={{

                                }} />
                            </>
                        }

                        {activeComponent === "Acknowledgments" &&
                            <>
                                <Acknowledgments props={{

                                }} />
                            </>
                        }
                    </div>
                </div>
        </div>
      </>
    )
}
  
  export default Profile