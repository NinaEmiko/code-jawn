import { ReactNode } from "react";
import "../styling/Display.css";
import "../styling/Lesson.css";


const SubDisplay: React.FC<{children: ReactNode }> = ( {children}:{children:any} ) => {

    return (
        <div className="display-jawn2">
            <div className="parent-jawn2">
                <div className="child-jawn2">
                    {children}
                </div>
            </div>
      </div>
    )
}
export default SubDisplay;