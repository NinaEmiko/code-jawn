import "../styling/Controls.css";
import ProfileIcon from "../assets/profile-icon.png"
import SettingsIcon from "../assets/settings-icon.png"

import React, { ReactNode } from 'react';

const Controls: React.FC<{children: ReactNode }> = ( {children}:{children:any} ) => {
  return (
    <div className="controls-jawn">
        <img className="profile-icon"
          src={ProfileIcon}
          alt="Profile Icon" />
          <img className="profile-icon"
          src={SettingsIcon}
          alt="Profile Icon" />
    </div>
  );
};

export default Controls;
