import { ReactNode } from "react";
import "../styling/Container.css";

const Container: React.FC<{children: ReactNode }> = ( {children}:{children:any} ) => {

    return (
        <div className="container-jawn2">
            {children}
      </div>
    )
}
export default Container;