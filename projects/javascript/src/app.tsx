import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import LoggedInUserInfo from './components/LoggedInUserInfo';
import './app.css';
import LoginPage from './views/LoginPage';
import TermsPage from './views/TermsPage';
import { jwtDecode } from 'jwt-decode';
import UserInfo from './interfaces/UserInfo';
import GoogleJwtPayload from './interfaces/GoogleJwtPayload';
import GoogleOAuthResponse from './interfaces/GoogleOAuthResponse';
import QuestionsPage from './views/QuestionsPage';
import RepositoriesPage from './views/RepositoriesPage';
import { googleLogout } from '@react-oauth/google';

const App: React.FC = () => {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [loading, setLoading] = useState(false);
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        setAuthChecked(true);
    }, []);

    const responseMessage = (response: GoogleOAuthResponse) => {
        const responseDetails = jwtDecode<GoogleJwtPayload>(response.credential);
        try {
            const userDetails: UserInfo = {
                name: responseDetails.name,
                email: responseDetails.email,
                givenName: responseDetails.givenName,
                familyName: responseDetails.familyName,
                picture: responseDetails.picture,
                emailVerified: responseDetails.emailVerified,
                domain: responseDetails.hd
            };
            console.log('User Details:', userDetails);
            setUserInfo(userDetails);
        } catch (error) {
            console.error('Error processing user information:', error);
        }
    };

    const errorMessage = (error: unknown) => {
        console.log(error);
    };

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
        googleLogout();
        setUserInfo(null);
        window.location.href = '/login';
    };

    if (!authChecked) {
        return <div>Loading application...</div>;
    }

    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/login" element={
                        userInfo ? <Navigate to="/terms" replace /> : <LoginPage onSuccess={responseMessage} onError={errorMessage} />
                    } />
                    <Route path="/terms" element={
                        !userInfo ? <Navigate to="/login" replace /> :
                        <TermsPage
                            onAccept={() => { /* Navigation now handled within TermsPage */ }}
                            onReject={() => {
                                handleLogout();
                            }}
                        />
                    } />
                    <Route path="/*" element={
                        !userInfo ? (
                            <Navigate to="/login" replace />
                        ) : (
                            <div className="main-layout">
                                <LoggedInUserInfo userInfo={userInfo} onLogout={handleLogout} />
                                <div className="content-area" style={{ padding: '20px' }}>
                                    <Routes>
                                        <Route path="questions" element={<QuestionsPage userInfo={userInfo} />} />
                                        <Route path="repositories" element={<RepositoriesPage userInfo={userInfo} />} />
                                        <Route index element={<Navigate to="questions" replace />} />
                                        <Route path="*" element={<Navigate to="questions" replace />} />
                                    </Routes>
                                </div>
                            </div>
                        )
                    } />
                </Routes>
            </div>
        </Router>
    );
};

export default App;