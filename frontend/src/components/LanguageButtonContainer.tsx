import JavaIcon from '../assets/java-icon.png'
import JavaScriptIcon from '../assets/javascript-icon.png'
import PythonIcon from "../assets/python-icon.png"
import SpringBootIcon from "../assets/springboot-icon.png"
import ReactIcon from "../assets/react-icon.png"
import EmojiGenerator from './utility/EmojiGenerator';
import DividerJawn from './utility/DividerJawn';
import { FC } from 'react'

interface LanguageButtonContainerProps{
    handleButtonClick: (language: string)=>void,
    language: string,
    iconAltText: string,
    lessonsCompleted: number,
    totalLessons: number,
    description: string,
}

const LanguageButtonContainer: FC<LanguageButtonContainerProps> = ({
    handleButtonClick,
    language,
    iconAltText,
    lessonsCompleted,
    totalLessons,
    description}) => {

    const handleButtonClickJawn = (language: string) => {
        handleButtonClick(language);
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
                    src={handleIcon(language)}
                    alt={iconAltText} />
                <div className="center-language-btn">
                    <div className="language-btn">
                        {language}
                    </div>
                    <div className="">
                        <EmojiGenerator lessonsCompleted={lessonsCompleted} totalLessons={totalLessons} />
                    </div>
                </div>
            </div>
            <div className="description-container">
                {description}
            </div>
            <div className="language-btn-link" onClick={() => handleButtonClickJawn(language)}>
                Go to {language} lessons»
            </div>
            <DividerJawn />
        </div>
    )
}
export default LanguageButtonContainer;