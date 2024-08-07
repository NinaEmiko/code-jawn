import "../styling/Controls.css";
import ProfileIcon from "../assets/profile-icon.png"
import ComputerIcon from "../assets/computer-icon.png"

import React, { ReactNode } from 'react';

const Controls: React.FC<{children: ReactNode }> = ( {children}:{children:any} ) => {
  return (
    <div className="controls-jawn">
      <div className="profile-jawn">
        <img className="profile-icon"
            src={ComputerIcon}
            alt="Computer icon" />
      </div>
      <div className="computer-jawn">
        <img className="computer-icon"
          src={ProfileIcon}
          alt="Profile icon" />
      </div>
    </div>
  );
};

export default Controls;
