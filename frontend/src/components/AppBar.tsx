import ProfileIcon from "../assets/profile-icon.png"
import LearnIcon from "../assets/learn-icon.png"

const AppBar = ({props}:{props:any}) => {

    const handleClickProfile = () => {
        props.handleClickProfile()
    }

    const handleClickLearn = () => {
        props.handleClickLearn()
    }

    return (
        <div className="app-bar">
            <div className="learn-jawn" onClick={() => handleClickLearn()}>
                <img className="learn-icon"
                src={LearnIcon}
                alt="Learn icon" />
            </div>
            <div className="profile-jawn" onClick={() => handleClickProfile()}>
                <img className="profile-icon"
                    src={ProfileIcon}
                    alt="Profile icon" />
            </div>
        </div>
    )
}
export default AppBar;