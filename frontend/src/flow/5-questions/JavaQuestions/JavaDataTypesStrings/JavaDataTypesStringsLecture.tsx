import { useRef, useState } from 'react';
import JavaDataTypesStringsLecture1 from './JavaDataTypesStringsLecture1';
import JavaDataTypesStringsLecture2 from './JavaDataTypesStringsLecture2';

const JavaDataTypesStringsLecture = ({props}:{props:any}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [startX, setStartX] = useState<number | null>(null);
    const indicators = [0, 1];
    const lectures = [
        <JavaDataTypesStringsLecture1 key="1" />,
        <JavaDataTypesStringsLecture2 key="2" />,
    ];


    const handleSwipe = (deltaX: number) => {
        if (deltaX < -50) { // Swipe left
            setActiveIndex(prevIndex => Math.max(prevIndex - 1, 0));
        } else if (deltaX > 50) { // Swipe right
            setActiveIndex(prevIndex => Math.min(prevIndex + 1, lectures.length - 1));
        }
      };
    
      const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setStartX(e.touches[0].clientX);
      };
    
      const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        if (startX !== null) {
          const endX = e.changedTouches[0].clientX;
          const deltaX = startX - endX;
          handleSwipe(deltaX);
          setStartX(null);
        }
      };

    const handleClickContinue = () =>{
        props.completeLecture()
    }

    return (
        <>
        
        <div className="lecture-container" 
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            >
            
            <div className="swipeable-pages" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {lectures}
            </div>
            
            <div className="indicator-container">
                {indicators.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${index === activeIndex ? 'active' : ''}`}
                    ></div>
                ))}
            </div>
        </div>
        <div className="spacer-5" />
        <button onClick={()=> handleClickContinue()} className="input-btn">Begin</button>
        <div className="spacer-5" />
        </>
    )
}
export default JavaDataTypesStringsLecture;