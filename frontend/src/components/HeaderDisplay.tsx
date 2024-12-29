import { ReactNode } from "react";

const HeaderDisplay: React.FC<{children: ReactNode }> = ( {children}:{children:any} ) => {

    return (
            <div className="top-display">
                <div className="inner-top-display">
                    <div className="top-header">
                        {children}
                    </div>
                    {/* <div className="bottom-header" /> */}
                </div>
            </div>
    )
}
export default HeaderDisplay;