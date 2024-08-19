const Profile = ({props}:{props:any}) => {

    return (
        <div className="profile-jawn2">
            <div className="parent-jawn">
                <div className="child-jawn">
                    <div>
                        Username: props.username
                    </div>
                    <div>
                        Email: props.email
                    </div>
                    <div>
                        Update Email
                    </div>
                    <div>
                        Update Password
                    </div>
                    <div>
                        Delete Account
                    </div>
                    <div>
                        Log Out
                    </div>
                </div>
            </div>
      </div>
    )
}
  
  export default Profile