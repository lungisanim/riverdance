import React, { useState } from 'react';
import { googleLogout } from '@react-oauth/google';
import './app.css';
import LoginPage from './views/LoginPage';
import TermsPage from './views/TermsPage';
import UserInfoPage from './views/UserInfoPage';

function App() {
    const [page, setPage] = useState('login');
    const [userInfo, setUserInfo] = useState(null);

    const responseMessage = (response) => {
        console.log(response);
        setUserInfo(response);
        setPage('terms');
    };

    const errorMessage = (error) => {
        console.log(error);
    };

    const acceptTerms = () => {
        setPage('userInfo');
    };

    const rejectTerms = () => {
        googleLogout();
        setUserInfo(null);
        setPage('login');
    };

    const renderPage = () => {
        switch(page) {
            case 'login':
                return <LoginPage onSuccess={responseMessage} onError={errorMessage} />;
            case 'terms':
                return <TermsPage onAccept={acceptTerms} onReject={rejectTerms} />;
            case 'userInfo':
                return <UserInfoPage userInfo={userInfo} />;
            default:
                return null;
        }
    };

    return (
        <div className="app">
            {renderPage()}
        </div>
    );
}

export default App;