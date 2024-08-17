import JavaIcon from '../assets/java-icon.png'
import JavaScriptIcon from '../assets/javascript-icon.png'
import EmojiGenerator from './EmojiGenerator';

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
        <div className="language-btn-container" onClick={() => handleButtonClick(props.language)}>
            <img className="language-icon"
                src={handleIcon(props.language)}
                alt={props.iconAltText} />
            <div className="center-language-btn">
                <div className="language-btn">
                    {props.language}
                </div>
                <div className="additional-text">
                    <EmojiGenerator props={{lessonsCompleted:props.lessonsCompleted, totalLessons:props.totalLessons}} />
                </div>
            </div>
            <div className="expand-icon">
                ▶
            </div>
        </div>
    )
}
export default LanguageButtonContainer;