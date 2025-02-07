import React, { useState, useEffect } from 'react';
import './LoggedInUserInfo.css'; 

const LoggedInUserInfo = ({ userInfo, onLogout }) => {
  const [, setDropdownOpen] = useState(false);
  const [userPicture, setUserPicture] = useState(userInfo.picture); 

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
      <div className="user-info" aria-haspopup="true" aria-expanded={false} style={{ marginBottom: '10px', marginRight: '20px' }}>
        <span className="user-name" style={{ marginRight: '10px', fontSize: '18px' }}>{userInfo.name}</span>
        <button className="logout-button" onClick={handleLogout} role="button" style={{ fontSize: '18px' }}>Logout</button>
      </div>
    </div>
  );
};

export default LoggedInUserInfo;
