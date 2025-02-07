import React, { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import image from '../assets/login-page-person3.webp';

function LoginPage({ onSuccess, onError }) {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '98vh', 
    };

    return (
        <div className="app-login">
            <GoogleLogin onSuccess={onSuccess} onError={onError} />
        </div>
    );
}

export default LoginPage;