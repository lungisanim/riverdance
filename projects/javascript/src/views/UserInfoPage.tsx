import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import UserInfo from '../interfaces/UserInfo';

interface UserInfoPageProps {
  userInfo: UserInfo | null;
  onLogout: () => Promise<void>;
}

const UserInfoPage: React.FC<UserInfoPageProps> = ({ userInfo, onLogout }) => {
  const [view, setView] = useState<'questions' | 'repositories'>('questions');

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar setView={setView} style={{ flex: '0 0 200px' }} />
      <div style={{ flex: 1, padding: '20px' }}>
        {/* This is where the nested pages will be rendered */}
        <Outlet />
      </div>
    </div>
  );
};

export default UserInfoPage;
