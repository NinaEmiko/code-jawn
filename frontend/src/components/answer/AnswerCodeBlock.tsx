import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedDarkAtom } from 'react-syntax-highlighter/dist/esm/styles/prism';
import useSound from "use-sound";
import correctSoundEffect from "../../../../../public/sounds/achievement-sound-effect.mp3";
import IncorrectSoundEffect from "../../../../../public/sounds/incorrect-answer-sound-effect.mp3";

const AnswerCodeBlock = ({props}:{props:any}) => {
    const [playCorrectSoundEffect] = useSound(correctSoundEffect);
    const [playIncorrectSoundEffect] = useSound(IncorrectSoundEffect);

    const customStyle = {
        ...solarizedDarkAtom,
        'pre[class*="language-"]': {
            ...solarizedDarkAtom['pre[class*="language-"]'],
            backgroundColor: 'transparent',
            margin: 0,
            padding: 0,
            overflow: 'auto'
        },
        'code[class*="language-"]': {
          ...solarizedDarkAtom['code[class*="language-"]'],
          backgroundColor: 'transparent',
        },
      };
    
      const handleAnswerClick = () => {
        playCorrectSoundEffect();
        props.answerClicked();
    }

    return (
        <div onClick={() => handleAnswerClick()} className="answer-text">
            <SyntaxHighlighter language={"java"} style={customStyle} >
                {props.code}
            </SyntaxHighlighter>
        </div>
    )
}
export default AnswerCodeBlock;