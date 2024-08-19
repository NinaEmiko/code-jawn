import { ReactNode } from "react";
import "../styling/Display.css";
import "../styling/Lesson.css";


const SubDisplay: React.FC<{children: ReactNode }> = ( {children}:{children:any} ) => {

    return (
        <div className="display-jawn">
            <div className="parent-jawn">
                <div className="child-jawn">
                    {children}
                </div>
            </div>
      </div>
    )
}
export default SubDisplay;