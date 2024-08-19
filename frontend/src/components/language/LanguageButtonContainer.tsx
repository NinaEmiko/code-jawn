import JavaIcon from '../../assets/java-icon.png'
import JavaScriptIcon from '../../assets/javascript-icon.png'
import EmojiGenerator from '../utility/EmojiGenerator';

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
        <div className="container-for-language-btn" onClick={() => handleButtonClick(props.language)}>
            <div className="language-btn-container">
                <img className="language-icon"
                    src={handleIcon(props.language)}
                    alt={props.iconAltText} />
                <div className="center-language-btn">
                    <div className="language-btn">
                        {props.language}
                    </div>
                    <div className="">
                        <EmojiGenerator props={{lessonsCompleted:props.lessonsCompleted, totalLessons:props.totalLessons}} />
                    </div>
                </div>
                <div className="expand-icon">
                    
                </div>
            </div>
            <div className="language-btn-link-container">
                <div className="language-btn-link">
                    Go to lessons
                </div>
            </div>
        </div>
    )
}
export default LanguageButtonContainer;