import JavaIcon from '../assets/java-icon.png'
import JavaScriptIcon from '../assets/javascript-icon.png'
import PythonIcon from "../assets/python-icon.png"
import SpringBootIcon from "../assets/springboot-icon.png"
import ReactIcon from "../assets/springboot-icon.png"
import EmojiGenerator from './utility/EmojiGenerator';
import DividerJawn from './utility/DividerJawn';

const LanguageButtonContainer = ({props}:{props:any}) => {

    const handleButtonClick = (language: string) => {
        props.handleButtonClick(language);
    }
    const handleIcon = (language: string) => {
        switch (language){
            case "Java":
                return JavaIcon;
            case "JavaScript":
                return JavaScriptIcon;
            case "Python":
                return PythonIcon;
            case "SpringBoot":
                return SpringBootIcon;
            case "React":
                return ReactIcon;
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