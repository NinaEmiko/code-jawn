import { ReactNode } from "react";


const Display: React.FC<{children: ReactNode }> = ( {children}:{children:any} ) => {

    return (
        <div className="display-jawn">
            <div className="parent-jawn">
                <div className="child-jawn2">
                    {children}
                </div>
            </div>
      </div>
    )
}
export default Display;