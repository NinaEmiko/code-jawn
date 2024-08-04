import { useEffect, useState } from "react";
import "../styling/PageName.css";

const PageName = ({props}:{props:any}) => {
    const [buttonOne, setButtonOne] = useState('');

    const handleBackClick = () => {
        props.handleBackClick();
    }

    useEffect(() => {
        setButtonOne("Back")
      },[])

    return (
        <div className="page-name-jawn">
            <div className="page-name-column-1">
                {buttonOne &&
                    <button className="page-name-back-btn" onClick={() => handleBackClick()}>
                        {buttonOne}
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