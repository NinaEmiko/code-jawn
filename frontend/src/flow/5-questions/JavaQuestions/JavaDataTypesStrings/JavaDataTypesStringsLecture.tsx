import { useState } from 'react';
import JavaDataTypesStringsLecture1 from './JavaDataTypesStringsLecture1';
import JavaDataTypesStringsLecture2 from './JavaDataTypesStringsLecture2';

const JavaDataTypesStringsLecture = ({props}:{props:any}) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const indicators = [0, 1];

    const updateActiveIndex = () => {
        setActiveIndex((activeIndex - 1 + indicators.length) % indicators.length);
    };

    const handleClickContinue = () =>{
        props.completeLecture()
    }

    return (
        <>
        <div className="lecture-container" onClick={() => updateActiveIndex()}>
            {activeIndex === 0 ?
                <JavaDataTypesStringsLecture1 />
            :   
                <JavaDataTypesStringsLecture2 />
            }
            
            <div className="indicator-container">
                {indicators.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${index === activeIndex ? 'active' : ''}`}
                    ></div>
                ))}
            </div>
        </div>
        <button onClick={()=> handleClickContinue()} className="input-btn">Begin</button>

        </>
    )
}
export default JavaDataTypesStringsLecture;