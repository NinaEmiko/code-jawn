import React, { useState } from 'react';
import logo from "../assets/lola-icon.jpg"

const Header = ({props}:{props:any}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleClickProfile = () => {
    setDropdownOpen(!dropdownOpen)
    props.handleClickProfile();
  }

  const handleClickLearn = () => {
    setDropdownOpen(!dropdownOpen)
    props.handleClickLearn();
  }

  const handleClickLogout = () => {
    setDropdownOpen(!dropdownOpen)
    props.handleClickLogout();
  }

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} className="logo"></img>
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
