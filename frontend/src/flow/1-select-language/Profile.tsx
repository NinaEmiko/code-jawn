import DividerJawn from "../../components/utility/DividerJawn";

const Profile = ({props}:{props:any}) => {

    const handleLogOut = () => {
        props.logout();
    }

    return (
        
        <div className="profile-jawn2">
            <div className="parent-jawn">
                <div className="child-jawn2">
                    <div className="spacer-20"/>
                    <div className="text2">
                        Account
                    </div>
                    <DividerJawn />
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
                    <div className="text2">
                        Security
                    </div>
                    <DividerJawn />
                    <div className="sub-text3">
                        Update Email
                    </div>
                    <div className="sub-text3">
                        Update Password
                    </div>
                    <br/>
                    <div className="sub-text3">
                        Delete Account
                    </div>
                    <br/>
                    <div>
                        <button onClick={() => handleLogOut()} className="input-btn" >{"Sign Out"}</button>
                    </div>
                    <br/>
                    <div className="text2">
                        Other
                    </div>
                    <DividerJawn />
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
                    <div className="spacer-15"/>
                </div>
            </div>
      </div>
    )
}
  
  export default Profile