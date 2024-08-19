import ProfileIcon from "../assets/profile-icon.png"
import ComputerIcon from "../assets/computer-icon.png"

const AppBar = ({props}:{props:any}) => {

    const handleClickProfile = () => {
        props.handleClickProfile()
    }

    const handleClickLearn = () => {
        props.handleClickLearn()
    }

    return (
        <div className="app-bar">
            <div className="profile-jawn" onClick={() => handleClickProfile()}>
                {/* <img className="profile-icon"
                    src={ComputerIcon}
                    alt="Computer icon" /> */}
                    Profile
            </div>
            <div className="computer-jawn" onClick={() => handleClickLearn()}>
                {/* <img className="computer-icon"
                src={ProfileIcon}
                alt="Profile icon" /> */}
                Learn
            </div>
        </div>
    )
}
export default AppBar;