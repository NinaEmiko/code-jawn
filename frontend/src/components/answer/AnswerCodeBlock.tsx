import { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedDarkAtom } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface AnswerCodeBlockProps{
    code: string,
    answerClicked: ()=>void
}

const AnswerCodeBlock: FC<AnswerCodeBlockProps> = ({code, answerClicked}) => {

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
        answerClicked();
    }

    return (
        <div onClick={() => handleAnswerClick()} className="answer-text">
            <SyntaxHighlighter language={"java"} style={customStyle} >
                {code}
            </SyntaxHighlighter>
        </div>
    )
}
export default AnswerCodeBlock;