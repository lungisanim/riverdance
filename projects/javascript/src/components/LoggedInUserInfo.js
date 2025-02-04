import React, { useState, useEffect } from 'react';
import './LoggedInUserInfo.css'; 

const LoggedInUserInfo = ({ userInfo, onLogout }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [userPicture, setUserPicture] = useState(userInfo.picture); 
  const toggleDropdown = () => setDropdownOpen(prev => !prev);

  const handleLogout = () => {
    onLogout();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.logged-in-user-info')) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="logged-in-user-info">
      <div className="user-info" onClick={toggleDropdown} aria-haspopup="true" aria-expanded={isDropdownOpen}>
        <img src={userPicture} alt="User" className="user-picture" />
        <span className="user-name">{userInfo.name}</span>
      </div>
      <hr />
      {isDropdownOpen && (
        <div className="dropdown-menu" role="menu">
          <div className="user-details">
            <p className="user-email">{userInfo.email}</p>
            <button className="logout-button" onClick={handleLogout} role="menuitem">Logout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoggedInUserInfo;
