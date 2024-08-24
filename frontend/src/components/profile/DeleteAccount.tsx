const DeleteAccount = ({props}:{props:any}) => {

    const handleClickBack = () => {
        props.handleBackClick()
    }

    return (
        <div>

            <div className="profile-link" onClick={() => handleClickBack()}>{"Back"}</div>

            <div className="spacer-5"/>

            <div className="warning-txt">
                WARNING: You are about to delete your account. This action cannot be undone. Do you wish to continue?
            </div>

            <div className="spacer-5"/>

            <div className="warning-btn">
                Delete Account
            </div>
        </div>
    )
}
export default DeleteAccount;