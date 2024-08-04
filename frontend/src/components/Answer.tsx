const Answer = ({props}:{props:any}) => {

    return (
        <div className="answer-text">
            {props.line1}
            <br />
            {props.line2}
            <br />
            {props.line3}
            <br />
            {props.line4}
            <br />
        </div>
    )
}
export default Answer;