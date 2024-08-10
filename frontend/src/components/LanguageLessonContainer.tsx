import DataTypesIcon from "../assets/data-types-icon.png"

const LanguageButtonContainer = ({props}:{props:any}) => {

    const handleIcon = (lesson: string) => {
        switch (lesson){
            case "Data Types":
                return DataTypesIcon;
        }
    }

    return (
        <>
            <img className="language-icon"
                src={handleIcon(props.lesson)}
                alt={props.iconAltText} />
            <div className="center-language-btn">
                <button className="language-btn">
                    {props.lesson}
                </button>
                <div className="additional-text">
                    {props.percentageComplete}%
                </div>
            </div>
            <div className="expand-icon">
            v
            </div>
        </>
    )
}
export default LanguageButtonContainer;