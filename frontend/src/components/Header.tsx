import { FC, useState } from 'react';
import logo from "../assets/lola-icon.jpg"

interface HeaderProps{
  handleClickProfile: ()=> void,
  handleClickLearn: ()=> void,
  handleClickLogout: ()=> void,
}

const Header: FC<HeaderProps> = ({handleClickLearn, handleClickLogout, handleClickProfile}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleClickProfileJawn = () => {
    setDropdownOpen(false)
    handleClickProfile();
  }

  const handleClickLearnJawn = () => {
    setDropdownOpen(false)
    handleClickLearn();
  }

  const handleClickLogoutJawn = () => {
    setDropdownOpen(false)
    handleClickLogout();
  }

  return (
    <header className="header">
      <div className="header-left">
        <img onClick={handleClickLearnJawn} src={logo} className="logo"></img>
        <h1 className="site-name" onClick={handleClickLearnJawn}>Code Jawn</h1>
      </div>
      <div className="header-right">
        <div className="dropdown">
          <button className="dropdown-button" onClick={toggleDropdown}>
            ☰ Menu
          </button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <a onClick={handleClickLearnJawn}>Home</a>
              <a onClick={handleClickProfileJawn}>Settings</a>
              <a onClick={handleClickLogoutJawn}>Logout</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
