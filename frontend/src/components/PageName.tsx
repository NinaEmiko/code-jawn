import "../styling/PageName.css";
import BackIcon from "../assets/back-icon.png"

const PageName = ({props}:{props:any}) => {

    const handleBackClick = () => {
        props.handleBackClick();
    }

    return (
        <div className="page-name-jawn">
            <div className="page-name-column-1">
                {props.buttonOneText &&
                    <button className="page-name-back-btn" onClick={() => handleBackClick()}>
                        <img className="back-icon"
                            src={BackIcon}
                            alt="JavaScript Icon" />
                    </button>
                }   
            </div>
            <div className="page-name-column-2">
                <div className="page-name-txt">{props.title}</div>
            </div>
            <div className="page-name-column-3">
            </div>
        </div>
    )
}
export default PageName;