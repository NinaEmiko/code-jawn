import DataTypesIcon from "../assets/data-types-icon.png"
import VariablesIcon from "../assets/variables-icon.png"
import ForLoopsIcon from "../assets/for-loops-icon.png"
import ConditionalsIcon from "../assets/conditionals-icon.png"
import ArrayIcon from "../assets/array-icon.png"
import CollectionsIcon from "../assets/collections-icon.png"
import MethodsIcon from "../assets/methods-icon.png"
import OperatorsIcon from "../assets/operators-icon.png"




const LanguageButtonContainer = ({props}:{props:any}) => {

    const handleIcon = (lesson: string) => {
        switch (lesson){
            case "Data Types":
                return DataTypesIcon;
            case "Variables":
                return VariablesIcon;
            case "For Loops":
                return ForLoopsIcon;
            case "Conditionals":
                return ConditionalsIcon;
            case "Arrays":
                return ArrayIcon;
            case "Collections":
                return CollectionsIcon;
            case "Methods":
                return MethodsIcon;
            case "Operators":
                return OperatorsIcon;
                
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