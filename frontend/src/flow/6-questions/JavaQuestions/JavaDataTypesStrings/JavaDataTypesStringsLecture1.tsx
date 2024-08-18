import '../../../../styling/Lecture.css'

const JavaDataTypesStringsLecture1 = ({props}:{props:any}) => {

    const handleClickContinue = () =>{
        props.completeLecture()
    }

    return (
        <>
        <div className="lecture-container">

            <div className="lecture-text">
                A String is a sequence of characters.
                They must be wrapped in double quotes(" "), single quotes(' '), or backticks(` `).
            </div>

            <div className="lecture-example">
                <div className="table-jawn">
                    <div className="row-jawn">
                        <div className="cell-header-jawn">Not a String</div>
                        <div className="cell-header-jawn">String</div>
                    </div>
                    <div className="row-jawn">
                        <div className="cell-jawn">Hello World</div>
                        <div className="cell-jawn">"Hello World!"</div>
                    </div>
                    <div className="row-jawn">
                        <div className="cell-jawn"></div>
                        <div className="cell-jawn">'Hello World!'</div>
                    </div>
                    <div className="row-jawn">
                        <div className="cell-jawn"></div>
                        <div className="cell-jawn">`Hello World!`</div>
                    </div>
                </div>
            </div>
        </div>
        <button onClick={()=> handleClickContinue()} className="input-btn">Continue</button>

        </>
    )
}
export default JavaDataTypesStringsLecture1;