import JavaIcon from '../../assets/java-icon.png'
import JavaScriptIcon from '../../assets/javascript-icon.png'
import EmojiGenerator from '../utility/EmojiGenerator';
import ForwardButton from '../../assets/forward-button-icon.png'
import DividerJawn from '../utility/DividerJawn';

const LanguageButtonContainer = ({props}:{props:any}) => {

    const handleButtonClick = (language: string) => {
        props.handleButtonClick(language);
        props.handlePageTitle(language);
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
        <div className="container-for-language-btn">
            <div className="language-btn-container" >
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
                {/* <div className="expand-icon">
                <img className="forward-button-icon"
                    src={ForwardButton}
                    alt={"Foward button icon."} />
                </div> */}
            </div>
            <div className="description-container">
                {props.description}
            </div>
            <div className="language-btn-link" onClick={() => handleButtonClick(props.language)}>
                Go to {props.language} lessons»
            </div>
            <DividerJawn />
        </div>
    )
}
export default LanguageButtonContainer;