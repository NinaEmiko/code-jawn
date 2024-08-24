const updatePassword = ({props}:{props:any}) => {

    const handleClickBack = () => {
        props.handleBackClick()
    }

    return (
        <div>
            <div className="profile-link" onClick={() => handleClickBack()}>{"Back"}</div>
            <form className="form-jawn">
                <div className="text">Old Password</div>
                <br/>
                <input className="form-control">
                </input>
                <div className="text">New Password</div>
                <br/>
                <input className="form-control">
                </input>
                <br/>
                <button className="input-btn" type="submit">Submit</button>
            </form>
        </div>
    )
}
export default updatePassword;