import { useState } from "react";
import DividerJawn from "../../components/utility/DividerJawn";
import UpdateEmail from "../../components/profile/UpdateEmail";
import UpdatePassword from "../../components/profile/UpdatePassword";
import TermsAndConditions from "../../components/profile/other/TermsAndConditions";
import Support from "../../components/profile/other/Support";
import Acknowledgments from "../../components/profile/other/Acknowledgments";
import Modal from "../../components/Modal";
import DeleteAccount from "../../components/profile/DeleteAccount";

const Profile = ({props}:{props:any}) => {
    const [activeComponent, setActiveComponent] = useState("");
    const [showBackBtn, setShowBackBtn] = useState(false);
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const [updatePasswordModalIsOpen, setUpdatePasswordModalIsOpen] = useState(false);
    const [updateEmailModalIsOpen, setUpdateEmailModalIsOpen] = useState(false);

    const handleUpdateActiveComponent = (component: string) => {
        setActiveComponent(component)
        setShowBackBtn(true)
    }

    const handleBackClick = () => {
        setActiveComponent("")
        setShowBackBtn(false)
    }

    const handleDeleteModal = () => {
        setDeleteModalIsOpen(!deleteModalIsOpen)
    }

    const handleUpdatePasswordModal = () => {
        setUpdatePasswordModalIsOpen(!updatePasswordModalIsOpen)
    }

    const handleUpdateEmailModal = () => {
        setUpdateEmailModalIsOpen(!updateEmailModalIsOpen)
    }

    return (
        <>
            {showBackBtn &&
                <div className="back-btn-container">
                    <button className="back-btn-jawn" onClick={() => handleBackClick()} >
                        « Back to Settings
                    </button>
                </div>
            }
            <div className="profile-jawn2">
                <div className="parent-jawn">
                    <div className="child-jawn2">
                        
                        <div className="spacer-15"/>

                        {activeComponent === "" &&
                            <div className="profile-container">
                                <div className="profile-header">Account</div>
                                <a onClick={() => null } className="sub-text3">{props.currentUser.username}</a>
                                <a onClick={() => null } className="sub-text3">{props.currentUser.email}</a>
                                <DividerJawn />
                                <div className="profile-header">Security</div>
                                <a onClick={() => handleUpdateEmailModal() } className="profile-link">Update Email</a>
                                <a onClick={() => handleUpdatePasswordModal() } className="profile-link">Update Password</a>
                                <a onClick={() => handleDeleteModal() } className="profile-link">Delete Account</a>
                                <DividerJawn />
                                <div className="profile-header">Other</div>
                                <a onClick={() => handleUpdateActiveComponent("Terms and Conditions") } className="profile-link">Terms and Conditions</a>
                                <a onClick={() => handleUpdateActiveComponent("Acknowledgments") } className="profile-link">Acknowledgments</a>
                                <a onClick={() => handleUpdateActiveComponent("Support") } className="profile-link">Support</a>
                            </div>
                        }

                        {activeComponent === "Update Password" && 
                            <UpdatePassword props={{currentUser:props.currentUser}} />
                        }

                        {activeComponent === "Update Email" && 
                            <UpdateEmail props={{currentUser:props.currentUser, handleUpdateEmail:props.handleUpdateEmail}} />
                        }

                        {activeComponent === "Terms and Conditions" &&
                            <TermsAndConditions props={{}} />
                        }

                        {activeComponent === "Support" &&
                            <Support props={{}} />
                        }

                        {activeComponent === "Acknowledgments" &&
                            <Acknowledgments props={{}} />
                        }

                        <Modal isOpen={updateEmailModalIsOpen}>
                            <UpdateEmail props={{currentUser: props.currentUser, handleUpdateEmailModal: handleUpdateEmailModal}} />
                        </Modal>

                        <Modal isOpen={updatePasswordModalIsOpen}>
                            <UpdatePassword props={{currentUser: props.currentUser, handleUpdatePasswordModal: handleUpdatePasswordModal}} />
                        </Modal>

                        <Modal isOpen={deleteModalIsOpen}>
                            <DeleteAccount props={{currentUser: props.currentUser, handleDeleteModal: handleDeleteModal}} />
                        </Modal>
                    </div>
                </div>
            </div>
        </>
    )
}
  
export default Profile