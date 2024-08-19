import { ReactNode } from "react";


const LoginDisplay: React.FC<{children: ReactNode }> = ( {children}:{children:any} ) => {

    return (
        <div className="login-display-jawn">
            <div className="parent-jawn">
                <div className="child-jawn">
                    {children}
                </div>
            </div>
      </div>
    )
}
export default LoginDisplay;