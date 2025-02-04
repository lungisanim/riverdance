import React, { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';

function LoginPage({ onSuccess, onError }) {
    const fullText = '.... create the things you want to see ...';

    return (
        <div className="app-login">
            <h2>{fullText}</h2>
            <GoogleLogin onSuccess={onSuccess} onError={onError} />
        </div>
    );
}

export default LoginPage;