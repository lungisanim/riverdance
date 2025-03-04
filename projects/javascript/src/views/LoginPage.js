import React, { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';

function LoginPage({ onSuccess, onError }) {
    return (
        <div className="app-login">
            <GoogleLogin onSuccess={onSuccess} onError={onError} />
        </div>
    );
}

export default LoginPage;