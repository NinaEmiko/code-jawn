import React, { useState } from 'react';

const Header = ({props}:{props:any}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleClickProfile = () => {
    props.handleClickProfile();
  }

  const handleClickLearn = () => {
    props.handleClickLearn();
  }

  const handleClickLogout = () => {
    props.handleClickLogout();
  }

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="site-name">Code Jawn</h1>
      </div>
      <div className="header-right">
        <div className="dropdown">
          <button className="dropdown-button" onClick={toggleDropdown}>
            ☰ Menu
          </button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <a onClick={handleClickLearn}>Home</a>
              <a onClick={handleClickProfile}>Settings</a>
              <a onClick={handleClickLogout}>Logout</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
