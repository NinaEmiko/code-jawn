import '../../../../styling/Lecture.css'

const JavaDataTypesStringsLecture2 = ({props}:{props:any}) => {

    const handleClickContinue = () =>{
        props.completeLecture()
    }

    return (
        <>
        <div className="lecture-container">
            
            <div className="lecture-text">
                Strings are useful for storing data such as a user's name, email address and occupation.
            </div>

            <div className="lecture-example">
            <div className="table-jawn">
                    <div className="row-jawn">
                        <div className="cell-header-jawn"></div>
                        <div className="cell-header-jawn">String</div>
                    </div>
                    <div className="row-jawn">
                        <div className="cell-jawn"></div>
                        <div className="cell-jawn">"Lola"</div>
                    </div>
                    <div className="row-jawn">
                        <div className="cell-jawn"></div>
                        <div className="cell-jawn">"Lola@email.com"</div>
                    </div>
                    <div className="row-jawn">
                        <div className="cell-jawn"></div>
                        <div className="cell-jawn">"Therapist" </div>
                    </div>
                </div>
            </div>
        </div>
        <button onClick={()=> handleClickContinue()} className="input-btn">Begin</button>
        </>
    )
}
export default JavaDataTypesStringsLecture2;