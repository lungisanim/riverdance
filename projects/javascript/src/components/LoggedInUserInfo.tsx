import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserInfo from "../interfaces/UserInfo";
import './LoggedInUserInfo.css';

interface LoggedInUserInfoProps {
  userInfo: UserInfo | null;
  onLogout: () => void;
}

const LoggedInUserInfo: React.FC<LoggedInUserInfoProps> = ({ userInfo, onLogout }) => {
  if (!userInfo) {
    return null;
  }

  const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: 'none',
    color: '#333',
    padding: '0 10px',
  });

  return (
    <div className="top-bar">
      <div className="top-bar-nav">
        <NavLink to="/questions" style={navLinkStyle}>
          Questions
        </NavLink>
        <NavLink to="/repositories" style={navLinkStyle}>
          Repositories
        </NavLink>
      </div>
      <div className="user-info">
        <span className="user-name">{userInfo.name}</span>
        <button onClick={onLogout} className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default LoggedInUserInfo;