import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedDarkAtom } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Answer = ({props}:{props:any}) => {

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
export default Answer;