const JavaDataTypesStringsLecture1 = () => {

    return (
        <div className="lecture-jawn">
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
                        <div className="cell-jawn-string">Hello World</div>
                        <div className="cell-jawn-string">"Hello World!"</div>
                    </div>
                    <div className="row-jawn">
                        <div className="cell-jawn"></div>
                        <div className="cell-jawn-string">'Hello World!'</div>
                    </div>
                    <div className="row-jawn">
                        <div className="cell-jawn"></div>
                        <div className="cell-jawn-string">`Hello World!`</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default JavaDataTypesStringsLecture1;