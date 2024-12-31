import JavaDataTypesStringsLecture1 from './JavaDataTypesStringsLecture1';
import JavaDataTypesStringsLecture2 from './JavaDataTypesStringsLecture2';
import GlowingButton from '../../../../components/GlowingButton';
import { FC, useState } from 'react';
import { LectureProps } from '../../../../App';

const JavaDataTypesStringsLecture: FC<LectureProps> = ({completeLecture}) => {
    const [buttonText, setButtonText] = useState('Next');
    const [activeLecture, setActiveLecture] = useState(0)

    const handleClickButton = () =>{
        if (activeLecture === 0) {
            setButtonText('Begin')
            setActiveLecture(1)
        } else {
            completeLecture()
        }
    }

    return (
        <>
            <div className="lecture-container2">
                {activeLecture === 0 ? (
                    <JavaDataTypesStringsLecture1 />
                ) : (
                    <JavaDataTypesStringsLecture2 />
                )}
            </div>
            <GlowingButton buttonText={buttonText} buttonColor={'#12edd8'} buttonPress={handleClickButton} />
        </>
    )
}
export default JavaDataTypesStringsLecture;