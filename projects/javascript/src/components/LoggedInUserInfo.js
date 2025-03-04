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
      <div
        className="user-info"
        aria-haspopup="true"
        aria-expanded={false}
        style={{ marginBottom: '10px', marginRight: '20px', marginTop: '10px' }}
      >
        {userInfo.pictureUrl ? (
          <img
            src={userInfo.pictureUrl}
            alt={`${userInfo.name}'s profile`}
            style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }}
          />
        ) : (
          <div
            className="user-initials"
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: '#ccc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '10px',
              fontSize: '18px',
              color: '#fff'
            }}
          >
            {userInfo.name.split(' ').map(name => name[0]).join('')}
          </div>
        )}
        <span className="user-name" style={{ marginRight: '10px', fontSize: '18px' }}>
          {userInfo.name}
        </span>
        <button
          className="logout-button"
          onClick={handleLogout}
          role="button"
          style={{ fontSize: '18px' }}
        >
          Logout
        </button>
      </div>
    </div>
  );
  
};

export default LoggedInUserInfo;
