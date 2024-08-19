import { ReactNode } from "react";


const Display: React.FC<{children: ReactNode }> = ( {children}:{children:any} ) => {

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
export default Display;