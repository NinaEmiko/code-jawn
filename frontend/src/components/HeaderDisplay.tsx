import { ReactNode } from "react";
import "../styling/Display.css";


const HeaderDisplay: React.FC<{children: ReactNode }> = ( {children}:{children:any} ) => {

    return (
            <div className="top-display">
                <div className="inner-top-display">
                    {children}
                </div>
            </div>
    )
}
export default HeaderDisplay;