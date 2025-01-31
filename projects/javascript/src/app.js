import React, { useState } from 'react';
import { googleLogout } from '@react-oauth/google';
import './app.css';
import LoginPage from './views/LoginPage';
import TermsPage from './views/TermsPage';
import UserInfoPage from './views/UserInfoPage';
import { jwtDecode } from 'jwt-decode';

function App() {
    const [page, setPage] = useState('login');
    const [userInfo, setUserInfo] = useState(null);

    const responseMessage = (response) => {
        // Decode the credential to extract user information
        const responseDetails = jwtDecode(response.credential);
        try {
            // The credential is already a decoded JWT in this case
            const userDetails = {
                name: responseDetails.name,
                email: responseDetails.email,
                givenName: responseDetails.givenName,
                familyName: responseDetails.familyName,
                picture: responseDetails.picture,
                emailVerified: responseDetails.emailVerified,
                domain: responseDetails.hd // If it's a Google Workspace account
            };

            console.log('User Details:', userDetails);
            setUserInfo(userDetails);
            setPage('terms');
        } catch (error) {
            console.error('Error processing user information:', error);
        }
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