import JavaIcon from '../assets/java-icon.png'
import JavaScriptIcon from '../assets/javascript-icon.png'

const LanguageButtonContainer = ({props}:{props:any}) => {

    const handleButtonClick = (language: string) => {
        props.handleButtonClick(language);
    }
    const handleIcon = (language: string) => {
        switch (language){
            case "Java":
                return JavaIcon;
            case "JavaScript":
                return JavaScriptIcon
        }
    }

    return (
        <div className="language-btn-container">
            <img className="language-icon"
                onClick={() => handleButtonClick(props.language)}
                src={handleIcon(props.language)}
                alt={props.iconAltText} />
            <div className="center-language-btn">
                <button className="language-btn"
                    onClick={() => handleButtonClick(props.language)}>
                    {props.language}
                </button>
                <div className="additional-text">
                    {props.percentageComplete}%
                </div>
            </div>
            <div className="expand-icon">
            v
            </div>
        </div>
    )
}
export default LanguageButtonContainer;