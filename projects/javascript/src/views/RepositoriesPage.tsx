import React, { useState, useEffect } from 'react';
import RepoCarousel from '../components/RepoCarousel';
import UserInfo from '../interfaces/UserInfo';  

interface Repository {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  clone_url: string;
}

const RepositoriesPage: React.FC<{ userInfo: UserInfo }> = ({ userInfo }) => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [view, setView] = useState<'questions' | 'repositories'>('repositories');

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/lungisanim/repos');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepos();
  }, []);

  const handleLogout = async () => {
    if (!window.gapi?.auth2) {
      await new Promise<void>((resolve) => {
        window.gapi.load('auth2', () => resolve());
      });
    }
    const auth2 = window.gapi?.auth2.getAuthInstance();
    if (auth2) {
      await auth2.signOut();
      console.log('User logged out from Google');
    }
  };

  return (
    <div className="user-info-page" style={{ display: 'flex' }}>
      <div style={{ flex: '1' }}>
        <h2 style={{ textAlign: 'center' }}>Public Github Repositories</h2>
        <RepoCarousel repos={repos} />
      </div>
    </div>
  );
};

export default RepositoriesPage;
